(function(){
'use strict';
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
const U = window.SB_UNITS || {grades:[],symbols:[],sig:{},traits:[],mult:[],awaken:{milestones:[]},traitW:{},notSig:[]};
const S = window.SB_UNITS_SIM || {pre:[],need:[],examples:[]};
const G = {}; U.grades.forEach(g => G[g.k] = g);
const MAXLV = U.impMax || 5;
const GZ = k => (G[k] ? G[k].zh : k);

/* ---------- 公式（跟 Q 筆記第 1 題一致，已對原始碼） ---------- */
function gain(v, convert){
  const w = (v.imprints || []).reduce((a, [r, l]) => a + G[r].score + (l - 1), 0);
  const f = Math.floor(v.lv / 3);
  const b = v.bento || 0;
  const c = convert ? G[v.grade].convert : 0;
  return {w, f, b, c, total: 1 + w + f + b + c};
}
window.__unitsCalc = (v, convert) => gain(v, convert).total;

/* ---------- 1. 計算機 ---------- */
const GRADE_OPTS = ['normal','advanced','rare','special','legendary','prism'];
const IMP_OPTS = [['','沒有'],['normal','普通'],['advanced','高階'],['rare','稀有／特殊'],['legendary','傳說'],['prism','稜彩']];
$('vGrade').innerHTML = GRADE_OPTS.map(k => `<option value="${k}">${GZ(k)}</option>`).join('');
$('mGrade').innerHTML = GRADE_OPTS.filter(k => k !== 'special').map(k => `<option value="${k}">${GZ(k)}</option>`).join('');
const imps = [['',1],['',1],['',1],['',1],['',1]];   // 最多 5 格
function drawImps(){
  const n = G[$('vGrade').value].slots;
  $('vImps').innerHTML = imps.slice(0, n).map((x, i) => `<div class="imp">
    <span class="flabel">第 ${i+1} 格</span>
    <select data-i="${i}" data-f="r" aria-label="第 ${i+1} 格刻印稀有度">${IMP_OPTS.map(([v,t]) => `<option value="${v}" ${v===x[0]?'selected':''}>${t}</option>`).join('')}</select>
    <select data-i="${i}" data-f="l" aria-label="第 ${i+1} 格刻印等級">${[1,2,3,4,5].map(l => `<option value="${l}" ${l===x[1]?'selected':''}>${l} 級</option>`).join('')}</select>
  </div>`).join('');
}
const num = (el, lo, hi) => Math.min(hi, Math.max(lo, Math.floor(+el.value || lo)));
function readVictim(){
  const grade = $('vGrade').value, n = G[grade].slots;
  return {grade, lv: num($('vLv'), 1, 999), bento: num($('vBento'), 0, 5),
    imprints: imps.slice(0, n).filter(x => x[0]).map(x => [x[0], x[1]])};
}
function calc(){
  const v = readVictim(), conv = $('vConv').checked;
  const r = gain(v, conv);
  const parts = [`1（基本）`, `${r.w}（刻印）`, `${r.f}（等級 ÷ 3）`, `${r.b}（便當）`, `${r.c}（轉換）`];
  $('absOut').innerHTML = `吃下去 +<b>${r.total}</b> 級`;
  const m = G[$('mGrade').value], lv = num($('mLv'), 1, 999), after = lv + r.total;
  let rank;
  if (after >= m.t3) rank = `已超過 3 階門檻（LV ${m.t3}），可以升到 3 階。`;
  else if (after >= m.t2) rank = `已超過 2 階門檻（LV ${m.t2}），可以升 2 階；離 3 階（LV ${m.t3}）還差 ${m.t3 - after} 級。`;
  else rank = `離 2 階門檻（LV ${m.t2}）還差 ${m.t2 - after} 級。`;
  $('absSub').innerHTML = `算式：${parts.join(' ＋ ')} = ${r.total}。<br>主力（${m.zh}）LV ${lv} → <b>${after}</b>：${rank}`;
}
$('vImps').addEventListener('change', e => {
  const s = e.target.closest('select'); if (!s) return;
  const i = +s.dataset.i; if (s.dataset.f === 'r') imps[i][0] = s.value; else imps[i][1] = +s.value;
  calc();
});
$('vGrade').addEventListener('change', () => { drawImps(); calc(); });
['vLv','vBento','mLv'].forEach(id => $(id).addEventListener('input', calc));
['vConv','mGrade'].forEach(id => $(id).addEventListener('change', calc));
function applyPreset(e){
  $('vGrade').value = e.victim.grade; $('vLv').value = e.victim.lv; $('vBento').value = e.victim.bento || 0;
  for (let i = 0; i < 5; i++) imps[i] = e.victim.imprints[i] ? [e.victim.imprints[i][0], e.victim.imprints[i][1]] : ['', 1];
  $('vConv').checked = !!e.convert; drawImps(); calc();
}
const PL = ['白板新兵', '吃滿的普通兵', '傳說兵＋便當', '稜彩新兵＋保留'];
$('presets').innerHTML = '<span class="flabel">範例：</span>' + S.examples.map((e, i) => `<button class="btn" data-p="${i}">${PL[i] || '例 ' + (i+1)}</button>`).join('');
$('presets').onclick = e => { const b = e.target.closest('[data-p]'); if (b) { applyPreset(S.examples[+b.dataset.p]); } };
drawImps(); calc();

/* 表：轉換加成 */
const MERGED = [['normal','普通'],['advanced','高階'],['rare','稀有、特殊'],['legendary','傳說'],['prism','稜彩']];
$('convTbl').innerHTML = '<thead><tr><th>被吃的兵稀有度</th><th>刻印稀有度分</th><th>轉換加成</th></tr></thead><tbody>' +
  MERGED.map(([k, z]) => `<tr><td>${z}</td><td>${G[k].score}</td><td>+${G[k].convert}</td></tr>`).join('') + '</tbody>';
/* 表：範例 */
$('exTbl').innerHTML = '<thead><tr><th>被吃的兵</th><th>手算</th><th>結果</th><th></th></tr></thead><tbody>' +
  S.examples.map((e, i) => `<tr><td>${esc(e.name)}</td><td>${esc(e.hand)}</td><td><b>+${e.expect}</b></td><td><button class="btn" data-p="${i}">試算</button></td></tr>`).join('') + '</tbody>';
$('exTbl').onclick = e => { const b = e.target.closest('[data-p]'); if (b) { applyPreset(S.examples[+b.dataset.p]); $('calcBox').scrollIntoView({behavior:'smooth', block:'center'}); } };

/* ---------- 2. 餵養 ---------- */
$('preTbl').innerHTML = '<thead><tr><th>先讓一隻吃幾隻</th><th>共用幾隻</th><th>刻印沒滿：給主力</th><th>每隻平均</th><th>刻印已滿：給主力</th><th>每隻平均</th></tr></thead><tbody>' +
  S.pre.map(r => `<tr class="${r.k === 2 || r.k === 5 ? 'hi' : ''}"><td>${r.k === 0 ? '0（直接餵）' : r.k}</td><td>${r.used}</td><td>+${r.open}</td><td><b>${r.open_avg}</b></td><td>+${r.full}</td><td><b>${r.full_avg}</b></td></tr>`).join('') + '</tbody>';
const rng = (a, b) => a === b ? `${a} 隻` : `${a}～${b} 隻`;
$('needTbl').innerHTML = '<thead><tr><th>主力稀有度</th><th>刻印格</th><th>升到 2 階</th><th>升到 3 階</th></tr></thead><tbody>' +
  S.need.map(r => `<tr><td>${GZ(r.grade)}</td><td>${r.slots}</td><td>${rng(r.n2_fast, r.n2_slow)}</td><td>${rng(r.n3_fast, r.n3_slow)}</td></tr>`).join('') + '</tbody>';

/* ---------- 3. 升階 ---------- */
$('rankTbl').innerHTML = '<thead><tr><th>稀有度</th><th>刻印格</th><th>2 階要 LV</th><th>3 階要 LV</th><th>2 階倍率</th><th>3 階倍率</th></tr></thead><tbody>' +
  MERGED.map(([k, z]) => { const g = G[k]; return `<tr><td>${z}</td><td>${g.slots}</td><td>${g.t2}</td><td>${g.t3}</td><td>×${g.m2}</td><td>×${g.m3}</td></tr>`; }).join('') + '</tbody>';
$('multTbl').innerHTML = '<thead><tr><th>吸收 LV</th><th>攻擊</th><th>生命</th><th>攻速</th></tr></thead><tbody>' +
  U.mult.map(r => `<tr><td>${r.lv}</td><td>×${r.atk}</td><td>×${r.hp}</td><td>×${r.aspd}</td></tr>`).join('') + '</tbody>';

/* ---------- 4. 刻印 ---------- */
const SYMZ = {W:'戰士', A:'弓手', S:'槍兵', M:'法師', H:'騎兵', D:'決鬥者', J:'小丑'};
const SGK = ['normal','advanced','rare','legendary','prism'];
const SYMROWS = ['W','A','S','M','H','D','J'].filter(k => U.sig[k] && SGK.some(g => U.sig[k][g]));
$('sigTbl').innerHTML = `<thead><tr><th>符號</th>${SGK.map(k => `<th>${GZ(k)}</th>`).join('')}</tr></thead><tbody>` +
  SYMROWS.map(s => `<tr><td>${SYMZ[s]}</td>${SGK.map(k => { const x = U.sig[s][k]; return x ? `<td>${esc(x.zh)}<small>${esc(x.short)}</small></td>` : '<td>—</td>'; }).join('')}</tr>`).join('') + '</tbody>';
$('notSig').textContent = (U.notSig || []).map(x => '「' + x.zh + '」').join('、');

/* ---------- 5. 特質 ---------- */
const TZ = {};
U.traits.forEach(t => TZ[t.id] = t.zh);
const NEEDZ = {requiresActiveSkill:'要有主動技能', requiresAttackSkill:'要有攻擊技能', requiresBasicAttack:'要有普通攻擊',
  requiresRangedBasicAttack:'要是遠程普通攻擊', requiresBountySource:'要有賞金來源（細節沒確認）', requiresDeploymentRoom:'場上要有空位'};
const MISMATCH = new Set(['14','18','20','21']);
let fR = 'all', fS = 'all', hlId = null;
const RCLS = {'稀有':'r-R', '傳說':'r-L'};
function parentName(p){
  if (p === 'dormantpower') return U.awaken.unlock_name || '沉睡之力';
  const m = /^unlock_trait_(\d+)$/.exec(p);
  return m ? (TZ[m[1]] || p) : p;
}
function oddsText(t){
  if (t.locked && t.unlock) {
    const base = `要先在局外解鎖：花 ${t.unlock.cost}（用什麼貨幣沒確認），前置是「${esc(parentName(t.unlock.parent))}」。`;
    return base + (t.p_all > 0 ? `解鎖後出生機率約 ${t.p_all}%。` : '只在升階時抽得到。');
  }
  if (t.locked) return '怎麼解鎖沒確認。只在升階時抽得到。';
  if (t.srczh === '升階') return '只在升階時抽得到。';
  return t.p_start === t.p_all ? `出生機率約 ${t.p_start}%。` : `出生機率約 ${t.p_start}%（全部解鎖後降到 ${t.p_all}%）。`;
}
function traitRow(t){
  const gz = t.grades ? '只出現在' + t.grades.map(GZ).join('、') + '兵。' : '';
  const nz = t.needs && t.needs.length ? '出現條件：' + t.needs.map(k => NEEDZ[k] || k).join('、') + '。' : '';
  return `<div class="core ${t.id === hlId ? 'hl' : ''}" id="trait-${t.id}">
    <img class="cic" src="${esc(t.icon)}" alt="" loading="lazy" onerror="this.style.visibility='hidden'">
    <div class="ctx"><div class="chd"><b>${esc(t.zh)}</b><span class="rz ${RCLS[t.rarzh] || ''}">${esc(t.rarzh)}</span><span class="mz">${esc(t.srczh)}</span>${MISMATCH.has(t.id) ? '<span class="infer">名稱可能對不上</span>' : ''}</div>
    <div class="cds">${esc(t.eff)}</div>
    <div class="cds oddsx">${oddsText(t)}${gz}${nz}</div></div></div>`;
}
function chips(el, opts, cur, set){
  el.innerHTML = opts.map(([v, t]) => `<button class="fchip ${v === cur ? 'on' : ''}" data-v="${v}">${t}</button>`).join('');
  el.onclick = e => { const b = e.target.closest('[data-v]'); if (b) { set(b.dataset.v); drawTraits(); } };
}
function drawTraits(){
  chips($('tfR'), [['all','全部'],['普通','普通'],['稀有','稀有'],['傳說','傳說']], fR, v => fR = v);
  chips($('tfS'), [['all','全部'],['出生','出生'],['升階','升階']], fS, v => fS = v);
  const list = U.traits.filter(t => (fR === 'all' || t.rarzh === fR) && (fS === 'all' || t.srczh.includes(fS)));
  $('tlist').innerHTML = (list.length ? list.map(traitRow).join('') : '<p class="empty">沒有符合的特質。</p>')
    + '';
}
drawTraits();
const W = U.traitW || {};
const WROWS = [['出生','spawn'],['升到 2 階','r2'],['升到 3 階','r3'],['升到 4 階','r4'],['升到 5 階','r5']];
$('tw').innerHTML = '<thead><tr><th>時機</th><th>普通</th><th>稀有</th><th>傳說</th></tr></thead><tbody>' +
  WROWS.filter(([, k]) => W[k]).map(([z, k]) => `<tr><td>${z}</td><td>${W[k].common}%</td><td>${W[k].rare}%</td><td>${W[k].legend}%</td></tr>`).join('') + '</tbody>';
const vc = U.variantChance || [];
$('twNote').innerHTML = [
  '先抽稀有度，再在那一類裡平均挑一個。沒解鎖任何東西時，普通類有 12 種，所以每種約 5.83%（70% ÷ 12）。',
  `便當的點數 1、2、3、4、5 級的機率是 ${vc.map(x => Math.round(x * 100) + '%').join('、')}，平均約 ${(+U.bentoAvg || 0).toFixed(2)} 級。`,
  '效果寫成「+6~10%」這種範圍的特質，同樣分 5 檔抽，機率同上。<span class="infer">推論</span>檔數和機率是從程式表格看出來的，哪一檔對應範圍的哪個數沒逐項確認。',
  '名稱可能對不上的 4 個（專注、成長加速、後衛、孤獨）：遊戲裡的繁中名稱跟效果文字看起來錯位，以效果為準。<span class="infer">推論</span>'
].map(s => `<li>${s}</li>`).join('');

/* ---------- 6. 覺醒 ---------- */
const A = U.awaken || {};
$('awText').innerHTML = `覺醒要先在局外花 ${A.cost} 買「${esc(A.unlock_name)}」。之後兵的吸收 LV 到 30、60、100 時，可以從候選裡 3 選 1。目前共有 ${A.units} 種兵有覺醒，每種有 ${A.pool_min}～${A.pool_max} 個候選。另一個局外升級「${esc(A.branch_name)}」要 ${A.branch_cost}：兵轉職到 3 星時，可從 3 個特性各異的候選裡選 1 個。`;
$('awTbl').innerHTML = '<thead><tr><th>吸收 LV</th><th>覺醒檔次</th></tr></thead><tbody>' +
  (A.milestones || []).map(m => `<tr><td>${m.lv}</td><td>第 ${m.rank} 檔</td></tr>`).join('') + '</tbody>';
$('awList').innerHTML = [
  '「檔次」是程式裡的 rank 欄位，它對應候選池的哪一層，沒確認。',
  'LV 160 和 250 這兩檔，一般玩法會不會到，沒確認。',
  `「${esc(A.unlock_name)}」：${esc(A.unlock_desc)}`,
  `「${esc(A.branch_name)}」：${esc(A.branch_desc)}`
].map(s => `<li>${s}</li>`).join('');

/* ---------- 搜尋（這頁的段落＋特質＋刻印） ---------- */
const IMPN = U.imprintNames || {};
const impIdx = [];
SYMROWS.forEach(s => SGK.forEach(k => { const x = U.sig[s][k]; if (x) impIdx.push({k:'imp', id:'imprint', t:x.zh, sub:`刻印・吃${SYMZ[s]}（${GZ(k)}）拿到`, hay:x.zh + x.short + SYMZ[s] + GZ(k)}); }));
(U.notSig || []).forEach(x => impIdx.push({k:'imp', id:'imprint', t:x.zh, sub:'刻印・吃兵拿不到', hay:x.zh}));
const idx = [...document.querySelectorAll('.sec')].map(s => ({k:'sec', id:s.id, t:s.querySelector('h2').textContent.replace(/^\d/, ''), sub:'這頁的段落', hay:(s.dataset.t || '') + s.textContent}))
  .concat(U.traits.map(t => ({k:'trait', id:t.id, t:t.zh, sub:`特質・${t.rarzh}・${t.srczh}`, hay:t.zh + t.eff})))
  .concat(impIdx);
const q = $('q'), qres = $('qres'); let act = 0, hits = [];
q.addEventListener('input', () => {
  const s = q.value.trim().toLowerCase();
  if (!s) { qres.classList.remove('on'); return; }
  const rank = {sec:0, trait:.5, imp:.6};
  const score = x => (x.t.toLowerCase().includes(s) ? 0 : 1) + rank[x.k];
  hits = idx.filter(x => x.hay.toLowerCase().includes(s)).sort((a, b) => score(a) - score(b)).slice(0, 20);
  act = 0;
  qres.innerHTML = hits.length ? hits.map((h, i) => `<div class="${i === 0 ? 'act' : ''}" data-i="${i}">${esc(h.t)}<small>${esc(h.sub)}</small></div>`).join('')
    : '<div>找不到。刻印的效果在「刻印」頁搜。</div>';
  qres.classList.add('on');
});
function go(h){
  qres.classList.remove('on'); q.value = '';
  if (h.k === 'sec' || h.k === 'imp') { document.getElementById(h.id).scrollIntoView({behavior:'smooth', block:'start'}); return; }
  fR = 'all'; fS = 'all'; hlId = h.id; drawTraits();
  const el = document.getElementById('trait-' + h.id);
  if (el) el.scrollIntoView({behavior:'smooth', block:'center'});
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
