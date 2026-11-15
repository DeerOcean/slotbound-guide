(function(){
'use strict';
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
const D = window.SB_SHOP || {items:[], weights:[], unlocks:[]};
const N = window.SB_SHOP_NOTES || {fit:{}, fitWhy:{}, early:[]};
const ITEMS = D.items;
const byId = {}; ITEMS.forEach(i => byId[i.id] = i);
const RZ = {C:'普通', U:'罕見', R:'稀有', L:'傳說'};
const TZ = {BATTLE:'戰鬥', TRAINING:'手冊'};
const MAPN = ['開闊森林','深邃洞窟','荒原','失落遺蹟','猩紅地獄','冰冷宇宙'];
const DIFFN = {1:'簡單', 2:'普通', 3:'困難'};
const FZ = {u:'全隊通用', c:'看陣容', t:'職業手冊'};
const stripLv = s => String(s).replace(/\s*\(Lv\.\d+\)\s*$/, '');
const pct = (x, d) => (x * 100).toFixed(d == null ? 1 : d).replace(/\.0+$/, '') + '%';
function fitOf(i){
  if (i.type === 'TRAINING') return 't';
  if (i.stage !== 'all') return '';
  return N.fit[i.id] || '';
}
function itemBtn(id){ const i = byId[id]; return i ? `<button data-it="${id}">${esc(i.name)}</button>` : ''; }

/* ---------- 1. 精髓夠花嗎 ---------- */
function cumEssence(W, win, start){
  let s = start;
  for (let w = 1; w <= W; w++) { s += 1; if (win) { if (w % 10 === 0) s += 5; else if (w % 5 === 0) s += 3; } }
  return s;
}
function drawBudget(){
  const W = Math.max(1, Math.min(60, Math.floor(+$('bw').value || 1)));
  const win = $('bwin').checked, st = $('bst').checked ? 2 : 0;
  const marks = [2, 5, 10, 15, 20, 30];
  $('eLadder').innerHTML = marks.map(w => `<div class="step ${w <= W ? 'ok' : ''}"><b>${cumEssence(w, win, st)}</b><span>第 ${w} 波</span><small>累計精髓</small></div>`).join('');
  const t = cumEssence(W, win, st);
  $('eOut').innerHTML = `到第 <b>${W}</b> 波累計 <b>${t}</b> 精髓，大約可以買 <b>${Math.floor(t / 2)}</b> 件 2 精髓的普通道具，或 <b>${Math.floor(t / 7)}</b> 件 7 精髓的稀有道具。${win ? '' : '（沒算打贏的整數獎勵）'}`;
}
['bw', 'bwin', 'bst'].forEach(id => $(id).addEventListener('input', drawBudget));
drawBudget();

/* ---------- 2. 商店怎麼換 ---------- */
function weightsFor(w){
  const row = D.weights.find(r => w >= r.min && (r.max == null || w <= r.max)) || D.weights[D.weights.length - 1];
  return row.w;
}
$('om').innerHTML = '<option value="all">不限（每張都可能）</option>' + MAPN.map((n, k) => `<option value="${k + 1}">${k + 1}　${n}</option>`).join('');
function poolCount(map, unl){
  const c = {C:0, U:0, R:0, L:0};
  ITEMS.forEach(i => {
    if (unl === 'open' && !i.open) return;
    if (map !== 'all' && i.stage !== 'all' && i.stage !== map) return;
    if (map === 'all' && i.stage !== 'all') return;
    c[i.r]++;
  });
  return c;
}
function drawOdds(){
  const w = Math.max(1, Math.min(60, Math.floor(+$('ow').value || 1)));
  const map = $('om').value, unl = $('ou').value;
  const W = weightsFor(w), pool = poolCount(map, unl);
  const eff = {C:0, U:0, R:0, L:0};
  const tot = W.C + W.U + W.R + W.L;
  ['C', 'U', 'R', 'L'].forEach(r => {
    const p = W[r] / tot;
    if (pool[r] > 0) eff[r] += p;
    else { const f = ['C', 'U', 'R', 'L'].find(x => pool[x] > 0); if (f) eff[f] += p; }
  });
  const rows = ['C', 'U', 'R', 'L'].filter(r => eff[r] > 0).map(r => {
    const e = eff[r], n = pool[r];
    const one = 1 - Math.pow(1 - e, 3);
    const spec = n > 0 ? 1 - Math.pow(1 - e / n, 3) : 0;
    return `<tr><td>${RZ[r]}</td><td class="n">${pct(e)}</td><td class="n">${n}</td><td class="n">${pct(one)}</td><td class="n hi">${n ? pct(spec) : '—'}</td></tr>`;
  }).join('');
  $('oTbl').innerHTML = '<thead><tr><th>稀有度</th><th class="n">每格出現</th><th class="n">可出的道具數</th><th class="n">這批至少 1 件</th><th class="n">指定某一件這批出現</th></tr></thead><tbody>' + rows + '</tbody>';
  const batch = Math.floor((w - 1) / 2) + 1;
  $('oOut').innerHTML = `第 ${w} 波屬於第 <b>${batch}</b> 批（第 ${(batch - 1) * 2 + 1}～${batch * 2} 波同一批）。這一批 3 格預期：普通 <b>${(3 * eff.C).toFixed(1)}</b>、罕見 <b>${(3 * eff.U).toFixed(1)}</b>、稀有 <b>${(3 * eff.R).toFixed(1)}</b>、傳說 <b>${(3 * eff.L).toFixed(2)}</b> 件。`;
}
['ow', 'om', 'ou'].forEach(id => $(id).addEventListener('input', drawOdds));
drawOdds();
$('wTbl').innerHTML = '<thead><tr><th>波數</th><th class="n">普通</th><th class="n">罕見</th><th class="n">稀有</th><th class="n">傳說</th></tr></thead><tbody>' +
  D.weights.map(r => `<tr><td>${r.min}${r.max == null ? ' 以後' : r.max === r.min ? '' : '～' + r.max}</td><td class="n">${r.w.C}</td><td class="n">${r.w.U}</td><td class="n">${r.w.R}</td><td class="n">${r.w.L}</td></tr>`).join('') + '</tbody>';

/* ---------- 3. 前期買什麼 ---------- */
$('earlyBox').innerHTML = N.early.map((e, k) => {
  const i = byId[e.id]; if (!i) return '';
  return `<div class="erow"><img src="${esc(i.icon)}" alt="" onerror="this.style.visibility='hidden'">
    <div><div class="eh"><span class="no">${k + 1}</span>${itemBtn(e.id)}<span class="rz r-${i.r}">${RZ[i.r]}</span><span class="ep">${i.prices.join(' → ')} 精髓</span></div><p>${esc(e.why)}</p></div></div>`;
}).join('');

/* ---------- 4. 後期 ---------- */
const lv = (id, k) => (byId[id] && byId[id].lv[k]) || '';
const num = (s, re) => { const m = String(s).match(re); return m ? +m[1] : null; };
$('lateBox').innerHTML = [
  ['48', `全隊普攻傷害 +50%（第 2 級 +60%），最大血量 −20%。對照堅固拳套要花 9 精髓升到第 3 級才 +12%。適合靠普攻打的隊，血量薄的隊要小心。`],
  ['18', `只加遠程普攻：第 1 級傷害 +45%、攻速 −25%，淨效果約 +9%；第 2 級（6 精髓）+65%，淨效果約 +24%。要買就升到第 2 級。`],
  ['44', `一隻敵人被 2 種、3 種、4 種以上不同系別的友軍打，傷害 +8%、+16%、+24%。要先把羈絆湊出多種系別，看「升階與羈絆」那頁。`],
  ['45', `每場開打時隨機給你 2 件沒有的道具，以第 1 級效果在那一場生效。要先花局外源石解鎖（解鎖費見圖鑑下方）。哪些道具會被抽到、道具欄滿了會不會浪費，沒確認。`]
].map(([id, t]) => { const i = byId[id]; return `<div class="lcard"><h3>${itemBtn(id)}<span class="rz r-${i.r}">${RZ[i.r]}</span><span class="ep">${i.prices.join(' → ')} 精髓</span></h3><p>${t}</p></div>`; }).join('');

(function netTable(){
  const rows = [];
  [0, 1, 2].forEach(k => {
    const s = lv('18', k); if (!s) return;
    const d = num(s, /提高(\d+)%/), a = num(s, /攻速 -(\d+)%/);
    if (d == null || a == null) return;
    const net = (1 + d / 100) * (1 - a / 100) - 1;
    rows.push(`<tr><td>緊繃弓弦 ${k < 2 ? '第 ' + (k + 1) + ' 級' : '工程加成級'}</td><td class="n">+${d}%</td><td class="n">−${a}%</td><td class="n hi">${net >= 0 ? '+' : ''}${(net * 100).toFixed(1)}%</td></tr>`);
  });
  [0, 1].forEach(k => {
    const s = lv('48', k); if (!s) return;
    const d = num(s, /提高(\d+)%/); if (d == null) return;
    rows.push(`<tr><td>燃燒之心 ${k < 1 ? '第 1 級' : '工程加成級'}</td><td class="n">+${d}%</td><td class="n">—（血量 −20%）</td><td class="n hi">+${d}%</td></tr>`);
  });
  $('netTbl').innerHTML = '<thead><tr><th>道具</th><th class="n">普攻傷害</th><th class="n">攻速</th><th class="n">普攻淨效果</th></tr></thead><tbody>' + rows.join('') + '</tbody>';
})();

/* ---------- 5. 升級還是買新的 ---------- */
(function upTable(){
  let h = '<thead><tr><th>道具</th><th>級</th><th class="n">價格</th><th class="n">累計花費</th><th class="n">效果</th><th class="n">這級多出</th><th class="n">每精髓多出</th></tr></thead><tbody>';
  ['01', '02'].forEach(id => {
    const i = byId[id]; let prev = 0, cum = 0;
    for (let k = 0; k < i.max; k++) {
      const v = num(i.lv[k], /(\d+)%/), p = i.prices[k]; cum += p;
      h += `<tr><td>${k === 0 ? esc(i.name) : ''}</td><td>第 ${k + 1} 級</td><td class="n">${p}</td><td class="n">${cum}</td><td class="n">${v}%</td><td class="n">+${v - prev}%</td><td class="n hi">${((v - prev) / p).toFixed(2)}%</td></tr>`;
      prev = v;
    }
  });
  $('upTbl').innerHTML = h + '</tbody>';
})();

/* ---------- 6. 護衛劍 vs 拳套 ---------- */
(function swTable(){
  const f = byId['01'].prices, fist1 = 0.06, fist3 = 0.12, fc3 = f[0] + f[1] + f[2];
  const sword = 0.4, sp = byId['25'].prices[0];
  const Ns = [3, 4, 6];
  const row = (name, cost, g) => `<tr><td>${name}</td><td class="n">${cost}</td>` + Ns.map(n => { const v = g(n); return `<td class="n">${v.toFixed(2)}（每精髓 ${(v / cost).toFixed(3)}）</td>`; }).join('') + '</tr>';
  $('swTbl').innerHTML = '<thead><tr><th>道具</th><th class="n">花費</th>' + Ns.map(n => `<th class="n">隊上 ${n} 隻</th>`).join('') + '</tr></thead><tbody>' +
    row('堅固拳套 第 1 級', f[0], n => fist1 * n) + row('堅固拳套 第 3 級', fc3, n => fist3 * n) + row('護衛劍', sp, () => sword) + '</tbody>';
})();

/* ---------- 7. 道具圖鑑 ---------- */
const F = {R:'all', T:'all', M:'all', U:'all', F:'all'};
let hl = null;
function chips(el, opts, key){
  el.innerHTML = opts.map(([v, t]) => `<button class="fchip ${v === F[key] ? 'on' : ''}" data-v="${v}">${t}</button>`).join('');
  el.onclick = e => { const b = e.target.closest('[data-v]'); if (b) { F[key] = b.dataset.v; hl = null; drawList(); } };
}
function mapLabel(i){ return i.stage === 'all' ? '通用' : MAPN[+i.stage - 1]; }
function unlockCost(i){ const u = D.unlocks.find(x => x.id === i.id); return u ? u.cost : null; }
function itemRow(i){
  const f = fitOf(i);
  const lvs = i.lv.map((t, k) => {
    const p = k < i.prices.length ? `${i.prices[k]} 精髓` : '';
    return `<li>第 ${k + 1} 級${p ? '（' + p + '）' : ''}${k >= i.max ? '<em>工程加成</em>' : ''}：${esc(stripLv(t))}</li>`;
  }).join('');
  const uc = unlockCost(i);
  return `<div class="core item ${hl === i.id ? 'hl' : ''}" id="it-${i.id}">
    <img class="cic" src="${esc(i.icon)}" alt="" loading="lazy" onerror="this.style.visibility='hidden'">
    <div class="ctx"><div class="chd"><b>${esc(i.name)}</b><span class="rz r-${i.r}">${RZ[i.r]}</span><span class="tz">${TZ[i.type] || ''}</span><span class="mz">${mapLabel(i)}</span>${f ? `<span class="fz ${f}">${FZ[f]}</span>` : ''}${i.open ? '' : '<span class="uz">局外解鎖</span>'}</div>
    <div class="cds">${esc(stripLv(i.lv[0]))}</div>
    <div class="ipr">價格 <b>${i.prices.join(' → ')}</b> 精髓${i.max > 1 ? `（最多 ${i.max} 級）` : ''}${uc != null ? `，解鎖 ${uc} 源石` : ''}</div>
    ${N.fitWhy[i.id] ? `<div class="ifw">限制：${esc(N.fitWhy[i.id])}<span class="infer">推論</span></div>` : ''}
    <details><summary>各級數值</summary><ul>${lvs}</ul></details></div></div>`;
}
function drawList(){
  chips($('fR'), [['all', '全部'], ['C', '普通'], ['U', '罕見'], ['R', '稀有'], ['L', '傳說']], 'R');
  chips($('fT'), [['all', '全部'], ['BATTLE', '戰鬥'], ['TRAINING', '手冊']], 'T');
  chips($('fM'), [['all', '全部'], ['g', '通用']].concat(MAPN.map((n, k) => [String(k + 1), n])), 'M');
  chips($('fU'), [['all', '全部'], ['open', '一開始就有'], ['lock', '要局外解鎖']], 'U');
  chips($('fF'), [['all', '全部'], ['u', '全隊通用'], ['c', '看陣容'], ['t', '手冊']], 'F');
  const list = ITEMS.filter(i =>
    (F.R === 'all' || i.r === F.R) && (F.T === 'all' || i.type === F.T) &&
    (F.M === 'all' || (F.M === 'g' ? i.stage === 'all' : i.stage === F.M)) &&
    (F.U === 'all' || (F.U === 'open' ? i.open : !i.open)) &&
    (F.F === 'all' || fitOf(i) === F.F));
  $('ilist').innerHTML = list.length ? list.map(itemRow).join('') : '<p class="empty">沒有符合的道具，放寬一個條件試試。</p>';
  $('icount').textContent = `顯示 ${list.length} / ${ITEMS.length} 件`;
}
drawList();
function showItem(id){
  Object.keys(F).forEach(k => F[k] = 'all'); hl = id; drawList();
  const el = document.getElementById('it-' + id);
  if (el) { el.scrollIntoView({behavior: 'smooth', block: 'center'}); const d = el.querySelector('details'); if (d) d.open = true; }
}
document.addEventListener('click', e => { const b = e.target.closest('[data-it]'); if (b) showItem(b.dataset.it); });

/* 局外解鎖表 */
(function unTable(){
  const name = id => (byId[id] ? byId[id].name : id);
  const parent = p => p === 'shopreroll' ? '局外升級「商店重抽」' : p.replace('unlock_item_', '') ? '先解鎖「' + name(p.replace('unlock_item_', '')) + '」' : p;
  const rows = D.unlocks.slice().sort((a, b) => a.cost - b.cost).map(u => {
    const i = byId[u.id];
    const req = u.req ? `通關 ${MAPN[u.req[0] - 1]}（${DIFFN[u.req[1]] || u.req[1]}）` : '無';
    return `<tr><td>${itemBtn(u.id)}</td><td>${RZ[i.r]}</td><td class="n">${u.cost}</td><td>${parent(u.parent)}</td><td>${req}</td></tr>`;
  }).join('');
  $('unTbl').innerHTML = '<thead><tr><th>道具</th><th>稀有度</th><th class="n">花費</th><th>前置</th><th>進度</th></tr></thead><tbody>' + rows + '</tbody>';
})();

/* ---------- 搜尋（這頁的段落＋道具） ---------- */
const idx = [...document.querySelectorAll('.sec')].map(s => ({k:'sec', id:s.id, t:s.querySelector('h2').textContent.replace(/^\d/, ''), sub:'這頁的段落', hay:(s.dataset.t || '') + s.textContent}))
  .concat(ITEMS.map(i => ({k:'item', id:i.id, t:i.name, sub:`道具・${RZ[i.r]}・${TZ[i.type] || ''}・${mapLabel(i)}`, hay:i.name + i.en + i.lv.join('') })));
const q = $('q'), qres = $('qres'); let act = 0, hits = [];
q.addEventListener('input', () => {
  const s = q.value.trim().toLowerCase();
  if (!s) { qres.classList.remove('on'); return; }
  const score = x => (x.t.toLowerCase().includes(s) ? 0 : 1) + (x.k === 'sec' ? 0 : .5);
  hits = idx.filter(x => x.hay.toLowerCase().includes(s)).sort((a, b) => score(a) - score(b)).slice(0, 20);
  act = 0;
  qres.innerHTML = hits.length ? hits.map((h, i) => `<div class="${i === 0 ? 'act' : ''}" data-i="${i}">${esc(h.t)}<small>${esc(h.sub)}</small></div>`).join('')
    : '<div>找不到。核心在「轉盤」頁搜，職業和羈絆在「升階與羈絆」頁搜。</div>';
  qres.classList.add('on');
});
function go(h){
  qres.classList.remove('on'); q.value = '';
  if (h.k === 'sec') { document.getElementById(h.id).scrollIntoView({behavior: 'smooth', block: 'start'}); return; }
  showItem(h.id);
}
qres.addEventListener('click', e => { const d = e.target.closest('[data-i]'); if (d) go(hits[+d.dataset.i]); });
q.addEventListener('keydown', e => {
  if (!qres.classList.contains('on') || !hits.length) return;
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { act = (act + (e.key === 'ArrowDown' ? 1 : hits.length - 1)) % hits.length; [...qres.children].forEach((n, i) => n.classList.toggle('act', i === act)); e.preventDefault(); }
  if (e.key === 'Enter') { go(hits[act]); e.preventDefault(); }
  if (e.key === 'Escape') qres.classList.remove('on');
});
document.addEventListener('click', e => { if (!e.target.closest('.search')) qres.classList.remove('on'); });
})();
