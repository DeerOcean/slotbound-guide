(function(){
'use strict';
const $ = id => document.getElementById(id);
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
const D = window.SB_META;
const fmt = n => Math.round(n).toLocaleString('en-US');
const DIFF = ['', '簡單', '普通', '困難'];
const OR = D.originite;
const MAPS = OR.maps;
const U = {}; D.upgrades.forEach(n => U[n.key] = n);
const arrow = s => String(s || '').replace(/->/g, '→');

/* ---------- 1. 源石收益 ---------- */
$('mapSel').innerHTML = MAPS.map(m => `<option value="${m.n}">第 ${m.n} 張：${esc(m.name)}</option>`).join('');
$('mapSel').value = String(MAPS.length);
$('diffSel').innerHTML = [1,2,3].map(d => `<option value="${d}">${DIFF[d]}</option>`).join('');
$('diffSel').value = '3';
let maxRun = 0; MAPS.forEach(m => m.runs.forEach(r => { if (r.run > maxRun) maxRun = r.run; }));
$('incTbl').innerHTML = '<thead><tr><th>地圖（倍率）</th>' + [1,2,3].map(d => `<th class="n">${DIFF[d]}（${OR.diffMult[d-1]}倍，${MAPS[0].runs[d-1].waves} 波）</th>`).join('') + '</tr></thead><tbody>' +
  MAPS.map(m => `<tr><td>第 ${m.n} 張 ${esc(m.name)}<small class="mul">×${m.mult}</small></td>` +
    m.runs.map(r => `<td class="n ${r.run === maxRun ? 'hi' : ''}"><b>${fmt(r.run)}</b><small>首次 ${fmt(r.first)}</small></td>`).join('') + '</tr>').join('') + '</tbody>';
function farm(){
  const m = MAPS[+$('mapSel').value - 1], r = m.runs[+$('diffSel').value - 1];
  const goal = Math.max(0, Math.floor(+$('goal').value || 0));
  const runs = r.run ? Math.ceil(goal / r.run) : 0;
  $('farmOut').innerHTML = `每局重複刷拿 <b>${fmt(r.run)}</b>（約每波 ${r.perWave.toFixed(1)}），第一次打到拿 <b>${fmt(r.first)}</b>。` +
    (goal ? `想存 ${fmt(goal)} 源石，重複刷約 <b>${runs}</b> 局。` : '');
}
['mapSel','diffSel','goal'].forEach(id => $(id).addEventListener('input', farm)); farm();
let firstAll = 0; MAPS.forEach(m => m.runs.forEach(r => firstAll += r.first));
$('firstAll').textContent = fmt(firstAll);
$('costAll').textContent = fmt(D.upgrades.filter(n => !n.blocked).reduce((a, n) => a + n.cost, 0));

/* ---------- 2. 局外升級 ---------- */
function chainCost(keys){
  const seen = new Set(); keys.forEach(k => (U[k] ? U[k].chain : []).forEach(x => seen.add(x)));
  let s = 0; seen.forEach(k => s += U[k].cost); return s;
}
function hardest(n){
  if (!n.needs.length) return null;
  return n.needs.reduce((a, b) => (b[0] > a[0] || (b[0] === a[0] && b[1] > a[1])) ? b : a);
}
function needText(n){
  const h = hardest(n); if (!h) return '不用通關';
  return `通關第 ${h[0]} 張圖${DIFF[h[1]]}`;
}
const PH = [
  {t:'第一批：打過第一張圖簡單就能買', keys:['maxhp','startgold','noviceshield','startgold2','maxunit','maxunit2','slotadvanced','slotadvanced2','slotadvanced3','corereroll','unlock_core_31'],
   why:{maxhp:'多 1 點生命，最便宜。', startgold:'開局多 50 金，幾乎等於多半次轉盤。', startgold2:'再 +50 金，開局共 550。', noviceshield:'第一次掉血免扣。',
        maxunit:'多 1 個部署位，一個兵的價值比一點屬性高。', maxunit2:'再多 1 個部署位。', slotadvanced:'高階兵出現 5%，整局每個兵都吃到。',
        slotadvanced2:'高階 10%。', slotadvanced3:'高階 15%。', corereroll:'第一個核心可以免費重抽選項。', unlock_core_31:'每波第一次中獎後下一轉免費，直接省轉盤的錢。'}},
  {t:'第二批：通關第 2～3 張圖之後', keys:['slotrare','slotrare2','slotrare3','unlock_core_19','unlock_core_20','itemrefund','iteminventory','maxunit3','blastmachine','blastmastery'],
   why:{slotrare:'解鎖稀有兵（2%）。', slotrare2:'稀有 3%。', slotrare3:'稀有 4.5%。', unlock_core_19:'每波第一轉必有小丑，湊連線容易。', unlock_core_20:'符號出現 4 次以上多召喚 1 個。',
        itemrefund:'賣出道具返還 50% 變 80%。', iteminventory:'道具欄 +1。', maxunit3:'第 3 個部署位。', blastmachine:'想玩爆破老虎機才買。', blastmastery:'爆破轉動變便宜，跟上一個一起買。'}},
  {t:'第三批：命運石與高稀有度，有餘裕再買', keys:['fatestone','stoneconstellation','stonesanctum','stoneshop','questreroll','slotlegend','slotlegend2'],
   why:{fatestone:'命運石的入口。', stoneconstellation:'A 級卡可轉 3 個兵，也是通往聖域石的路。', stonesanctum:'A 級卡必出稀有以上。', stoneshop:'開局能花源石買卡，不用等任務。',
        questreroll:'抽到太難的任務可以重抽。', slotlegend:'解鎖傳說兵（0.1%）。', slotlegend2:'傳說 0.2%。'}}
];
$('phases').innerHTML = PH.map((p, i) => `<div class="phase panel"><h3>${esc(p.t)}<small>合計約 ${fmt(chainCost(p.keys))} 源石（含前置）</small></h3>` +
  p.keys.map(k => { const n = U[k]; return `<div class="prow"><a href="#u-${k}" data-u="${k}"><b>${esc(n.name)}</b></a><span class="pc">${n.cost}</span><span class="pw">${esc(p.why[k] || '')}</span></div>`; }).join('') + '</div>').join('');
$('firstCost').textContent = fmt(chainCost(PH[0].keys));
const phaseOf = {}; PH.forEach((p, i) => p.keys.forEach(k => phaseOf[k] = i + 1));

const CATN = {supply:'補給', units:'兵種', rarity:'稀有度', core:'核心', blast:'爆破', shop:'商店', stone:'命運石', slot:'轉盤', misc:'其他'};
let fCat = 'all', fNow = false;
$('upN').textContent = D.upgrades.length;
function drawUp(){
  const cats = ['all'].concat(Object.keys(CATN).filter(c => D.upgrades.some(n => n.cat === c)));
  $('ufCat').innerHTML = cats.map(c => {
    const cnt = c === 'all' ? D.upgrades.length : D.upgrades.filter(n => n.cat === c).length;
    return `<button class="fchip ${c === fCat ? 'on' : ''}" data-v="${c}">${c === 'all' ? '全部' : CATN[c]}<span class="n">${cnt}</span></button>`;
  }).join('');
  const list = D.upgrades.filter(n => (fCat === 'all' || n.cat === fCat) && (!fNow || (!n.needs.length && !n.blocked)));
  $('ulist').innerHTML = list.length ? list.map(n => {
    const tags = [];
    if (phaseOf[n.key]) tags.push(`<span class="tg ph" title="上面「升級先買什麼」建議的第幾批">建議第${['一','二','三'][phaseOf[n.key]-1]}批</span>`);
    if (n.blocked) tags.push('<span class="tg bad">買不到</span>');
    if (n.section) tags.push('<span class="tg gate" title="要先把同一區的幾個節點買齊才能買">區域門檻</span>');
    const eff = n.stat ? arrow(n.stat) : n.desc;
    const subs = [needText(n)];
    if (n.parent) subs.push('先買「' + esc(U[n.parent].name) + '」');
    if (n.section) subs.push(esc(n.section));
    return `<div class="urow" id="u-${esc(n.key)}"><div class="ut"><b>${esc(n.name)}</b>${tags.join('')}<div class="ue">${esc(eff)}</div><div class="us">${subs.join('　・　')}</div></div>` +
      `<div class="up"><b>${n.blocked ? '—' : n.cost}</b><small>${n.blocked ? '' : '累計 ' + n.cum}</small></div></div>`;
  }).join('') : '<p class="empty">沒有符合的升級。</p>';
}
$('ufCat').addEventListener('click', e => { const b = e.target.closest('[data-v]'); if (b) { fCat = b.dataset.v; drawUp(); } });
$('ufNow').addEventListener('change', e => { fNow = e.target.checked; drawUp(); });
drawUp();
function showUp(k){
  fCat = 'all'; fNow = false; $('ufNow').checked = false; drawUp();
  const det = $('ulist').closest('details'); det.open = true;
  const el = $('u-' + k); if (!el) return;
  el.classList.add('hl'); el.scrollIntoView({behavior:'smooth', block:'center'});
  setTimeout(() => el.classList.remove('hl'), 2500);
}
$('phases').addEventListener('click', e => { const a = e.target.closest('[data-u]'); if (a) { e.preventDefault(); showUp(a.dataset.u); } });

/* ---------- 3. 命運石 ---------- */
const PG = ['normal','advanced','rare','legendary','prism'];
const PGN = {normal:'普通', advanced:'高階', rare:'稀有', legendary:'傳說', prism:'稜彩'};
const sells = s => s.lines <= 1 && !s.pick && !s.rankTarget && !(s.special > 0) && s.grade !== 'S';
const rarePlus = s => s.probs.rare + s.probs.legendary + s.probs.prism;
const pct = x => (x * 100).toFixed(x * 100 % 1 === 0 ? 0 : (x < 0.01 ? 1 : 1)).replace(/\.0$/, '') + '%';
function bar(s){
  return '<div class="obar">' + PG.map(g => s.probs[g] > 0 ? `<i class="og-${g}" style="width:${s.probs[g] * 100}%" title="${PGN[g]} ${pct(s.probs[g])}"></i>` : '').join('') + '</div>';
}
const st = D.stones.slice();
$('stoneTbl').innerHTML = '<thead><tr><th>石頭</th><th>轉出的稀有度</th><th>稀有以上</th><th class="n">期待稀有以上</th><th>怎麼拿</th></tr></thead><tbody>' +
  st.map(s => {
    const exp = rarePlus(s) * s.lines;
    const get = [];
    if (s.unlock) get.push(`局外解鎖，累計 ${s.unlockCum} 源石`); else get.push('一開始就有');
    get.push(s.grade === 'S' ? '只在無盡模式' : sells(s) ? '貨架可買' : '只能靠任務');
    const note = s.lines > 1 ? `一次 ${s.lines} 個兵` : s.pick ? `${s.pick} 選 1` : s.rankTarget ? `直接升到階級 ${s.rankTarget}` : s.special ? '有特殊效果（沒確認）' : '';
    return `<tr id="s-${s.key}"><td><span class="gd g-${s.grade}">${s.grade}</span> <b>${esc(s.name)}</b>${note ? `<small class="mul">${esc(note)}</small>` : ''}</td>` +
      `<td>${bar(s)}</td><td class="n">${pct(rarePlus(s))}</td><td class="n ${exp >= .5 ? 'hi' : ''}">${exp.toFixed(2)}</td><td>${esc(get.join('；'))}</td></tr>`;
  }).join('') + '</tbody>';
$('stoneTbl').insertAdjacentHTML('afterend', '<p class="olegend">' + PG.map(g => `<span><i class="og-${g}"></i>${PGN[g]}</span>`).join('') + '</p>');
const byKey = {}; st.forEach(s => byKey[s.key] = s);
const omen3 = 1 - Math.pow(1 - rarePlus(byKey.OmenStone), 3);
$('stoneTip').innerHTML = `<div class="phase panel"><h3>每個等級怎麼選<small>依期待值估算，沒實測</small></h3>
  <div class="prow"><b>C 級</b><span class="pw">貨架買微風石（稀有以上 ${pct(rarePlus(byKey.BreezeStone))}，單抽裡最高）。任務拿到占卜石更好：3 個候選挑 1 個，至少有一個稀有以上的機率約 ${(omen3 * 100).toFixed(0)}%。</span></div>
  <div class="prow"><b>B 級</b><span class="pw">里程石（${pct(rarePlus(byKey.MileStone))}）最穩。裂隙石是賭傳說（${pct(byKey.RiftStone.probs.legendary + byKey.RiftStone.probs.prism)}），其餘都是普通。</span></div>
  <div class="prow"><b>A 級</b><span class="pw">聖域石一定是稀有以上，是這張表裡最穩的；勝負石只有 ${pct(rarePlus(byKey.GambitStone))} 稀有以上，其餘 85% 是高階。星群石一次 3 個兵，期待稀有以上 ${(rarePlus(byKey.ConstellationStone) * 3).toFixed(2)} 個。</span></div>
  </div>`;
$('standTbl').innerHTML = '<thead><tr><th>難度</th><th class="n">C 級</th><th class="n">B 級</th><th class="n">A 級</th></tr></thead><tbody>' +
  [['easy','簡單'],['normal','普通'],['hard','困難'],['endless','無盡']].map(([k, n]) => `<tr><td>${n}</td><td class="n">${D.standPrice[k].C}</td><td class="n">${D.standPrice[k].B}</td><td class="n">${D.standPrice[k].A}</td></tr>`).join('') + '</tbody>';

/* ---------- 4. 任務 ---------- */
$('qN').textContent = D.quests.length;
let fG = 'all';
const GN = {C:'C 級', B:'B 級', A:'A 級', S:'S 級'};
function drawQ(){
  $('qfG').innerHTML = ['all','C','B','A','S'].map(g => {
    const c = g === 'all' ? D.quests.length : D.quests.filter(q => q.grade === g).length;
    return `<button class="fchip ${g === fG ? 'on' : ''}" data-v="${g}">${g === 'all' ? '全部' : GN[g]}<span class="n">${c}</span></button>`;
  }).join('');
  $('qlist').innerHTML = D.quests.filter(q => fG === 'all' || q.grade === fG).map(q =>
    `<div class="qrow" id="q-${q.id}"><span class="gd g-${q.grade}">${q.grade}</span><b>${esc(q.name)}</b><span class="qd">${esc(q.desc)}${q.descBlast ? `<small>爆破老虎機：${esc(q.descBlast)}</small>` : ''}</span></div>`).join('');
}
$('qfG').addEventListener('click', e => { const b = e.target.closest('[data-v]'); if (b) { fG = b.dataset.v; drawQ(); } });
drawQ();

/* ---------- 搜尋 ---------- */
const idx = [...document.querySelectorAll('.sec')].map(s => ({k:'sec', id:s.id, t:s.querySelector('h2').textContent.replace(/^\d/, ''), sub:'這頁的段落', hay:(s.dataset.t || '') + s.textContent}))
  .concat(D.upgrades.map(n => ({k:'up', id:n.key, t:n.name, sub:'局外升級・' + CATN[n.cat] + '・' + n.cost + ' 源石', hay:n.name + (n.desc || '') + (n.stat || '')})))
  .concat(D.stones.map(s => ({k:'st', id:s.key, t:s.name, sub:'命運石・' + s.grade + ' 級', hay:s.name})))
  .concat(D.quests.map(q => ({k:'q', id:q.id, g:q.grade, t:q.name, sub:'命運石任務・' + q.grade + ' 級', hay:q.name + q.desc + q.descBlast})))
  .concat(MAPS.map(m => ({k:'sec', id:'farm', t:m.name, sub:'地圖・倍率 ' + m.mult, hay:m.name})));
const q = $('q'), qres = $('qres'); let act = 0, hits = [];
q.addEventListener('input', () => {
  const s = q.value.trim().toLowerCase();
  if (!s) { qres.classList.remove('on'); return; }
  const score = x => (x.t.toLowerCase().includes(s) ? 0 : 1) + (x.k === 'sec' ? 0 : .5);
  hits = idx.filter(x => x.hay.toLowerCase().includes(s)).sort((a, b) => score(a) - score(b)).slice(0, 20);
  act = 0;
  qres.innerHTML = hits.length ? hits.map((h, i) => `<div class="${i === 0 ? 'act' : ''}" data-i="${i}">${esc(h.t)}<small>${esc(h.sub)}</small></div>`).join('')
    : '<div>找不到。</div>';
  qres.classList.add('on');
});
function scrollTo(el){ el.scrollIntoView({behavior:'smooth', block:'center'}); el.classList.add('hl'); setTimeout(() => el.classList.remove('hl'), 2500); }
function go(h){
  qres.classList.remove('on'); q.value = '';
  if (h.k === 'sec') { document.getElementById(h.id).scrollIntoView({behavior:'smooth', block:'start'}); return; }
  if (h.k === 'up') { showUp(h.id); return; }
  if (h.k === 'st') { const el = $('s-' + h.id); if (el) scrollTo(el); return; }
  if (h.k === 'q') { fG = h.g; drawQ(); const el = $('q-' + h.id); if (el) scrollTo(el); }
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
