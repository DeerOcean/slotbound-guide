(function(){
'use strict';
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
const CORES = window.SB_CORES || [];
const OPEN = window.SB_OPEN || {locked: []};
const RZ = {C:'普通', U:'罕見', R:'稀有', L:'傳說'};
const MZ = {'':'共用', nudge:'微調專屬', blast:'爆破專屬'};
const LOCKED = new Set((OPEN.locked || []).map(String));

/* ---------- 1. 局外才有的核心 ---------- */
$('lockedList').innerHTML = CORES.filter(c => LOCKED.has(String(c.id))).map(c =>
  `<span class="ctag"><img src="${esc(c.icon)}" alt="" onerror="this.style.visibility='hidden'">${esc(c.name)}<small>${RZ[c.r]}</small></span>`).join('');

/* ---------- 3. 起手金幣試算 ---------- */
const PRICES = [100,150,200,250,300,350];
function plan(){
  let gold = +$('sg').value, inc = Math.max(0, +$('inc').value || 0);
  let rows = '<thead><tr><th>波</th><th>開波手上</th><th>轉幾次</th><th>花掉</th><th>剩下</th></tr></thead><tbody>';
  let total = 0;
  for (let w = 1; w <= 8; w++) {
    let n = 0, cost = 0;
    while (n < 6 && cost + PRICES[n] <= gold) { cost += PRICES[n]; n++; }
    const left = gold - cost; total += n;
    rows += `<tr><td>${w}</td><td class="n">${gold}</td><td class="n ${n >= 4 ? 'hi' : ''}">${n}</td><td class="n">${cost}</td><td class="n">${left}</td></tr>`;
    gold = left + inc;
  }
  $('plan').innerHTML = rows + '</tbody>';
  $('planOut').innerHTML = `8 波共轉 <b>${total}</b> 次。<span class="infer">推論</span>這是「每波能轉就轉」的算法，不代表最佳。`;
}
$('sg').addEventListener('change', plan);
$('inc').addEventListener('input', plan);
plan();

/* ---------- 5. 第一個核心 ---------- */
const TIER = {
  // 先拿
  TwistedBell: [1, '每波首轉沒中就免費再轉，等於每波省一轉'],
  GreedyTail: [1, '一波 3 轉是常態，第 3 轉沒中最多重轉 2 次'],
  // 可以
  RewindClock: [2, '沒中後下一轉少 25 金，小但穩'],
  NutrientLeaf: [2, '每波首次吸收後，下一轉費用減半；要看你怎麼吸收'],
  TwinCherries: [2, '首轉沒中時，最後一軸複製第一軸，補中的機會大'],
  Copycap: [2, '沒中時補上下相同的軸，補中的機會大'],
  LuckyNail: [2, '兩個相同就鎖住，其餘手動停；要會操作'],
  CoinSack: [2, '存錢型，剩餘轉動怎麼算沒確認'],
  ResonoscopeChain: [2, '微調專屬：先預告一軸推完會出什麼'],
  SpareBattery: [2, '微調專屬：微調沒成就還你一次'],
  HotChili: [2, '爆破專屬：可改炸一整橫排'],
  OracleHandMirror: [2, '爆破專屬：先看兩軸將進來的符號'],
  // 先放著
  DoubleLedger: [3, '中獎後符號消失補新的，前期召喚數沒差'],
  BanStamp: [3, '只擋一個符號一轉，效果太短'],
  X2: [3, '多付 200 換召喚翻倍，前期錢最緊，不划算'],
  MultiEchoMirror: [3, '要盤上 4 個以上相同符號才有精髓，很少遇到'],
  MercContract: [3, '要局外「出征補給」才帶'],
  OldCrown: [3, '符號機率只加 5%，感覺不到'],
  JokerSeed: [3, '每格 1.5% 出小丑，機率低'],
  TornNote: [3, '每 6 轉才一個小丑，前期轉不到'],
  BloodlineSeal: [3, '要先吸收單位，前期用不上'],
  EchoLantern: [3, '要重複中同一種符號才有用']
};
const TN = {1:'先拿', 2:'可以拿', 3:'先放著'};
const first = CORES.filter(c => !LOCKED.has(String(c.id))).map(c => ({c, t: TIER[c.key] || [3, '']}))
  .sort((a,b) => a.t[0] - b.t[0]);
function frow(x){
  const c = x.c;
  return `<div class="core t${x.t[0]}" id="fc-${esc(c.key)}">
    <img class="cic" src="${esc(c.icon)}" alt="" loading="lazy" onerror="this.style.visibility='hidden'">
    <div class="ctx"><div class="chd"><b>${esc(c.name)}</b><span class="rz r-${c.r}">${RZ[c.r]}</span>${c.m ? `<span class="mz">${MZ[c.m]}</span>` : ''}</div>
    <div class="cds">${esc(c.desc)}</div>
    <div class="why"><span class="infer">推論</span>${esc(x.t[1])}</div></div></div>`;
}
let ft = 0;
function drawFirst(){
  $('tierHd').innerHTML = [[0,'全部'],[1,'先拿'],[2,'可以拿'],[3,'先放著']].map(([v,t]) =>
    `<button class="fchip ${v === ft ? 'on' : ''}" data-v="${v}">${t}</button>`).join('');
  const list = first.filter(x => !ft || x.t[0] === ft);
  $('firstList').innerHTML = list.map(frow).join('');
}
$('tierHd').addEventListener('click', e => { const b = e.target.closest('[data-v]'); if (b) { ft = +b.dataset.v; drawFirst(); } });
drawFirst();

/* ---------- 搜尋（這頁的段落＋一開始就能抽到的核心） ---------- */
const idx = [...document.querySelectorAll('.sec')].map(s => ({k:'sec', id:s.id, t:s.querySelector('h2').textContent.replace(/^\d+/, ''), sub:'這頁的段落', hay:(s.dataset.t || '') + s.textContent}))
  .concat(first.map(x => ({k:'core', id:x.c.key, t:x.c.name, sub:`第一個核心・${TN[x.t[0]]}`, hay:x.c.name + (x.c.en || '') + x.c.desc})));
const q = $('q'), qres = $('qres'); let act = 0, hits = [];
q.addEventListener('input', () => {
  const s = q.value.trim().toLowerCase();
  if (!s) { qres.classList.remove('on'); return; }
  const score = x => (x.t.toLowerCase().includes(s) ? 0 : 1) + (x.k === 'sec' ? 0 : .5);
  hits = idx.filter(x => x.hay.toLowerCase().includes(s)).sort((a,b) => score(a) - score(b)).slice(0, 20);
  act = 0;
  qres.innerHTML = hits.length ? hits.map((h,i) => `<div class="${i===0?'act':''}" data-i="${i}">${esc(h.t)}<small>${esc(h.sub)}</small></div>`).join('')
    : '<div>找不到。其他核心在「轉盤」頁搜。</div>';
  qres.classList.add('on');
});
function go(h){
  qres.classList.remove('on'); q.value = '';
  if (h.k === 'sec') { document.getElementById(h.id).scrollIntoView({behavior:'smooth', block:'start'}); return; }
  ft = 0; drawFirst();
  const el = document.getElementById('fc-' + h.id);
  if (el) { el.scrollIntoView({behavior:'smooth', block:'center'}); el.classList.add('hl'); setTimeout(() => el.classList.remove('hl'), 2500); }
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
