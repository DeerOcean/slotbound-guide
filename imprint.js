(function(){
'use strict';
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
const D = window.SB_IMPRINT || {imprints:[], jobs:[], sig:{}};
const MD = window.SB_IMPRINT_MODEL || {syms:{}, up:{}};
const IMP = {}; D.imprints.forEach(o => IMP[o.id] = o);
const SYMZ = {W:'戰士', A:'弓手', S:'槍兵', M:'法師', H:'騎兵', D:'決鬥者', Joker:'小丑', ENEMY:'敵方兵'};
const GZ = {normal:'普通', advanced:'高階', rare:'稀有', legendary:'傳說', prism:'稜彩', special:'小丑', any:'不分稀有度'};
const GRADES = ['normal','advanced','rare','legendary','prism'];
const SYMS = ['W','A','S','M','H','D'];
const INF = '<span class="infer">推論</span>';
const pct = (x, d) => { if (x == null) return '—'; const t = (Math.abs(x) * 100).toFixed(d || 0); return +t === 0 ? '±0%' : (x < 0 ? '−' : '+') + t + '%'; };
const p0 = x => (x * 100).toFixed(x < 0.1 ? 1 : 0) + '%';
// 刻印圖示：遊戲檔裡只解出 1 張（恐懼），其他 32 張沒有，為了一致先全部不放圖
const imgOf = () => '';
const nameOf = id => IMP[id] ? IMP[id].name : id;
const link = id => `<a href="#dex" class="ilink" data-imp="${esc(id)}">${esc(nameOf(id))}</a>`;
const st = (id, lv) => IMP[id].levels[Math.min(lv, IMP[id].levels.length) - 1].stats;

/* ---------- 觸發方式（對照遊戲程式查的；遊戲說明沒寫的也補上） ---------- */
const TRIG = {
  fortify:['always','常駐。跟其他減傷相乘，總減傷最多 70%。'],
  pierce:['basic','普攻。只有弓手、法師的投射物會一路穿過去；其他兵只多一小段（約 15 像素），幾乎打不到第二隻。'],
  brace:['basic','普攻。沒強化的那一下打完，會多等 0.25 秒，下一下才強化。攻速快的兵 1 級反而變弱。'],
  volley:['basic','每第 3 下普攻追打同一個目標一次。對每種兵加的比例都一樣。'],
  blind:['hit','攻擊時（技能也算）16% 機率，觸發後 2 秒冷卻。被致盲的敵人攻擊會落空。'],
  transfer:['hit','每次造成傷害都會觸發，把傷害的 30% 分給目標身邊很近的其他敵人。'],
  overdrive:['basic','自己擊敗敵人後，下一下普攻加成。'],
  relentless:['basic','連續攻擊疊攻速。約 0.5 秒沒有攻擊動作就歸零；攻速很慢的兵會不會一直歸零，沒確認。'],
  bash:['hit','攻擊時 18% 機率眩暈，觸發後 2 秒冷卻。'],
  knockback:['basic','只看普攻，18% 機率，觸發後 2 秒冷卻。'],
  poison:['hit','攻擊時 25% 機率。同一個目標只會有一層，再中只刷新時間。扣的是目標最大生命的 %，不看攻擊力；Boss 中毒時間減半。'],
  block:['struck','被攻擊時有機率整下擋掉。'],
  lifesteal:['hit','普攻造成的傷害全額算；技能、範圍、刻印造成的傷害只算三分之一。'],
  self_destruct:['death','死亡時對周圍每隻敵人造成自己最大生命 % 的傷害並眩暈。分身不會自爆。'],
  fear:['basic','只看普攻，冷卻 3 秒（5 級 2.4 秒）。'],
  chain:['hit','命中時 30% 機率才會連鎖（遊戲說明沒寫這個機率），每跳 40% 傷害，跳到最近的其他敵人。'],
  chill:['hit','每次命中都套上，持續 2 秒。Boss 只受一半效果。'],
  shrink:['basic','普攻時有機率。只有小丑（萬用符號的兵）吃掉會給。'],
  enlarge:['struck','被攻擊時 15% 機率；巨大化期間不會再觸發。'],
  execute:['basic','只看普攻。Boss 不能被處決。冷卻 1.5 秒（5 級 0.7 秒）。'],
  earthquake:['basic','只看普攻，12% 機率，冷卻 7 秒（5 級 6 秒）。打全場所有敵人並眩暈 0.8 秒（Boss 減半）。'],
  skyward_strike:['basic','只看普攻，12% 機率，冷卻 6 秒。Boss 不會被擊飛。落地時傷害周圍的敵人。'],
  meteor:['basic','只看普攻，10% 機率，冷卻 6 秒。自己最大生命不到 500 打 2 隻，500～999 打 3 隻，1000 以上打 4 隻，範圍也跟著變大。隕星本身不會再觸發其他刻印。'],
  shadow_clone:['present','分身複製本體的攻擊、生命（各打折）和攻速，還會複製本體其他刻印（影分身、自爆除外）。分身活 8 秒，倒下 2 秒後重新召喚。'],
  soul_split:['basic','只看普攻，冷卻 8 秒。打在靈魂上的傷害會等量傳給本體。'],
  revival:['death','死亡時復活一次。'],
  majesty:['present','帶的兵活著時才有效。全隊只算等級最高的一隻，好幾隻帶威儀不會疊。'],
  ruin:['present','自己在場時每秒打全場敵人。每隻帶破滅的兵各算各的，可以疊。每一下也可能觸發劇毒、寒意這類刻印'+INF+'。'],
  colossus_descent:['present','召喚一個巨神，生命是自己的 2～4 倍、攻擊 0.4～0.9 倍。'],
  overlord:['present','任何隊友擊敗敵人都算，帶的兵只要活著就好。'],
  undying_soul:['death','死後變成不滅之魂留在場上；變成魂之後，身上所有刻印都失效。'],
  timeless:['hit','攻擊時有機率時停。時停結束後才開始算 8 秒冷卻；全場同時只能有一個時停。'],
  amplify:['always','技能範圍變大。'],
};
const TZ = {basic:'只看普攻', hit:'攻擊或命中', struck:'挨打時', death:'死亡時', present:'在場就有', always:'常駐'};

/* ---------- 估算模型（跟 tools/extract/extract_imprint_model.py 同一套算法） ---------- */
const BRACE_DELAY = MD.braceDelay || 0.25;
function effLv(L){ return Math.max(0, Math.min(L, 30) - 1) + Math.max(0, L - 30) * 0.5; }
function lvFor(hp, target){ for (let L = 1; L <= 200; L++) if (hp * (1 + 0.015 * effLv(L)) >= target) return L; return null; }
function cyc(icd, ch, a){ return icd + 1 / Math.max(1e-9, ch * a); }
function metrics(u, lv, N){
  const a = u.aspd, atk = u.atk, hp = u.hp, P = 1 / a, m = {};
  const b = st('brace', lv).nextHitDamageMult;
  m.brace = (1 + b) * P / (2 * P + BRACE_DELAY) - 1;
  m.volley = st('volley', lv).extraHitFrac / st('volley', lv).every;
  const r = st('relentless', lv); m.relentless = r.aspdPerStack * r.maxStacks;
  const c = st('chain', lv); m.chain = c.chance * Math.min(c.bounces, Math.max(0, N - 1)) * c.bounceDamageFrac;
  const t = st('transfer', lv); m.transfer = t.spreadFrac * Math.min(t.spreadTargets, Math.max(0, N - 1));
  const p = st('pierce', lv); m.pierce = (u.sym === 'A' || u.sym === 'M') ? p.pierceDamageFrac * Math.min(p.maxPierceTargets, Math.max(0, N - 1)) : null;
  ['bash','blind','knockback','fear'].forEach(id => { const s = st(id, lv); m[id + '_pm'] = 60 / cyc(s.icd, s.chance, a); });
  const e = st('earthquake', lv); let cy = cyc(e.icd, e.chance, a); m.earthquake = e.damageMult * N / (a * cy); m.earthquake_pm = 60 / cy;
  const k = st('skyward_strike', lv); cy = cyc(k.icd, k.chance, a); m.skyward_strike = N > 1 ? k.damageMult * Math.min(N, 3) / (a * cy) : 0;
  const mt = st('meteor', lv); cy = cyc(mt.icd, mt.chance, a);
  const tgt = hp < 500 ? 2 : hp < 1000 ? 3 : 4; m.meteor = mt.damageMult * Math.min(N, tgt) / (a * cy); m.meteor_tgt = tgt;
  m.meteor_lv500 = lvFor(hp, 500);
  const po = st('poison', lv), perS = po.maxHPFrac / po.tickInterval;
  m.poison_up_b = 1 - Math.pow(1 - po.chance, a * po.duration * 0.5);
  m.poison_up_n = 1 - Math.pow(1 - po.chance, a * po.duration);
  m.poison_boss = m.poison_up_b * perS; m.poison_norm = m.poison_up_n * perS;
  m.lifesteal = atk * a * st('lifesteal', lv).stealFrac / hp;
  m.block = 1 / (1 - st('block', lv).blockProb) - 1;
  m.self_destruct = hp * st('self_destruct', lv).hpDamageFrac / atk;
  const co = st('colossus_descent', lv); m.colossus_hp = hp * co.hpFrac;
  const sc = st('shadow_clone', lv); m.shadow_clone = sc.atkFrac * sc.dur / (sc.dur + sc.respawn);
  m.ruin = st('ruin', lv).dotRatio * N / a;
  const ti = st('timeless', lv); m.timeless = ti.duration / (ti.duration + ti.icd + 1 / (ti.chance * a));
  m.chill = st('chill', lv).slowFrac;
  return m;
}
const SM = MD.syms || {};
const med = s => Object.assign({}, SM[s].med, {sym: s});
const g = (s, lv, k, N) => SM[s].m[N || 3][lv][k];

/* ---------- 1. 招牌刻印反查 ---------- */
function drawSig(){
  const head = '<div class="sig-r sig-h"><span></span>' + GRADES.map(gr => `<span class="g-${gr}">${GZ[gr]}</span>`).join('') + '</div>';
  const rows = SYMS.map(s => `<div class="sig-r"><b class="sig-s">${SYMZ[s]}</b>` + GRADES.map(gr => {
      const id = (D.sig[s] || {})[gr];
      return id ? `<button class="sig-c g-${gr}" data-imp="${esc(id)}">${imgOf(id)}<span class="sig-n">${esc(nameOf(id))}</span><small>${GZ[gr]}${SYMZ[s]}</small></button>` : '<span></span>';
    }).join('') + '</div>').join('');
  const extra = `<div class="sig-x"><span class="flabel">另外：</span>` +
    `<button class="sig-c" data-imp="shrink">${imgOf('shrink')}<span class="sig-n">縮小</span><small>小丑</small></button>` +
    `<button class="sig-c" data-imp="overlord">${imgOf('overlord')}<span class="sig-n">霸主</span><small>敵方兵（沒確認怎麼拿）</small></button>` +
    `<button class="sig-c off" data-imp="fortify">${imgOf('fortify')}<span class="sig-n">堅固</span><small>沒有兵會給</small></button>` +
    `<button class="sig-c off" data-imp="amplify">${imgOf('amplify')}<span class="sig-n">增幅（技能）</span><small>沒有兵會給</small></button></div>`;
  $('sigGrid').innerHTML = head + rows + extra;
}
drawSig();

/* ---------- 2. 每種兵配什麼 ---------- */
function braceAt(aspd, lv){ const b = st('brace', lv).nextHitDamageMult, P = 1 / aspd; return (1 + b) * P / (2 * P + BRACE_DELAY) - 1; }
function upN(aspd){ return 1 - Math.pow(0.75, aspd * 2); }
const PICKS = {
  W: s => ({
    role: '前排近戰。攻速最快、攻擊最低。',
    good: [
      ['volley', `每 3 下多打一次，平均每下 ${pct(g(s,1,'volley'))}（5 級 ${pct(g(s,5,'volley'))}），攻速快慢都一樣。普通弓手就給，最好疊。`],
      ['transfer', `近戰站在敵人堆裡，傷害分給旁邊的敵人：附近 3 隻時 1 級 ${pct(g(s,1,'transfer'))}、5 級 ${pct(g(s,5,'transfer'))}。普通法師就給。${INF}`],
      ['block', `前排最常挨打。1 級等於血量多 ${p0(g(s,1,'block'))}，5 級多 ${p0(g(s,5,'block'))}。高階騎兵給。`],
      ['poison', `攻速 ${med(s).aspd} 全兵種最快，打小兵時 1 級就有 ${p0(upN(med(s).aspd))} 的時間讓目標在毒。高階法師給。`],
      ['self_destruct', `血量 ${med(s).hp}，爆一次＝周圍每隻敵人吃約 ${g(s,1,'self_destruct').toFixed(1)} 下普攻（5 級 ${g(s,5,'self_destruct').toFixed(1)} 下）。稀有戰士給。`],
    ],
    bad: [
      ['brace', `這是戰士自己給的刻印，但放在戰士身上，1 級反而 ${pct(g(s,1,'brace'))}（最快的幻影攻速 2.6 是 ${pct(braceAt(2.6,1))}），5 級也只有 ${pct(g(s,5,'brace'))}，不如齊射。普通戰士拿去餵攻速慢的兵。`],
      ['pierce', '近戰只多穿一小段，幾乎打不到第二隻。'],
      ['meteor', `血量 ${med(s).hp} 要吸收到約 ${g(s,1,'meteor_lv500')} 級才到 500，大部分時間隕星只打 2 隻。${INF}`],
    ],
  }),
  A: s => ({
    role: '後排遠程。血最少、射程最遠。',
    good: [
      ['pierce', `投射物會一路穿過去：排成一列 3 隻時 1 級 ${pct(g(s,1,'pierce'))}、5 級 ${pct(g(s,5,'pierce'))}。普通槍兵就給，好疊。`],
      ['volley', `平均每下 ${pct(g(s,1,'volley'))}（5 級 ${pct(g(s,5,'volley'))}）。`],
      ['brace', `中位攻速 ${med(s).aspd}，1 級約持平、5 級 ${pct(g(s,5,'brace'))}；最慢的爆破隊長（0.45）1 級 ${pct(braceAt(0.45,1))}、5 級 ${pct(braceAt(0.45,5))}。普通戰士就給。`],
      ['transfer', `附近 3 隻時 1 級 ${pct(g(s,1,'transfer'))}、5 級 ${pct(g(s,5,'transfer'))}。`],
    ],
    bad: [
      ['block', `格擋、巨大化、自爆、復甦都要挨打或死掉才有用，後排很少用到。自爆以血量 ${med(s).hp} 算，只等於每隻敵人吃約 ${g(s,1,'self_destruct').toFixed(1)} 下普攻。${INF}`],
      ['meteor', `血量 ${med(s).hp}，靠吸收到不了 500，隕星一直是最小的（打 2 隻）。${INF}`],
      ['lifesteal', `數字上回血比例最高（5 級每秒回 ${p0(g(s,5,'lifesteal'))} 生命，因為血少），但後排很少掉血。${INF}`],
    ],
  }),
  S: s => ({
    role: '近戰。射程 55～90，比戰士長一點。',
    good: [
      ['volley', `平均每下 ${pct(g(s,1,'volley'))}（5 級 ${pct(g(s,5,'volley'))}）。普通弓手就給。`],
      ['transfer', `近戰身邊常有敵人：附近 3 隻時 1 級 ${pct(g(s,1,'transfer'))}、5 級 ${pct(g(s,5,'transfer'))}。${INF}`],
      ['block', `站前排，1 級等於血量多 ${p0(g(s,1,'block'))}、5 級多 ${p0(g(s,5,'block'))}。`],
      ['lifesteal', `前排會掉血。5 級每秒回自己最大生命的 ${p0(g(s,5,'lifesteal'))}。高階決鬥者給。`],
    ],
    bad: [
      ['pierce', '這是槍兵自己給的刻印，但槍兵是近戰，投射物穿透只寫給弓手和法師。普通槍兵拿去餵弓手、法師。'],
      ['brace', `攻速 ${med(s).aspd} 偏快，1 級 ${pct(g(s,1,'brace'))}。`],
    ],
  }),
  M: s => ({
    role: '多數是後排遠程（原始法師例外，射程 50）。',
    good: [
      ['transfer', `法師自己給的刻印，普通法師最好疊。附近 3 隻時 1 級 ${pct(g(s,1,'transfer'))}、5 級 ${pct(g(s,5,'transfer'))}。`],
      ['pierce', `法師的投射物也會穿：排成一列 3 隻時 1 級 ${pct(g(s,1,'pierce'))}、5 級 ${pct(g(s,5,'pierce'))}。`],
      ['volley', `平均每下 ${pct(g(s,1,'volley'))}（5 級 ${pct(g(s,5,'volley'))}）。`],
      ['poison', `法師的高階刻印。打 Boss 時 5 級每秒約扣 Boss 最大生命的 ${p0(g(s,5,'poison_boss',1))}，不看攻擊力。Boss 有沒有另外減免沒確認。`],
    ],
    bad: [
      ['block', '格擋、巨大化、自爆要挨打或死掉才有用，後排很少用到。' + INF],
      ['meteor', `血量 ${med(s).hp} 要吸收到約 ${g(s,1,'meteor_lv500')} 級才到 500，等於一直只打 2 隻。`],
    ],
  }),
  H: s => ({
    role: '前排近戰。移動最快，血量和戰士一樣厚。',
    good: [
      ['block', `騎兵自己的高階刻印。1 級等於血量多 ${p0(g(s,1,'block'))}、5 級多 ${p0(g(s,5,'block'))}。`],
      ['enlarge', '騎兵自己的稀有刻印。挨打 15% 機率變大 3 秒，攻擊 +25%、生命 +30%；前排才觸發得到。'],
      ['revival', '騎兵自己的傳說刻印。死掉復活一次，回 40% 生命（5 級 80%）；前排最容易用到。'],
      ['volley', `平均每下 ${pct(g(s,1,'volley'))}（5 級 ${pct(g(s,5,'volley'))}）。`],
      ['transfer', `附近 3 隻時 1 級 ${pct(g(s,1,'transfer'))}、5 級 ${pct(g(s,5,'transfer'))}。`],
    ],
    bad: [
      ['pierce', '近戰只多穿一小段。'],
      ['meteor', `血量 ${med(s).hp} 要吸收到約 ${g(s,1,'meteor_lv500')} 級才到 500。${INF}`],
    ],
    note: '超載是騎兵自己給的普通刻印，要自己擊敗敵人才觸發；多久擊敗一次估不出來，沒算。',
  }),
  D: s => {
    const u = Object.assign(med(s), {hp: Math.max(500, med(s).hp)});
    return {
      role: '近戰。血量和攻擊都最高。',
      good: [
        ['meteor', `血量 ${med(s).hp} 最高，吸收約 ${g(s,1,'meteor_lv500')} 級就到 500，隕星變大打 3 隻：附近 3 隻時 1 級約 ${pct(metrics(u,1,3).meteor)}、5 級 ${pct(metrics(u,5,3).meteor)}。`],
        ['volley', `比例跟別人一樣（${pct(g(s,1,'volley'))}，5 級 ${pct(g(s,5,'volley'))}），但攻擊 ${med(s).atk} 最高，加到的實際傷害最多。`],
        ['self_destruct', `爆一次＝周圍每隻敵人吃約 ${g(s,1,'self_destruct').toFixed(1)} 下普攻（5 級 ${g(s,5,'self_destruct').toFixed(1)} 下）。稀有戰士給。`],
        ['lifesteal', `決鬥者自己的高階刻印。前排會掉血，5 級每秒回 ${p0(g(s,5,'lifesteal'))} 生命。`],
        ['colossus_descent', `拿到的話：巨神生命是自己的 2～4 倍，${med(s).hp} 血就是 ${Math.round(g(s,1,'colossus_hp'))}～${Math.round(g(s,5,'colossus_hp'))}。`],
      ],
      bad: [
        ['pierce', '近戰只多穿一小段。'],
        ['brace', `1 級 ${pct(g(s,1,'brace'))}，等於沒差；要疊到 5 級（${pct(g(s,5,'brace'))}）才有用。`],
      ],
    };
  },
  Joker: s => ({
    role: '遠程（射程約 145），只有一種稀有度、3 格。',
    good: [
      ['volley', `平均每下 ${pct(g(s,1,'volley'))}（5 級 ${pct(g(s,5,'volley'))}）。`],
      ['brace', `攻速 ${med(s).aspd} 偏慢，1 級約持平、5 級 ${pct(g(s,5,'brace'))}。`],
      ['transfer', `附近 3 隻時 1 級 ${pct(g(s,1,'transfer'))}、5 級 ${pct(g(s,5,'transfer'))}。`],
    ],
    bad: [
      ['pierce', '小丑不是弓手或法師，投射物不會一路穿過去，只多一小段（沒實測）。'],
      ['self_destruct', '自爆、格擋要死掉或挨打才有用，站後面很少用到。' + INF],
      ['meteor', `血量 ${med(s).hp} 要吸收約 ${g(s,1,'meteor_lv500')} 級才到 500。`],
    ],
  }),
};
function drawPicks(){
  $('picks').innerHTML = ['W','A','S','M','H','D','Joker'].map(s => {
    if (!SM[s]) return '';
    const P = PICKS[s](s), m = SM[s].med, rg = SM[s].range;
    const li = (arr, cls) => arr.map(([id, why]) => `<li class="${cls}">${imgOf(id)}<div><b>${link(id)}</b><span>${why}</span></div></li>`).join('');
    return `<div class="panel pick" id="pick-${s}">
      <h3>${SYMZ[s]}<small>${P.role}</small></h3>
      <p class="pk-stat">攻速 <b>${m.aspd}</b>（${rg.aspd[0]}～${rg.aspd[1]}）・血量 <b>${m.hp}</b>・攻擊 <b>${m.atk}</b>・射程 <b>${m.distance}</b></p>
      <p class="pk-h">最配</p><ul class="pk">${li(P.good,'ok')}</ul>
      <p class="pk-h bad">不划算</p><ul class="pk">${li(P.bad,'no')}</ul>
      ${P.note ? `<p class="note">${P.note}</p>` : ''}
    </div>`;
  }).join('');
}
drawPicks();
(function symTable(){
  const rows = [['齊射', 'volley'], ['蓄勢', 'brace'], ['擴散', 'transfer'], ['穿刺', 'pierce'], ['連鎖', 'chain'], ['地震', 'earthquake'], ['隕星', 'meteor'], ['破滅', 'ruin'], ['吸血（每秒回生命）', 'lifesteal'], ['格擋（等於多幾 % 血）', 'block']];
  const ss = ['W','A','S','M','H','D','Joker'].filter(s => SM[s]);
  let h = '<thead><tr><th>附近 3 隻，1 級／5 級</th>' + ss.map(s => `<th>${SYMZ[s]}</th>`).join('') + '</tr></thead><tbody>';
  rows.forEach(([n, k]) => {
    h += `<tr><td>${n}</td>` + ss.map(s => { const a = g(s,1,k), b = g(s,5,k);
      return `<td>${a == null ? '—' : (k === 'lifesteal' ? p0(a) + '／' + p0(b) : pct(a) + '／' + pct(b))}</td>`; }).join('') + '</tr>';
  });
  $('symTbl').innerHTML = h + '</tbody>';
})();

/* ---------- 3. 查一個職業 ---------- */
const JOBS = (D.jobs || []).filter(j => j.hp && j.atk && j.aspd);
let jSym = 'W', jKey = null, jN = 3, jLv = 1;
function chips(el, opts, cur, set){
  el.innerHTML = opts.map(([v,t]) => `<button class="fchip ${String(v)===String(cur)?'on':''}" data-v="${v}">${t}</button>`).join('');
  el.onclick = e => { const b = e.target.closest('[data-v]'); if (b) set(b.dataset.v); };
}
function jobOpts(){
  const list = JOBS.filter(j => j.sym === jSym).sort((a,b) => a.rank - b.rank || a.aspd - b.aspd);
  if (!list.find(j => j.key === jKey)) {
    // 預設挑 3 階裡攻速最接近中位數的職業，比較有代表性
    const r3 = list.filter(j => j.rank === 3), mid = SM[jSym] ? SM[jSym].med.aspd : 1.2;
    jKey = (r3.sort((a,b) => Math.abs(a.aspd - mid) - Math.abs(b.aspd - mid))[0] || list[0] || {}).key;
  }
  $('jtJob').innerHTML = list.map(j => `<option value="${esc(j.key)}" ${j.key===jKey?'selected':''}>${esc(j.name)}（${j.rank} 階・攻速 ${j.aspd}）</option>`).join('');
}
function drawJob(){
  chips($('jtSym'), ['W','A','S','M','H','D','Joker'].map(s => [s, SYMZ[s]]), jSym, v => { jSym = v; jKey = null; jobOpts(); drawJob(); });
  chips($('jtN'), [[1,'單挑 Boss'],[3,'3 隻'],[5,'5 隻']], jN, v => { jN = +v; drawJob(); });
  chips($('jtLv'), [1,2,3,4,5].map(n => [n, n + ' 級']), jLv, v => { jLv = +v; drawJob(); });
  const j = JOBS.find(x => x.key === jKey); if (!j) { $('jtOut').innerHTML = '<p class="empty">這個兵種沒有職業資料。</p>'; return; }
  const dist = j.distance || (D.base[j.sym] || {}).distance || 50;
  const u = {hp: j.hp, atk: j.atk, aspd: j.aspd, sym: j.sym}, m = metrics(u, jLv, jN);
  const front = dist < 100;
  $('jtStat').innerHTML = `攻速 <b>${j.aspd}</b>・血量 <b>${j.hp}</b>・攻擊 <b>${j.atk}</b>・射程 <b>${dist}</b>（${front ? '近戰，站前排' : '遠程，站後排'}）`;
  const off = [
    ['volley', m.volley, ''],
    ['brace', m.brace, m.brace < 0 ? '攻速太快，反而變慢' : ''],
    ['relentless', m.relentless, '算的是疊滿時的攻速；會不會中斷沒確認'],
    ['transfer', m.transfer, jN === 1 ? '單挑時旁邊沒人可分' : ''],
    ['chain', m.chain, jN === 1 ? '單挑時沒人可跳' : ''],
    ['pierce', m.pierce, m.pierce == null ? '不是弓手或法師，投射物不會穿' : (jN === 1 ? '單挑時穿不到第二隻' : '要敵人排成一列')],
    ['earthquake', m.earthquake, '打全場'],
    ['meteor', m.meteor, `最多打 ${m.meteor_tgt} 隻` + (m.meteor_tgt < 3 ? (m.meteor_lv500 ? `；吸收約 ${m.meteor_lv500} 級後打 3 隻` : '；靠吸收到不了 500 血') : '')],
    ['skyward_strike', m.skyward_strike, jN === 1 ? 'Boss 不會被擊飛' : '假設落地砸到 3 隻' ],
    ['ruin', m.ruin, '打全場；可以多隻疊'],
    ['shadow_clone', m.shadow_clone, '分身還會複製其他刻印，沒算進去'],
  ].sort((a,b) => (b[1] == null ? -9 : b[1]) - (a[1] == null ? -9 : a[1]));
  const maxv = Math.max(0.01, ...off.map(o => o[1] || 0));
  const bar = ([id, v, note]) => `<div class="jb ${v == null || v <= 0 ? 'zero' : ''}">${imgOf(id)}<span class="jb-n">${link(id)}</span>
      <span class="jb-bar"><i style="width:${v > 0 ? Math.max(2, v / maxv * 100) : 0}%"></i></span><b>${v == null ? '—' : pct(v)}</b>${note ? `<small>${note}</small>` : ''}</div>`;
  const ctl = [
    ['bash', `每分鐘約 ${m.bash_pm.toFixed(1)} 次眩暈`],
    ['blind', `每分鐘約 ${m.blind_pm.toFixed(1)} 次致盲`],
    ['fear', `每分鐘約 ${m.fear_pm.toFixed(1)} 次恐懼`],
    ['knockback', `每分鐘約 ${m.knockback_pm.toFixed(1)} 次擊退`],
    ['chill', `每下都套，目標攻速和移速 −${p0(m.chill)}（Boss 減半）`],
    ['timeless', `約 ${p0(m.timeless)} 的時間全場停住`],
    ['poison', jN === 1 ? `每秒約扣 Boss 最大生命 ${p0(m.poison_boss)}（不看攻擊力）` : `每秒約扣目標最大生命 ${p0(m.poison_norm)}`],
  ];
  const sur = [
    ['block', `等於血量多 ${p0(m.block)}` + (front ? '' : '；後排很少挨打')],
    ['lifesteal', `每秒回自己生命 ${p0(m.lifesteal)}` + (front ? '' : '；後排很少掉血')],
    ['self_destruct', `死時周圍每隻敵人吃約 ${m.self_destruct.toFixed(1)} 下普攻`],
    ['colossus_descent', `巨神生命約 ${Math.round(m.colossus_hp)}`],
  ];
  const kv = arr => arr.map(([id, t]) => `<div class="jk">${imgOf(id)}<span class="jb-n">${link(id)}</span><span>${t}</span></div>`).join('');
  $('jtOut').innerHTML = `<h4>輸出：每秒多打出自己普攻的幾 %</h4>${off.map(bar).join('')}
    <h4>控場和打 Boss</h4>${kv(ctl)}
    <h4>生存</h4>${kv(sur)}`;
}
$('jtJob').addEventListener('change', e => { jKey = e.target.value; drawJob(); });
jobOpts(); drawJob();
function showJob(key){
  const j = JOBS.find(x => x.key === key); if (!j) return;
  jSym = j.sym; jKey = key; jobOpts(); drawJob();
  $('job').scrollIntoView({behavior:'smooth', block:'start'});
}

/* ---------- 4. 升滿值不值 ---------- */
const UNIT = {blind:'sec', bash:'sec', soul_split:'sec', chain:'n', overlord:'n', knockback:'n', fear:'raw', enlarge:'raw'};
const fmtU = (id, v) => { const u = UNIT[id]; return u === 'sec' ? v + ' 秒' : u === 'n' ? String(v) : u === 'raw' ? String(v) : (v * 100).toFixed(v < 0.1 ? 1 : 0) + '%'; };
const BZ = {big:'有感（3 倍以上）', mid:'中等（2～3 倍）', small:'小（不到 2 倍）'};
let upF = 'all';
function fromTxt(id){
  const o = IMP[id]; if (!o || !o.from.length) return '沒有兵會給';
  return o.from.map(f => f.sym === 'Joker' ? '小丑' : f.sym === 'ENEMY' ? '敵方兵' : GZ[f.grade] + SYMZ[f.sym]).join('、');
}
function drawUp(){
  chips($('upF'), [['all','全部'],['big','有感'],['mid','中等'],['small','小']], upF, v => { upF = v; drawUp(); });
  const ids = Object.keys(MD.up || {}).filter(id => upF === 'all' || MD.up[id].band === upF).sort((a,b) => MD.up[b].ratio - MD.up[a].ratio);
  $('upTbl').innerHTML = '<thead><tr><th>刻印</th><th>看哪個數字</th><th>1 級→5 級</th><th>倍率</th><th>從哪拿</th></tr></thead><tbody>' +
    ids.map(id => { const u = MD.up[id];
      return `<tr><td class="up-n">${imgOf(id)}${link(id)}</td><td>${esc(u.what)}</td><td>${fmtU(id,u.v1)} → ${fmtU(id,u.v5)}</td><td><span class="band b-${u.band}">${u.ratio} 倍</span></td><td>${fromTxt(id)}</td></tr>`; }).join('') + '</tbody>';
}
drawUp();

/* ---------- 5. 刻印圖鑑 ---------- */
let dxR = 'all', dxT = 'all', hlImp = null;
function gradeOf(o){ if (!o.from.length) return 'none'; const f = o.from[0]; return f.sym === 'Joker' ? 'special' : f.sym === 'ENEMY' ? 'prism' : f.grade; }
function drawDex(){
  chips($('dxR'), [['all','全部'],...GRADES.map(gr => [gr, GZ[gr]]),['special','小丑'],['none','拿不到']], dxR, v => { dxR = v; hlImp = null; drawDex(); });
  chips($('dxT'), [['all','全部'],...Object.entries(TZ)], dxT, v => { dxT = v; hlImp = null; drawDex(); });
  const list = D.imprints.filter(o => (dxR === 'all' || gradeOf(o) === dxR || o.from.some(f => f.grade === dxR)) && (dxT === 'all' || (TRIG[o.id] || [])[0] === dxT));
  $('dexList').innerHTML = list.length ? list.map(o => {
    const tr = TRIG[o.id] || ['', ''];
    return `<div class="dx ${o.id === hlImp ? 'hl' : ''}" id="imp-${esc(o.id)}">
      <div class="dx-h">${imgOf(o.id)}<b>${esc(o.name)}</b><span class="rz">${TZ[tr[0]] || ''}</span><small>${o.from.length ? '餵' + fromTxt(o.id) + '拿' : '沒有兵會給'}</small></div>
      <p class="dx-d">${esc(o.levels[0].desc)}</p>
      <p class="dx-t">${tr[1]}</p>
      <details class="dx-lv" ${o.id === hlImp ? 'open' : ''}><summary>1～${o.levels.length} 級的說明</summary><ol>${o.levels.map(L => `<li>${esc(L.desc)}</li>`).join('')}</ol></details>
    </div>`; }).join('') : '<p class="empty">沒有符合的刻印。</p>';
}
drawDex();
function showImp(id){
  if (!IMP[id]) return;
  dxR = 'all'; dxT = 'all'; hlImp = id; drawDex();
  const el = document.getElementById('imp-' + id);
  if (el) el.scrollIntoView({behavior:'smooth', block:'center'});
}
document.addEventListener('click', e => {
  const a = e.target.closest('[data-imp]'); if (!a) return;
  e.preventDefault(); showImp(a.dataset.imp);
});

/* ---------- 搜尋（這頁的段落＋刻印＋職業） ---------- */
const idx = [...document.querySelectorAll('.sec')].map(s => ({k:'sec', id:s.id, t:s.querySelector('h2').textContent.replace(/^\d/, ''), sub:'這頁的段落', hay:(s.dataset.t || '') + s.textContent}))
  .concat(D.imprints.map(o => ({k:'imp', id:o.id, t:o.name, sub:'刻印・' + fromTxt(o.id), hay:o.name + (o.short || '') + o.levels.map(L => L.desc).join('') + fromTxt(o.id)})))
  .concat(JOBS.map(j => ({k:'job', id:j.key, t:j.name, sub:`${SYMZ[j.sym]}・${j.rank} 階職業（看適合的刻印）`, hay:j.name + SYMZ[j.sym]})));
const q = $('q'), qres = $('qres'); let act = 0, hits = [];
q.addEventListener('input', () => {
  const s = q.value.trim().toLowerCase();
  if (!s) { qres.classList.remove('on'); return; }
  const score = x => (x.t.toLowerCase().includes(s) ? 0 : 1) + (x.k === 'imp' ? 0 : x.k === 'sec' ? .3 : .6);
  hits = idx.filter(x => x.hay.toLowerCase().includes(s)).sort((a,b) => score(a) - score(b)).slice(0, 20);
  act = 0;
  qres.innerHTML = hits.length ? hits.map((h,i) => `<div class="${i===0?'act':''}" data-i="${i}">${esc(h.t)}<small>${esc(h.sub)}</small></div>`).join('')
    : '<div>找不到。升階和羈絆在「升階與羈絆」頁搜。</div>';
  qres.classList.add('on');
});
function go(h){
  qres.classList.remove('on'); q.value = '';
  if (h.k === 'sec') { document.getElementById(h.id).scrollIntoView({behavior:'smooth', block:'start'}); return; }
  if (h.k === 'job') { showJob(h.id); return; }
  showImp(h.id);
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
