window.SB_META = {
"upgrades": [
{
"key": "blastmachine",
"node": "X01",
"cost": 60,
"parent": "slotodds",
"reqStage": 2,
"reqDiff": 2,
"reqFull": false,
"name": "解鎖爆破老虎機",
"desc": "解鎖全新的爆破老虎機。",
"kind": "machine",
"uid": "blast",
"cat": "blast",
"cum": 61,
"needs": [
[
2,
2
]
],
"chain": [
"slotodds",
"blastmachine"
]
},
{
"key": "unlock_core_43",
"node": "C43",
"cost": 20,
"parent": "blastmachine",
"reqStage": 2,
"reqDiff": 2,
"reqFull": false,
"name": "爆破礦車",
"desc": "一次爆破4個或更多相同符號時，獲得金幣 150。",
"kind": "core",
"uid": "BlastCart",
"cat": "blast",
"cum": 81,
"needs": [
[
2,
2
]
],
"chain": [
"slotodds",
"blastmachine",
"unlock_core_43"
]
},
{
"key": "blastmastery",
"node": "X02",
"cost": 30,
"parent": "blastmachine",
"reqStage": 2,
"reqDiff": 2,
"reqFull": false,
"name": "爆破精通",
"desc": "如果爆破沒有產生新的中獎，下次轉動費用減少 金幣 50。",
"stat": "爆破轉動費用降低",
"kind": "",
"cat": "blast",
"cum": 91,
"needs": [
[
2,
2
]
],
"chain": [
"slotodds",
"blastmachine",
"blastmastery"
]
},
{
"key": "unlock_core_44",
"node": "C44",
"cost": 20,
"parent": "unlock_core_43",
"reqStage": 2,
"reqDiff": 2,
"reqFull": false,
"name": "上升羽毛",
"desc": "爆破後，可從下方填補空格。剩餘符號會被向上推。",
"kind": "core",
"uid": "UpdraftFeather",
"cat": "blast",
"cum": 101,
"needs": [
[
2,
2
]
],
"chain": [
"slotodds",
"blastmachine",
"unlock_core_43",
"unlock_core_44"
]
},
{
"key": "unlock_core_45",
"node": "C45",
"cost": 22,
"parent": "unlock_core_44",
"reqStage": 2,
"reqDiff": 2,
"reqFull": false,
"name": "孢子蘑菇",
"desc": "下次轉動中，每個槽位有40%機率出現被爆破種類的符號。",
"kind": "core",
"uid": "SporeShroom",
"cat": "blast",
"cum": 123,
"needs": [
[
2,
2
]
],
"chain": [
"slotodds",
"blastmachine",
"unlock_core_43",
"unlock_core_44",
"unlock_core_45"
]
},
{
"key": "unlock_core_46",
"node": "C46",
"cost": 50,
"parent": "unlock_core_45",
"reqStage": 3,
"reqDiff": 2,
"reqFull": false,
"name": "縱火犯的打火機",
"desc": "爆破時，可再選擇1個符號一起引爆。",
"kind": "core",
"uid": "ArsonistLighter",
"cat": "blast",
"cum": 173,
"needs": [
[
2,
2
],
[
3,
2
]
],
"chain": [
"slotodds",
"blastmachine",
"unlock_core_43",
"unlock_core_44",
"unlock_core_45",
"unlock_core_46"
]
},
{
"key": "unlock_core_47",
"node": "C47",
"cost": 55,
"parent": "unlock_core_46",
"reqStage": 3,
"reqDiff": 2,
"reqFull": false,
"name": "火藥桶",
"desc": "每波在隨機1格放置火藥桶。火藥桶所在格的符號若有3個以上，可不消耗爆破次數引爆。",
"kind": "core",
"uid": "PowderKeg",
"cat": "blast",
"cum": 228,
"needs": [
[
2,
2
],
[
3,
2
]
],
"chain": [
"slotodds",
"blastmachine",
"unlock_core_43",
"unlock_core_44",
"unlock_core_45",
"unlock_core_46",
"unlock_core_47"
]
},
{
"key": "unlock_core_48",
"node": "C48",
"cost": 150,
"parent": "unlock_core_47",
"reqStage": 4,
"reqDiff": 2,
"reqFull": false,
"name": "爆爆莓",
"desc": "盤面上有5個或更多相同符號時，可不消耗爆破次數，將它們全部引爆並召喚2名對應單位。",
"kind": "core",
"uid": "Burstberry",
"cat": "blast",
"cum": 378,
"needs": [
[
2,
2
],
[
3,
2
],
[
4,
2
]
],
"chain": [
"slotodds",
"blastmachine",
"unlock_core_43",
"unlock_core_44",
"unlock_core_45",
"unlock_core_46",
"unlock_core_47",
"unlock_core_48"
]
},
{
"key": "corereroll",
"node": "K01",
"cost": 10,
"parent": "slotadvanced",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "核心重抽",
"desc": "每局可免費重抽核心選項 1 次。",
"stat": "免費重抽 0 -> 1",
"kind": "",
"cat": "core",
"cum": 15,
"needs": [
[
1,
1
]
],
"chain": [
"slotodds",
"slotadvanced",
"corereroll"
]
},
{
"key": "unlock_core_31",
"node": "C31",
"cost": 8,
"parent": "corereroll",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "金牙",
"desc": "每波首次中獎後，下一次旋轉免費。",
"kind": "core",
"uid": "GoldTooth",
"cat": "core",
"cum": 23,
"needs": [
[
1,
1
]
],
"chain": [
"slotodds",
"slotadvanced",
"corereroll",
"unlock_core_31"
]
},
{
"key": "unlock_core_28",
"node": "C28",
"cost": 8,
"parent": "unlock_core_31",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "貪婪聖杯",
"desc": "中獎時積存金幣 100，最多300。戰鬥開始時領取積存的金幣，但未中獎則失去全部積存金幣。",
"kind": "core",
"uid": "ChaliceGreed",
"cat": "core",
"cum": 31,
"needs": [
[
1,
1
]
],
"chain": [
"slotodds",
"slotadvanced",
"corereroll",
"unlock_core_31",
"unlock_core_28"
]
},
{
"key": "unlock_core_19",
"node": "C19",
"cost": 12,
"parent": "unlock_core_31",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "黑色音符",
"desc": "每波首次轉動必定包含 1 個 小丑。",
"kind": "core",
"uid": "BlackNote",
"cat": "core",
"cum": 35,
"needs": [
[
1,
1
]
],
"chain": [
"slotodds",
"slotadvanced",
"corereroll",
"unlock_core_31",
"unlock_core_19"
]
},
{
"key": "corereroll2",
"node": "K04",
"cost": 24,
"parent": "corereroll",
"reqStage": 1,
"reqDiff": 2,
"reqFull": false,
"name": "核心重抽 II",
"desc": "每局可再免費重抽核心選項 1 次。",
"stat": "免費重抽 1 -> 2",
"kind": "",
"cat": "core",
"cum": 39,
"needs": [
[
1,
1
],
[
1,
2
]
],
"chain": [
"slotodds",
"slotadvanced",
"corereroll",
"corereroll2"
]
},
{
"key": "unlock_core_29",
"node": "C29",
"cost": 12,
"parent": "unlock_core_28",
"reqStage": 1,
"reqDiff": 2,
"reqFull": false,
"name": "小丑的微笑",
"desc": "使用小丑中獎時，為1名單位抽取兩次稀有度，採用較高的結果。",
"kind": "core",
"uid": "JokerGrin",
"cat": "core",
"cum": 43,
"needs": [
[
1,
1
],
[
1,
2
]
],
"chain": [
"slotodds",
"slotadvanced",
"corereroll",
"unlock_core_31",
"unlock_core_28",
"unlock_core_29"
]
},
{
"key": "firstcorespin",
"node": "K02",
"cost": 30,
"parent": "corereroll",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "提前抉擇",
"desc": "首次核心選擇所需轉動次數減少 1",
"stat": "首次核心所需轉動 0 -> -1",
"kind": "",
"cat": "core",
"cum": 45,
"needs": [
[
1,
1
]
],
"chain": [
"slotodds",
"slotadvanced",
"corereroll",
"firstcorespin"
]
},
{
"key": "unlock_core_20",
"node": "C20",
"cost": 12,
"parent": "unlock_core_19",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "共鳴鐵砧",
"desc": "如果中獎符號在槽位中出現 4 次以上，額外召喚 1 個該符號單位。",
"kind": "core",
"uid": "ResonantAnvil",
"cat": "core",
"cum": 47,
"needs": [
[
1,
1
]
],
"chain": [
"slotodds",
"slotadvanced",
"corereroll",
"unlock_core_31",
"unlock_core_19",
"unlock_core_20"
]
},
{
"key": "unlock_core_38",
"node": "C38",
"cost": 5,
"parent": "slotnudge",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "貪婪之珠",
"desc": "每個被微調推出的基本符號可獲得金幣 50。每波最多金幣 100。",
"kind": "core",
"uid": "GreedyPearl",
"cat": "core",
"cum": 53,
"needs": [
[
1,
1
]
],
"chain": [
"slotodds",
"slotadvanced",
"corereroll",
"firstcorespin",
"slotnudge",
"unlock_core_38"
]
},
{
"key": "unlock_core_27",
"node": "C27",
"cost": 14,
"parent": "unlock_core_29",
"reqStage": 1,
"reqDiff": 2,
"reqFull": false,
"name": "女巫火炬",
"desc": "每波首次中獎時，將未參與中獎連線的符號重新抽取一次。小丑與黃金符號保持不變。",
"kind": "core",
"uid": "WitchTorch",
"cat": "core",
"cum": 57,
"needs": [
[
1,
1
],
[
1,
2
]
],
"chain": [
"slotodds",
"slotadvanced",
"corereroll",
"unlock_core_31",
"unlock_core_28",
"unlock_core_29",
"unlock_core_27"
]
},
{
"key": "unlock_core_36",
"node": "C36",
"cost": 10,
"parent": "unlock_core_38",
"reqStage": 1,
"reqDiff": 2,
"reqFull": false,
"name": "逆轉軸",
"desc": "微調時，轉軸不僅能向下推動，也能向上推動。",
"kind": "core",
"uid": "ReverseAxis",
"cat": "core",
"cum": 63,
"needs": [
[
1,
1
],
[
1,
2
]
],
"chain": [
"slotodds",
"slotadvanced",
"corereroll",
"firstcorespin",
"slotnudge",
"unlock_core_38",
"unlock_core_36"
]
},
{
"key": "unlock_core_21",
"node": "C21",
"cost": 20,
"parent": "unlock_core_20",
"reqStage": 1,
"reqDiff": 2,
"reqFull": false,
"name": "交錯尖牙",
"desc": "未中獎後，可將一個符號與中心符號交換。",
"kind": "core",
"uid": "CrookedFang",
"cat": "core",
"cum": 67,
"needs": [
[
1,
1
],
[
1,
2
]
],
"chain": [
"slotodds",
"slotadvanced",
"corereroll",
"unlock_core_31",
"unlock_core_19",
"unlock_core_20",
"unlock_core_21"
]
},
{
"key": "unlock_core_22",
"node": "C22",
"cost": 40,
"parent": "unlock_core_19",
"reqStage": 1,
"reqDiff": 2,
"reqFull": false,
"name": "萬能牌",
"desc": "每個槽位有2%機率出現小丑。以小丑中獎時，額外召喚1名中獎符號對應的單位。",
"kind": "core",
"uid": "Wildcard",
"cat": "core",
"cum": 75,
"needs": [
[
1,
1
],
[
1,
2
]
],
"chain": [
"slotodds",
"slotadvanced",
"corereroll",
"unlock_core_31",
"unlock_core_19",
"unlock_core_22"
]
},
{
"key": "unlock_core_37",
"node": "C37",
"cost": 12,
"parent": "unlock_core_36",
"reqStage": 1,
"reqDiff": 2,
"reqFull": false,
"name": "循環之鈴",
"desc": "微調時，被推出的符號會移到同一行或列的另一端。不會出現新符號。",
"kind": "core",
"uid": "CycleBell",
"cat": "core",
"cum": 75,
"needs": [
[
1,
1
],
[
1,
2
]
],
"chain": [
"slotodds",
"slotadvanced",
"corereroll",
"firstcorespin",
"slotnudge",
"unlock_core_38",
"unlock_core_36",
"unlock_core_37"
]
},
{
"key": "unlock_core_35",
"node": "C35",
"cost": 16,
"parent": "unlock_core_37",
"reqStage": 1,
"reqDiff": 2,
"reqFull": false,
"name": "反動軸",
"desc": "微調後，可額外微調同一轉軸一次。",
"kind": "core",
"uid": "ReboundAxis",
"cat": "core",
"cum": 91,
"needs": [
[
1,
1
],
[
1,
2
]
],
"chain": [
"slotodds",
"slotadvanced",
"corereroll",
"firstcorespin",
"slotnudge",
"unlock_core_38",
"unlock_core_36",
"unlock_core_37",
"unlock_core_35"
]
},
{
"key": "firstcoreuncommon",
"node": "K03",
"cost": 60,
"parent": "firstcorespin",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "璀璨首選",
"desc": "首次核心選項中必定出現 1 個高階或更高核心。",
"stat": "高階核心出現",
"kind": "",
"cat": "core",
"cum": 105,
"needs": [
[
1,
1
]
],
"chain": [
"slotodds",
"slotadvanced",
"corereroll",
"firstcorespin",
"firstcoreuncommon"
]
},
{
"key": "unlock_core_25",
"node": "C25",
"cost": 40,
"parent": "unlock_core_21",
"reqStage": 2,
"reqDiff": 2,
"reqFull": false,
"name": "搗蛋鬼的魔方",
"desc": "將老虎機上的一個2x2區域順時針旋轉90度。",
"kind": "core",
"uid": "TricksterCube",
"cat": "core",
"cum": 107,
"needs": [
[
1,
1
],
[
1,
2
],
[
2,
2
]
],
"chain": [
"slotodds",
"slotadvanced",
"corereroll",
"unlock_core_31",
"unlock_core_19",
"unlock_core_20",
"unlock_core_21",
"unlock_core_25"
]
},
{
"key": "unlock_core_23",
"node": "C23",
"cost": 45,
"parent": "unlock_core_22",
"reqStage": 1,
"reqDiff": 2,
"reqFull": false,
"name": "黃金拉桿",
"desc": "每第5次轉動會變為黃金轉動。以黃金符號中獎時，該單位的稀有度提升1級。",
"kind": "core",
"uid": "GoldenLever",
"cat": "core",
"cum": 120,
"needs": [
[
1,
1
],
[
1,
2
]
],
"chain": [
"slotodds",
"slotadvanced",
"corereroll",
"unlock_core_31",
"unlock_core_19",
"unlock_core_22",
"unlock_core_23"
]
},
{
"key": "unlock_core_39",
"node": "C39",
"cost": 36,
"parent": "unlock_core_35",
"reqStage": 2,
"reqDiff": 2,
"reqFull": false,
"name": "小丑蠟燭",
"desc": "每次轉動，隨機1個轉軸微調時將進入的符號變為小丑。",
"kind": "core",
"uid": "JesterCandle",
"cat": "core",
"cum": 127,
"needs": [
[
1,
1
],
[
1,
2
],
[
2,
2
]
],
"chain": [
"slotodds",
"slotadvanced",
"corereroll",
"firstcorespin",
"slotnudge",
"unlock_core_38",
"unlock_core_36",
"unlock_core_37",
"unlock_core_35",
"unlock_core_39"
]
},
{
"key": "corefav",
"node": "K06",
"cost": 90,
"parent": "corereroll2",
"reqStage": 4,
"reqDiff": 2,
"reqFull": false,
"name": "核心UP",
"desc": "開局前將 1 個核心設為UP。UP核心的出現機率大幅提升。",
"stat": "UP 0 -> 1",
"kind": "",
"cat": "core",
"cum": 129,
"needs": [
[
1,
1
],
[
1,
2
],
[
4,
2
]
],
"section": "要先買齊全部 20 個核心解鎖",
"sectionNeed": 20,
"sectionTotal": 20,
"chain": [
"slotodds",
"slotadvanced",
"corereroll",
"corereroll2",
"corefav"
]
},
{
"key": "unlock_core_24",
"node": "C24",
"cost": 40,
"parent": "unlock_core_25",
"reqStage": 2,
"reqDiff": 2,
"reqFull": false,
"name": "魔法神燈",
"desc": "未中獎時，若移動一格就能保證中獎，會自動移動一個轉軸。",
"kind": "core",
"uid": "MagicLamp",
"cat": "core",
"cum": 147,
"needs": [
[
1,
1
],
[
1,
2
],
[
2,
2
]
],
"chain": [
"slotodds",
"slotadvanced",
"corereroll",
"unlock_core_31",
"unlock_core_19",
"unlock_core_20",
"unlock_core_21",
"unlock_core_25",
"unlock_core_24"
]
},
{
"key": "secondcoreuncommon",
"node": "K05",
"cost": 80,
"parent": "firstcoreuncommon",
"reqStage": 3,
"reqDiff": 2,
"reqFull": false,
"name": "餘暉",
"desc": "第二次核心選項中也必定出現 1 個高階或更高核心。",
"stat": "高階保底 1 -> 2 次",
"kind": "",
"cat": "core",
"cum": 185,
"needs": [
[
1,
1
],
[
3,
2
]
],
"chain": [
"slotodds",
"slotadvanced",
"corereroll",
"firstcorespin",
"firstcoreuncommon",
"secondcoreuncommon"
]
},
{
"key": "corefav2",
"node": "K07",
"cost": 150,
"parent": "corereroll2",
"reqStage": 5,
"reqDiff": 2,
"reqFull": false,
"name": "核心UP II",
"desc": "可多將 1 個核心設為UP。",
"stat": "UP 1 -> 2",
"kind": "",
"cat": "core",
"cum": 189,
"needs": [
[
1,
1
],
[
1,
2
],
[
5,
2
]
],
"section": "要先買齊爆破機區域（爆破老虎機、爆破精通、6 個爆破核心）",
"sectionNeed": 8,
"sectionTotal": 8,
"chain": [
"slotodds",
"slotadvanced",
"corereroll",
"corereroll2",
"corefav2"
]
},
{
"key": "unlock_core_30",
"node": "C30",
"cost": 45,
"parent": "unlock_core_24",
"reqStage": 2,
"reqDiff": 2,
"reqFull": false,
"name": "四葉草",
"desc": "每波在隨機1格出現四葉草。若中獎連線包含該格，則額外召喚2名中獎符號對應的單位。",
"kind": "core",
"uid": "FourLeafClover",
"cat": "core",
"cum": 192,
"needs": [
[
1,
1
],
[
1,
2
],
[
2,
2
]
],
"chain": [
"slotodds",
"slotadvanced",
"corereroll",
"unlock_core_31",
"unlock_core_19",
"unlock_core_20",
"unlock_core_21",
"unlock_core_25",
"unlock_core_24",
"unlock_core_30"
]
},
{
"key": "unlock_core_40",
"node": "C40",
"cost": 110,
"parent": "unlock_core_39",
"reqStage": 3,
"reqDiff": 2,
"reqFull": false,
"name": "黃金紋章",
"desc": "微調產生新的中獎時，不消耗微調次數。",
"kind": "core",
"uid": "GoldenCrest",
"cat": "core",
"cum": 237,
"needs": [
[
1,
1
],
[
1,
2
],
[
2,
2
],
[
3,
2
]
],
"chain": [
"slotodds",
"slotadvanced",
"corereroll",
"firstcorespin",
"slotnudge",
"unlock_core_38",
"unlock_core_36",
"unlock_core_37",
"unlock_core_35",
"unlock_core_39",
"unlock_core_40"
]
},
{
"key": "unlock_core_26",
"node": "C26",
"cost": 60,
"parent": "unlock_core_30",
"reqStage": 3,
"reqDiff": 2,
"reqFull": false,
"name": "命運之錘",
"desc": "旋轉時，可手動分別停止3個轉軸。",
"kind": "core",
"uid": "HammerOfFate",
"cat": "core",
"cum": 252,
"needs": [
[
1,
1
],
[
1,
2
],
[
2,
2
],
[
3,
2
]
],
"chain": [
"slotodds",
"slotadvanced",
"corereroll",
"unlock_core_31",
"unlock_core_19",
"unlock_core_20",
"unlock_core_21",
"unlock_core_25",
"unlock_core_24",
"unlock_core_30",
"unlock_core_26"
]
},
{
"key": "unlock_core_32",
"node": "C32",
"cost": 150,
"parent": "unlock_core_23",
"reqStage": 4,
"reqDiff": 2,
"reqFull": false,
"name": "迴聲之殼",
"desc": "指定1個已裝備的核心。該核心每波可額外使用1次。戰鬥結束後可更改指定。",
"kind": "core",
"uid": "EchoShell",
"cat": "core",
"cum": 270,
"needs": [
[
1,
1
],
[
1,
2
],
[
4,
2
]
],
"chain": [
"slotodds",
"slotadvanced",
"corereroll",
"unlock_core_31",
"unlock_core_19",
"unlock_core_22",
"unlock_core_23",
"unlock_core_32"
]
},
{
"key": "slotodds",
"node": "S01",
"cost": 1,
"parent": null,
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "解封紋章",
"desc": "升級的封印被解除。",
"stat": "封印 -> 解封",
"kind": "",
"cat": "misc",
"cum": 1,
"needs": [],
"chain": [
"slotodds"
]
},
{
"key": "codex",
"node": "D01",
"cost": 3,
"parent": "slotodds",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "圖鑑",
"desc": "解鎖圖鑑。",
"stat": "鎖定 -> 解鎖",
"kind": "",
"cat": "misc",
"cum": 4,
"needs": [],
"chain": [
"slotodds",
"codex"
]
},
{
"key": "battlespeed3",
"node": "D02",
"cost": 60,
"parent": "maxunit3",
"reqStage": 6,
"reqDiff": 1,
"reqFull": false,
"name": "戰場加速",
"desc": "無盡模式中，加速最高可達3倍速。",
"stat": "最高速度 x2 -> x3",
"kind": "",
"cat": "misc",
"cum": 317,
"needs": [
[
6,
1
]
],
"chain": [
"slotodds",
"maxunit",
"maxunit2",
"maxunit3",
"battlespeed3"
]
},
{
"key": "slotadvanced",
"node": "R01",
"cost": 4,
"parent": "slotodds",
"reqStage": 1,
"reqDiff": 1,
"reqFull": false,
"name": "高階解鎖",
"desc": "高階單位開始出現。",
"stat": "高階 0% -> 5%",
"kind": "",
"cat": "rarity",
"cum": 5,
"needs": [
[
1,
1
]
],
"chain": [
"slotodds",
"slotadvanced"
]
},
{
"key": "slotadvanced2",
"node": "R02",
"cost": 12,
"parent": "slotadvanced",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "高階研究 I",
"desc": "提高高階單位的出現機率。",
"stat": "高階 5% -> 10%",
"kind": "",
"cat": "rarity",
"cum": 17,
"needs": [
[
1,
1
]
],
"chain": [
"slotodds",
"slotadvanced",
"slotadvanced2"
]
},
{
"key": "slotadvanced3",
"node": "R03",
"cost": 28,
"parent": "slotadvanced2",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "高階研究 II",
"desc": "進一步提高高階單位的出現機率。",
"stat": "高階 10% -> 15%",
"kind": "",
"cat": "rarity",
"cum": 45,
"needs": [
[
1,
1
]
],
"chain": [
"slotodds",
"slotadvanced",
"slotadvanced2",
"slotadvanced3"
]
},
{
"key": "slotrare",
"node": "R04",
"cost": 70,
"parent": "slotadvanced3",
"reqStage": 3,
"reqDiff": 1,
"reqFull": true,
"name": "稀有解鎖",
"desc": "稀有單位開始出現。",
"stat": "稀有 0% -> 2%",
"kind": "",
"cat": "rarity",
"cum": 115,
"needs": [
[
1,
1
],
[
3,
1
]
],
"chain": [
"slotodds",
"slotadvanced",
"slotadvanced2",
"slotadvanced3",
"slotrare"
]
},
{
"key": "slotrare2",
"node": "R05",
"cost": 100,
"parent": "slotrare",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "稀有研究 I",
"desc": "提高稀有單位的出現機率。",
"stat": "稀有 2% -> 3%",
"kind": "",
"cat": "rarity",
"cum": 215,
"needs": [
[
1,
1
],
[
3,
1
]
],
"chain": [
"slotodds",
"slotadvanced",
"slotadvanced2",
"slotadvanced3",
"slotrare",
"slotrare2"
]
},
{
"key": "slotlegend",
"node": "R07",
"cost": 120,
"parent": "slotrare",
"reqStage": 4,
"reqDiff": 1,
"reqFull": true,
"name": "傳說解鎖",
"desc": "傳說單位開始出現。",
"stat": "傳說 0% -> 0.1%",
"kind": "",
"cat": "rarity",
"cum": 235,
"needs": [
[
1,
1
],
[
3,
1
],
[
4,
1
]
],
"chain": [
"slotodds",
"slotadvanced",
"slotadvanced2",
"slotadvanced3",
"slotrare",
"slotlegend"
]
},
{
"key": "slotrare3",
"node": "R06",
"cost": 140,
"parent": "slotrare2",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "稀有研究 II",
"desc": "進一步提高稀有單位的出現機率。",
"stat": "稀有 3% -> 4.5%",
"kind": "",
"cat": "rarity",
"cum": 355,
"needs": [
[
1,
1
],
[
3,
1
]
],
"chain": [
"slotodds",
"slotadvanced",
"slotadvanced2",
"slotadvanced3",
"slotrare",
"slotrare2",
"slotrare3"
]
},
{
"key": "slotlegend2",
"node": "R08",
"cost": 170,
"parent": "slotlegend",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "傳說研究 I",
"desc": "提高傳說單位的出現機率。",
"stat": "傳說 0.1% -> 0.2%",
"kind": "",
"cat": "rarity",
"cum": 405,
"needs": [
[
1,
1
],
[
3,
1
],
[
4,
1
]
],
"chain": [
"slotodds",
"slotadvanced",
"slotadvanced2",
"slotadvanced3",
"slotrare",
"slotlegend",
"slotlegend2"
]
},
{
"key": "slotprism",
"node": "R10",
"cost": 200,
"parent": "slotlegend",
"reqStage": 5,
"reqDiff": 1,
"reqFull": true,
"name": "稜彩解鎖",
"desc": "稜彩單位開始出現。",
"stat": "稜彩 0% -> 0.02%",
"kind": "",
"cat": "rarity",
"cum": 435,
"needs": [
[
1,
1
],
[
3,
1
],
[
4,
1
],
[
5,
1
]
],
"chain": [
"slotodds",
"slotadvanced",
"slotadvanced2",
"slotadvanced3",
"slotrare",
"slotlegend",
"slotprism"
]
},
{
"key": "slotlegend3",
"node": "R09",
"cost": 230,
"parent": "slotlegend2",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "傳說研究 II",
"desc": "進一步提高傳說單位的出現機率。",
"stat": "傳說 0.2% -> 0.4%",
"kind": "",
"cat": "rarity",
"cum": 635,
"needs": [
[
1,
1
],
[
3,
1
],
[
4,
1
]
],
"chain": [
"slotodds",
"slotadvanced",
"slotadvanced2",
"slotadvanced3",
"slotrare",
"slotlegend",
"slotlegend2",
"slotlegend3"
]
},
{
"key": "slotprism2",
"node": "R11",
"cost": 280,
"parent": "slotprism",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "稜彩研究 I",
"desc": "提高稜彩單位的出現機率。",
"stat": "稜彩 0.02% -> 0.05%",
"kind": "",
"cat": "rarity",
"cum": 715,
"needs": [
[
1,
1
],
[
3,
1
],
[
4,
1
],
[
5,
1
]
],
"chain": [
"slotodds",
"slotadvanced",
"slotadvanced2",
"slotadvanced3",
"slotrare",
"slotlegend",
"slotprism",
"slotprism2"
]
},
{
"key": "slotprism3",
"node": "R12",
"cost": 380,
"parent": "slotprism2",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "稜彩研究 II",
"desc": "進一步提高稜彩單位的出現機率。",
"stat": "稜彩 0.05% -> 0.1%",
"kind": "",
"cat": "rarity",
"cum": 1095,
"needs": [
[
1,
1
],
[
3,
1
],
[
4,
1
],
[
5,
1
]
],
"chain": [
"slotodds",
"slotadvanced",
"slotadvanced2",
"slotadvanced3",
"slotrare",
"slotlegend",
"slotprism",
"slotprism2",
"slotprism3"
]
},
{
"key": "shopreroll",
"node": "M01",
"cost": 6,
"parent": "slotadvanced",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "商店重抽",
"desc": "商店重抽費用減少 1。",
"stat": "商店重抽費用降低 0 -> 1",
"kind": "",
"cat": "shop",
"cum": 11,
"needs": [
[
1,
1
]
],
"chain": [
"slotodds",
"slotadvanced",
"shopreroll"
]
},
{
"key": "unlock_item_07",
"node": "I07",
"cost": 5,
"parent": "shopreroll",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "塵埃斗篷",
"desc": "每場戰鬥中，遠程友軍會完全格擋敵人的前1次遠程普攻。 (Lv.1)",
"kind": "item",
"uid": "07",
"cat": "shop",
"cum": 16,
"needs": [
[
1,
1
]
],
"chain": [
"slotodds",
"slotadvanced",
"shopreroll",
"unlock_item_07"
]
},
{
"key": "itemresearch",
"node": "M05",
"cost": 24,
"parent": null,
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"blocked": true,
"name": "專精物品研究 I",
"desc": "穿刺手冊和奧術訓練會出現在商店中。",
"stat": "新增 2 件專精物品",
"kind": "",
"cat": "shop",
"cum": 24,
"needs": [],
"chain": [
"itemresearch"
]
},
{
"key": "unlock_item_08",
"node": "I08",
"cost": 8,
"parent": "unlock_item_07",
"reqStage": 1,
"reqDiff": 2,
"reqFull": false,
"name": "詛咒蘑菇",
"desc": "中毒、流血或灼燒的敵人死亡時，剩餘持續傷害的60%會轉移給附近的另一名敵人。",
"kind": "item",
"uid": "08",
"cat": "shop",
"cum": 24,
"needs": [
[
1,
1
],
[
1,
2
]
],
"chain": [
"slotodds",
"slotadvanced",
"shopreroll",
"unlock_item_07",
"unlock_item_08"
]
},
{
"key": "shoppin",
"node": "M02",
"cost": 30,
"parent": null,
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"blocked": true,
"name": "商品鎖定",
"desc": "保留 1 件商店物品到下次刷新。每局 1 次。",
"stat": "鎖定商品",
"kind": "",
"cat": "shop",
"cum": 30,
"needs": [],
"chain": [
"shoppin"
]
},
{
"key": "unlock_item_37",
"node": "I37",
"cost": 10,
"parent": "unlock_item_08",
"reqStage": 1,
"reqDiff": 2,
"reqFull": false,
"name": "盾衛手冊",
"desc": "首次交戰後，戰士受到傷害 -10%，持續 6 秒。 (Lv.1)",
"kind": "item",
"uid": "37",
"cat": "shop",
"cum": 34,
"needs": [
[
1,
1
],
[
1,
2
]
],
"chain": [
"slotodds",
"slotadvanced",
"shopreroll",
"unlock_item_07",
"unlock_item_08",
"unlock_item_37"
]
},
{
"key": "unlock_item_17",
"node": "I17",
"cost": 24,
"parent": "unlock_item_08",
"reqStage": 2,
"reqDiff": 2,
"reqFull": false,
"name": "跳彈石",
"desc": "擊敗敵人時，跳彈石會飛向另1名敵人，造成溢出傷害50%的傷害。 (Lv.1)",
"kind": "item",
"uid": "17",
"cat": "shop",
"cum": 48,
"needs": [
[
1,
1
],
[
1,
2
],
[
2,
2
]
],
"chain": [
"slotodds",
"slotadvanced",
"shopreroll",
"unlock_item_07",
"unlock_item_08",
"unlock_item_17"
]
},
{
"key": "itemrefund",
"node": "M04",
"cost": 35,
"parent": "unlock_item_07",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "回收帳本",
"desc": "刪除物品的返還率從 50% 提高到 80%。",
"stat": "返還率 50% -> 80%",
"kind": "",
"cat": "shop",
"cum": 51,
"needs": [
[
1,
1
]
],
"chain": [
"slotodds",
"slotadvanced",
"shopreroll",
"unlock_item_07",
"itemrefund"
]
},
{
"key": "iteminventory",
"node": "M03",
"cost": 45,
"parent": "shopreroll",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "物品欄擴充 I",
"desc": "物品槽增加 1",
"stat": "物品槽 6 -> 7",
"kind": "",
"cat": "shop",
"cum": 56,
"needs": [
[
1,
1
]
],
"section": "商店區域要先買 8 個節點",
"sectionNeed": 8,
"sectionTotal": 15,
"chain": [
"slotodds",
"slotadvanced",
"shopreroll",
"iteminventory"
]
},
{
"key": "unlock_item_11",
"node": "I11",
"cost": 28,
"parent": "unlock_item_37",
"reqStage": 2,
"reqDiff": 2,
"reqFull": false,
"name": "治癒之泉",
"desc": "我方陣地湧出一眼泉水。站在泉中的友軍每秒恢復最大生命的1.5%。 (Lv.1)",
"kind": "item",
"uid": "11",
"cat": "shop",
"cum": 62,
"needs": [
[
1,
1
],
[
1,
2
],
[
2,
2
]
],
"chain": [
"slotodds",
"slotadvanced",
"shopreroll",
"unlock_item_07",
"unlock_item_08",
"unlock_item_37",
"unlock_item_11"
]
},
{
"key": "unlock_item_23",
"node": "I23",
"cost": 55,
"parent": "unlock_item_37",
"reqStage": 3,
"reqDiff": 2,
"reqFull": false,
"name": "滿溢聖杯",
"desc": "友軍溢出治療量的75%會轉化為護盾。持續5秒，最多疊加至最大生命的15%。受到傷害後2秒內不會疊加。",
"kind": "item",
"uid": "23",
"cat": "shop",
"cum": 89,
"needs": [
[
1,
1
],
[
1,
2
],
[
3,
2
]
],
"chain": [
"slotodds",
"slotadvanced",
"shopreroll",
"unlock_item_07",
"unlock_item_08",
"unlock_item_37",
"unlock_item_23"
]
},
{
"key": "unlock_item_40",
"node": "I40",
"cost": 28,
"parent": "unlock_item_11",
"reqStage": 2,
"reqDiff": 2,
"reqFull": false,
"name": "魔法陣",
"desc": "在友軍陣地畫出一個魔法陣。站在魔法陣上的法師技能冷卻時間-20%，受到的傷害+10%。 (Lv.1)",
"kind": "item",
"uid": "40",
"cat": "shop",
"cum": 90,
"needs": [
[
1,
1
],
[
1,
2
],
[
2,
2
]
],
"chain": [
"slotodds",
"slotadvanced",
"shopreroll",
"unlock_item_07",
"unlock_item_08",
"unlock_item_37",
"unlock_item_11",
"unlock_item_40"
]
},
{
"key": "unlock_item_27",
"node": "I27",
"cost": 50,
"parent": "unlock_item_17",
"reqStage": 3,
"reqDiff": 2,
"reqFull": false,
"name": "地道",
"desc": "戰鬥開始時，部署在最後方的近戰友軍鑽入地下，2秒後從最後方敵人的背後鑽出。鑽出後的第一次攻擊傷害+80%。",
"kind": "item",
"uid": "27",
"cat": "shop",
"cum": 98,
"needs": [
[
1,
1
],
[
1,
2
],
[
2,
2
],
[
3,
2
]
],
"chain": [
"slotodds",
"slotadvanced",
"shopreroll",
"unlock_item_07",
"unlock_item_08",
"unlock_item_17",
"unlock_item_27"
]
},
{
"key": "shopdiscount",
"node": "M06",
"cost": 50,
"parent": "itemrefund",
"reqStage": 3,
"reqDiff": 2,
"reqFull": false,
"name": "熟客折扣",
"desc": "每局 1 次，以便宜 精髓 1 的價格購買一件商店物品。",
"stat": "折扣 0 -> 1 次",
"kind": "",
"cat": "shop",
"cum": 101,
"needs": [
[
1,
1
],
[
3,
2
]
],
"chain": [
"slotodds",
"slotadvanced",
"shopreroll",
"unlock_item_07",
"itemrefund",
"shopdiscount"
]
},
{
"key": "unlock_item_28",
"node": "I28",
"cost": 55,
"parent": "unlock_item_40",
"reqStage": 3,
"reqDiff": 2,
"reqFull": false,
"name": "死神沙漏",
"desc": "用技能擊殺敵人時，返還該技能冷卻時間的30%。每個單位每8秒觸發一次。",
"kind": "item",
"uid": "28",
"cat": "shop",
"cum": 145,
"needs": [
[
1,
1
],
[
1,
2
],
[
2,
2
],
[
3,
2
]
],
"chain": [
"slotodds",
"slotadvanced",
"shopreroll",
"unlock_item_07",
"unlock_item_08",
"unlock_item_37",
"unlock_item_11",
"unlock_item_40",
"unlock_item_28"
]
},
{
"key": "unlock_item_24",
"node": "I24",
"cost": 80,
"parent": "unlock_item_27",
"reqStage": 4,
"reqDiff": 2,
"reqFull": false,
"name": "守護圖騰",
"desc": "基地前方立起守護圖騰。觸碰圖騰之線的敵人每2秒受到友軍最高攻擊80%的傷害。",
"kind": "item",
"uid": "24",
"cat": "shop",
"cum": 178,
"needs": [
[
1,
1
],
[
1,
2
],
[
2,
2
],
[
3,
2
],
[
4,
2
]
],
"chain": [
"slotodds",
"slotadvanced",
"shopreroll",
"unlock_item_07",
"unlock_item_08",
"unlock_item_17",
"unlock_item_27",
"unlock_item_24"
]
},
{
"key": "iteminventory2",
"node": "M12",
"cost": 160,
"parent": "iteminventory",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "物品欄擴充 II",
"desc": "物品槽增加 1",
"stat": "物品槽 7 -> 8",
"kind": "",
"cat": "shop",
"cum": 216,
"needs": [
[
1,
1
]
],
"section": "要先買齊商店區域全部節點",
"sectionNeed": 15,
"sectionTotal": 15,
"chain": [
"slotodds",
"slotadvanced",
"shopreroll",
"iteminventory",
"iteminventory2"
]
},
{
"key": "unlock_item_48",
"node": "I48",
"cost": 140,
"parent": "unlock_item_23",
"reqStage": 4,
"reqDiff": 2,
"reqFull": false,
"name": "燃燒之心",
"desc": "友軍普通攻擊傷害提高50%，但最大生命-20%。",
"kind": "item",
"uid": "48",
"cat": "shop",
"cum": 229,
"needs": [
[
1,
1
],
[
1,
2
],
[
3,
2
],
[
4,
2
]
],
"chain": [
"slotodds",
"slotadvanced",
"shopreroll",
"unlock_item_07",
"unlock_item_08",
"unlock_item_37",
"unlock_item_23",
"unlock_item_48"
]
},
{
"key": "unlock_item_45",
"node": "I45",
"cost": 160,
"parent": "unlock_item_28",
"reqStage": 4,
"reqDiff": 2,
"reqFull": false,
"name": "行商包袱",
"desc": "每場戰鬥開始時，從包袱中隨機取出2件未擁有的物品。取出的物品僅在該場戰鬥中以Lv.1生效。",
"kind": "item",
"uid": "45",
"cat": "shop",
"cum": 305,
"needs": [
[
1,
1
],
[
1,
2
],
[
2,
2
],
[
3,
2
],
[
4,
2
]
],
"chain": [
"slotodds",
"slotadvanced",
"shopreroll",
"unlock_item_07",
"unlock_item_08",
"unlock_item_37",
"unlock_item_11",
"unlock_item_40",
"unlock_item_28",
"unlock_item_45"
]
},
{
"key": "slotnudge",
"node": "B02",
"cost": 3,
"parent": "firstcorespin",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "微調精通",
"desc": "如果微調沒有產生新的中獎，下次轉動費用減少 金幣 50",
"stat": "微調轉動費用降低",
"kind": "",
"cat": "slot",
"cum": 48,
"needs": [
[
1,
1
]
],
"chain": [
"slotodds",
"slotadvanced",
"corereroll",
"firstcorespin",
"slotnudge"
]
},
{
"key": "fatestone",
"node": "F01",
"cost": 90,
"parent": "slotlegend",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "命運石解鎖",
"desc": "解鎖命運石系統。",
"stat": "未啟用 -> 已啟用",
"kind": "",
"cat": "stone",
"cum": 325,
"needs": [
[
1,
1
],
[
3,
1
],
[
4,
1
]
],
"chain": [
"slotodds",
"slotadvanced",
"slotadvanced2",
"slotadvanced3",
"slotrare",
"slotlegend",
"fatestone"
]
},
{
"key": "stonetwin",
"node": "F02",
"cost": 45,
"parent": "fatestone",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "雙子石",
"desc": "C級卡牌開始出現雙子石。獲得2個單位。",
"stat": "鎖定 -> 解鎖",
"kind": "",
"cat": "stone",
"cum": 370,
"needs": [
[
1,
1
],
[
3,
1
],
[
4,
1
]
],
"chain": [
"slotodds",
"slotadvanced",
"slotadvanced2",
"slotadvanced3",
"slotrare",
"slotlegend",
"fatestone",
"stonetwin"
]
},
{
"key": "questreroll",
"node": "F11",
"cost": 60,
"parent": "fatestone",
"reqStage": 4,
"reqDiff": 2,
"reqFull": false,
"name": "任務重抽",
"desc": "每局可重抽 1 個命運石任務。",
"stat": "重抽 0 -> 1 次",
"kind": "",
"cat": "stone",
"cum": 385,
"needs": [
[
1,
1
],
[
3,
1
],
[
4,
1
],
[
4,
2
]
],
"chain": [
"slotodds",
"slotadvanced",
"slotadvanced2",
"slotadvanced3",
"slotrare",
"slotlegend",
"fatestone",
"questreroll"
]
},
{
"key": "stoneshop",
"node": "F12",
"cost": 60,
"parent": "fatestone",
"reqStage": 5,
"reqDiff": 1,
"reqFull": false,
"name": "命運石貨架",
"desc": "每局開始前，可在老虎機選擇畫面購買 1 顆命運石。",
"stat": "陳列 0 -> 3",
"kind": "",
"cat": "stone",
"cum": 385,
"needs": [
[
1,
1
],
[
3,
1
],
[
4,
1
],
[
5,
1
]
],
"section": "研究與命運石區域要先買 16 個節點",
"sectionNeed": 16,
"sectionTotal": 23,
"chain": [
"slotodds",
"slotadvanced",
"slotadvanced2",
"slotadvanced3",
"slotrare",
"slotlegend",
"fatestone",
"stoneshop"
]
},
{
"key": "stonespecial",
"node": "F05",
"cost": 70,
"parent": "fatestone",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "特殊石",
"desc": "B級卡牌開始出現特殊石。有15%機率獲得特殊單位。",
"stat": "鎖定 -> 解鎖",
"kind": "",
"cat": "stone",
"cum": 395,
"needs": [
[
1,
1
],
[
3,
1
],
[
4,
1
]
],
"chain": [
"slotodds",
"slotadvanced",
"slotadvanced2",
"slotadvanced3",
"slotrare",
"slotlegend",
"fatestone",
"stonespecial"
]
},
{
"key": "stoneconstellation",
"node": "F08",
"cost": 110,
"parent": "fatestone",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "星群石",
"desc": "A級卡牌開始出現星群石。獲得3個單位。",
"stat": "鎖定 -> 解鎖",
"kind": "",
"cat": "stone",
"cum": 435,
"needs": [
[
1,
1
],
[
3,
1
],
[
4,
1
]
],
"chain": [
"slotodds",
"slotadvanced",
"slotadvanced2",
"slotadvanced3",
"slotrare",
"slotlegend",
"fatestone",
"stoneconstellation"
]
},
{
"key": "stonebreeze",
"node": "F03",
"cost": 90,
"parent": "stonetwin",
"reqStage": 5,
"reqDiff": 2,
"reqFull": false,
"name": "微風石",
"desc": "C級卡牌開始出現微風石。捨棄高階，主攻稀有。",
"stat": "鎖定 -> 解鎖",
"kind": "",
"cat": "stone",
"cum": 460,
"needs": [
[
1,
1
],
[
3,
1
],
[
4,
1
],
[
5,
2
]
],
"chain": [
"slotodds",
"slotadvanced",
"slotadvanced2",
"slotadvanced3",
"slotrare",
"slotlegend",
"fatestone",
"stonetwin",
"stonebreeze"
]
},
{
"key": "stonemastery",
"node": "F06",
"cost": 130,
"parent": "stonespecial",
"reqStage": 5,
"reqDiff": 2,
"reqFull": false,
"name": "熟練石",
"desc": "B級卡牌開始出現熟練石。單位直接以2星登場。",
"stat": "鎖定 -> 解鎖",
"kind": "",
"cat": "stone",
"cum": 525,
"needs": [
[
1,
1
],
[
3,
1
],
[
4,
1
],
[
5,
2
]
],
"chain": [
"slotodds",
"slotadvanced",
"slotadvanced2",
"slotadvanced3",
"slotrare",
"slotlegend",
"fatestone",
"stonespecial",
"stonemastery"
]
},
{
"key": "stoneshop2",
"node": "F13",
"cost": 150,
"parent": "stoneshop",
"reqStage": 5,
"reqDiff": 2,
"reqFull": false,
"name": "貨架陳列 +1",
"desc": "命運石貨架多陳列 1 顆任意等級的命運石。",
"stat": "陳列 3 -> 4",
"kind": "",
"cat": "stone",
"cum": 535,
"needs": [
[
1,
1
],
[
3,
1
],
[
4,
1
],
[
5,
1
],
[
5,
2
]
],
"section": "要先買齊研究與命運石區域全部節點",
"sectionNeed": 23,
"sectionTotal": 23,
"chain": [
"slotodds",
"slotadvanced",
"slotadvanced2",
"slotadvanced3",
"slotrare",
"slotlegend",
"fatestone",
"stoneshop",
"stoneshop2"
]
},
{
"key": "stoneomen",
"node": "F04",
"cost": 120,
"parent": "stonebreeze",
"reqStage": 5,
"reqDiff": 2,
"reqFull": false,
"name": "占卜石",
"desc": "C級卡牌開始出現占卜石。從3名候選中選擇1名。",
"stat": "鎖定 -> 解鎖",
"kind": "",
"cat": "stone",
"cum": 580,
"needs": [
[
1,
1
],
[
3,
1
],
[
4,
1
],
[
5,
2
]
],
"chain": [
"slotodds",
"slotadvanced",
"slotadvanced2",
"slotadvanced3",
"slotrare",
"slotlegend",
"fatestone",
"stonetwin",
"stonebreeze",
"stoneomen"
]
},
{
"key": "stonesanctum",
"node": "F09",
"cost": 180,
"parent": "stoneconstellation",
"reqStage": 5,
"reqDiff": 2,
"reqFull": false,
"name": "聖域石",
"desc": "A級卡牌開始出現聖域石。必定為稀有以上。",
"stat": "鎖定 -> 解鎖",
"kind": "",
"cat": "stone",
"cum": 615,
"needs": [
[
1,
1
],
[
3,
1
],
[
4,
1
],
[
5,
2
]
],
"chain": [
"slotodds",
"slotadvanced",
"slotadvanced2",
"slotadvanced3",
"slotrare",
"slotlegend",
"fatestone",
"stoneconstellation",
"stonesanctum"
]
},
{
"key": "stonerift",
"node": "F07",
"cost": 170,
"parent": "stonemastery",
"reqStage": 5,
"reqDiff": 2,
"reqFull": false,
"name": "裂隙石",
"desc": "B級卡牌開始出現裂隙石。不是普通，就是傳說·稜彩！",
"stat": "鎖定 -> 解鎖",
"kind": "",
"cat": "stone",
"cum": 695,
"needs": [
[
1,
1
],
[
3,
1
],
[
4,
1
],
[
5,
2
]
],
"chain": [
"slotodds",
"slotadvanced",
"slotadvanced2",
"slotadvanced3",
"slotrare",
"slotlegend",
"fatestone",
"stonespecial",
"stonemastery",
"stonerift"
]
},
{
"key": "stonegambit",
"node": "F10",
"cost": 230,
"parent": "stonesanctum",
"reqStage": 5,
"reqDiff": 2,
"reqFull": false,
"name": "勝負石",
"desc": "A級卡牌開始出現勝負石。不是高階，就是傳說·稜彩！",
"stat": "鎖定 -> 解鎖",
"kind": "",
"cat": "stone",
"cum": 845,
"needs": [
[
1,
1
],
[
3,
1
],
[
4,
1
],
[
5,
2
]
],
"chain": [
"slotodds",
"slotadvanced",
"slotadvanced2",
"slotadvanced3",
"slotrare",
"slotlegend",
"fatestone",
"stoneconstellation",
"stonesanctum",
"stonegambit"
]
},
{
"key": "maxhp",
"node": "A01",
"cost": 1,
"parent": "slotodds",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "額外生命 I",
"desc": "最大生命增加 1",
"stat": null,
"kind": "",
"cat": "supply",
"cum": 2,
"needs": [],
"chain": [
"slotodds",
"maxhp"
]
},
{
"key": "startgold",
"node": "A02",
"cost": 2,
"parent": "maxhp",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "初始補給",
"desc": "開局額外獲得 金幣 50",
"stat": "初始 金幣 450 -> 500",
"kind": "",
"cat": "supply",
"cum": 4,
"needs": [],
"chain": [
"slotodds",
"maxhp",
"startgold"
]
},
{
"key": "noviceshield",
"node": "A03",
"cost": 4,
"parent": "maxhp",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "新手護盾",
"desc": "在第 1~4 波次中，阻止首次生命損失一次。",
"stat": "首次生命損失 0 -> 1",
"kind": "",
"cat": "supply",
"cum": 6,
"needs": [],
"chain": [
"slotodds",
"maxhp",
"noviceshield"
]
},
{
"key": "startgold2",
"node": "A04",
"cost": 7,
"parent": "startgold",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "補給倉庫",
"desc": "開局額外獲得 金幣 50",
"stat": "初始 金幣 500 -> 550",
"kind": "",
"cat": "supply",
"cum": 11,
"needs": [],
"chain": [
"slotodds",
"maxhp",
"startgold",
"startgold2"
]
},
{
"key": "comebackgold",
"node": "A05",
"cost": 9,
"parent": "startgold",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "再戰補給",
"desc": "失敗後若繼續本局，獲得 金幣 100",
"stat": "失敗後 金幣 0 -> 100",
"kind": "",
"cat": "supply",
"cum": 13,
"needs": [],
"chain": [
"slotodds",
"maxhp",
"startgold",
"comebackgold"
]
},
{
"key": "startingmerccontract",
"node": "A07",
"cost": 12,
"parent": "startgold",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "出征補給",
"desc": "每次開始挑戰時，攜帶出征核心“傭兵契約書”。",
"stat": null,
"kind": "",
"cat": "supply",
"cum": 16,
"needs": [],
"chain": [
"slotodds",
"maxhp",
"startgold",
"startingmerccontract"
]
},
{
"key": "comebackspin",
"node": "A06",
"cost": 20,
"parent": "noviceshield",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "逆轉拉桿",
"desc": "失去生命後，保證下一次轉動中獎。每局 1 次。",
"stat": "首次轉動必定中獎",
"kind": "",
"cat": "supply",
"cum": 26,
"needs": [],
"chain": [
"slotodds",
"maxhp",
"noviceshield",
"comebackspin"
]
},
{
"key": "startessence",
"node": "A13",
"cost": 30,
"parent": "maxhp",
"reqStage": 2,
"reqDiff": 2,
"reqFull": false,
"name": "應急精華",
"desc": "開局攜帶 精髓 2。",
"stat": "開局 精髓 0 -> 2",
"kind": "",
"cat": "supply",
"cum": 32,
"needs": [
[
2,
2
]
],
"section": "要先買齊補給區域全部節點",
"sectionNeed": 14,
"sectionTotal": 14,
"chain": [
"slotodds",
"maxhp",
"startessence"
]
},
{
"key": "mercextend",
"node": "A12",
"cost": 18,
"parent": "startingmerccontract",
"reqStage": 1,
"reqDiff": 2,
"reqFull": false,
"name": "契約延長",
"desc": "傭兵契約書可多使用 1 次。",
"stat": "使用次數 2 -> 3",
"kind": "",
"cat": "supply",
"cum": 34,
"needs": [
[
1,
2
]
],
"chain": [
"slotodds",
"maxhp",
"startgold",
"startingmerccontract",
"mercextend"
]
},
{
"key": "maxhp2",
"node": "A11",
"cost": 22,
"parent": "comebackgold",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "額外生命 II",
"desc": "最大生命增加 1",
"stat": "6 -> 7",
"kind": "",
"cat": "supply",
"cum": 35,
"needs": [],
"chain": [
"slotodds",
"maxhp",
"startgold",
"comebackgold",
"maxhp2"
]
},
{
"key": "comebackgold2",
"node": "A16",
"cost": 35,
"parent": "comebackgold",
"reqStage": 2,
"reqDiff": 2,
"reqFull": false,
"name": "再戰補給 II",
"desc": "失敗後若繼續本局，獲得的 金幣 提高到 150。",
"stat": "失敗後 金幣 100 -> 150",
"kind": "",
"cat": "supply",
"cum": 48,
"needs": [
[
2,
2
]
],
"chain": [
"slotodds",
"maxhp",
"startgold",
"comebackgold",
"comebackgold2"
]
},
{
"key": "wingold",
"node": "A14",
"cost": 45,
"parent": "interest",
"reqStage": 2,
"reqDiff": 2,
"reqFull": false,
"name": "勝利津貼",
"desc": "每次贏得一波，額外獲得 金幣 5。",
"stat": "勝利時 金幣 +0 -> +5",
"kind": "",
"cat": "supply",
"cum": 64,
"needs": [
[
2,
2
]
],
"chain": [
"slotodds",
"maxhp",
"startgold",
"startgold2",
"interest",
"wingold"
]
},
{
"key": "gateheal",
"node": "A09",
"cost": 48,
"parent": "comebackspin",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "關口恢復",
"desc": "通關審判或首領波次後恢復 1 點生命。",
"stat": "生命恢復",
"kind": "",
"cat": "supply",
"cum": 74,
"needs": [],
"chain": [
"slotodds",
"maxhp",
"noviceshield",
"comebackspin",
"gateheal"
]
},
{
"key": "lastspin",
"node": "A15",
"cost": 70,
"parent": "wingold",
"reqStage": 3,
"reqDiff": 2,
"reqFull": false,
"name": "零錢轉動",
"desc": "每波最後一次轉動的費用減少 金幣 50。",
"stat": "最後一次轉動 金幣 -0 -> -50",
"kind": "",
"cat": "supply",
"cum": 134,
"needs": [
[
2,
2
],
[
3,
2
]
],
"chain": [
"slotodds",
"maxhp",
"startgold",
"startgold2",
"interest",
"wingold",
"lastspin"
]
},
{
"key": "maxunit",
"node": "B01",
"cost": 6,
"parent": "slotodds",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "指揮上限 I",
"desc": "最大部署單位數增加 1",
"stat": null,
"kind": "",
"cat": "units",
"cum": 7,
"needs": [],
"chain": [
"slotodds",
"maxunit"
]
},
{
"key": "factionsynergy",
"node": "B10",
"cost": 15,
"parent": "slotodds",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "聯盟紋章",
"desc": "解鎖陣營羈絆系統。",
"stat": "未啟用 -> 已啟用",
"kind": "",
"cat": "units",
"cum": 16,
"needs": [],
"chain": [
"slotodds",
"factionsynergy"
]
},
{
"key": "interest",
"node": "B03",
"cost": 8,
"parent": "startgold2",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "戰術利息",
"desc": "戰鬥開始時，每持有 金幣 100 獲得 金幣 10，最多 金幣 50",
"stat": "利息 金幣 0 -> 50",
"kind": "",
"cat": "units",
"cum": 19,
"needs": [],
"chain": [
"slotodds",
"maxhp",
"startgold",
"startgold2",
"interest"
]
},
{
"key": "growthbranch",
"node": "B05",
"cost": 45,
"parent": "maxunit",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "成長分支",
"desc": "單位轉職至3星時，可從3個特性各異的候選項中選擇1個。",
"stat": "3星特性選擇 未啟用 -> 已啟用",
"kind": "",
"cat": "units",
"cum": 52,
"needs": [],
"section": "要先買齊兵種區域（指揮上限三級、沉睡之力、7 個特質解鎖）",
"sectionNeed": 11,
"sectionTotal": 11,
"chain": [
"slotodds",
"maxunit",
"growthbranch"
]
},
{
"key": "unlock_faction_arcane",
"node": "P01",
"cost": 40,
"parent": "factionsynergy",
"reqStage": 2,
"reqDiff": 2,
"reqFull": false,
"name": "解鎖陣營：秘術",
"desc": "解鎖「秘術」陣營，之後才會出現這個陣營的職業。",
"kind": "faction",
"uid": "arcane",
"cat": "units",
"cum": 56,
"needs": [
[
2,
2
]
],
"chain": [
"slotodds",
"factionsynergy",
"unlock_faction_arcane"
]
},
{
"key": "maxunit2",
"node": "B06",
"cost": 70,
"parent": "maxunit",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "指揮上限 II",
"desc": "最大部署單位數再增加 1",
"stat": "6 -> 7",
"kind": "",
"cat": "units",
"cum": 77,
"needs": [],
"chain": [
"slotodds",
"maxunit",
"maxunit2"
]
},
{
"key": "dormantpower",
"node": "B04",
"cost": 12,
"parent": "maxunit2",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "沉睡之力",
"desc": "解鎖單位覺醒系統。",
"stat": "覺醒 未啟用 -> 已啟用",
"kind": "",
"cat": "units",
"cum": 89,
"needs": [],
"chain": [
"slotodds",
"maxunit",
"maxunit2",
"dormantpower"
]
},
{
"key": "unlock_trait_23",
"node": "T23",
"cost": 12,
"parent": "dormantpower",
"reqStage": 1,
"reqDiff": 2,
"reqFull": false,
"name": "精算好運",
"desc": "每透過微調或爆破形成2次新的中獎線，攻擊 +1%。",
"kind": "trait",
"uid": "23",
"cat": "units",
"cum": 101,
"needs": [
[
1,
2
]
],
"chain": [
"slotodds",
"maxunit",
"maxunit2",
"dormantpower",
"unlock_trait_23"
]
},
{
"key": "unlock_trait_11",
"node": "T11",
"cost": 24,
"parent": "unlock_trait_23",
"reqStage": 2,
"reqDiff": 2,
"reqFull": false,
"name": "血浴",
"desc": "每有一名友軍陣亡，攻擊 +4~8%。",
"kind": "trait",
"uid": "11",
"cat": "units",
"cum": 125,
"needs": [
[
1,
2
],
[
2,
2
]
],
"chain": [
"slotodds",
"maxunit",
"maxunit2",
"dormantpower",
"unlock_trait_23",
"unlock_trait_11"
]
},
{
"key": "unlock_faction_abyss",
"node": "P02",
"cost": 70,
"parent": "unlock_faction_arcane",
"reqStage": 3,
"reqDiff": 2,
"reqFull": false,
"name": "解鎖陣營：深淵",
"desc": "解鎖「深淵」陣營，之後才會出現這個陣營的職業。",
"kind": "faction",
"uid": "abyss",
"cat": "units",
"cum": 126,
"needs": [
[
2,
2
],
[
3,
2
]
],
"chain": [
"slotodds",
"factionsynergy",
"unlock_faction_arcane",
"unlock_faction_abyss"
]
},
{
"key": "unlock_trait_29",
"node": "T29",
"cost": 28,
"parent": "unlock_trait_23",
"reqStage": 2,
"reqDiff": 2,
"reqFull": false,
"name": "固定姿態",
"desc": "無法自主移動，但 +40，攻擊 +15%。",
"kind": "trait",
"uid": "29",
"cat": "units",
"cum": 129,
"needs": [
[
1,
2
],
[
2,
2
]
],
"chain": [
"slotodds",
"maxunit",
"maxunit2",
"dormantpower",
"unlock_trait_23",
"unlock_trait_29"
]
},
{
"key": "unlock_trait_25",
"node": "T25",
"cost": 28,
"parent": "unlock_trait_11",
"reqStage": 2,
"reqDiff": 2,
"reqFull": false,
"name": "狩獵本能",
"desc": "普通攻擊優先選擇可攻擊的敵人中目前 生命 最低的目標。",
"kind": "trait",
"uid": "25",
"cat": "units",
"cum": 153,
"needs": [
[
1,
2
],
[
2,
2
]
],
"chain": [
"slotodds",
"maxunit",
"maxunit2",
"dormantpower",
"unlock_trait_23",
"unlock_trait_11",
"unlock_trait_25"
]
},
{
"key": "unlock_trait_32",
"node": "T32",
"cost": 48,
"parent": "unlock_trait_29",
"reqStage": 3,
"reqDiff": 2,
"reqFull": false,
"name": "重量級",
"desc": "佔用2個單位名額，生命 +50%，攻擊 +35%。",
"kind": "trait",
"uid": "32",
"cat": "units",
"cum": 177,
"needs": [
[
1,
2
],
[
2,
2
],
[
3,
2
]
],
"chain": [
"slotodds",
"maxunit",
"maxunit2",
"dormantpower",
"unlock_trait_23",
"unlock_trait_29",
"unlock_trait_32"
]
},
{
"key": "unlock_trait_28",
"node": "T28",
"cost": 40,
"parent": "unlock_trait_25",
"reqStage": 3,
"reqDiff": 2,
"reqFull": false,
"name": "速攻",
"desc": "+40%。 攻擊 -30%。",
"kind": "trait",
"uid": "28",
"cat": "units",
"cum": 193,
"needs": [
[
1,
2
],
[
2,
2
],
[
3,
2
]
],
"chain": [
"slotodds",
"maxunit",
"maxunit2",
"dormantpower",
"unlock_trait_23",
"unlock_trait_11",
"unlock_trait_25",
"unlock_trait_28"
]
},
{
"key": "unlock_faction_undead",
"node": "P03",
"cost": 70,
"parent": "unlock_faction_abyss",
"reqStage": 3,
"reqDiff": 2,
"reqFull": false,
"name": "解鎖陣營：亡靈",
"desc": "解鎖「亡靈」陣營，之後才會出現這個陣營的職業。",
"kind": "faction",
"uid": "undead",
"cat": "units",
"cum": 196,
"needs": [
[
2,
2
],
[
3,
2
]
],
"chain": [
"slotodds",
"factionsynergy",
"unlock_faction_arcane",
"unlock_faction_abyss",
"unlock_faction_undead"
]
},
{
"key": "maxunit3",
"node": "B09",
"cost": 180,
"parent": "maxunit2",
"reqStage": null,
"reqDiff": null,
"reqFull": false,
"name": "指揮上限 III",
"desc": "最大部署單位數再增加 1",
"stat": "7 -> 8",
"kind": "",
"cat": "units",
"cum": 257,
"needs": [],
"chain": [
"slotodds",
"maxunit",
"maxunit2",
"maxunit3"
]
},
{
"key": "unlock_faction_celestial",
"node": "P04",
"cost": 120,
"parent": "unlock_faction_undead",
"reqStage": 4,
"reqDiff": 1,
"reqFull": false,
"name": "解鎖陣營：天界",
"desc": "解鎖「天界」陣營，之後才會出現這個陣營的職業。",
"kind": "faction",
"uid": "celestial",
"cat": "units",
"cum": 316,
"needs": [
[
2,
2
],
[
3,
2
],
[
4,
1
]
],
"chain": [
"slotodds",
"factionsynergy",
"unlock_faction_arcane",
"unlock_faction_abyss",
"unlock_faction_undead",
"unlock_faction_celestial"
]
},
{
"key": "unlock_trait_26",
"node": "T26",
"cost": 130,
"parent": "unlock_trait_28",
"reqStage": 4,
"reqDiff": 2,
"reqFull": false,
"name": "多才多藝",
"desc": "無論自身系別如何，都能獲得目前持有的所有系別基礎訓練書的效果。",
"kind": "trait",
"uid": "26",
"cat": "units",
"cum": 323,
"needs": [
[
1,
2
],
[
2,
2
],
[
3,
2
],
[
4,
2
]
],
"chain": [
"slotodds",
"maxunit",
"maxunit2",
"dormantpower",
"unlock_trait_23",
"unlock_trait_11",
"unlock_trait_25",
"unlock_trait_28",
"unlock_trait_26"
]
}
],
"stones": [
{
"key": "OriginStone",
"id": "01",
"grade": "C",
"name": "起源石",
"probs": {
"normal": 0.55,
"advanced": 0.33,
"rare": 0.11,
"legendary": 0.008,
"prism": 0.002
},
"lines": 1,
"pick": null,
"rankTarget": null,
"special": null,
"unlock": "",
"desc": "",
"rare_up": null
},
{
"key": "BreezeStone",
"id": "02",
"grade": "C",
"name": "微風石",
"probs": {
"normal": 0.7,
"advanced": 0.1,
"rare": 0.18,
"legendary": 0.017,
"prism": 0.003
},
"lines": 1,
"pick": null,
"rankTarget": null,
"special": null,
"unlock": "stonebreeze",
"desc": "",
"unlockCost": 90,
"unlockCum": 460,
"unlockNeeds": [
[
1,
1
],
[
3,
1
],
[
4,
1
],
[
5,
2
]
],
"rare_up": null
},
{
"key": "TwinStone",
"id": "03",
"grade": "C",
"name": "雙子石",
"probs": {
"normal": 0.7,
"advanced": 0.24,
"rare": 0.055,
"legendary": 0.004,
"prism": 0.001
},
"lines": 2,
"pick": null,
"rankTarget": null,
"special": null,
"unlock": "stonetwin",
"desc": "召喚2名單位",
"unlockCost": 45,
"unlockCum": 370,
"unlockNeeds": [
[
1,
1
],
[
3,
1
],
[
4,
1
]
],
"rare_up": null
},
{
"key": "OmenStone",
"id": "04",
"grade": "C",
"name": "占卜石",
"probs": {
"normal": 0.55,
"advanced": 0.33,
"rare": 0.11,
"legendary": 0.008,
"prism": 0.002
},
"lines": 1,
"pick": 3,
"rankTarget": null,
"special": null,
"unlock": "stoneomen",
"desc": "從3名候選單位中選擇1名",
"unlockCost": 120,
"unlockCum": 580,
"unlockNeeds": [
[
1,
1
],
[
3,
1
],
[
4,
1
],
[
5,
2
]
],
"rare_up": null
},
{
"key": "MileStone",
"id": "08",
"grade": "B",
"name": "里程石",
"probs": {
"normal": 0.4,
"advanced": 0.38,
"rare": 0.19,
"legendary": 0.025,
"prism": 0.005
},
"lines": 1,
"pick": null,
"rankTarget": null,
"special": null,
"unlock": "",
"desc": "",
"rare_up": null
},
{
"key": "RiftStone",
"id": "09",
"grade": "B",
"name": "裂隙石",
"probs": {
"normal": 0.9,
"advanced": 0,
"rare": 0,
"legendary": 0.09,
"prism": 0.01
},
"lines": 1,
"pick": null,
"rankTarget": null,
"special": null,
"unlock": "stonerift",
"desc": "",
"unlockCost": 170,
"unlockCum": 695,
"unlockNeeds": [
[
1,
1
],
[
3,
1
],
[
4,
1
],
[
5,
2
]
],
"rare_up": null
},
{
"key": "SpecialStone",
"id": "10",
"grade": "B",
"name": "特殊石",
"probs": {
"normal": 0.35,
"advanced": 0.3,
"rare": 0.17,
"legendary": 0.025,
"prism": 0.005
},
"lines": 1,
"pick": null,
"rankTarget": null,
"special": 0.15,
"unlock": "stonespecial",
"desc": "",
"unlockCost": 70,
"unlockCum": 395,
"unlockNeeds": [
[
1,
1
],
[
3,
1
],
[
4,
1
]
],
"rare_up": null
},
{
"key": "MasteryStone",
"id": "11",
"grade": "B",
"name": "熟練石",
"probs": {
"normal": 0.6,
"advanced": 0.3,
"rare": 0.09,
"legendary": 0.008,
"prism": 0.002
},
"lines": 1,
"pick": null,
"rankTarget": 2,
"special": null,
"unlock": "stonemastery",
"desc": "階級 2：召喚1名單位 從2種職業中選擇",
"unlockCost": 130,
"unlockCum": 525,
"unlockNeeds": [
[
1,
1
],
[
3,
1
],
[
4,
1
],
[
5,
2
]
],
"rare_up": null
},
{
"key": "BlessingStone",
"id": "14",
"grade": "A",
"name": "祝福石",
"probs": {
"normal": 0.2,
"advanced": 0.45,
"rare": 0.28,
"legendary": 0.06,
"prism": 0.01
},
"lines": 1,
"pick": null,
"rankTarget": null,
"special": null,
"unlock": "",
"desc": "",
"rare_up": null
},
{
"key": "GambitStone",
"id": "15",
"grade": "A",
"name": "勝負石",
"probs": {
"normal": 0,
"advanced": 0.85,
"rare": 0,
"legendary": 0.135,
"prism": 0.015
},
"lines": 1,
"pick": null,
"rankTarget": null,
"special": null,
"unlock": "stonegambit",
"desc": "",
"unlockCost": 230,
"unlockCum": 845,
"unlockNeeds": [
[
1,
1
],
[
3,
1
],
[
4,
1
],
[
5,
2
]
],
"rare_up": null
},
{
"key": "ConstellationStone",
"id": "16",
"grade": "A",
"name": "星群石",
"probs": {
"normal": 0.4,
"advanced": 0.42,
"rare": 0.15,
"legendary": 0.026,
"prism": 0.004
},
"lines": 3,
"pick": null,
"rankTarget": null,
"special": null,
"unlock": "stoneconstellation",
"desc": "召喚3名單位",
"unlockCost": 110,
"unlockCum": 435,
"unlockNeeds": [
[
1,
1
],
[
3,
1
],
[
4,
1
]
],
"rare_up": null
},
{
"key": "SanctumStone",
"id": "17",
"grade": "A",
"name": "聖域石",
"probs": {
"normal": 0,
"advanced": 0,
"rare": 0.97,
"legendary": 0.027,
"prism": 0.003
},
"lines": 1,
"pick": null,
"rankTarget": null,
"special": null,
"unlock": "stonesanctum",
"desc": "",
"unlockCost": 180,
"unlockCum": 615,
"unlockNeeds": [
[
1,
1
],
[
3,
1
],
[
4,
1
],
[
5,
2
]
],
"rare_up": null
},
{
"key": "ZenithStone",
"id": "20",
"grade": "S",
"name": "巔峰石",
"probs": {
"normal": 0,
"advanced": 0.2,
"rare": 0.6,
"legendary": 0.17,
"prism": 0.03
},
"lines": 1,
"pick": null,
"rankTarget": null,
"special": null,
"unlock": "",
"desc": "",
"rare_up": null
},
{
"key": "EclipseStone",
"id": "21",
"grade": "S",
"name": "日蝕石",
"probs": {
"normal": 0,
"advanced": 0.5,
"rare": 0.45,
"legendary": 0,
"prism": 0.05
},
"lines": 1,
"pick": null,
"rankTarget": null,
"special": null,
"unlock": "",
"desc": "",
"rare_up": null
},
{
"key": "GalaxyStone",
"id": "22",
"grade": "S",
"name": "銀河石",
"probs": {
"normal": 0,
"advanced": 0.6,
"rare": 0.36,
"legendary": 0.035,
"prism": 0.005
},
"lines": 1,
"pick": null,
"rankTarget": 3,
"special": null,
"unlock": "",
"desc": "階級 3：召喚1名單位 從2種職業中選擇",
"rare_up": null
}
],
"standPrice": {
"easy": {
"B": 20,
"C": 10,
"A": 40
},
"normal": {
"B": 40,
"C": 20,
"A": 75
},
"hard": {
"B": 80,
"C": 40,
"A": 150
},
"endless": {
"B": 120,
"C": 60,
"A": 225
}
},
"quests": [
{
"id": "A01",
"grade": "A",
"name": "風暴豐收",
"desc": "8波內中獎11次",
"descBlast": ""
},
{
"id": "A02",
"grade": "A",
"name": "完全體",
"desc": "10波內將1個單位轉職至階級 3",
"descBlast": ""
},
{
"id": "A03",
"grade": "A",
"name": "刻印大師",
"desc": "7波內將1個刻印升至4級",
"descBlast": ""
},
{
"id": "A04",
"grade": "A",
"name": "無傷五連",
"desc": "連續贏得5波 出戰單位不得陣亡",
"descBlast": ""
},
{
"id": "A05",
"grade": "A",
"name": "壓倒三連",
"desc": "連續贏得3波 每戰結束時 全隊合計 生命至少80%",
"descBlast": ""
},
{
"id": "A06",
"grade": "A",
"name": "微調大師",
"desc": "9波內 靠微調中獎4次",
"descBlast": "9波內 靠爆破中獎4次"
},
{
"id": "A07",
"grade": "A",
"name": "孤立遠征",
"desc": "連續贏得7波 禁止微調 和使用商店",
"descBlast": "連續贏得7波 禁止爆破 和使用商店"
},
{
"id": "A08",
"grade": "A",
"name": "五系首領",
"desc": "擊敗下一個首領 派出至少5種系別",
"descBlast": ""
},
{
"id": "A09",
"grade": "A",
"name": "連闖關卡",
"desc": "贏得下一次審判波 和首領戰 每戰陣亡 不超過1個",
"descBlast": ""
},
{
"id": "A10",
"grade": "A",
"name": "鎖住的金庫",
"desc": "連續贏得4波 每戰開始時 持有至少金幣1500",
"descBlast": ""
},
{
"id": "A11",
"grade": "A",
"name": "三人終結",
"desc": "擊敗下一個首領 出戰單位 不超過3個",
"descBlast": ""
},
{
"id": "A12",
"grade": "A",
"name": "壓倒性攻略",
"desc": "擊敗下一個首領 結束時全隊合計 生命至少50%",
"descBlast": ""
},
{
"id": "A13",
"grade": "A",
"name": "堅韌大軍",
"desc": "擊敗下一個首領 至少派出4個單位 陣亡不超過1個",
"descBlast": ""
},
{
"id": "A14",
"grade": "A",
"name": "一系首領戰",
"desc": "擊敗下一個首領 僅派出同一系別 至少4個單位",
"descBlast": ""
},
{
"id": "A15",
"grade": "A",
"name": "雙刻印加深",
"desc": "8波內將 2個單位的刻印 升至3級",
"descBlast": ""
},
{
"id": "A16",
"grade": "A",
"name": "雙重結盟",
"desc": "連續贏得3波 啟用至少2個 陣營羈絆",
"descBlast": ""
},
{
"id": "B01",
"grade": "B",
"name": "豐收如雨",
"desc": "8波內中獎9次",
"descBlast": ""
},
{
"id": "B02",
"grade": "B",
"name": "雙二星",
"desc": "8波內將2個單位轉職至階級 2",
"descBlast": ""
},
{
"id": "B03",
"grade": "B",
"name": "刻印加深",
"desc": "5波內將1個刻印升至3級",
"descBlast": ""
},
{
"id": "B04",
"grade": "B",
"name": "無傷四連",
"desc": "連續贏得4波 出戰單位不得陣亡",
"descBlast": ""
},
{
"id": "B05",
"grade": "B",
"name": "健康四連",
"desc": "連續贏得4波 每戰結束時 全隊合計 生命至少70%",
"descBlast": ""
},
{
"id": "B06",
"grade": "B",
"name": "封印微調",
"desc": "連續贏得8波 禁止微調",
"descBlast": "連續贏得8波 禁止爆破"
},
{
"id": "B07",
"grade": "B",
"name": "自給自足",
"desc": "連續贏得8波 禁止使用商店",
"descBlast": ""
},
{
"id": "B08",
"grade": "B",
"name": "停滯成長",
"desc": "連續贏得4波 禁止吸收",
"descBlast": ""
},
{
"id": "B09",
"grade": "B",
"name": "差之毫釐",
"desc": "8波內 靠微調中獎3次",
"descBlast": "8波內 靠爆破中獎3次"
},
{
"id": "B10",
"grade": "B",
"name": "戰爭資金",
"desc": "連續贏得4波 每戰開始時 持有至少金幣1000",
"descBlast": ""
},
{
"id": "B11",
"grade": "B",
"name": "一次三中",
"desc": "單波內中獎3次",
"descBlast": ""
},
{
"id": "B12",
"grade": "B",
"name": "無損攻略",
"desc": "贏得下一次審判波 出戰單位不得陣亡",
"descBlast": ""
},
{
"id": "B13",
"grade": "B",
"name": "少而精",
"desc": "擊敗下一個首領 最多4個單位 陣亡不超過1個",
"descBlast": ""
},
{
"id": "B14",
"grade": "B",
"name": "二星之力",
"desc": "擊敗下一個首領 派出至少2個 階級 2及以上單位",
"descBlast": ""
},
{
"id": "B15",
"grade": "B",
"name": "三人審判",
"desc": "贏得下一次審判波 出戰單位 不超過3個",
"descBlast": ""
},
{
"id": "B16",
"grade": "B",
"name": "一系審判",
"desc": "贏得下一次審判波 僅派出同一系別 至少3個單位",
"descBlast": ""
},
{
"id": "B17",
"grade": "B",
"name": "結盟",
"desc": "連續贏得3波 啟用至少1個 陣營羈絆",
"descBlast": ""
},
{
"id": "B18",
"grade": "B",
"name": "雙線好運",
"desc": "8波內單次轉動中獎2條線",
"descBlast": ""
},
{
"id": "C01",
"grade": "C",
"name": "豐收",
"desc": "6波內中獎6次",
"descBlast": ""
},
{
"id": "C02",
"grade": "C",
"name": "首次轉職",
"desc": "4波內將1個單位轉職至階級 2",
"descBlast": ""
},
{
"id": "C03",
"grade": "C",
"name": "熟練者",
"desc": "5波內讓1個單位裝備2個刻印",
"descBlast": ""
},
{
"id": "C04",
"grade": "C",
"name": "集中吸收",
"desc": "6波內吸收5次",
"descBlast": ""
},
{
"id": "C05",
"grade": "C",
"name": "無傷三連",
"desc": "連續贏得3波 出戰單位不得陣亡",
"descBlast": ""
},
{
"id": "C06",
"grade": "C",
"name": "健康三連",
"desc": "連續贏得3波 每戰結束時 全隊合計 生命至少70%",
"descBlast": ""
},
{
"id": "C07",
"grade": "C",
"name": "無為而勝",
"desc": "連續贏得6波 禁止微調",
"descBlast": "連續贏得6波 禁止爆破"
},
{
"id": "C08",
"grade": "C",
"name": "無店遠征",
"desc": "連續贏得6波 禁止使用商店",
"descBlast": ""
},
{
"id": "C09",
"grade": "C",
"name": "兩次機會",
"desc": "連續贏得5波 每波最多轉動2次",
"descBlast": ""
},
{
"id": "C10",
"grade": "C",
"name": "儲備資金",
"desc": "連續贏得3波 每戰開始時 持有至少金幣500",
"descBlast": ""
},
{
"id": "C11",
"grade": "C",
"name": "同一旗幟",
"desc": "連續贏得3波 派出至少3個 同系別單位",
"descBlast": ""
},
{
"id": "C12",
"grade": "C",
"name": "四人審判",
"desc": "贏得下一次審判波 最多4個單位 陣亡不超過1個",
"descBlast": ""
},
{
"id": "C13",
"grade": "C",
"name": "健康審判",
"desc": "贏得下一次審判波 結束時全隊合計 生命至少50%",
"descBlast": ""
},
{
"id": "C14",
"grade": "C",
"name": "兩名新兵",
"desc": "贏得下一次審判波 至少2個階級 1 單位存活",
"descBlast": ""
},
{
"id": "C15",
"grade": "C",
"name": "四系審判",
"desc": "贏得下一次審判波 派出至少4種系別",
"descBlast": ""
},
{
"id": "C16",
"grade": "C",
"name": "一次兩中",
"desc": "4波內 單波內中獎2次",
"descBlast": ""
},
{
"id": "C17",
"grade": "C",
"name": "一步之差",
"desc": "7波內靠微調中獎2次",
"descBlast": "7波內靠爆破中獎2次"
},
{
"id": "C18",
"grade": "C",
"name": "五人陣列",
"desc": "連續贏得4波 每戰派出 至少5個單位",
"descBlast": ""
},
{
"id": "S01",
"grade": "S",
"name": "連續攻略",
"desc": "連續贏得接下來的 2次審判波 出戰單位不得陣亡",
"descBlast": ""
},
{
"id": "S02",
"grade": "S",
"name": "無盡豐收",
"desc": "10波內中獎13次",
"descBlast": ""
},
{
"id": "S03",
"grade": "S",
"name": "無傷七連",
"desc": "連續贏得7波 出戰單位不得陣亡",
"descBlast": ""
},
{
"id": "S04",
"grade": "S",
"name": "刻印巔峰",
"desc": "9波內將1個刻印升至5級",
"descBlast": ""
},
{
"id": "S05",
"grade": "S",
"name": "三人二星",
"desc": "10波內將3個單位轉職至階級 2",
"descBlast": ""
},
{
"id": "S06",
"grade": "S",
"name": "雙完全體",
"desc": "14波內將2個單位轉職至階級 3",
"descBlast": ""
},
{
"id": "S07",
"grade": "S",
"name": "鐵壁五連",
"desc": "連續贏得5波 每戰結束時 全隊合計 生命至少70%",
"descBlast": ""
},
{
"id": "S08",
"grade": "S",
"name": "結盟軍團",
"desc": "連續贏得5波 啟用至少2個 陣營羈絆 出戰單位不得陣亡",
"descBlast": ""
}
],
"originite": {
"mapMult": [
1,
2,
4,
6,
9,
13
],
"mapMultSpare": [
18,
24
],
"diffMult": [
1,
2,
3
],
"maps": [
{
"n": 1,
"name": "開闊森林",
"mult": 1,
"runs": [
{
"diff": 1,
"waves": 10,
"gates": 2,
"run": 3,
"first": 6,
"perWave": 0.3
},
{
"diff": 2,
"waves": 20,
"gates": 4,
"run": 20,
"first": 40,
"perWave": 1.0
},
{
"diff": 3,
"waves": 30,
"gates": 6,
"run": 63,
"first": 126,
"perWave": 2.1
}
]
},
{
"n": 2,
"name": "深邃洞窟",
"mult": 2,
"runs": [
{
"diff": 1,
"waves": 10,
"gates": 2,
"run": 6,
"first": 12,
"perWave": 0.6
},
{
"diff": 2,
"waves": 20,
"gates": 4,
"run": 40,
"first": 80,
"perWave": 2.0
},
{
"diff": 3,
"waves": 30,
"gates": 6,
"run": 126,
"first": 252,
"perWave": 4.2
}
]
},
{
"n": 3,
"name": "荒原",
"mult": 4,
"runs": [
{
"diff": 1,
"waves": 10,
"gates": 2,
"run": 12,
"first": 24,
"perWave": 1.2
},
{
"diff": 2,
"waves": 20,
"gates": 4,
"run": 80,
"first": 160,
"perWave": 4.0
},
{
"diff": 3,
"waves": 30,
"gates": 6,
"run": 252,
"first": 504,
"perWave": 8.4
}
]
},
{
"n": 4,
"name": "失落遺蹟",
"mult": 6,
"runs": [
{
"diff": 1,
"waves": 10,
"gates": 2,
"run": 18,
"first": 36,
"perWave": 1.8
},
{
"diff": 2,
"waves": 20,
"gates": 4,
"run": 120,
"first": 240,
"perWave": 6.0
},
{
"diff": 3,
"waves": 30,
"gates": 6,
"run": 378,
"first": 756,
"perWave": 12.6
}
]
},
{
"n": 5,
"name": "猩紅地獄",
"mult": 9,
"runs": [
{
"diff": 1,
"waves": 10,
"gates": 2,
"run": 27,
"first": 54,
"perWave": 2.7
},
{
"diff": 2,
"waves": 20,
"gates": 4,
"run": 180,
"first": 360,
"perWave": 9.0
},
{
"diff": 3,
"waves": 30,
"gates": 6,
"run": 567,
"first": 1134,
"perWave": 18.9
}
]
},
{
"n": 6,
"name": "冰冷宇宙",
"mult": 13,
"runs": [
{
"diff": 1,
"waves": 10,
"gates": 2,
"run": 39,
"first": 78,
"perWave": 3.9
},
{
"diff": 2,
"waves": 20,
"gates": 4,
"run": 260,
"first": 520,
"perWave": 13.0
},
{
"diff": 3,
"waves": 30,
"gates": 6,
"run": 819,
"first": 1638,
"perWave": 27.3
}
]
}
],
"maxStages": 6,
"endless": {
"stageMult": [
1,
2,
4,
6,
9,
13
],
"hardMult": 3,
"hardToWave": 30,
"deepGate": 20,
"loopFrom": 30,
"doorFrom": 40,
"depthFrom": 41,
"royalBonus": 0.25,
"overtimeFrom": 31
}
}
};
