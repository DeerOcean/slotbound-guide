(function(){
'use strict';
const $ = id => document.getElementById(id);
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
const D = window.SB_BOSS, ADV = window.SB_BOSS_ADVICE || {};
const EN = D.enemies, W = D.waves, E = D.endless;
const fmt = n => Math.round(n).toLocaleString('en-US');
const x2 = n => '×' + (Math.round(n * 100) / 100).toString();
const ICON = {'{hp.png}':'血量','{atk.png}':'攻擊','{spd.png}':'移速','{aspd.png}':'攻速','{dist.png}':'射程','{fire.png}':'灼燒'};
const clean = s => String(s || '').replace(/\{[\w .\/-]+\.png\}/g, m => ICON[m] || '').trim();
const STAGE = n => D.stages[n];
const RANGED = E.rangedReach || 80;

/* ---------- 先算出每個 Boss 出現在哪一關、第幾波 ---------- */
const BOSSES = [];
for (let s = 1; s <= 6; s++) {
  [10, 20, 30].forEach(w => {
    const v = W[`${s}-3-${w}`][0];
    const bk = v.comp.map(c => c.k).find(k => EN[k].boss);
    if (!bk || BOSSES.some(b => b.key === bk)) return;
    BOSSES.push({key: bk, stage: s, wave: w, diff: w / 10, comp: v.comp});
  });
}

/* ---------- 2. 六張地圖 ---------- */
function themeOf(s) {
  const seen = {};
  for (let w = 1; w <= 30; w++) W[`${s}-3-${w}`].forEach(v => v.comp.forEach(c => { seen[c.k] = (seen[c.k] || 0) + c.n * v.p; }));
  return Object.entries(seen).filter(([k]) => !EN[k].boss).sort((a, b) => b[1] - a[1]).map(([k]) => k);
}
const THEME = {}; for (let s = 1; s <= 6; s++) THEME[s] = themeOf(s);
const chip = (k, n) => `<span><img src="${esc(EN[k].img)}" alt="">${esc(EN[k].zh)}${n ? '×' + n : ''}</span>`;
$('mapGrid').innerHTML = [1,2,3,4,5,6].map(s => {
  const bl = BOSSES.filter(b => b.stage === s).map(b =>
    `<button data-b="${esc(b.key)}"><img src="${esc(EN[b.key].img)}" alt="">第 ${b.wave} 波　${esc(EN[b.key].zh)}<em>血 ${fmt(EN[b.key].hp)}${b.diff > 1 ? '・難度 ' + b.diff + ' 才有' : ''}</em></button>`).join('');
  const th = THEME[s].slice(0, 6).map(k => chip(k)).join('');
  return `<div class="mapc"><h3><span class="sn">${s}</span>${esc(STAGE(s))}</h3>
    <div class="bl">${bl}</div>
    <p class="th"><b>常見敵人</b>（第 1～30 波出現最多的）</p><div class="tcs">${th}</div></div>`;
}).join('');
$('mapGrid').onclick = e => { const b = e.target.closest('[data-b]'); if (b) showBoss(b.dataset.b); };

const skillRows = [1,2,3,4,5,6].map(s => {
  const rows = THEME[s].filter(k => EN[k].skill).map(k => `<tr><td>${esc(EN[k].zh)}</td><td class="n">${fmt(EN[k].hp)}</td><td>${EN[k].distance >= RANGED ? '遠' : '近'}</td><td>${esc(clean(EN[k].skill))}</td></tr>`).join('');
  return rows ? `<tr class="grp"><td colspan="4">${s}　${esc(STAGE(s))}</td></tr>${rows}` : '';
}).join('');
$('mapSpecial').innerHTML = `
  <li><b>第 4 關「${esc(STAGE(4))}」有沼澤水窪。</b>蜥蜴薩滿會在友軍聚集處製造水窪，蜥蜴軍閥每 8 秒汙染沼澤（站在裡面的友軍不能發動新技能），Boss 龍血薩滿還會把水窪煮沸灼燒。這些是從招式文字讀出來的，沒進遊戲看地形。</li>
  <li><b>第 6 關「${esc(STAGE(6))}」是上下兩條路。</b>每一波的敵人會分到兩路（程式裡的 <code>makeWaveLayout</code>），很多敵人的招式是跨路線的：宇宙法師會把上下路的我方單位互換位置，宇宙騎兵會跳到人數較多的另一路，新月掠奪者把遠程攻擊彈到另一路。雙星君主上下各一個，群星審判官看哪一路人多。</li>
  <li>其他四張圖沒有特別的地形規則，敵人的特殊招式列在下一個展開區。</li>`;
$('skBody').innerHTML = `<table class="mini sk"><thead><tr><th>敵人</th><th class="n">血量</th><th>射程</th><th>招式（遊戲原文）</th></tr></thead><tbody>${skillRows}</tbody></table>`;

/* ---------- 3. Boss 卡 ---------- */
let bFilter = 'all', hlKey = null;
function drawFilter() {
  const opts = [['all', '全部', BOSSES.length]].concat([1,2,3,4,5,6].map(s => [String(s), `${s} ${STAGE(s)}`, BOSSES.filter(b => b.stage === s).length]));
  $('bFilter').innerHTML = '<span class="flabel">關卡：</span>' + opts.map(([v, t, n]) => `<button class="fchip ${v === bFilter ? 'on' : ''}" data-v="${v}">${esc(t)}<span class="n">${n}</span></button>`).join('');
}
$('bFilter').onclick = e => { const b = e.target.closest('[data-v]'); if (b) { bFilter = b.dataset.v; hlKey = null; drawBosses(); } };
function card(b) {
  const e = EN[b.key], a = ADV[b.key] || {say: '', tips: []};
  const ranged = e.distance >= RANGED;
  const tips = a.tips.map(([t, why]) => `<li><b>${esc(t)}</b><span class="infer">推論</span><span class="why">依據：${esc(why)}</span></li>`).join('');
  const raw = [e.skill ? '招式：' + clean(e.skill) : '', e.trait ? '特性：' + clean(e.trait) : '', e.desc ? '圖鑑：' + clean(e.desc) : ''].filter(Boolean).join('\n');
  const dbl = b.key === 'Twin Star Lords' ? '（上下路各一名，各 ' + fmt(e.hp) + ' 血，共享一條 ' + fmt(e.hp * 2) + ' 血）' : '';
  return `<article class="bcard ${b.key === hlKey ? 'hl' : ''}" id="boss-${esc(b.key.replace(/\W+/g, '_'))}">
    <div class="bhd"><img src="${esc(e.img)}" alt=""><div class="bn"><b>${esc(e.zh)}</b><small>${esc(e.key)}</small></div>
      <span class="tag t">${esc(STAGE(b.stage))}</span><span class="tag w">第 ${b.wave} 波</span><span class="tag">難度 ${b.diff} 起</span></div>
    <div class="bstat"><div>血量<b>${fmt(e.hp)}</b></div><div>攻擊<b>${e.dmg}</b></div><div>移速<b>${e.speed}</b></div><div>射程<b>${e.distance}・${ranged ? '遠程' : '近戰'}</b></div></div>
    <p class="say">${esc(a.say)}${esc(dbl)}</p>
    ${tips ? `<h4>怎麼打</h4><ul class="tips">${tips}</ul>` : ''}
    <details><summary>遊戲怎麼寫（招式原文）</summary><p class="raw">${esc(raw)}\n攻擊間隔${e.atkPeriod} 秒${b.comp.filter(c => c.k !== b.key).length ? '\n同一波還有：' + b.comp.filter(c => c.k !== b.key).map(c => EN[c.k].zh + '×' + c.n).join('、') : ''}</p></details>
  </article>`;
}
function drawBosses() {
  drawFilter();
  const list = BOSSES.filter(b => bFilter === 'all' || String(b.stage) === bFilter);
  $('bList').innerHTML = list.map(card).join('');
}
drawBosses();
function showBoss(key) {
  const b = BOSSES.find(x => x.key === key); if (!b) return;
  bFilter = String(b.stage); hlKey = key; drawBosses();
  const el = document.getElementById('boss-' + key.replace(/\W+/g, '_'));
  if (el) el.scrollIntoView({behavior: 'smooth', block: 'start'});
}

/* ---------- 4. 波次曲線 ---------- */
let cS = 3, cD = 3, cW = 30;
const expHp = (s, d, w) => W[`${s}-${d}-${w}`].reduce((t, v) => t + v.hp * v.p, 0);
const expN = (s, d, w) => W[`${s}-${d}-${w}`].reduce((t, v) => t + v.count * v.p, 0);
function drawCurve() {
  $('cStage').innerHTML = '<span class="flabel">關卡：</span>' + [1,2,3,4,5,6].map(s => `<button class="fchip ${s === cS ? 'on' : ''}" data-s="${s}">${s} ${esc(STAGE(s))}</button>`).join('');
  $('cDiff').innerHTML = '<span class="flabel">難度：</span>' + [1,2,3].map(d => `<button class="fchip ${d === cD ? 'on' : ''}" data-d="${d}">${d}（${d * 10} 波）</button>`).join('');
  const n = cD * 10; if (cW > n) cW = n;
  const vals = []; for (let w = 1; w <= n; w++) vals.push(expHp(cS, cD, w));
  const mx = Math.max(...vals);
  $('cBars').innerHTML = vals.map((v, i) => {
    const w = i + 1, cls = w % 10 === 0 ? 'b' : (w % 5 === 0 ? 'j' : '');
    return `<button class="cb ${cls} ${w === cW ? 'on' : ''}" data-w="${w}" title="第 ${w} 波：總血量約 ${fmt(v)}" aria-label="第 ${w} 波，總血量約 ${fmt(v)}"><i style="height:${Math.max(1, v / mx * 100)}%"></i></button>`;
  }).join('');
  $('cNum').innerHTML = vals.map((_, i) => `<span>${(i + 1) % 5 === 0 ? i + 1 : ''}</span>`).join('');
  drawDetail(vals, mx);
}
function lanesText(v) {
  return v.lanes.map((g, i) => `<span class="vp">${i ? '另一路' : '一路'}：</span>${g.map(c => chip(c.k, c.n)).join('')}`).join('<br>');
}
function drawDetail(vals, mx) {
  const w = cW, vs = W[`${cS}-${cD}-${w}`];
  const kind = w % 10 === 0 ? 'Boss 波（5 的倍數，漏一隻就輸）' : w % 5 === 0 ? '審判波（5 的倍數，漏一隻就輸）' : '一般波';
  const rows = vs.map(v => `<div class="vrow">${vs.length > 1 ? `<span class="vp">出現機率約 ${Math.round(v.p * 100)}%　</span>` : ''}<span class="vp">${v.count} 隻・總血量 ${fmt(v.hp)}</span>
    <div class="chips">${v.lanes ? '' : v.comp.map(c => chip(c.k, c.n)).join('')}</div>${v.lanes ? `<div class="chips">${lanesText(v)}</div>` : ''}</div>`).join('');
  $('cDet').innerHTML = `<h3>第 ${w} 波・${kind}</h3><p class="note" style="margin:0 0 6px">${esc(STAGE(cS))}，難度 ${cD}。${vs.length > 1 ? `這一波有 ${vs.length} 種隨機組合，期望總血量約 ${fmt(vals[w - 1])}。` : `總血量 ${fmt(vals[w - 1])}。`}</p>${rows}`;
  const top = vals.reduce((m, v, i) => v > vals[m] ? i : m, 0);
  const last = vals.length;
  $('cNote').innerHTML = top + 1 === last
    ? `這個難度血量最高的就是最後一波（第 ${last} 波，約 ${fmt(vals[top])}）。`
    : `這個難度總血量最高的是第 ${top + 1} 波（約 ${fmt(vals[top])}），不是最後一波；最後一波（第 ${last} 波）約 ${fmt(vals[last - 1])}。這裡只比總血量，沒算招式。`;
}
$('cStage').onclick = e => { const b = e.target.closest('[data-s]'); if (b) { cS = +b.dataset.s; drawCurve(); } };
$('cDiff').onclick = e => { const b = e.target.closest('[data-d]'); if (b) { cD = +b.dataset.d; cW = cD * 10; drawCurve(); } };
$('cBars').onclick = e => { const b = e.target.closest('[data-w]'); if (b) { cW = +b.dataset.w; drawCurve(); } };
drawCurve();

/* ---------- 5. 無盡模式 ---------- */
const trTbl = E.tribes.map(t => `<div><b>${esc(t.zh)}</b><span>${esc(t.trait)}</span></div>`).join('');
const elTbl = E.elites.map(t => `<div><b>${esc(t.zh)}</b><span>${esc(t.desc)}</span></div>`).join('');
const famRows = E.eliteFamily.map((f, i) => `<tr><td>${i + 1}　${esc(STAGE(i + 1))}</td><td>${f.map(k => esc((E.elites.find(x => x.key === k) || {}).zh || k)).join('、')}</td></tr>`).join('');
const sc = E.scaleWaves.map((w, i) => [w, i]).filter(([w]) => w > E.loopFrom);
const scaleTbl = which => `<div class="tblwrap"><table class="mini"><thead><tr><th>戰場＼第幾波</th>${sc.map(([w]) => `<th class="n">${w}</th>`).join('')}</tr></thead><tbody>${
  [1,2,3,4,5,6].map(s => `<tr><td>${s} ${esc(STAGE(s))}</td>${sc.map(([, i]) => `<td class="n">${x2(E.scale[s][i][which])}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
const oc = n => Math.pow(1.06, n).toFixed(1);
const med = {bronze: '銅', silver: '銀', gold: '金', abyss: '深淵'};
$('endRules').innerHTML = `
  <h3>① 怎麼出波</h3>
  <p>第 1～${E.loopFrom} 波跟一般模式相同。第 ${E.loopFrom + 1} 波起：10 的倍數是 Boss 波，照第 40 波用第 10 波的 Boss、第 50 波用第 20 波的、第 60 波用第 30 波的，之後 70、80、90 再從第 10 波的 Boss 輪一次；結尾是 5 的波用第 ${E.judgementWave} 波的審判波；其他波從第 21～29 波（不含第 25 波）的內容裡排，每 10 波一組、排列順序由這局的種子固定。猝死規則照舊：5 的倍數波漏一隻就輸。</p>
  <h3>② 敵人怎麼變強</h3>
  <p class="adv">第 ${E.loopFrom + 1} 波起，敵人每一波血量乘 ${1 + E.hpGrowth}、攻擊乘 ${1 + E.dmgGrowth}（一直複利累積），再乘一個「戰場權重」：越前面的戰場權重越大。</p>
  <p>戰場權重是 ${E.weights.map(x => x2(x)).join('、')}（第 1 到第 6 戰場），從第 ${E.weightFrom} 波開始漸漸加上去，到第 ${E.weightFull} 波才完全套用。剛進無盡的前 10 波還有一點減免（最多 ${Math.round(E.ease * 100)}%）。<span class="infer">推論</span>前面戰場權重大，應該是因為前面的敵人本來比較弱，要補上去；遊戲沒寫原因。</p>
  <details><summary>倍率表（相對一般模式同一隻敵人，不含軍勢特性和菁英）</summary>
    <p class="note" style="margin:0 0 4px">血量倍率</p>${scaleTbl(0)}<p class="note" style="margin:0 0 4px">攻擊倍率</p>${scaleTbl(1)}
    <ul><li>這張表是我們用遊戲程式裡的公式（<code>endless.lua</code> 的 <code>enemyScale</code> 和 <code>weightAt</code>）算出來的，不是遊戲畫面上顯示的數字。<span class="infer">推論</span>10 的倍數且在第 30 波以內的權重一律是 1，所以第 30 波沒有加成。</li></ul>
  </details>
  <h3>③ 軍勢（第 ${E.depthFrom} 波起）</h3>
  <p>第 ${E.depthFrom} 波起，每 10 波是一段，每一段有兩支「軍勢」，各自幫敵人加一個特性。每過一段（第 ${E.doorFrom}、50、60 … 波打贏之後）會出現「軍勢選擇」：三扇門，每扇是一對軍勢加一種獎勵（核心三選一、金幣、精髓，或命運卡目標），選哪一扇就決定下一段打誰。從第 5 次選擇起，核心可以選 2 次。獎勵：金幣 ${E.doorGold[0]} + ${E.doorGold[1]}×次數，精髓 ${E.doorEssence[0]} + ${E.doorEssence[1]}×次數。</p>
  <div class="panel"><div class="tri">${trTbl}</div></div>
  <h3>④ 菁英和 Boss 特性</h3>
  <p class="adv">第 ${E.depthFrom} 波起，每一波都有帶「特性」的菁英；Boss 從第 40 波起也會多出特性，血量跟著變多。</p>
  <ul>
    <li>菁英數量：第 41～60 波 ${1} 隻、61～90 波 2 隻、91～130 波 3 隻、131 波以後 4 隻。</li>
    <li>每隻菁英身上的特性數：一開始 1 個，第 ${E.stackFrom.join('、')} 波起各多 1 個。</li>
    <li>菁英的特性種類每個戰場不同，一開始只開前 3 種，每 10 波多開 1 種，第 71 波起全開。</li>
    <li>Boss 多出的特性：第 40 波起 1 個、第 70 波起 2 個、第 100 波起 3 個；Boss 血量乘（1 + 0.25 × 特性數）。</li>
    <li><b>深淵守門人</b>：第 ${E.gatekeeperFrom} 波起，每 ${E.gatekeeperEvery} 波（100、150、200…）由該戰場最後一個 Boss（第 30 波那個）帶 3 個特性、血量再乘 ${E.gatekeeperHp}。</li>
  </ul>
  <details id="elDet"><summary>${E.elites.length} 種特性各是什麼、每個戰場抽哪幾種</summary>
    <div class="tri" style="margin:6px 0">${elTbl}</div>
    <div class="tblwrap"><table class="mini"><thead><tr><th>戰場</th><th>可能抽到的特性（排前面的先開）</th></tr></thead><tbody>${famRows}</tbody></table></div>
    <p class="note">Boss 的特性不會抽到：鏡像、小不點、巨人、精英、分裂。</p>
  </details>
  <h3>⑤ 激戰（拖太久會變難）</h3>
  <p class="adv">從第 31 波起，一波打超過 60 秒就進入「激戰」：之後每多 1 秒，雙方受到的傷害都再乘 1.06，回復量減半。拖久了只會越來越兇。</p>
  <p>換算：超過 60 秒後再過 10 秒傷害是 ${oc(10)} 倍，20 秒 ${oc(20)} 倍，30 秒 ${oc(30)} 倍。<span class="infer">推論</span>這會逼戰鬥在 1 分鐘內結束；打 Boss 這種要打很久的，要先看清楚自己的輸出夠不夠在 60 秒內收掉。</p>
  <h3>⑥ 獎牌</h3>
  <p>${E.medals.map(([id, w]) => `第 ${w} 波拿「${med[id] || id}」`).join('、')}。<span class="infer">推論</span>獎牌名稱是程式裡的 bronze、silver、gold、abyss 直譯，遊戲內顯示的字沒確認。</p>`;

/* ---------- 6. 沒確認 ---------- */
$('unsureList').innerHTML = [
  '所有數字都是從遊戲程式和遊戲內繁中文字讀出來，沒有進遊戲驗證過；「對策」全是我們從招式文字推的，沒有實測勝率。',
  '波表有隨機變體，每一波我們跑了 ' + D.samples + ' 次收集出現過的組合。頻率低於 4% 的變體 0 個，但極罕見（低於約 0.25%）的組合理論上可能漏掉。',
  '每一種敵人從出生走到基地要多久沒算（場地寬度沒查），所以不知道 Boss 會在第幾秒碰到基地。',
  '玩家能不能自己調兵的站位，這頁沒查；「站開、放前面、放最後面」這類建議，是假設兵的位置會因召喚順序和射程不同而有前後。',
  '升階後的單位射程是不是跟一階一樣，沒確認，所以「要有射程 160 以上的兵」只能當大方向。',
  '宇宙帝王的技能文字沒有寫冷卻，所以不知道多久壓制一次。',
  '激戰的傷害倍率我們只在「打我方」和「打敵人」兩條傷害公式都看到有乘（<code>battlefield.lua:31658</code>、<code>32406</code>），沒進遊戲確認雙方真的都吃到。',
  '無盡模式裡 Boss 的「BOSS_MEASURED」是什麼、拿來調整什麼，沒查出來，上面沒有列。',
  '獎牌在遊戲內的中文名稱沒確認。'
].map(t => `<li>${t}</li>`).join('');

/* ---------- 搜尋（段落＋Boss＋敵人＋無盡特性） ---------- */
const stripTags = s => String(s).replace(/<[^>]*>/g, ' ');
const idx = [...document.querySelectorAll('.sec')].map(s => ({k: 'sec', id: s.id, t: s.querySelector('h2').textContent.replace(/^\d/, ''), sub: '這頁的段落', hay: (s.dataset.t || '') + ' ' + (s.querySelector('h2').textContent)}))
  .concat(BOSSES.map(b => { const e = EN[b.key], a = ADV[b.key] || {say: '', tips: []};
    return {k: 'boss', id: b.key, t: e.zh, sub: `Boss・${STAGE(b.stage)}第 ${b.wave} 波`, hay: [e.zh, e.key, clean(e.skill), clean(e.trait), e.desc, a.say, a.tips.map(t => t.join(' ')).join(' ')].join(' ')}; }))
  .concat(Object.values(EN).filter(e => !e.boss).map(e => ({k: 'enemy', id: e.key, t: e.zh, sub: '敵人・' + (e.distance >= RANGED ? '遠程' : '近戰') + '，血 ' + fmt(e.hp), hay: e.zh + ' ' + e.key + ' ' + clean(e.skill)})))
  .concat(E.tribes.map(t => ({k: 'endless', id: 'endless', t: t.zh, sub: '無盡模式・軍勢', hay: t.zh + t.trait})))
  .concat(E.elites.map(t => ({k: 'elite', id: 'elDet', t: t.zh + '（特性）', sub: '無盡模式・菁英特性', hay: t.zh + t.desc})));
const q = $('q'), qres = $('qres'); let act = 0, hits = [];
q.addEventListener('input', () => {
  const s = q.value.trim().toLowerCase();
  if (!s) { qres.classList.remove('on'); return; }
  const rank = {sec: 0, boss: 1, enemy: 2, endless: 3, elite: 3};
  const score = x => (x.t.toLowerCase().includes(s) ? 0 : 10) + rank[x.k];
  hits = idx.filter(x => x.hay.toLowerCase().includes(s)).sort((a, b) => score(a) - score(b)).slice(0, 20);
  act = 0;
  qres.innerHTML = hits.length ? hits.map((h, i) => `<div class="${i === 0 ? 'act' : ''}" data-i="${i}">${esc(h.t)}<small>${esc(h.sub)}</small></div>`).join('')
    : '<div>找不到。兵種和羈絆在「養兵」「升階與羈絆」頁搜。</div>';
  qres.classList.add('on');
});
function go(h) {
  qres.classList.remove('on'); q.value = '';
  if (h.k === 'boss') { showBoss(h.id); return; }
  if (h.k === 'enemy') {
    const d = $('skDet'); if (EN[h.id].skill) d.open = true;
    (EN[h.id].skill ? d : document.getElementById('maps')).scrollIntoView({behavior: 'smooth', block: 'start'});
    return;
  }
  if (h.k === 'elite') { const d = $('elDet'); d.open = true; d.scrollIntoView({behavior: 'smooth', block: 'center'}); return; }
  document.getElementById(h.id).scrollIntoView({behavior: 'smooth', block: 'start'});
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
