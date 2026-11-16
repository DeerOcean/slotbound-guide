(function(){
'use strict';

/* ---------- 資料 ---------- */
const FX = (window.SB_DATA && window.SB_DATA.factions) || {};
const TR = (window.SB_DATA && window.SB_DATA.tree) || {tree:{}, jobs:{}, meta:{}};
const ICON = {hp:'生命', atk:'攻擊', aspd:'攻速'};
const clean = s => String(s || '').replace(/\{(\w+)\.png\}/g, (m, k) => ICON[k] || '').replace(/。。/g, '。');
const F = (FX.factions || []).map(f => ({
  id: f.id, name: f.nameZh || f.id, th: f.thresholds || [], val: f.values || [],
  title: f.effectNameZh || '', cond: clean(f.conditionZh), tiers: (f.tierTextsZh || []).map(clean),
  open: f.unlockedByDefault !== false
}));
const fxById = Object.fromEntries(F.map(f => [f.id, f]));
const fxName = id => (fxById[id] && fxById[id].name) || id;
const J = TR.jobs;                 // key → 職業
const SK = (window.SB_DATA && window.SB_DATA.skills) || {};   // 職業 id → 技能（tools/extract/extract_skills.py）
const T = TR.tree;                 // 符號 → { base, grades:[{grade, gradeZh, r1, r1Zh, r1Sprite, opts:[{r2, r3:[]}]}] }
const SYM = [['W','戰士'],['A','弓手'],['S','槍兵'],['M','法師'],['H','騎兵'],['D','決鬥者'],['Joker','小丑']];
const symName = Object.fromEntries(SYM.map(([s]) => [s, (T[s] && T[s].base) || s]));

// 每個職業的路線位置（符號、稀有度、上一階、同一步的另一條）
const where = {};
Object.entries(T).forEach(([s, t]) => t.grades.forEach(g => g.opts.forEach((o, i) => {
  const other = g.opts[1 - i];
  (where[o.r2] = where[o.r2] || []).push({s, g, o, other, rank:2});
  o.r3.forEach(k => (where[k] = where[k] || []).push({s, g, o, other, rank:3}));
})));
// 羈絆成員（只算 2、3 階、在樹上的）
const members = {};
Object.entries(J).forEach(([k, j]) => { if (j.rank >= 2 && where[k]) j.fx.forEach(f => (members[f] = members[f] || []).push(k)); });

// 路線節點：稀有度＋符號 →（1 階，普通稀有度跟符號同名就省略）→ 2 階 →（3 階）
function routeNodes(w, k){
  const head = `${w.g.gradeZh}${symName[w.s]}`;
  const n = [head];
  if (w.g.r1Zh !== symName[w.s]) n.push(w.g.r1Zh);
  n.push(J[w.o.r2].name);
  if (w.rank === 3) n.push(J[k].name);
  return n;
}

/* ---------- 狀態 ---------- */
let team = [];            // 職業 key
let sym = 'W';
let filterFx = null;
let hoverKey = null;
let gradeOn = new Set(['normal','advanced','rare','legendary','prism']);  // 羈絆表要看的稀有度
let openCell = null;      // 羈絆表展開的格子「兵種|稀有度」
try {
  const h = new URLSearchParams(location.hash.slice(1));
  if (h.get('t')) team = h.get('t').split(',').filter(k => J[k]);
  if (h.get('s') && T[h.get('s')]) sym = h.get('s');
} catch(e){}

const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));

/* ---------- 羈絆計算：同職業只算一次 ---------- */
function fxCounts(){
  const ids = {}, cnt = {};
  team.forEach(k => { const j = J[k]; if (!j || ids[j.id]) return; ids[j.id] = 1; j.fx.forEach(f => cnt[f] = (cnt[f]||0) + 1); });
  return cnt;
}
function tierOf(f, n){ let t = -1; f.th.forEach((x,i) => { if (n >= x) t = i; }); return t; }

