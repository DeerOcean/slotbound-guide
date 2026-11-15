(function(){
'use strict';
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
const CORES = window.SB_CORES || [];
const RZ = {C:'普通', U:'罕見', R:'稀有', L:'傳說'};
const MZ = {'':'共用', nudge:'微調專屬', blast:'爆破專屬'};

/* ---------- 1. 轉幾次 ---------- */
const PRICES = [100,150,200,250,300,350];
function calc(){
  const g = Math.max(0, Math.floor(+$('gold').value || 0));
  let left = g, n = 0;
  PRICES.forEach(p => { if (left >= p && n === PRICES.indexOf(p)) { left -= p; n++; } });
  let sum = 0;
  $('ladder').innerHTML = PRICES.map((p,i) => { sum += p;
    return `<div class="step ${i < n ? 'ok' : ''}"><b>${p}</b><span>第 ${i+1} 轉</span><small>累計 ${sum}</small></div>`; }).join('');
  $('calcOut').innerHTML = n === 0
    ? `還差 <b>${100 - g}</b> 金才能轉第 1 轉。`
    : `這波能轉 <b>${n}</b> 次，剩 <b>${left}</b> 金${n < 6 ? `；再轉一次要 ${PRICES[n]} 金` : ''}。`;
}
$('gold').addEventListener('input', calc);
document.querySelectorAll('.quick [data-g]').forEach(b => b.onclick = () => { $('gold').value = b.dataset.g; calc(); });
calc();

/* ---------- 2. 轉出什麼 ---------- */
const SYMS = [
  ['W','戰士',20,15.6,'SwordMan_01Normal_01NormalSwordMan'],
  ['A','弓手',20,15.6,'ArcherMan_01Normal_01NormalArcherMan'],
  ['S','槍兵',20,15.6,'SpearMan_01Normal_01NormalSpearMan'],
  ['M','法師',15,37,'Mage_01Normal_01NormalMage'],
  ['H','騎兵',15,37,'HorseMan_01Normal_01MiniHorseMan'],
  ['D','決鬥者',10,125,'PrinceMan_01Normal_01MiniPrinceMan'],
];
$('oddsList').innerHTML = '<div class="orow ohead"><span></span><span>每格出現</span><span>轉出 1 個平均要</span></div>' +
  SYMS.map(([s,n,w,k,img]) => `<div class="orow ${s==='D'?'rare':''}">
    <span class="on"><img class="spr" src="img/u/${img}.png" alt="">${n}</span>
    <span class="ow"><i style="width:${w*4}%"></i><em>${w}%</em></span>
    <span class="ok"><i style="width:${Math.min(100, k/125*100)}%"></i><em>${Math.round(k)} 轉</em></span>
  </div>`).join('');

/* ---------- 4. 保底 ---------- */
const PITY = [[5,10],[6,15],[7,25],[8,40],[9,60],[10,100]];
$('pbars').innerHTML = PITY.map(([n,p]) => `<div class="pb"><div class="pcol"><i style="height:${p}%"></i></div><b>${p}%</b><span>${n===10?'10 次+':'連輸 '+n}</span></div>`).join('');

/* ---------- 5. 核心 ---------- */
let fM = 'all', fR = 'all';
function chips(el, opts, cur, set){
  el.innerHTML = opts.map(([v,t]) => `<button class="fchip ${v===cur?'on':''}" data-v="${v}">${t}</button>`).join('');
  el.onclick = e => { const b = e.target.closest('[data-v]'); if (b) { set(b.dataset.v); drawCores(); } };
}
function coreRow(c, hl){
  return `<div class="core ${hl?'hl':''}" id="core-${esc(c.key)}">
    <img class="cic" src="${esc(c.icon)}" alt="" loading="lazy" onerror="this.style.visibility='hidden'">
    <div class="ctx"><div class="chd"><b>${esc(c.name)}</b><span class="rz r-${c.r}">${RZ[c.r]}</span>${c.m ? `<span class="mz">${MZ[c.m]}</span>` : ''}</div>
    <div class="cds">${esc(c.desc)}</div></div></div>`;
}
let hlKey = null;
function drawCores(){
  chips($('cfM'), [['all','全部'],['','共用'],['nudge','微調專屬'],['blast','爆破專屬']], fM, v => fM = v);
  chips($('cfR'), [['all','全部'],['C','普通'],['U','罕見'],['R','稀有'],['L','傳說']], fR, v => fR = v);
  const list = CORES.filter(c => (fM === 'all' || c.m === fM) && (fR === 'all' || c.r === fR));
  $('clist').innerHTML = list.length ? list.map(c => coreRow(c, c.key === hlKey)).join('') : '<p class="empty">沒有符合的核心。</p>';
}
drawCores();
document.querySelectorAll('.mcores').forEach(el => {
  const m = el.dataset.m;
  el.innerHTML = '<span class="flabel">專屬核心：</span>' + CORES.filter(c => c.m === m)
    .map(c => `<button class="ctag" data-k="${esc(c.key)}" title="${esc(c.desc)}"><img src="${esc(c.icon)}" alt="">${esc(c.name)}</button>`).join('');
  el.onclick = e => { const b = e.target.closest('[data-k]'); if (b) showCore(b.dataset.k, m); };
});
function showCore(key, m){
  const c = CORES.find(x => x.key === key); if (!c) return;
  fM = m != null ? m : c.m; fR = 'all'; hlKey = key; drawCores();
  const el = document.getElementById('core-' + key);
  if (el) el.scrollIntoView({behavior:'smooth', block:'center'});
}

/* ---------- 搜尋（這頁的段落＋核心） ---------- */
const idx = [...document.querySelectorAll('.sec')].map(s => ({k:'sec', id:s.id, t:s.querySelector('h2').textContent.replace(/^\d/, ''), sub:'這頁的段落', hay:(s.dataset.t || '') + s.textContent}))
  .concat(CORES.map(c => ({k:'core', id:c.key, t:c.name, sub:`核心・${RZ[c.r]}${c.m ? '・' + MZ[c.m] : ''}`, hay:c.name + c.en + c.desc})));
const q = $('q'), qres = $('qres'); let act = 0, hits = [];
q.addEventListener('input', () => {
  const s = q.value.trim().toLowerCase();
  if (!s) { qres.classList.remove('on'); return; }
  const score = x => (x.t.toLowerCase().includes(s) ? 0 : 1) + (x.k === 'sec' ? 0 : .5);
  hits = idx.filter(x => x.hay.toLowerCase().includes(s)).sort((a,b) => score(a) - score(b)).slice(0, 20);
  act = 0;
  qres.innerHTML = hits.length ? hits.map((h,i) => `<div class="${i===0?'act':''}" data-i="${i}">${esc(h.t)}<small>${esc(h.sub)}</small></div>`).join('')
    : '<div>找不到。職業和羈絆在「升階與羈絆」頁搜。</div>';
  qres.classList.add('on');
});
function go(h){
  qres.classList.remove('on'); q.value = '';
  if (h.k === 'sec') { document.getElementById(h.id).scrollIntoView({behavior:'smooth', block:'start'}); return; }
  showCore(h.id);
}
qres.addEventListener('click', e => { const d = e.target.closest('[data-i]'); if (d) go(hits[+d.dataset.i]); });
q.addEventListener('keydown', e => {
  if (!qres.classList.contains('on') || !hits.length) return;
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { act = (act + (e.key === 'ArrowDown' ? 1 : hits.length - 1)) % hits.length; [...qres.children].forEach((n,i) => n.classList.toggle('act', i === act)); e.preventDefault(); }
  if (e.key === 'Enter') { go(hits[act]); e.preventDefault(); }
  if (e.key === 'Escape') qres.classList.remove('on');
});
document.addEventListener('click', e => { if (!e.target.closest('.search')) qres.classList.remove('on'); });
})();