/* ---------- 圖 ---------- */
function sprFile(sp){ return sp ? 'img/u/' + sp.png.replace(/^src\/sprites\/units\//, '').replace(/[\/ ]/g, '_') : ''; }
function sprHtml(sp, cls){ return sp ? `<img class="spr ${cls||''}" src="${esc(sprFile(sp))}" alt="" loading="lazy" onerror="this.remove()">` : ''; }

/* ---------- 畫面 ---------- */
function card(k){
  const j = J[k]; if (!j) return '';
  const inTeam = team.includes(k);
  const fxs = j.fx.map(fxName).join('・');
  return `<button class="cls ${inTeam?'in':''}" data-k="${esc(k)}">${sprHtml(j.sprite)}<span class="tx"><span class="r">${j.rank}階</span>${esc(j.name)}<span class="fx">${fxs || '無羈絆'}</span></span></button>`;
}
function drawSyms(){
  $('syms').innerHTML = SYM.filter(([s]) => T[s]).map(([s]) => `<button class="stab ${s===sym && !filterFx?'on':''}" data-s="${s}">${esc(symName[s])}</button>`).join('');
}
function drawTree(){
  if (filterFx) return drawFxList();
  const t = T[sym]; if (!t) { $('tree').innerHTML = '<p class="empty">資料還沒載入。</p>'; return; }
  $('tree').innerHTML = `<div class="grid">` + t.grades.map(g => {
    const r1 = `<div class="r1">${sprHtml(g.r1Sprite)}<span class="tx"><span class="r">1階</span>${esc(g.r1Zh)}</span></div>`;
    const br = g.opts.map(o => `<div class="br">${card(o.r2)}<span class="arrow">→</span>${o.r3.map(card).join('') || '<span class="empty">—</span>'}</div>`).join('');
    return `<div class="row g-${g.grade}"><div class="gl"><span class="gd">${esc(g.gradeZh)}</span></div>${r1}<div class="brs">${br}</div></div>`;
  }).join('') + `</div>`;
  applyHL();
}
function drawFxList(){
  // 按「起手棋子」分組：稀有度＋兵種決定 1 階，之後選哪條路會長成這個羈絆的職業
  const f = fxById[filterFx];
  const mem = new Set(members[filterFx] || []);
  const GO = ['normal','advanced','rare','legendary','prism'];
  const starts = [];
  SYM.forEach(([s]) => (T[s] ? T[s].grades : []).forEach(g => {
    const brs = g.opts.filter(o => mem.has(o.r2) || o.r3.some(k => mem.has(k)));
    if (brs.length) starts.push({s, g, brs});
  }));
  // 一張表：列＝兵種、欄＝稀有度；有亮的格子就是「骰到這顆就能湊」
  const at = {}; starts.forEach(x => at[x.s + '|' + x.g.grade] = x);
  const gZh = TR.meta.gradeZh || {};
  const cols = GO.filter(g => gradeOn.has(g));
  const symsShown = SYM.filter(([s]) => T[s] && cols.some(g => at[s + '|' + g]));
  const chips = GO.map(g => `<button class="gchip g-${g} ${gradeOn.has(g) ? 'on' : ''}" data-grade="${g}">${esc(gZh[g] || g)}</button>`).join('');
  const head = `<tr><th></th>${cols.map(g => `<th class="g-${g}"><span class="gd">${esc(gZh[g] || g)}</span></th>`).join('')}</tr>`;
  const body = symsShown.map(([s]) => `<tr><th class="sn">${esc(symName[s])}</th>` + cols.map(g => {
    const x = at[s + '|' + g];
    if (!x) return `<td class="no"></td>`;
    const all = x.brs.length === x.g.opts.length;
    const id = s + '|' + g;
    const hint = all ? '兩條都算' : '要選 ' + esc(J[x.brs[0].r2].name) + '線';
    return `<td class="yes ${openCell === id ? 'open' : ''}"><button class="cell" data-cell="${esc(id)}">${sprHtml(x.g.r1Sprite)}<span class="cn">${esc(x.g.r1Zh)}</span><span class="ch ${all ? 'all' : ''}">${hint}</span></button></td>`;
  }).join('') + `</tr>`).join('');
  const cnt = cols.reduce((n, g) => n + symsShown.filter(([s]) => at[s + '|' + g]).length, 0);
  let detail = '<p class="empty">點亮著的格子，看升階要怎麼選。</p>';
  const x = openCell && at[openCell];
  if (x) {
    const lines = x.g.opts.map(o => {
      const ok = mem.has(o.r2) || o.r3.some(k => mem.has(k));
      const r2 = mem.has(o.r2) ? card(o.r2) : `<span class="off">${esc(J[o.r2].name)}</span>`;
      const r3 = o.r3.map(k => mem.has(k) ? card(k) : `<span class="off">${esc(J[k].name)}</span>`).join('');
      return `<div class="br ${ok ? '' : 'nope'}"><span class="pick">${ok ? '升 2 階選' : '這條不算'}</span>${r2}<span class="arrow">→</span>${r3 || '<span class="empty">—</span>'}</div>`;
    }).join('');
    detail = `<div class="detail"><div class="dh"><b>${esc(x.g.gradeZh)}${esc(symName[x.s])}</b>　1 階是 ${esc(x.g.r1Zh)}</div>${lines}</div>`;
  }
  $('tree').innerHTML = `<div class="fxhead"><b>${esc(f.name)}</b>　骰到亮的格子就能湊（${cnt} 種起手）<button class="btn back" data-back>回升階樹</button></div>` +
    `<div class="gchips"><span class="flabel">看哪些稀有度：</span>${chips}</div>` +
    `<div class="tbl-wrap"><table class="fxtbl">${head}${body}</table></div>` + detail;
  applyHL();
}
function applyHL(){
  const hj = hoverKey && J[hoverKey];
  document.querySelectorAll('#tree .cls').forEach(b => {
    const j = J[b.dataset.k]; let mate = false;
    if (hj && b.dataset.k !== hoverKey) mate = j.fx.some(f => hj.fx.includes(f));
    b.classList.toggle('mate', mate);
  });
}
function drawFilters(){
  const cnt = fxCounts();
  $('filters').innerHTML = F.map(f => `<button class="fchip ${filterFx===f.id?'on':''} ${f.open?'':'locked'}" data-f="${f.id}">${esc(f.name)}<span class="n">${(members[f.id]||[]).length}</span></button>`).join('');
}
function drawSide(){
  const cnt = fxCounts();
  $('teamCount').textContent = team.length ? `（${team.length}）` : '';
  $('team').innerHTML = team.length ? team.map(card).join('') : '<span class="empty">還沒選。點左邊的 2、3 階職業加進來。</span>';
  const act = F.filter(f => cnt[f.id]).sort((a,b) => tierOf(b, cnt[b.id]) - tierOf(a, cnt[a.id]) || cnt[b.id] - cnt[a.id]);
  const rows = act.map(f => {
    const n = cnt[f.id], t = tierOf(f, n);
    const steps = f.th.map((x,i) => `<span class="${i<=t?'hit':''}">${x}</span>`).join('');
    const now = t >= 0 ? `<b>${esc(f.tiers[t] || '')}</b>` : `再 ${f.th[0]-n} 種啟動`;
    const next = t + 1 < f.th.length ? `　下一階 ${f.th[t+1]} 種：${esc(f.tiers[t+1] || '')}` : '　已滿';
    return `<div class="fx-row ${t>=0?'active':''} ${f.open?'':'lock'}" data-f="${f.id}"><div class="hd"><span class="nm">${esc(f.name)}</span><span class="ct">${n} 種</span><span class="steps">${steps}</span></div>`+
      `<div class="eff">${now}<span class="nx">${next}</span></div></div>`;
  }).join('');
  $('fxlist').innerHTML = rows || '<span class="empty">隊伍裡還沒有羈絆。</span>';
}
function save(){ try { const p = []; if (team.length) p.push('t=' + team.map(encodeURIComponent).join(',')); if (sym !== 'W') p.push('s=' + sym); history.replaceState(null, '', p.length ? '#' + p.join('&') : location.pathname); } catch(e){} }
function draw(){ drawSyms(); drawFilters(); drawTree(); drawSide(); save(); }

/* ---------- 小卡 ---------- */
const pop = $('pop');
let pinned = false;
function showPop(k, anchor, pin){
  const j = J[k]; if (!j) return;
  const w = (where[k] || [])[0];
  let path = '';
  if (w) {
    const nodes = routeNodes(w, k);
    path = nodes.map((n, i) => `<span class="node ${i === nodes.length - 1 ? 'me' : ''}">${esc(n)}</span>`).join('<span class="sep">→</span>');
    if (w.rank === 2 && w.o.r3.length) path += '<span class="sep">→</span>' + w.o.r3.map(x => `<span class="node">${esc(J[x].name)}</span>`).join('');
  }
  const alt = w && w.other ? `<div class="alt">同一步另一條：${esc(J[w.other.r2].name)}${w.other.r3.length ? ' → ' + w.other.r3.map(x => esc(J[x].name)).join('、') : ''}</div>` : '';
  const more = (where[k] || []).length > 1 ? `<div class="alt">其他升法：${where[k].slice(1).map(x => esc(x.g.gradeZh + symName[x.s])).join('、')}</div>` : '';
  const fx = j.fx.length ? j.fx.map(f => {
    const others = (members[f] || []).filter(x => J[x].id !== j.id);
    const ids = new Set(); const uniq = others.filter(x => !ids.has(J[x].id) && ids.add(J[x].id));
    return `<div class="fxg"><span class="tag" data-f="${f}">${esc(fxName(f))}</span><span class="mates">${uniq.slice(0, 14).map(x => esc(J[x].name)).join('、')}${uniq.length > 14 ? ` 等 ${uniq.length} 個` : ''}</span></div>`;
  }).join('') : '<div class="alt">沒有羈絆</div>';
  const sk = (SK[j.id] || []).map(x => `<div class="skl"><b>${esc(x.n)}</b> <span class="alt">${x.p ? '被動' : (x.cd ? '每 ' + x.cd + ' 秒' : '')}</span><div>${esc(x.d)}</div></div>`).join('');
  const st = j.stats ? `<div class="stats">${[['hp','血'],['atk','攻'],['aspd','攻速'],['distance','射程']].map(([s,l]) => `<div><b>${j.stats[s] ?? '-'}</b>${l}</div>`).join('')}</div>` : '';
  const canAdd = j.rank >= 2;
  pop.innerHTML = `<div class="hd">${sprHtml(j.sprite, 'big')}<div><b>${esc(j.name)}</b><div class="alt">${j.rank} 階</div></div><button class="x" aria-label="關閉">×</button></div>`+
    `<div class="lbl">升階路線</div><div class="path">${path}</div>${alt}${more}`+
    (sk ? `<div class="lbl">技能</div>${sk}` : '') +
    `<div class="lbl">羈絆和同羈絆的職業</div>${fx}`+ st +
    (canAdd ? `<div class="act"><button class="btn" data-toggle="${esc(k)}">${team.includes(k) ? '從隊伍移除' : '加進隊伍'}</button><span class="alt">隊伍現在 ${team.length} 隻</span></div>` : '<div class="alt">1 階還沒有羈絆，不用加進隊伍；升到 2 階再挑。</div>')+
    (j.src ? `<div class="src">出處：${esc(j.src.replace(/^decompiled\//, ''))}</div>` : '');
  pop.classList.add('on'); pinned = !!pin;
  if (window.matchMedia('(max-width:820px)').matches) return;
  const r = anchor.getBoundingClientRect();
  const vw = document.documentElement.clientWidth;
  let x = r.left + window.scrollX, y = r.bottom + window.scrollY + 6;
  if (x + 330 > window.scrollX + vw) x = window.scrollX + vw - 336;
  pop.style.left = x + 'px'; pop.style.top = y + 'px';
}
function hidePop(){ pop.classList.remove('on'); pinned = false; }

/* ---------- 事件 ---------- */
function toggle(k){ const i = team.indexOf(k); if (i >= 0) team.splice(i,1); else team.push(k); draw(); }
const canHover = window.matchMedia('(hover:hover)').matches;
document.addEventListener('mouseover', e => {
  if (!canHover || pinned) return;
  const b = e.target.closest('.cls');
  if (b && hoverKey !== b.dataset.k) { hoverKey = b.dataset.k; applyHL(); showPop(hoverKey, b); }
});
document.addEventListener('mouseout', e => {
  if (!canHover || pinned) return;
  const b = e.target.closest('.cls'); if (!b) return;
  const to = e.relatedTarget;
  if (to && to.closest && (to.closest('.cls') || to.closest('#pop'))) return;
  hoverKey = null; hidePop(); applyHL();
});
pop.addEventListener('mouseleave', () => { if (canHover && !pinned) { hoverKey = null; hidePop(); applyHL(); } });
document.addEventListener('click', e => {
  const t = e.target;
  if (t.closest('.x')) { hidePop(); hoverKey = null; applyHL(); return; }
  const tg = t.closest('[data-toggle]'); if (tg) { toggle(tg.dataset.toggle); const b = document.querySelector(`.cls[data-k="${CSS.escape(tg.dataset.toggle)}"]`); if (b) showPop(tg.dataset.toggle, b, true); return; }
  const b = t.closest('.cls');
  if (b) {
    if (canHover) { if (J[b.dataset.k].rank >= 2) toggle(b.dataset.k); else { hoverKey = b.dataset.k; applyHL(); showPop(b.dataset.k, b, true); } }
    else { hoverKey = b.dataset.k; applyHL(); showPop(b.dataset.k, b, true); }
    return;
  }
  if (t.closest('[data-back]')) { filterFx = null; draw(); return; }
  const gc = t.closest('[data-grade]'); if (gc) { const g = gc.dataset.grade; if (gradeOn.has(g) && gradeOn.size > 1) gradeOn.delete(g); else gradeOn.add(g); drawTree(); return; }
  const ce = t.closest('[data-cell]'); if (ce) { openCell = openCell === ce.dataset.cell ? null : ce.dataset.cell; drawTree(); return; }
  const st = t.closest('[data-s]'); if (st) { sym = st.dataset.s; filterFx = null; draw(); return; }
  const fc = t.closest('[data-f]');
  if (fc) { filterFx = filterFx === fc.dataset.f ? null : fc.dataset.f; openCell = null; hidePop(); draw(); $('tree').scrollIntoView({behavior:'smooth', block:'start'}); return; }
  if (!t.closest('#pop') && pinned) { hidePop(); hoverKey = null; applyHL(); }
});
$('clear').onclick = () => { team = []; draw(); };
/* ---------- 分享：一般網址複製連結；嵌在別的頁面裡（例如 Claude 的網址版，網址帶不了隊伍）改複製代碼 ---------- */
const EMBED = (() => { try { return window.self !== window.top; } catch(e) { return true; } })();
const shareLabel = EMBED ? '複製隊伍代碼' : '複製分享連結';
$('share').textContent = shareLabel;
function teamCode(){ return 'SB1-' + btoa(unescape(encodeURIComponent(team.join(',')))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,''); }
function readCode(s){
  s = (s || '').trim();
  let m = s.match(/[#&]t=([^&\s]+)/);
  if (m) return decodeURIComponent(m[1]).split(',');
  m = s.match(/SB1-([A-Za-z0-9_-]+)/);
  if (m) { let b = m[1].replace(/-/g,'+').replace(/_/g,'/'); while (b.length % 4) b += '='; try { return decodeURIComponent(escape(atob(b))).split(','); } catch(e) { return null; } }
  return null;
}
function codeMsg(t){ const el = $('codeMsg'); el.textContent = t; el.hidden = !t; }
$('share').onclick = () => {
  if (!team.length) { codeMsg('隊伍還是空的，先點幾個職業加進來。'); return; }
  const text = EMBED ? teamCode() : location.href;
  const done = () => { $('share').textContent = '已複製'; codeMsg(EMBED ? '代碼已複製。對方把它貼進下面的框、按「載入」就能看到同一隊。' : ''); setTimeout(() => $('share').textContent = shareLabel, 1500); };
  const fail = () => { $('codeIn').value = text; $('codeIn').select(); codeMsg('沒辦法自動複製，已放進下面的框，請自己複製。'); };
  try { navigator.clipboard.writeText(text).then(done, fail); } catch(e) { fail(); }
};
$('codeGo').onclick = () => {
  const keys = readCode($('codeIn').value);
  const ok = (keys || []).filter(k => J[k]);
  if (!ok.length) { codeMsg('看不懂這段。請貼整段 SB1- 開頭的代碼，或整條分享連結。'); return; }
  team = [...new Set(ok)]; draw();
  const bad = keys.length - ok.length;
  codeMsg(`載入了 ${team.length} 個職業` + (bad ? `，${bad} 個對不上資料、略過了。` : '。'));
  $('codeIn').value = '';
};
$('codeIn').addEventListener('keydown', e => { if (e.key === 'Enter') $('codeGo').click(); });
(function(){
  let d = null;
  pop.addEventListener('pointerdown', e => { if (!e.target.closest('.hd') || e.target.closest('.x')) return; d = {x:e.clientX - pop.offsetLeft, y:e.clientY - pop.offsetTop}; pinned = true; pop.setPointerCapture(e.pointerId); });
  pop.addEventListener('pointermove', e => { if (d) { pop.style.left = (e.clientX - d.x) + 'px'; pop.style.top = (e.clientY - d.y) + 'px'; } });
  pop.addEventListener('pointerup', () => { d = null; });
})();

/* ---------- 搜尋 ---------- */
const idx = Object.keys(J).filter(k => where[k]).map(k => { const j = J[k], w = where[k][0]; return {k:'cls', id:k, t:j.name, sub:`${w.g.gradeZh}${symName[w.s]}・${j.rank}階・${j.fx.map(fxName).join('、') || '無羈絆'}`}; })
  .concat(F.map(f => ({k:'fx', id:f.id, t:f.name, sub:'羈絆・' + f.title})));
const q = $('q'), qres = $('qres'); let act = 0, hits = [];
q.addEventListener('input', () => {
  const s = q.value.trim().toLowerCase();
  if (!s) { qres.classList.remove('on'); return; }
  hits = idx.filter(x => x.t.toLowerCase().includes(s) || x.sub.toLowerCase().includes(s)).slice(0, 20);
  act = 0;
  qres.innerHTML = hits.length ? hits.map((h,i) => `<div class="${i===0?'act':''}" data-i="${i}">${esc(h.t)}<small>${esc(h.sub)}</small></div>`).join('') : '<div>找不到。試試職業或羈絆名稱。</div>';
  qres.classList.add('on');
});
function go(h){
  qres.classList.remove('on'); q.value = '';
  if (h.k === 'fx') { filterFx = h.id; draw(); $('tree').scrollIntoView({behavior:'smooth', block:'start'}); return; }
  filterFx = null; sym = where[h.id][0].s; hoverKey = h.id; draw();
  const b = document.querySelector(`#tree .cls[data-k="${CSS.escape(h.id)}"]`);
  if (b) { b.scrollIntoView({behavior:'smooth', block:'center'}); setTimeout(() => showPop(h.id, b, true), 350); }
}
qres.addEventListener('click', e => { const d = e.target.closest('[data-i]'); if (d) go(hits[+d.dataset.i]); });
q.addEventListener('keydown', e => {
  if (!qres.classList.contains('on') || !hits.length) return;
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { act = (act + (e.key === 'ArrowDown' ? 1 : hits.length - 1)) % hits.length; [...qres.children].forEach((n,i) => n.classList.toggle('act', i === act)); e.preventDefault(); }
  if (e.key === 'Enter') { go(hits[act]); e.preventDefault(); }
  if (e.key === 'Escape') qres.classList.remove('on');
});
document.addEventListener('click', e => { if (!e.target.closest('.search')) qres.classList.remove('on'); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && pop.classList.contains('on')) { hidePop(); hoverKey = null; applyHL(); } });

$('tips').innerHTML = '<b>先知道</b>　1 階職業由<b>稀有度</b>決定（同樣是戰士，稀有是鬥士、傳說是骷髏鬥士），之後每次升階 2 選 1。只有 2、3 階有羈絆，人數算「不同職業」。標鎖頭的羈絆要先在局外解鎖，羈絆系統本身也要先買「聯盟紋章」。';
draw();

/* ---------- 每隻兵的技能（照兵種分組，2 階在前） ---------- */
(function(){
  const box = $('skillList'); if (!box) return;
  const rows = s => { const seen = new Set(); return Object.entries(J).filter(([k, j]) => j.sym === s && j.rank >= 2 && where[k] && SK[j.id] && !seen.has(j.id) && seen.add(j.id)).sort((a, b) => a[1].rank - b[1].rank); };
  box.innerHTML = SYM.map(([s, label]) => { const r = rows(s); if (!r.length) return '';
    return `<details class="skg"><summary>${esc(symName[s] || label)}系（${r.length} 個職業）</summary><div class="tblwrap"><table class="mini"><thead><tr><th>職業</th><th>技能</th><th>效果</th></tr></thead><tbody>` +
      r.map(([k, j]) => SK[j.id].map(x => `<tr><td>${esc(j.name)}<small>${j.rank} 階</small></td><td><b>${esc(x.n)}</b><small>${x.p ? '被動' : (x.cd ? x.cd + ' 秒' : '')}</small></td><td>${esc(x.d)}</td></tr>`).join('')).join('') +
      '</tbody></table></div></details>'; }).join('');
})();
})();
