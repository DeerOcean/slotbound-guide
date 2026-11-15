window.SB_DATA = window.SB_DATA || {};
window.SB_DATA.factions = {
 "meta": {
  "generator": "tools/extract/extract_factions.py",
  "sources": [
   "decompiled/src/data/faction.lua",
   "decompiled/src/game/promotion.lua",
   "decompiled/src/game/promotion_stats.lua",
   "decompiled/src/game/combat.lua",
   "dump/str/36708b61fe.txt"
  ],
  "method": "陣營：靜態解析 Lua table；職業樹：以 LOVE(LuaJIT) 實際執行 getPromotionOptions，窮舉 符號x階級x稀有度x吸收軸x隨機種子（每組 40 次）",
  "maxRankByGrade": "constants.lua 的 evolution.maxRankByGrade 所有稀有度皆為 3，所以 rank 4/5 一般流程不可達",
  "factionSourceLines": {
   "idsLines": [
    21,
    32
   ],
   "defsLines": [
    34,
    186
   ],
   "membersLines": [
    301,
    458
   ],
   "unlockLines": [
    518,
    525
   ],
   "fnLines": {
    "isFactionUnlocked": 527,
    "countUniqueTypes": 686,
    "getForUnit": 593
   }
  },
  "checks": {
   "factionMemberCounts": {
    "empire": {
     "actual": 23,
     "noteB-units": 23,
     "match": true
    },
    "outlaw": {
     "actual": 15,
     "noteB-units": 15,
     "match": true
    },
    "forest": {
     "actual": 20,
     "noteB-units": 20,
     "match": true
    },
    "tribe": {
     "actual": 15,
     "noteB-units": 15,
     "match": true
    },
    "abyss": {
     "actual": 14,
     "noteB-units": 14,
     "match": true
    },
    "celestial": {
     "actual": 8,
     "noteB-units": 8,
     "match": true
    },
    "arcane": {
     "actual": 10,
     "noteB-units": 10,
     "match": true
    },
    "undead": {
     "actual": 16,
     "noteB-units": 16,
     "match": true
    },
    "holy": {
     "actual": 9,
     "noteB-units": 9,
     "match": true
    },
    "engineer": {
     "actual": 6,
     "noteB-units": 6,
     "match": true
    }
   },
   "jobsTotal": 225,
   "jobsByRank": {
    "2": 64,
    "3": 73,
    "4": 34,
    "5": 29
   },
   "jobsMissingNameZh": 1,
   "jobsInTree": 198,
   "membersWithoutJob": 0
  },
  "simplifiedCharHits": []
 },
 "factions": [
  {
   "id": "empire",
   "nameZh": "帝國",
   "thresholds": [
    2,
    4,
    6
   ],
   "values": [
    10,
    16,
    22
   ],
   "effectNameZh": "帝國之盾",
   "conditionZh": "戰鬥開始時施加給所有帝國單位",
   "footerZh": null,
   "tierTextsZh": [
    "獲得最大{hp.png}10%的護盾",
    "獲得最大{hp.png}16%的護盾",
    "獲得最大{hp.png}22%的護盾"
   ],
   "effectZh": "帝國之盾：戰鬥開始時施加給所有帝國單位。2種 獲得最大{hp.png}10%的護盾；4種 獲得最大{hp.png}16%的護盾；6種 獲得最大{hp.png}22%的護盾",
   "extra": {},
   "unlockedByDefault": true,
   "members": [
    "MiniSwordMan02",
    "병사",
    "MiniSwordMan03",
    "기사",
    "MiniArcherMan02",
    "석궁수",
    "MiniArcherMan03",
    "장궁병",
    "MiniSpearMan02",
    "창위병",
    "MiniSpearMan03",
    "근위병",
    "돌격병",
    "MiniHorseMan03",
    "중기병",
    "황제",
    "검황",
    "고대 창병",
    "스파르타",
    "후사르",
    "윙드 후사르",
    "창술사",
    "랜스마스터"
   ],
   "memberCount": 23,
   "source": "decompiled/src/data/faction.lua:35-49（門檻與數值）；成員 :302-326；預設解鎖表 :518-525；isFactionUnlocked :527",
   "combatRefs": "decompiled/src/game/combat.lua 出現該陣營 id 的行：2265,2266",
   "membersResolved": {
    "MiniSwordMan02": [
     "W:MiniSwordMan02:r2"
    ],
    "병사": [
     "W:MiniSwordMan02:r2"
    ],
    "MiniSwordMan03": [
     "W:MiniSwordMan03:r3",
     "W:MiniSwordMan03:r4",
     "W:MiniSwordMan03:r5"
    ],
    "기사": [
     "W:MiniSwordMan03:r3",
     "W:MiniSwordMan03:r4",
     "W:MiniSwordMan03:r5"
    ],
    "MiniArcherMan02": [
     "A:MiniArcherMan02:r2"
    ],
    "석궁수": [
     "A:MiniArcherMan02:r2"
    ],
    "MiniArcherMan03": [
     "A:MiniArcherMan03:r3",
     "A:MiniArcherMan03:r4",
     "A:MiniArcherMan03:r5"
    ],
    "장궁병": [
     "A:MiniArcherMan03:r3",
     "A:MiniArcherMan03:r4",
     "A:MiniArcherMan03:r5"
    ],
    "MiniSpearMan02": [
     "S:MiniSpearMan02:r2"
    ],
    "창위병": [
     "S:MiniSpearMan02:r2"
    ],
    "MiniSpearMan03": [
     "S:MiniSpearMan03:r3",
     "S:MiniSpearMan03:r4",
     "S:MiniSpearMan03:r5"
    ],
    "근위병": [
     "S:MiniSpearMan03:r3",
     "S:MiniSpearMan03:r4",
     "S:MiniSpearMan03:r5"
    ],
    "돌격병": [
     "H:돌격병:r2"
    ],
    "MiniHorseMan03": [
     "H:MiniHorseMan03:r3",
     "H:MiniHorseMan03:r4",
     "H:MiniHorseMan03:r5"
    ],
    "중기병": [
     "H:MiniHorseMan03:r3",
     "H:MiniHorseMan03:r4",
     "H:MiniHorseMan03:r5"
    ],
    "황제": [
     "D:황제:r2"
    ],
    "검황": [
     "D:검황:r3",
     "D:검황:r4",
     "D:검황:r5"
    ],
    "고대 창병": [
     "S:고대 창병:r2"
    ],
    "스파르타": [
     "S:스파르타:r3"
    ],
    "후사르": [
     "H:후사르:r2"
    ],
    "윙드 후사르": [
     "H:윙드 후사르:r3"
    ],
    "창술사": [
     "S:창술사:r2"
    ],
    "랜스마스터": [
     "S:랜스마스터:r3"
    ]
   },
   "byClassExtraAliases": [
    "Ancient Spearman",
    "Hussar",
    "Lance Master",
    "Spartan",
    "Spear Adept",
    "Winged Hussar",
    "랜스마스터 (Lance Master)",
    "윙드 후사르 (Winged Hussar)",
    "창술사 (Spear Adept)",
    "후사르 (Hussar)"
   ]
  },
  {
   "id": "outlaw",
   "nameZh": "亡命",
   "thresholds": [
    2,
    4,
    6
   ],
   "values": [
    15,
    25,
    40
   ],
   "effectNameZh": "致命一擊",
   "conditionZh": "攻擊{hp.png}不高於40%的敵人時生效",
   "footerZh": null,
   "tierTextsZh": [
    "傷害 +15%",
    "傷害 +25%",
    "傷害 +40%"
   ],
   "effectZh": "致命一擊：攻擊{hp.png}不高於40%的敵人時生效。2種 傷害 +15%；4種 傷害 +25%；6種 傷害 +40%",
   "extra": {},
   "unlockedByDefault": true,
   "members": [
    "해적",
    "해적대장",
    "해적왕",
    "약탈자",
    "무법자",
    "도끼 기병",
    "무법 기병",
    "베테랑",
    "장군",
    "레인저",
    "데드아이",
    "화포수",
    "캐노니어",
    "투기 창병",
    "글래디에이터"
   ],
   "memberCount": 15,
   "source": "decompiled/src/data/faction.lua:50-64（門檻與數值）；成員 :327-343；預設解鎖表 :518-525；isFactionUnlocked :527",
   "combatRefs": "decompiled/src/game/combat.lua 出現該陣營 id 的行：2289,2290",
   "membersResolved": {
    "해적": [
     "W:해적:r2"
    ],
    "해적대장": [
     "orphan:해적대장"
    ],
    "해적왕": [
     "D:해적왕:r2",
     "W:해적왕:r3",
     "W:해적왕:r4",
     "W:해적왕:r5"
    ],
    "약탈자": [
     "S:약탈자:r2"
    ],
    "무법자": [
     "S:무법자:r3"
    ],
    "도끼 기병": [
     "H:도끼 기병:r2"
    ],
    "무법 기병": [
     "H:무법 기병:r3"
    ],
    "베테랑": [
     "D:베테랑:r2"
    ],
    "장군": [
     "D:장군:r3"
    ],
    "레인저": [
     "A:레인저:r2"
    ],
    "데드아이": [
     "A:데드아이:r3"
    ],
    "화포수": [
     "A:화포수:r2"
    ],
    "캐노니어": [
     "A:캐노니어:r3"
    ],
    "투기 창병": [
     "S:투기 창병:r2"
    ],
    "글래디에이터": [
     "S:글래디에이터:r3"
    ]
   },
   "byClassExtraAliases": [
    "Arena Spearman",
    "Gladiator"
   ]
  },
  {
   "id": "forest",
   "nameZh": "森林",
   "thresholds": [
    2,
    4,
    6
   ],
   "values": [
    10,
    16,
    22
   ],
   "effectNameZh": "再生",
   "conditionZh": "森林單位的{hp.png}首次降至50%以下時觸發",
   "footerZh": "每場戰鬥1次",
   "tierTextsZh": [
    "恢復10%最大{hp.png}",
    "恢復16%最大{hp.png}",
    "恢復22%最大{hp.png}"
   ],
   "effectZh": "再生：森林單位的{hp.png}首次降至50%以下時觸發（每場戰鬥1次）。2種 恢復10%最大{hp.png}；4種 恢復16%最大{hp.png}；6種 恢復22%最大{hp.png}",
   "extra": {},
   "unlockedByDefault": true,
   "members": [
    "엘프병사",
    "엘프 병사",
    "엘프기사",
    "엘프 기사",
    "엘프궁수",
    "엘프 궁수",
    "하이 엘프",
    "엘프 보병",
    "하이 엘프 보병",
    "엘프법사",
    "엘프 법사",
    "엘프 현자",
    "엘프 기병",
    "하이 엘프 기병",
    "엔트",
    "엔트로드",
    "수정술사",
    "운디네",
    "실반",
    "숲의 심장"
   ],
   "memberCount": 20,
   "source": "decompiled/src/data/faction.lua:65-80（門檻與數值）；成員 :344-365；預設解鎖表 :518-525；isFactionUnlocked :527",
   "combatRefs": "decompiled/src/game/combat.lua 出現該陣營 id 的行：2505,2507,2533",
   "membersResolved": {
    "엘프병사": [
     "W:엘프병사:r2"
    ],
    "엘프 병사": [
     "W:엘프병사:r2"
    ],
    "엘프기사": [
     "W:엘프기사:r3",
     "W:엘프기사:r4",
     "W:엘프기사:r5"
    ],
    "엘프 기사": [
     "W:엘프기사:r3",
     "W:엘프기사:r4",
     "W:엘프기사:r5"
    ],
    "엘프궁수": [
     "A:엘프 궁수:r2",
     "A:엘프궁수:r2"
    ],
    "엘프 궁수": [
     "A:엘프 궁수:r2",
     "A:엘프궁수:r2"
    ],
    "하이 엘프": [
     "A:하이 엘프:r3"
    ],
    "엘프 보병": [
     "S:엘프 보병:r2"
    ],
    "하이 엘프 보병": [
     "S:하이 엘프 보병:r3"
    ],
    "엘프법사": [
     "M:엘프법사:r2"
    ],
    "엘프 법사": [
     "M:엘프법사:r2"
    ],
    "엘프 현자": [
     "M:엘프 현자:r3"
    ],
    "엘프 기병": [
     "H:엘프 기병:r2"
    ],
    "하이 엘프 기병": [
     "H:하이 엘프 기병:r3"
    ],
    "엔트": [
     "D:엔트:r2"
    ],
    "엔트로드": [
     "D:엔트로드:r3"
    ],
    "수정술사": [
     "M:수정술사:r2"
    ],
    "운디네": [
     "M:운디네:r3"
    ],
    "실반": [
     "H:실반:r2"
    ],
    "숲의 심장": [
     "H:숲의 심장:r3"
    ]
   },
   "byClassExtraAliases": [
    "Crystal Mage",
    "Sylvan",
    "Undine",
    "Wildheart",
    "숲의 심장 (Wildheart)",
    "실반 (Sylvan)"
   ]
  },
  {
   "id": "tribe",
   "nameZh": "部族",
   "thresholds": [
    2,
    4,
    6
   ],
   "values": [
    8,
    14,
    20
   ],
   "effectNameZh": "戰爭氣勢",
   "conditionZh": "持續至第一個部族單位倒下",
   "footerZh": null,
   "tierTextsZh": [
    "{aspd.png} +8%",
    "{aspd.png} +14%",
    "{aspd.png} +20%"
   ],
   "effectZh": "戰爭氣勢：持續至第一個部族單位倒下。2種 {aspd.png} +8%；4種 {aspd.png} +14%；6種 {aspd.png} +20%",
   "extra": {},
   "unlockedByDefault": true,
   "members": [
    "순찰자",
    "명사수",
    "주술사",
    "대주술사",
    "사수 병사",
    "바그",
    "바이킹",
    "바바리안",
    "야생법사",
    "원시법사",
    "야만 기병",
    "광폭 기병",
    "초원 기병",
    "켄타로우스",
    "켄타우로스"
   ],
   "memberCount": 15,
   "source": "decompiled/src/data/faction.lua:81-95（門檻與數值）；成員 :366-382；預設解鎖表 :518-525；isFactionUnlocked :527",
   "combatRefs": "decompiled/src/game/combat.lua 出現該陣營 id 的行：2247,2272,2273,2572",
   "membersResolved": {
    "순찰자": [
     "A:순찰자:r2"
    ],
    "명사수": [
     "A:명사수:r3",
     "A:명사수:r4",
     "A:명사수:r5"
    ],
    "주술사": [
     "M:주술사:r2"
    ],
    "대주술사": [
     "M:대주술사:r3"
    ],
    "사수 병사": [
     "W:사수 병사:r2"
    ],
    "바그": [
     "D:바그:r3",
     "W:바그:r3",
     "W:바그:r4",
     "W:바그:r5"
    ],
    "바이킹": [
     "S:바이킹:r2"
    ],
    "바바리안": [
     "S:바바리안:r3"
    ],
    "야생법사": [
     "M:야생법사:r2"
    ],
    "원시법사": [
     "M:원시법사:r3"
    ],
    "야만 기병": [
     "H:야만 기병:r2"
    ],
    "광폭 기병": [
     "H:광폭 기병:r3"
    ],
    "초원 기병": [
     "H:초원 기병:r2"
    ],
    "켄타로우스": [
     "H:켄타로우스:r3"
    ],
    "켄타우로스": [
     "H:켄타로우스:r3"
    ]
   },
   "byClassExtraAliases": [
    "Centaur",
    "Steppe Cavalry",
    "초원 기병 (Steppe Cavalry)",
    "켄타로우스 (Centaur)",
    "켄타우로스 (Centaur)"
   ]
  },
  {
   "id": "abyss",
   "nameZh": "深淵",
   "thresholds": [
    2,
    3,
    4
   ],
   "values": [
    15,
    22,
    30
   ],
   "effectNameZh": "痛苦鎖鏈",
   "conditionZh": "深淵單位會共同分擔所受的部分直接傷害。",
   "footerZh": null,
   "tierTextsZh": [
    "傷害分攤 15%",
    "傷害分攤 22%",
    "傷害分攤 30%"
   ],
   "effectZh": "痛苦鎖鏈：深淵單位會共同分擔所受的部分直接傷害。。2種 傷害分攤 15%；3種 傷害分攤 22%；4種 傷害分攤 30%",
   "extra": {},
   "unlockedByDefault": false,
   "members": [
    "마검사",
    "게이즈",
    "암검사",
    "마그누스",
    "암흑사수",
    "레이븐",
    "흑위병",
    "처형자",
    "심연술사",
    "아크메이지",
    "리퍼",
    "소울리퍼",
    "타락천사",
    "파멸의 천사"
   ],
   "memberCount": 14,
   "source": "decompiled/src/data/faction.lua:96-110（門檻與數值）；成員 :383-398；預設解鎖表 :518-525；isFactionUnlocked :527",
   "combatRefs": "decompiled/src/game/combat.lua 出現該陣營 id 的行：2402,2405,2412",
   "membersResolved": {
    "마검사": [
     "W:마검사:r2",
     "W:마검사:r4"
    ],
    "게이즈": [
     "W:게이즈:r3",
     "W:게이즈:r4"
    ],
    "암검사": [
     "W:암검사:r2",
     "W:암검사:r4"
    ],
    "마그누스": [
     "W:마그누스:r3",
     "W:마그누스:r4",
     "W:마그누스:r5"
    ],
    "암흑사수": [
     "A:암흑사수:r2"
    ],
    "레이븐": [
     "A:레이븐:r3"
    ],
    "흑위병": [
     "S:흑위병:r2"
    ],
    "처형자": [
     "S:처형자:r3"
    ],
    "심연술사": [
     "M:심연술사:r2"
    ],
    "아크메이지": [
     "M:아크메이지:r3"
    ],
    "리퍼": [
     "D:리퍼:r2"
    ],
    "소울리퍼": [
     "D:소울리퍼:r3"
    ],
    "타락천사": [
     "D:타락천사:r2"
    ],
    "파멸의 천사": [
     "D:파멸의 천사:r3"
    ]
   },
   "byClassExtraAliases": [
    "Abyss Mage",
    "Angel of Ruin",
    "Archmage",
    "Black Guard",
    "Dark Archer",
    "Executioner",
    "Fallen Angel",
    "Raven",
    "Reaper",
    "Soul Reaper",
    "레이븐 (Raven)",
    "리퍼 (Reaper)",
    "소울리퍼 (Soul Reaper)",
    "심연술사 (Abyss Mage)",
    "아크메이지 (Archmage)",
    "암흑사수 (Dark Archer)",
    "처형자 (Executioner)",
    "타락천사 (Fallen Angel)",
    "파멸의 천사 (Angel of Ruin)",
    "흑위병 (Black Guard)"
   ]
  },
  {
   "id": "celestial",
   "nameZh": "天界",
   "thresholds": [
    2,
    3
   ],
   "values": [
    20,
    40
   ],
   "effectNameZh": "奇蹟",
   "conditionZh": "僅剩1名友軍存活時，所有倒下的友軍都會復活。",
   "footerZh": "每場戰鬥1次",
   "tierTextsZh": [
    "以20%{hp.png}復活",
    "以40%{hp.png}復活"
   ],
   "effectZh": "奇蹟：僅剩1名友軍存活時，所有倒下的友軍都會復活。（每場戰鬥1次）。2種 以20%{hp.png}復活；3種 以40%{hp.png}復活",
   "extra": {},
   "unlockedByDefault": false,
   "members": [
    "월광사제",
    "초승달 여왕",
    "큐피드",
    "세라프",
    "천공병",
    "발키리",
    "대천사",
    "도미니온"
   ],
   "memberCount": 8,
   "source": "decompiled/src/data/faction.lua:111-124（門檻與數值）；成員 :399-408；預設解鎖表 :518-525；isFactionUnlocked :527",
   "combatRefs": "decompiled/src/game/combat.lua 出現該陣營 id 的行：2554,2633",
   "membersResolved": {
    "월광사제": [
     "H:월광사제:r2"
    ],
    "초승달 여왕": [
     "H:초승달 여왕:r3"
    ],
    "큐피드": [
     "A:큐피드:r2"
    ],
    "세라프": [
     "A:세라프:r3"
    ],
    "천공병": [
     "S:천공병:r2"
    ],
    "발키리": [
     "S:발키리:r3"
    ],
    "대천사": [
     "D:대천사:r2"
    ],
    "도미니온": [
     "D:도미니온:r3"
    ]
   },
   "byClassExtraAliases": [
    "Archangel",
    "Crescent Queen",
    "Cupid",
    "Dominion",
    "Moon Priestess",
    "Seraph",
    "Sky Spearman",
    "Valkyrie",
    "대천사 (Archangel)",
    "도미니온 (Dominion)",
    "발키리 (Valkyrie)",
    "세라프 (Seraph)",
    "월광사제 (Moon Priestess)",
    "천공병 (Sky Spearman)",
    "초승달 여왕 (Crescent Queen)",
    "큐피드 (Cupid)"
   ]
  },
  {
   "id": "arcane",
   "nameZh": "秘術",
   "thresholds": [
    2,
    3,
    4
   ],
   "values": [
    12,
    20,
    30
   ],
   "effectNameZh": "魔力增幅",
   "conditionZh": "秘術單位的技能傷害提高。",
   "footerZh": null,
   "tierTextsZh": [
    "技能傷害 +12%",
    "技能傷害 +20%",
    "技能傷害 +30%"
   ],
   "effectZh": "魔力增幅：秘術單位的技能傷害提高。。2種 技能傷害 +12%；3種 技能傷害 +20%；4種 技能傷害 +30%",
   "extra": {},
   "unlockedByDefault": false,
   "members": [
    "염투사",
    "플레어",
    "화령술사",
    "샐러맨더",
    "서리칼날",
    "빙결여제",
    "예지술사",
    "예언자",
    "페이즈",
    "크로노워커"
   ],
   "memberCount": 10,
   "source": "decompiled/src/data/faction.lua:125-139（門檻與數值）；成員 :409-420；預設解鎖表 :518-525；isFactionUnlocked :527",
   "combatRefs": "decompiled/src/game/combat.lua 出現該陣營 id 的行：2342,2346",
   "membersResolved": {
    "염투사": [
     "W:염투사:r2"
    ],
    "플레어": [
     "W:플레어:r3",
     "W:플레어:r4",
     "W:플레어:r5"
    ],
    "화령술사": [
     "M:화령술사:r2"
    ],
    "샐러맨더": [
     "M:샐러맨더:r3"
    ],
    "서리칼날": [
     "D:서리칼날:r2"
    ],
    "빙결여제": [
     "D:빙결여제:r3"
    ],
    "예지술사": [
     "M:예지술사:r2"
    ],
    "예언자": [
     "M:예언자:r3"
    ],
    "페이즈": [
     "H:페이즈:r2"
    ],
    "크로노워커": [
     "H:크로노워커:r3"
    ]
   },
   "byClassExtraAliases": [
    "Chrono Walker",
    "Diviner",
    "Flamecaller",
    "Frost Empress",
    "Frostblade",
    "Oracle",
    "Phase",
    "Salamander",
    "빙결여제 (Frost Empress)",
    "서리칼날 (Frostblade)",
    "예언자 (Oracle)",
    "예지술사 (Diviner)",
    "크로노워커 (Chrono Walker)",
    "페이즈 (Phase)"
   ]
  },
  {
   "id": "undead",
   "nameZh": "亡靈",
   "thresholds": [
    2,
    3,
    4
   ],
   "values": [
    3,
    4,
    5
   ],
   "effectNameZh": "死亡氣息",
   "conditionZh": "每當友軍或敵人倒下，亡靈單位的{atk.png}提高（最多10次）",
   "footerZh": null,
   "tierTextsZh": [
    "{atk.png} 每次+3%",
    "{atk.png} 每次+4%",
    "{atk.png} 每次+5%"
   ],
   "effectZh": "死亡氣息：每當友軍或敵人倒下，亡靈單位的{atk.png}提高（最多10次）。2種 {atk.png} 每次+3%；3種 {atk.png} 每次+4%；4種 {atk.png} 每次+5%",
   "extra": {
    "maxStacks": 10
   },
   "unlockedByDefault": false,
   "members": [
    "환영사수",
    "미라지",
    "망령병",
    "SpearRevenant",
    "흑마법사",
    "워록",
    "나이트메어",
    "아포칼립스",
    "LegendarySpecter",
    "스펙터",
    "CrownRevenant",
    "레버넌트",
    "듀라한",
    "팬텀",
    "리치",
    "리치로드"
   ],
   "memberCount": 16,
   "source": "decompiled/src/data/faction.lua:140-155（門檻與數值）；成員 :421-438；預設解鎖表 :518-525；isFactionUnlocked :527",
   "combatRefs": "decompiled/src/game/combat.lua 出現該陣營 id 的行：2305,2313,2317,2368,2372",
   "membersResolved": {
    "환영사수": [
     "A:환영사수:r2"
    ],
    "미라지": [
     "A:미라지:r3"
    ],
    "망령병": [
     "S:망령병:r2"
    ],
    "SpearRevenant": [
     "S:SpearRevenant:r3"
    ],
    "흑마법사": [
     "M:흑마법사:r2"
    ],
    "워록": [
     "M:워록:r3"
    ],
    "나이트메어": [
     "H:나이트메어:r2"
    ],
    "아포칼립스": [
     "H:아포칼립스:r3"
    ],
    "LegendarySpecter": [
     "D:LegendarySpecter:r2"
    ],
    "스펙터": [
     "D:LegendarySpecter:r2"
    ],
    "CrownRevenant": [
     "D:CrownRevenant:r3",
     "S:SpearRevenant:r3",
     "W:레버넌트:r4"
    ],
    "레버넌트": [
     "D:CrownRevenant:r3",
     "S:SpearRevenant:r3",
     "W:레버넌트:r4"
    ],
    "듀라한": [
     "W:듀라한:r2"
    ],
    "팬텀": [
     "W:팬텀:r3"
    ],
    "리치": [
     "M:리치:r2"
    ],
    "리치로드": [
     "M:리치로드:r3"
    ]
   },
   "byClassExtraAliases": [
    "Apocalypse",
    "Dark Mage",
    "Dullahan",
    "Illusion Archer",
    "Lich",
    "Lich Lord",
    "Mirage",
    "Nightmare",
    "Phantom",
    "Revenant",
    "Specter",
    "Warlock",
    "Wraith Spearman",
    "나이트메어 (Nightmare)",
    "듀라한 (Dullahan)",
    "레버넌트 (Revenant)",
    "리치 (Lich)",
    "리치로드 (Lich Lord)",
    "망령병 (Wraith Spearman)",
    "미라지 (Mirage)",
    "스펙터 (Specter)",
    "아포칼립스 (Apocalypse)",
    "워록 (Warlock)",
    "팬텀 (Phantom)",
    "환영사수 (Illusion Archer)",
    "흑마법사 (Dark Mage)"
   ]
  },
  {
   "id": "holy",
   "nameZh": "神聖",
   "thresholds": [
    2,
    3
   ],
   "values": [
    20,
    35
   ],
   "effectNameZh": "恩典",
   "conditionZh": "所有友軍受到的治療量提高。",
   "footerZh": null,
   "tierTextsZh": [
    "受到治療 +20%",
    "受到治療 +35%"
   ],
   "effectZh": "恩典：所有友軍受到的治療量提高。。2種 受到治療 +20%；3種 受到治療 +35%",
   "extra": {},
   "unlockedByDefault": true,
   "members": [
    "치유술사",
    "대사제",
    "성기사",
    "템플러",
    "RarePaladin",
    "팔라딘",
    "심판관",
    "백기사",
    "성배기사"
   ],
   "memberCount": 9,
   "source": "decompiled/src/data/faction.lua:156-168（門檻與數值）；成員 :439-449；預設解鎖表 :518-525；isFactionUnlocked :527",
   "combatRefs": "decompiled/src/game/combat.lua 出現該陣營 id 的行：2356",
   "membersResolved": {
    "치유술사": [
     "M:치유술사:r2"
    ],
    "대사제": [
     "M:대사제:r3"
    ],
    "성기사": [
     "W:성기사:r2",
     "W:성기사:r3",
     "W:성기사:r4",
     "W:성기사:r5"
    ],
    "템플러": [
     "W:템플러:r3",
     "W:템플러:r5"
    ],
    "RarePaladin": [
     "D:RarePaladin:r2"
    ],
    "팔라딘": [
     "D:RarePaladin:r2",
     "W:팔라딘:r4"
    ],
    "심판관": [
     "D:심판관:r3"
    ],
    "백기사": [
     "W:백기사:r2"
    ],
    "성배기사": [
     "W:성배기사:r3"
    ]
   },
   "byClassExtraAliases": [
    "Arbiter",
    "Grail Knight",
    "Paladin",
    "White Knight",
    "백기사 (White Knight)",
    "성배기사 (Grail Knight)",
    "심판관 (Arbiter)",
    "팔라딘 (Paladin)"
   ]
  },
  {
   "id": "engineer",
   "nameZh": "工程",
   "thresholds": [
    2,
    3
   ],
   "values": [
    1,
    1
   ],
   "effectNameZh": "裝備改良",
   "conditionZh": "戰鬥中道具按高一級的等級生效。（滿級道具同樣適用）",
   "footerZh": null,
   "tierTextsZh": [
    "戰鬥道具等級 +1",
    "包括手冊在內所有道具等級 +1"
   ],
   "effectZh": "裝備改良：戰鬥中道具按高一級的等級生效。（滿級道具同樣適用）。2種 戰鬥道具等級 +1；3種 包括手冊在內所有道具等級 +1",
   "extra": {
    "trainingFromTier": 2
   },
   "unlockedByDefault": true,
   "members": [
    "빅터",
    "프랑켄슈타인",
    "척탄병",
    "폭파대장",
    "은빛사수",
    "이클립스"
   ],
   "memberCount": 6,
   "source": "decompiled/src/data/faction.lua:169-185（門檻與數值）；成員 :450-457；預設解鎖表 :518-525；isFactionUnlocked :527",
   "combatRefs": "decompiled/src/game/combat.lua 出現該陣營 id 的行：2208,2209",
   "membersResolved": {
    "빅터": [
     "D:빅터:r2"
    ],
    "프랑켄슈타인": [
     "D:프랑켄슈타인:r3"
    ],
    "척탄병": [
     "A:척탄병:r2"
    ],
    "폭파대장": [
     "A:폭파대장:r3"
    ],
    "은빛사수": [
     "A:은빛사수:r2"
    ],
    "이클립스": [
     "A:이클립스:r3"
    ]
   },
   "byClassExtraAliases": [
    "Eclipse",
    "Silver Sniper",
    "은빛사수 (Silver Sniper)",
    "이클립스 (Eclipse)"
   ]
  }
 ],
 "jobs": [
  {
   "key": "A:명궁:r1",
   "id": "명궁",
   "name": "명궁",
   "asset": "명궁",
   "nameZh": "神射手",
   "nameZhKey": "unit.name.명궁",
   "symbol": "A",
   "rank": 1,
   "reachable": false,
   "entry": [
    "orphan-special"
   ],
   "inTree": false,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "은빛사수",
    "큐피드"
   ],
   "childKeys": [
    "A:은빛사수:r2",
    "A:큐피드:r2"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": null,
   "source": null
  },
  {
   "key": "A:정찰병:r1",
   "id": "정찰병",
   "name": "정찰병",
   "asset": "정찰병",
   "nameZh": "斥候",
   "nameZhKey": "unit.name.정찰병",
   "symbol": "A",
   "rank": 1,
   "reachable": false,
   "entry": [
    "orphan-special"
   ],
   "inTree": false,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "레인저",
    "엘프 궁수"
   ],
   "childKeys": [
    "A:레인저:r2",
    "A:엘프 궁수:r2"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": null,
   "source": null
  },
  {
   "key": "A:총포수:r1",
   "id": "총포수",
   "name": "총포수",
   "asset": "총포수",
   "nameZh": "槍手",
   "nameZhKey": "unit.name.총포수",
   "symbol": "A",
   "rank": 1,
   "reachable": false,
   "entry": [
    "orphan-special"
   ],
   "inTree": false,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "척탄병",
    "화포수"
   ],
   "childKeys": [
    "A:척탄병:r2",
    "A:화포수:r2"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": null,
   "source": null
  },
  {
   "key": "A:해골궁수:r1",
   "id": "해골궁수",
   "name": "해골궁수",
   "asset": "해골궁수",
   "nameZh": "骷髏弓手",
   "nameZhKey": "unit.name.해골궁수",
   "symbol": "A",
   "rank": 1,
   "reachable": false,
   "entry": [
    "orphan-special"
   ],
   "inTree": false,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "암흑사수",
    "환영사수"
   ],
   "childKeys": [
    "A:암흑사수:r2",
    "A:환영사수:r2"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": null,
   "source": null
  },
  {
   "key": "A:MiniArcherMan02:r2",
   "id": "MiniArcherMan02",
   "name": "석궁수",
   "asset": "MiniArcherMan02",
   "nameZh": "弩手",
   "nameZhKey": "unit.name.MiniArcherMan02",
   "symbol": "A",
   "rank": 2,
   "reachable": true,
   "entry": [
    "standard"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": true,
   "children": [
    "MiniArcherMan03"
   ],
   "childKeys": [
    "A:MiniArcherMan03:r3"
   ],
   "classType": null,
   "factions": [
    "empire"
   ],
   "factionInGame": "empire",
   "prismOnly": false,
   "stats": {
    "aspd": 1.1,
    "atk": 16,
    "distance": 150,
    "hp": 70
   },
   "statArrows": null,
   "skillName": "멀티샷",
   "skillDesc": "2개의 화살로 최대 2명에게 각 80% 피해",
   "condition": "稀有度限 normal/advanced/rare/legendary；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L808）",
   "source": "decompiled/src/game/promotion.lua:808"
  },
  {
   "key": "A:레인저:r2",
   "id": "레인저",
   "name": "레인저",
   "asset": "레인저",
   "nameZh": "遊俠",
   "nameZhKey": "unit.name.레인저",
   "symbol": "A",
   "rank": 2,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "A:정찰병:r1"
   ],
   "rank2Entry": false,
   "children": [
    "데드아이"
   ],
   "childKeys": [
    "A:데드아이:r3"
   ],
   "classType": null,
   "factions": [
    "outlaw"
   ],
   "factionInGame": "outlaw",
   "prismOnly": false,
   "stats": {
    "aspd": 0.8,
    "atk": 32,
    "distance": 110,
    "hp": 85
   },
   "statArrows": null,
   "skillName": "전직 특성",
   "skillDesc": "빠른 연사력을 지닌 정찰병 상위 전직",
   "condition": "任何稀有度都會出現；只有「已有 정찰병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L797；判斷 L783）",
   "source": "decompiled/src/game/promotion.lua:797"
  },
  {
   "key": "A:순찰자:r2",
   "id": "순찰자",
   "name": "순찰자",
   "asset": "순찰자",
   "nameZh": "巡林者",
   "nameZhKey": "unit.name.순찰자",
   "symbol": "A",
   "rank": 2,
   "reachable": true,
   "entry": [
    "standard"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": true,
   "children": [
    "로빈 후드",
    "명사수"
   ],
   "childKeys": [
    "A:로빈 후드:r4",
    "A:명사수:r3"
   ],
   "classType": null,
   "factions": [
    "tribe"
   ],
   "factionInGame": "tribe",
   "prismOnly": false,
   "stats": {
    "aspd": 1.6,
    "atk": 12,
    "distance": 150,
    "hp": 60
   },
   "statArrows": null,
   "skillName": "정밀 사격",
   "skillDesc": "적의 약점을 노려 ATK 180% 피해",
   "condition": "稀有度限 normal/advanced/rare/legendary；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L815）",
   "source": "decompiled/src/game/promotion.lua:815"
  },
  {
   "key": "A:암흑사수:r2",
   "id": "암흑사수",
   "name": "암흑사수",
   "asset": "암흑사수",
   "nameZh": "暗影弓手",
   "nameZhKey": "unit.name.암흑사수",
   "symbol": "A",
   "rank": 2,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "A:해골궁수:r1"
   ],
   "rank2Entry": false,
   "children": [
    "레이븐"
   ],
   "childKeys": [
    "A:레이븐:r3"
   ],
   "classType": "공속형",
   "factions": [
    "abyss"
   ],
   "factionInGame": "abyss",
   "prismOnly": false,
   "stats": {
    "aspd": 1.4,
    "atk": 44,
    "distance": 150,
    "hp": 135
   },
   "statArrows": {
    "aspd": 3,
    "atk": 2,
    "distance": 0,
    "hp": 2
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現；只有「已有 해골궁수 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L744）",
   "source": "decompiled/src/game/promotion.lua:744"
  },
  {
   "key": "A:엘프 궁수:r2",
   "id": "엘프 궁수",
   "name": "엘프 궁수",
   "asset": "엘프 궁수",
   "nameZh": "精靈弓手",
   "nameZhKey": "unit.name.엘프 궁수",
   "symbol": "A",
   "rank": 2,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "A:정찰병:r1"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [
    "forest"
   ],
   "factionInGame": "forest",
   "prismOnly": false,
   "stats": {
    "aspd": 1.7,
    "atk": 18,
    "distance": 150,
    "hp": 90
   },
   "statArrows": null,
   "skillName": "전직 특성",
   "skillDesc": "자연의 기운을 깃든 정찰병 상위 전직",
   "condition": "任何稀有度都會出現；只有「已有 정찰병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L790；判斷 L783）",
   "source": "decompiled/src/game/promotion.lua:790"
  },
  {
   "key": "A:엘프궁수:r2",
   "id": "엘프궁수",
   "name": "엘프궁수",
   "asset": "엘프궁수",
   "nameZh": "精靈弓手",
   "nameZhKey": "unit.name.엘프 궁수",
   "symbol": "A",
   "rank": 2,
   "reachable": false,
   "entry": [
    "orphan-special"
   ],
   "inTree": false,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "하이 엘프"
   ],
   "childKeys": [
    "A:하이 엘프:r3"
   ],
   "classType": null,
   "factions": [
    "forest"
   ],
   "factionInGame": null,
   "prismOnly": false,
   "stats": {
    "aspd": 1.7,
    "atk": 18,
    "distance": 150,
    "hp": 90
   },
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": null,
   "source": null
  },
  {
   "key": "A:은빛사수:r2",
   "id": "은빛사수",
   "name": "은빛사수",
   "asset": "은빛사수",
   "nameZh": "銀色狙擊手",
   "nameZhKey": "unit.name.은빛사수",
   "symbol": "A",
   "rank": 2,
   "reachable": true,
   "entry": [
    "special-parent",
    "standard"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "A:명궁:r1"
   ],
   "rank2Entry": true,
   "children": [
    "이클립스"
   ],
   "childKeys": [
    "A:이클립스:r3"
   ],
   "classType": "공격형",
   "factions": [
    "engineer"
   ],
   "factionInGame": "engineer",
   "prismOnly": true,
   "stats": {
    "aspd": 0.8,
    "atk": 104,
    "distance": 200,
    "hp": 160
   },
   "statArrows": {
    "aspd": -3,
    "atk": 3,
    "distance": 3,
    "hp": 1
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "只有 prism 稀有度（或 jackpot5th 標記）才會出現；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L720） ／ 任何稀有度都會出現；只有「已有 명궁 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L720）",
   "source": "decompiled/src/game/promotion.lua:720"
  },
  {
   "key": "A:척탄병:r2",
   "id": "척탄병",
   "name": "척탄병",
   "asset": "척탄병",
   "nameZh": "擲彈兵",
   "nameZhKey": "unit.name.척탄병",
   "symbol": "A",
   "rank": 2,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "A:총포수:r1"
   ],
   "rank2Entry": false,
   "children": [
    "폭파대장"
   ],
   "childKeys": [
    "A:폭파대장:r3"
   ],
   "classType": null,
   "factions": [
    "engineer"
   ],
   "factionInGame": "engineer",
   "prismOnly": false,
   "stats": {
    "aspd": 0.4,
    "atk": 28,
    "distance": 140,
    "hp": 85
   },
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現；只有「已有 총포수 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L778；判斷 L768）",
   "source": "decompiled/src/game/promotion.lua:778"
  },
  {
   "key": "A:큐피드:r2",
   "id": "큐피드",
   "name": "큐피드",
   "asset": "큐피드",
   "nameZh": "邱比特",
   "nameZhKey": "unit.name.큐피드",
   "symbol": "A",
   "rank": 2,
   "reachable": true,
   "entry": [
    "special-parent",
    "standard"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "A:명궁:r1"
   ],
   "rank2Entry": true,
   "children": [
    "세라프"
   ],
   "childKeys": [
    "A:세라프:r3"
   ],
   "classType": "지원형",
   "factions": [
    "celestial"
   ],
   "factionInGame": "celestial",
   "prismOnly": true,
   "stats": {
    "aspd": 1.4,
    "atk": 58,
    "distance": 150,
    "hp": 190
   },
   "statArrows": {
    "aspd": 2,
    "atk": 2,
    "distance": 0,
    "hp": 2
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "只有 prism 稀有度（或 jackpot5th 標記）才會出現；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L707） ／ 任何稀有度都會出現；只有「已有 명궁 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L707）",
   "source": "decompiled/src/game/promotion.lua:707"
  },
  {
   "key": "A:화포수:r2",
   "id": "화포수",
   "name": "화포수",
   "asset": "화포수",
   "nameZh": "炮手",
   "nameZhKey": "unit.name.화포수",
   "symbol": "A",
   "rank": 2,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "A:총포수:r1"
   ],
   "rank2Entry": false,
   "children": [
    "캐노니어"
   ],
   "childKeys": [
    "A:캐노니어:r3"
   ],
   "classType": null,
   "factions": [
    "outlaw"
   ],
   "factionInGame": "outlaw",
   "prismOnly": false,
   "stats": {
    "aspd": 0.8,
    "atk": 38,
    "distance": 160,
    "hp": 95
   },
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現；只有「已有 총포수 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L773；判斷 L768）",
   "source": "decompiled/src/game/promotion.lua:773"
  },
  {
   "key": "A:환영사수:r2",
   "id": "환영사수",
   "name": "환영사수",
   "asset": "환영사수",
   "nameZh": "幻影弓手",
   "nameZhKey": "unit.name.환영사수",
   "symbol": "A",
   "rank": 2,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "A:해골궁수:r1"
   ],
   "rank2Entry": false,
   "children": [
    "미라지"
   ],
   "childKeys": [
    "A:미라지:r3"
   ],
   "classType": "공격형",
   "factions": [
    "undead"
   ],
   "factionInGame": "undead",
   "prismOnly": false,
   "stats": {
    "aspd": 0.8,
    "atk": 72,
    "distance": 160,
    "hp": 115
   },
   "statArrows": {
    "aspd": -3,
    "atk": 4,
    "distance": 1,
    "hp": 1
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現；只有「已有 해골궁수 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L756）",
   "source": "decompiled/src/game/promotion.lua:756"
  },
  {
   "key": "A:MiniArcherMan03:r3",
   "id": "MiniArcherMan03",
   "name": "장궁병",
   "asset": "MiniArcherMan03",
   "nameZh": "長弓手",
   "nameZhKey": "unit.name.MiniArcherMan03",
   "symbol": "A",
   "rank": 3,
   "reachable": true,
   "entry": [
    "no-subclass-direct",
    "standard"
   ],
   "inTree": true,
   "parent": "MiniArcherMan02",
   "parents": [
    "MiniArcherMan02"
   ],
   "parentKeys": [
    "A:MiniArcherMan02:r2"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "로빈 후드"
   ],
   "childKeys": [
    "A:로빈 후드:r4"
   ],
   "classType": null,
   "factions": [
    "empire"
   ],
   "factionInGame": "empire",
   "prismOnly": false,
   "stats": {
    "aspd": 1.2,
    "atk": 26,
    "distance": 150,
    "hp": 120
   },
   "statArrows": null,
   "skillName": "트리플샷",
   "skillDesc": "3개의 화살로 최대 3명에게 각 100% 피해",
   "condition": "任何稀有度都會出現（promotion.lua 定義 L930,1022；判斷 L857） ／ 任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 3 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L930,1022）",
   "source": "decompiled/src/game/promotion.lua:930,1022"
  },
  {
   "key": "A:데드아이:r3",
   "id": "데드아이",
   "name": "데드아이",
   "asset": "데드아이",
   "nameZh": "鷹眼",
   "nameZhKey": "unit.name.데드아이",
   "symbol": "A",
   "rank": 3,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "A:레인저:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [
    "outlaw"
   ],
   "factionInGame": "outlaw",
   "prismOnly": false,
   "stats": {
    "aspd": 0.85,
    "atk": 68,
    "distance": 110,
    "hp": 150
   },
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現；只有「已有 레인저 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L962；判斷 L921）",
   "source": "decompiled/src/game/promotion.lua:962"
  },
  {
   "key": "A:레이븐:r3",
   "id": "레이븐",
   "name": "레이븐",
   "asset": "레이븐",
   "nameZh": "渡鴉",
   "nameZhKey": "unit.name.레이븐",
   "symbol": "A",
   "rank": 3,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "A:암흑사수:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": "공속형",
   "factions": [
    "abyss"
   ],
   "factionInGame": "abyss",
   "prismOnly": false,
   "stats": {
    "aspd": 1.7,
    "atk": 60,
    "distance": 150,
    "hp": 210
   },
   "statArrows": {
    "aspd": 3,
    "atk": 3,
    "distance": 0,
    "hp": 3
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現；只有「已有 암흑사수 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L872）",
   "source": "decompiled/src/game/promotion.lua:872"
  },
  {
   "key": "A:명사수:r3",
   "id": "명사수",
   "name": "명사수",
   "asset": "명사수",
   "nameZh": "射手",
   "nameZhKey": "unit.name.명사수",
   "symbol": "A",
   "rank": 3,
   "reachable": true,
   "entry": [
    "no-subclass-direct",
    "standard"
   ],
   "inTree": true,
   "parent": "순찰자",
   "parents": [
    "순찰자"
   ],
   "parentKeys": [
    "A:순찰자:r2"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "MiniArcherMan03",
    "명사수"
   ],
   "childKeys": [
    "A:MiniArcherMan03:r4",
    "A:명사수:r4"
   ],
   "classType": null,
   "factions": [
    "tribe"
   ],
   "factionInGame": "tribe",
   "prismOnly": false,
   "stats": {
    "aspd": 1.5,
    "atk": 24,
    "distance": 150,
    "hp": 110
   },
   "statArrows": null,
   "skillName": "정밀 사격",
   "skillDesc": "적의 약점을 노려 공격력의 180% 피해",
   "condition": "任何稀有度都會出現（promotion.lua 定義 L942,1029；判斷 L919） ／ 任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 3 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L942,1029）",
   "source": "decompiled/src/game/promotion.lua:942,1029"
  },
  {
   "key": "A:미라지:r3",
   "id": "미라지",
   "name": "미라지",
   "asset": "미라지",
   "nameZh": "幻影",
   "nameZhKey": "unit.name.미라지",
   "symbol": "A",
   "rank": 3,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "A:환영사수:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": "공격형",
   "factions": [
    "undead"
   ],
   "factionInGame": "undead",
   "prismOnly": false,
   "stats": {
    "aspd": 0.8,
    "atk": 112,
    "distance": 160,
    "hp": 175
   },
   "statArrows": {
    "aspd": 0,
    "atk": 4,
    "distance": 0,
    "hp": 3
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現；只有「已有 환영사수 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L887）",
   "source": "decompiled/src/game/promotion.lua:887"
  },
  {
   "key": "A:세라프:r3",
   "id": "세라프",
   "name": "세라프",
   "asset": "세라프",
   "nameZh": "熾天使",
   "nameZhKey": "unit.name.세라프",
   "symbol": "A",
   "rank": 3,
   "reachable": true,
   "entry": [
    "standard"
   ],
   "inTree": true,
   "parent": "큐피드",
   "parents": [
    "큐피드"
   ],
   "parentKeys": [
    "A:큐피드:r2"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "MiniArcherMan03",
    "명사수"
   ],
   "childKeys": [
    "A:MiniArcherMan03:r4",
    "A:명사수:r4"
   ],
   "classType": "지원형",
   "factions": [
    "celestial"
   ],
   "factionInGame": "celestial",
   "prismOnly": false,
   "stats": {
    "aspd": 1.5,
    "atk": 84,
    "distance": 150,
    "hp": 280
   },
   "statArrows": {
    "aspd": 1,
    "atk": 3,
    "distance": 0,
    "hp": 3
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現（promotion.lua 定義 L846）",
   "source": "decompiled/src/game/promotion.lua:846"
  },
  {
   "key": "A:이클립스:r3",
   "id": "이클립스",
   "name": "이클립스",
   "asset": "이클립스",
   "nameZh": "日蝕",
   "nameZhKey": "unit.name.이클립스",
   "symbol": "A",
   "rank": 3,
   "reachable": true,
   "entry": [
    "standard"
   ],
   "inTree": true,
   "parent": "은빛사수",
   "parents": [
    "은빛사수"
   ],
   "parentKeys": [
    "A:은빛사수:r2"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "MiniArcherMan03",
    "명사수"
   ],
   "childKeys": [
    "A:MiniArcherMan03:r4",
    "A:명사수:r4"
   ],
   "classType": "공격형",
   "factions": [
    "engineer"
   ],
   "factionInGame": "engineer",
   "prismOnly": false,
   "stats": {
    "aspd": 0.8,
    "atk": 130,
    "distance": 250,
    "hp": 220
   },
   "statArrows": {
    "aspd": 0,
    "atk": 3,
    "distance": 4,
    "hp": 2
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現（promotion.lua 定義 L828）",
   "source": "decompiled/src/game/promotion.lua:828"
  },
  {
   "key": "A:캐노니어:r3",
   "id": "캐노니어",
   "name": "캐노니어",
   "asset": "캐노니어",
   "nameZh": "重炮手",
   "nameZhKey": "unit.name.캐노니어",
   "symbol": "A",
   "rank": 3,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "A:화포수:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [
    "outlaw"
   ],
   "factionInGame": "outlaw",
   "prismOnly": false,
   "stats": {
    "aspd": 0.8,
    "atk": 52,
    "distance": 160,
    "hp": 125
   },
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現；只有「已有 화포수 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L904；判斷 L899）",
   "source": "decompiled/src/game/promotion.lua:904"
  },
  {
   "key": "A:폭파대장:r3",
   "id": "폭파대장",
   "name": "폭파대장",
   "asset": "폭파대장",
   "nameZh": "爆破隊長",
   "nameZhKey": "unit.name.폭파대장",
   "symbol": "A",
   "rank": 3,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "A:척탄병:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [
    "engineer"
   ],
   "factionInGame": "engineer",
   "prismOnly": false,
   "stats": {
    "aspd": 0.45,
    "atk": 36,
    "distance": 140,
    "hp": 115
   },
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現；只有「已有 척탄병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L914；判斷 L909）",
   "source": "decompiled/src/game/promotion.lua:914"
  },
  {
   "key": "A:하이 엘프:r3",
   "id": "하이 엘프",
   "name": "하이 엘프",
   "asset": "하이 엘프",
   "nameZh": "高等精靈",
   "nameZhKey": "unit.name.하이 엘프",
   "symbol": "A",
   "rank": 3,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "A:엘프궁수:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [
    "forest"
   ],
   "factionInGame": "forest",
   "prismOnly": false,
   "stats": {
    "aspd": 1.9,
    "atk": 26,
    "distance": 150,
    "hp": 170
   },
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現；只有「已有 엘프궁수 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L952；判斷 L920）",
   "source": "decompiled/src/game/promotion.lua:952"
  },
  {
   "key": "A:MiniArcherMan03:r4",
   "id": "MiniArcherMan03",
   "name": "장궁병",
   "asset": "MiniArcherMan03",
   "nameZh": "長弓手",
   "nameZhKey": "unit.name.MiniArcherMan03",
   "symbol": "A",
   "rank": 4,
   "reachable": false,
   "entry": [
    "no-subclass-direct",
    "standard"
   ],
   "inTree": true,
   "parent": "명사수",
   "parents": [
    "명사수",
    "세라프",
    "이클립스"
   ],
   "parentKeys": [
    "A:명사수:r3",
    "A:세라프:r3",
    "A:이클립스:r3"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "MiniArcherMan03",
    "명사수"
   ],
   "childKeys": [
    "A:MiniArcherMan03:r5",
    "A:명사수:r5"
   ],
   "classType": null,
   "factions": [
    "empire"
   ],
   "factionInGame": null,
   "prismOnly": false,
   "stats": {
    "aspd": 1.2,
    "atk": 26,
    "distance": 150,
    "hp": 120
   },
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現（promotion.lua 定義 L930,1022） ／ 任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 4 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L930,1022）",
   "source": "decompiled/src/game/promotion.lua:930,1022"
  },
  {
   "key": "A:로빈 후드:r4",
   "id": "로빈 후드",
   "name": "로빈 후드",
   "asset": "로빈 후드",
   "nameZh": "羅賓漢",
   "nameZhKey": "unit.name.로빈 후드",
   "symbol": "A",
   "rank": 4,
   "reachable": false,
   "entry": [
    "special-parent",
    "standard"
   ],
   "inTree": true,
   "parent": "MiniArcherMan03",
   "parents": [
    "MiniArcherMan03"
   ],
   "parentKeys": [
    "A:MiniArcherMan03:r3"
   ],
   "otherParentKeys": [
    "A:순찰자:r2"
   ],
   "rank2Entry": false,
   "children": [
    "그린 섀도우"
   ],
   "childKeys": [
    "A:그린 섀도우:r5"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現（promotion.lua 定義 L979；判斷 L969） ／ 任何稀有度都會出現；只有「已有 순찰자 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L979；判斷 L970）",
   "source": "decompiled/src/game/promotion.lua:979"
  },
  {
   "key": "A:명사수:r4",
   "id": "명사수",
   "name": "명사수",
   "asset": "명사수",
   "nameZh": "射手",
   "nameZhKey": "unit.name.명사수",
   "symbol": "A",
   "rank": 4,
   "reachable": false,
   "entry": [
    "no-subclass-direct",
    "standard"
   ],
   "inTree": true,
   "parent": "명사수",
   "parents": [
    "명사수",
    "세라프",
    "이클립스"
   ],
   "parentKeys": [
    "A:명사수:r3",
    "A:세라프:r3",
    "A:이클립스:r3"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "MiniArcherMan03",
    "명사수"
   ],
   "childKeys": [
    "A:MiniArcherMan03:r5",
    "A:명사수:r5"
   ],
   "classType": null,
   "factions": [
    "tribe"
   ],
   "factionInGame": null,
   "prismOnly": false,
   "stats": {
    "aspd": 1.5,
    "atk": 24,
    "distance": 150,
    "hp": 110
   },
   "statArrows": null,
   "skillName": "헤드샷",
   "skillDesc": "약해진 적을 노려 강한 한 발을 발사",
   "condition": "任何稀有度都會出現（promotion.lua 定義 L942,1029） ／ 任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 4 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L942,1029）",
   "source": "decompiled/src/game/promotion.lua:942,1029"
  },
  {
   "key": "A:MiniArcherMan03:r5",
   "id": "MiniArcherMan03",
   "name": "장궁병",
   "asset": "MiniArcherMan03",
   "nameZh": "長弓手",
   "nameZhKey": "unit.name.MiniArcherMan03",
   "symbol": "A",
   "rank": 5,
   "reachable": false,
   "entry": [
    "no-subclass-direct",
    "standard"
   ],
   "inTree": true,
   "parent": "MiniArcherMan03",
   "parents": [
    "MiniArcherMan03",
    "명사수"
   ],
   "parentKeys": [
    "A:MiniArcherMan03:r4",
    "A:명사수:r4"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [
    "empire"
   ],
   "factionInGame": null,
   "prismOnly": false,
   "stats": {
    "aspd": 1.2,
    "atk": 26,
    "distance": 150,
    "hp": 120
   },
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現（promotion.lua 定義 L930,1022） ／ 任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 5 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L930,1022）",
   "source": "decompiled/src/game/promotion.lua:930,1022"
  },
  {
   "key": "A:그린 섀도우:r5",
   "id": "그린 섀도우",
   "name": "그린 섀도우",
   "asset": "그린 섀도우",
   "nameZh": "綠影",
   "nameZhKey": "unit.name.그린 섀도우",
   "symbol": "A",
   "rank": 5,
   "reachable": false,
   "entry": [
    "standard"
   ],
   "inTree": true,
   "parent": "로빈 후드",
   "parents": [
    "로빈 후드"
   ],
   "parentKeys": [
    "A:로빈 후드:r4"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1002；判斷 L994）",
   "source": "decompiled/src/game/promotion.lua:1002"
  },
  {
   "key": "A:명사수:r5",
   "id": "명사수",
   "name": "명사수",
   "asset": "명사수",
   "nameZh": "射手",
   "nameZhKey": "unit.name.명사수",
   "symbol": "A",
   "rank": 5,
   "reachable": false,
   "entry": [
    "no-subclass-direct",
    "standard"
   ],
   "inTree": true,
   "parent": "MiniArcherMan03",
   "parents": [
    "MiniArcherMan03",
    "명사수"
   ],
   "parentKeys": [
    "A:MiniArcherMan03:r4",
    "A:명사수:r4"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [
    "tribe"
   ],
   "factionInGame": null,
   "prismOnly": false,
   "stats": {
    "aspd": 1.5,
    "atk": 24,
    "distance": 150,
    "hp": 110
   },
   "statArrows": null,
   "skillName": "헤드샷",
   "skillDesc": "약해진 적을 노려 강한 한 발을 발사",
   "condition": "任何稀有度都會出現（promotion.lua 定義 L942,1029） ／ 任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 5 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L942,1029）",
   "source": "decompiled/src/game/promotion.lua:942,1029"
  },
  {
   "key": "D:드루이드:r1",
   "id": "드루이드",
   "name": "드루이드",
   "asset": "드루이드",
   "nameZh": "德魯伊",
   "nameZhKey": "unit.name.드루이드",
   "symbol": "D",
   "rank": 1,
   "reachable": false,
   "entry": [
    "orphan-special"
   ],
   "inTree": false,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "바그",
    "베테랑",
    "빅터",
    "엔트",
    "황제"
   ],
   "childKeys": [
    "D:바그:r3",
    "D:베테랑:r2",
    "D:빅터:r2",
    "D:엔트:r2",
    "D:황제:r2"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": null,
   "source": null
  },
  {
   "key": "D:셰이드:r1",
   "id": "셰이드",
   "name": "셰이드",
   "asset": "셰이드",
   "nameZh": "暗影",
   "nameZhKey": "unit.name.셰이드",
   "symbol": "D",
   "rank": 1,
   "reachable": false,
   "entry": [
    "orphan-special"
   ],
   "inTree": false,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "LegendarySpecter",
    "리퍼"
   ],
   "childKeys": [
    "D:LegendarySpecter:r2",
    "D:리퍼:r2"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": null,
   "source": null
  },
  {
   "key": "D:수호자:r1",
   "id": "수호자",
   "name": "수호자",
   "asset": "수호자",
   "nameZh": "守護者",
   "nameZhKey": "unit.name.수호자",
   "symbol": "D",
   "rank": 1,
   "reachable": false,
   "entry": [
    "orphan-special"
   ],
   "inTree": false,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "RarePaladin",
    "서리칼날"
   ],
   "childKeys": [
    "D:RarePaladin:r2",
    "D:서리칼날:r2"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": null,
   "source": null
  },
  {
   "key": "D:천사:r1",
   "id": "천사",
   "name": "천사",
   "asset": "천사",
   "nameZh": "天使",
   "nameZhKey": "unit.name.천사",
   "symbol": "D",
   "rank": 1,
   "reachable": false,
   "entry": [
    "orphan-special"
   ],
   "inTree": false,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "대천사",
    "타락천사"
   ],
   "childKeys": [
    "D:대천사:r2",
    "D:타락천사:r2"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": null,
   "source": null
  },
  {
   "key": "D:LegendarySpecter:r2",
   "id": "LegendarySpecter",
   "name": "스펙터",
   "asset": "LegendarySpecter",
   "nameZh": "幽影",
   "nameZhKey": "unit.name.스펙터",
   "symbol": "D",
   "rank": 2,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "D:셰이드:r1"
   ],
   "rank2Entry": false,
   "children": [
    "CrownRevenant"
   ],
   "childKeys": [
    "D:CrownRevenant:r3"
   ],
   "classType": "방어형",
   "factions": [
    "undead"
   ],
   "factionInGame": "undead",
   "prismOnly": false,
   "stats": {
    "aspd": 0.9,
    "atk": 86,
    "distance": 60,
    "hp": 430
   },
   "statArrows": {
    "aspd": -3,
    "atk": 3,
    "distance": 0,
    "hp": 4
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現；只有「已有 셰이드 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1102）",
   "source": "decompiled/src/game/promotion.lua:1102"
  },
  {
   "key": "D:RarePaladin:r2",
   "id": "RarePaladin",
   "name": "팔라딘",
   "asset": "RarePaladin",
   "nameZh": "聖武士",
   "nameZhKey": "unit.name.RarePaladin",
   "symbol": "D",
   "rank": 2,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "D:수호자:r1"
   ],
   "rank2Entry": false,
   "children": [
    "검황",
    "심판관",
    "암흑장군",
    "우드워든"
   ],
   "childKeys": [
    "D:검황:r3",
    "D:심판관:r3",
    "D:암흑장군:r3",
    "D:우드워든:r3"
   ],
   "classType": "균형형",
   "factions": [
    "holy"
   ],
   "factionInGame": "holy",
   "prismOnly": false,
   "stats": {
    "aspd": 1.1,
    "atk": 60,
    "distance": 60,
    "hp": 340
   },
   "statArrows": {
    "aspd": -2,
    "atk": 2,
    "distance": 0,
    "hp": 3
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現；只有「已有 수호자 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1132）",
   "source": "decompiled/src/game/promotion.lua:1132"
  },
  {
   "key": "D:대천사:r2",
   "id": "대천사",
   "name": "대천사",
   "asset": "대천사",
   "nameZh": "大天使",
   "nameZhKey": "unit.name.대천사",
   "symbol": "D",
   "rank": 2,
   "reachable": true,
   "entry": [
    "special-parent",
    "standard"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "D:천사:r1"
   ],
   "rank2Entry": true,
   "children": [
    "도미니온"
   ],
   "childKeys": [
    "D:도미니온:r3"
   ],
   "classType": "균형형",
   "factions": [
    "celestial"
   ],
   "factionInGame": "celestial",
   "prismOnly": true,
   "stats": {
    "aspd": 1.2,
    "atk": 92,
    "distance": 60,
    "hp": 460
   },
   "statArrows": {
    "aspd": -1,
    "atk": 3,
    "distance": 0,
    "hp": 3
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "只有 prism 稀有度（或 jackpot5th 標記）才會出現；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L1064） ／ 任何稀有度都會出現；只有「已有 천사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1064）",
   "source": "decompiled/src/game/promotion.lua:1064"
  },
  {
   "key": "D:리퍼:r2",
   "id": "리퍼",
   "name": "리퍼",
   "asset": "리퍼",
   "nameZh": "收割者",
   "nameZhKey": "unit.name.리퍼",
   "symbol": "D",
   "rank": 2,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "D:셰이드:r1"
   ],
   "rank2Entry": false,
   "children": [
    "소울리퍼"
   ],
   "childKeys": [
    "D:소울리퍼:r3"
   ],
   "classType": "치명형",
   "factions": [
    "abyss"
   ],
   "factionInGame": "abyss",
   "prismOnly": false,
   "stats": {
    "aspd": 1.1,
    "atk": 90,
    "distance": 60,
    "hp": 300
   },
   "statArrows": {
    "aspd": -2,
    "atk": 4,
    "distance": 0,
    "hp": 2
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現；只有「已有 셰이드 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1115）",
   "source": "decompiled/src/game/promotion.lua:1115"
  },
  {
   "key": "D:베테랑:r2",
   "id": "베테랑",
   "name": "베테랑",
   "asset": "베테랑",
   "nameZh": "老兵",
   "nameZhKey": "unit.name.베테랑",
   "symbol": "D",
   "rank": 2,
   "reachable": true,
   "entry": [
    "special-parent",
    "standard"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "D:드루이드:r1"
   ],
   "rank2Entry": true,
   "children": [
    "장군"
   ],
   "childKeys": [
    "D:장군:r3"
   ],
   "classType": null,
   "factions": [
    "outlaw"
   ],
   "factionInGame": "outlaw",
   "prismOnly": false,
   "stats": {
    "aspd": 1.2,
    "atk": 30,
    "distance": 60,
    "hp": 210
   },
   "statArrows": null,
   "skillName": "전직 특성",
   "skillDesc": "기본 결투사 분기 전직",
   "condition": "稀有度限 normal/advanced/rare/legendary；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L1194） ／ 稀有度限 normal/rare/legendary/prism/jackpot5th；只有「已有 드루이드 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1194；判斷 L1162）",
   "source": "decompiled/src/game/promotion.lua:1194"
  },
  {
   "key": "D:빅터:r2",
   "id": "빅터",
   "name": "빅터",
   "asset": "빅터",
   "nameZh": "維克托",
   "nameZhKey": "unit.name.빅터",
   "symbol": "D",
   "rank": 2,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "D:드루이드:r1"
   ],
   "rank2Entry": false,
   "children": [
    "프랑켄슈타인"
   ],
   "childKeys": [
    "D:프랑켄슈타인:r3"
   ],
   "classType": null,
   "factions": [
    "engineer"
   ],
   "factionInGame": "engineer",
   "prismOnly": false,
   "stats": {
    "aspd": 1.2,
    "atk": 40,
    "distance": 60,
    "hp": 180
   },
   "statArrows": null,
   "skillName": "피의 각성",
   "skillDesc": "칼 끝에서 피가 타오르는 결투사로 각성합니다.",
   "condition": "稀有度限 advanced；只有「已有 드루이드 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1176；判斷 L1162）",
   "source": "decompiled/src/game/promotion.lua:1176"
  },
  {
   "key": "D:서리칼날:r2",
   "id": "서리칼날",
   "name": "서리칼날",
   "asset": "서리칼날",
   "nameZh": "霜刃",
   "nameZhKey": "unit.name.서리칼날",
   "symbol": "D",
   "rank": 2,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "D:수호자:r1"
   ],
   "rank2Entry": false,
   "children": [
    "검황",
    "빙결여제",
    "암흑장군",
    "우드워든"
   ],
   "childKeys": [
    "D:검황:r3",
    "D:빙결여제:r3",
    "D:암흑장군:r3",
    "D:우드워든:r3"
   ],
   "classType": "공격형",
   "factions": [
    "arcane"
   ],
   "factionInGame": "arcane",
   "prismOnly": false,
   "stats": {
    "aspd": 1.4,
    "atk": 54,
    "distance": 60,
    "hp": 260
   },
   "statArrows": {
    "aspd": 1,
    "atk": 1,
    "distance": 0,
    "hp": 1
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現；只有「已有 수호자 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1144）",
   "source": "decompiled/src/game/promotion.lua:1144"
  },
  {
   "key": "D:엔트:r2",
   "id": "엔트",
   "name": "엔트",
   "asset": "엔트",
   "nameZh": "樹人",
   "nameZhKey": "unit.name.엔트",
   "symbol": "D",
   "rank": 2,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "D:드루이드:r1"
   ],
   "rank2Entry": false,
   "children": [
    "엔트로드"
   ],
   "childKeys": [
    "D:엔트로드:r3"
   ],
   "classType": null,
   "factions": [
    "forest"
   ],
   "factionInGame": "forest",
   "prismOnly": false,
   "stats": {
    "aspd": 1.1,
    "atk": 48,
    "distance": 60,
    "hp": 300
   },
   "statArrows": null,
   "skillName": "숲의 각성",
   "skillDesc": "고대 수목의 힘으로 결투사의 형태를 완성합니다.",
   "condition": "稀有度限 advanced；只有「已有 드루이드 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1169；判斷 L1162）",
   "source": "decompiled/src/game/promotion.lua:1169"
  },
  {
   "key": "D:타락천사:r2",
   "id": "타락천사",
   "name": "타락천사",
   "asset": "타락천사",
   "nameZh": "墮天使",
   "nameZhKey": "unit.name.타락천사",
   "symbol": "D",
   "rank": 2,
   "reachable": true,
   "entry": [
    "special-parent",
    "standard"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "D:천사:r1"
   ],
   "rank2Entry": true,
   "children": [
    "파멸의 천사"
   ],
   "childKeys": [
    "D:파멸의 천사:r3"
   ],
   "classType": "범위형",
   "factions": [
    "abyss"
   ],
   "factionInGame": "abyss",
   "prismOnly": true,
   "stats": {
    "aspd": 1,
    "atk": 72,
    "distance": 60,
    "hp": 350
   },
   "statArrows": {
    "aspd": -3,
    "atk": 1,
    "distance": 0,
    "hp": 1
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "只有 prism 稀有度（或 jackpot5th 標記）才會出現；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L1077） ／ 任何稀有度都會出現；只有「已有 천사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1077）",
   "source": "decompiled/src/game/promotion.lua:1077"
  },
  {
   "key": "D:해적왕:r2",
   "id": "해적왕",
   "name": "해적왕",
   "asset": "해적왕",
   "nameZh": "海盜王",
   "nameZhKey": "unit.name.해적왕",
   "symbol": "D",
   "rank": 2,
   "reachable": false,
   "entry": [
    "orphan-special"
   ],
   "inTree": false,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "검황",
    "망령"
   ],
   "childKeys": [
    "D:검황:r3",
    "D:망령:r3"
   ],
   "classType": null,
   "factions": [
    "outlaw"
   ],
   "factionInGame": null,
   "prismOnly": false,
   "stats": {
    "aspd": 1.8,
    "atk": 36,
    "distance": 50,
    "hp": 160
   },
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": null,
   "source": null
  },
  {
   "key": "D:황제:r2",
   "id": "황제",
   "name": "황제",
   "asset": "황제",
   "nameZh": "皇帝",
   "nameZhKey": "unit.name.황제",
   "symbol": "D",
   "rank": 2,
   "reachable": true,
   "entry": [
    "special-parent",
    "standard"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "D:드루이드:r1"
   ],
   "rank2Entry": true,
   "children": [
    "검황"
   ],
   "childKeys": [
    "D:검황:r3"
   ],
   "classType": null,
   "factions": [
    "empire"
   ],
   "factionInGame": "empire",
   "prismOnly": false,
   "stats": {
    "aspd": 1.25,
    "atk": 34,
    "distance": 60,
    "hp": 180
   },
   "statArrows": null,
   "skillName": "전직 특성",
   "skillDesc": "기본 결투사 상위 전직",
   "condition": "稀有度限 normal/advanced/rare/legendary；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L1187） ／ 稀有度限 normal/rare/legendary/prism/jackpot5th；只有「已有 드루이드 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1187；判斷 L1162）",
   "source": "decompiled/src/game/promotion.lua:1187"
  },
  {
   "key": "D:CrownRevenant:r3",
   "id": "CrownRevenant",
   "name": "레버넌트",
   "asset": "CrownRevenant",
   "nameZh": "亡魂",
   "nameZhKey": "unit.name.레버넌트",
   "symbol": "D",
   "rank": 3,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "D:LegendarySpecter:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": "방어형",
   "factions": [
    "undead"
   ],
   "factionInGame": "undead",
   "prismOnly": false,
   "stats": {
    "aspd": 0.8,
    "atk": 124,
    "distance": 60,
    "hp": 650
   },
   "statArrows": {
    "aspd": -1,
    "atk": 3,
    "distance": 0,
    "hp": 4
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現；只有「已有 스펙터 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1278）",
   "source": "decompiled/src/game/promotion.lua:1278"
  },
  {
   "key": "D:검황:r3",
   "id": "검황",
   "name": "검황",
   "asset": "검황",
   "nameZh": "劍皇",
   "nameZhKey": "unit.name.검황",
   "symbol": "D",
   "rank": 3,
   "reachable": true,
   "entry": [
    "no-subclass-direct",
    "special-parent",
    "standard"
   ],
   "inTree": true,
   "parent": "황제",
   "parents": [
    "황제"
   ],
   "parentKeys": [
    "D:황제:r2"
   ],
   "otherParentKeys": [
    "D:RarePaladin:r2",
    "D:서리칼날:r2",
    "D:해적왕:r2"
   ],
   "rank2Entry": false,
   "children": [
    "글룸"
   ],
   "childKeys": [
    "D:글룸:r4"
   ],
   "classType": null,
   "factions": [
    "empire"
   ],
   "factionInGame": "empire",
   "prismOnly": false,
   "stats": {
    "aspd": 1.4,
    "atk": 44,
    "distance": 60,
    "hp": 260
   },
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1359,1415,1482；判斷 L1354） ／ 稀有度限 normal/advanced/rare/legendary；單位還沒有任何職業名就直接要選 rank 3 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L1359,1415,1482） ／ 稀有度限 normal/advanced/legendary/prism/jackpot5th；只有「已有 서리칼날 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1359,1415,1482） ／ 稀有度限 normal/advanced/legendary/prism/jackpot5th；只有「已有 팔라딘 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1359,1415,1482） ／ 任何稀有度都會出現；只有「已有 해적왕 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1359,1415,1482）",
   "source": "decompiled/src/game/promotion.lua:1359,1415,1482"
  },
  {
   "key": "D:도미니온:r3",
   "id": "도미니온",
   "name": "도미니온",
   "asset": "도미니온",
   "nameZh": "多米尼恩",
   "nameZhKey": "unit.name.도미니온",
   "symbol": "D",
   "rank": 3,
   "reachable": true,
   "entry": [
    "no-subclass-direct",
    "standard"
   ],
   "inTree": true,
   "parent": "대천사",
   "parents": [
    "대천사"
   ],
   "parentKeys": [
    "D:대천사:r2"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "검황",
    "암흑장군",
    "우드워든"
   ],
   "childKeys": [
    "D:검황:r4",
    "D:암흑장군:r4",
    "D:우드워든:r4"
   ],
   "classType": "균형형",
   "factions": [
    "celestial"
   ],
   "factionInGame": "celestial",
   "prismOnly": false,
   "stats": {
    "aspd": 1.2,
    "atk": 124,
    "distance": 65,
    "hp": 700
   },
   "statArrows": {
    "aspd": 0,
    "atk": 3,
    "distance": 1,
    "hp": 4
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1221） ／ 只有 prism 稀有度（或 jackpot5th 標記）才會出現；單位還沒有任何職業名就直接要選 rank 3 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L1221）",
   "source": "decompiled/src/game/promotion.lua:1221"
  },
  {
   "key": "D:망령:r3",
   "id": "망령",
   "name": "망령",
   "asset": "망령",
   "nameZh": "怨靈",
   "nameZhKey": "unit.name.망령",
   "symbol": "D",
   "rank": 3,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "D:해적왕:r2"
   ],
   "rank2Entry": false,
   "children": [
    "글룸"
   ],
   "childKeys": [
    "D:글룸:r4"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現；只有「已有 해적왕 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1420；判斷 L1410）",
   "source": "decompiled/src/game/promotion.lua:1420"
  },
  {
   "key": "D:바그:r3",
   "id": "바그",
   "name": "바그",
   "asset": "바그",
   "nameZh": "巴格",
   "nameZhKey": "unit.name.바그",
   "symbol": "D",
   "rank": 3,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "D:드루이드:r1"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [
    "tribe"
   ],
   "factionInGame": "tribe",
   "prismOnly": false,
   "stats": {
    "aspd": 1.5,
    "atk": 40,
    "distance": 50,
    "hp": 280
   },
   "statArrows": null,
   "skillName": "자연의 맹세",
   "skillDesc": "자연의 힘으로 각성한 상위 전직",
   "condition": "任何稀有度都會出現；只有「已有 드루이드 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1405；判斷 L1398）",
   "source": "decompiled/src/game/promotion.lua:1405"
  },
  {
   "key": "D:빙결여제:r3",
   "id": "빙결여제",
   "name": "빙결여제",
   "asset": "빙결여제",
   "nameZh": "冰霜女帝",
   "nameZhKey": "unit.name.빙결여제",
   "symbol": "D",
   "rank": 3,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "D:서리칼날:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": "공격형",
   "factions": [
    "arcane"
   ],
   "factionInGame": "arcane",
   "prismOnly": false,
   "stats": {
    "aspd": 1.4,
    "atk": 74,
    "distance": 60,
    "hp": 360
   },
   "statArrows": {
    "aspd": 0,
    "atk": 2,
    "distance": 0,
    "hp": 2
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "稀有度限 rare；只有「已有 서리칼날 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1323）",
   "source": "decompiled/src/game/promotion.lua:1323"
  },
  {
   "key": "D:소울리퍼:r3",
   "id": "소울리퍼",
   "name": "소울리퍼",
   "asset": "소울리퍼",
   "nameZh": "靈魂收割者",
   "nameZhKey": "unit.name.소울리퍼",
   "symbol": "D",
   "rank": 3,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "D:리퍼:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": "치명형",
   "factions": [
    "abyss"
   ],
   "factionInGame": "abyss",
   "prismOnly": false,
   "stats": {
    "aspd": 1.1,
    "atk": 128,
    "distance": 60,
    "hp": 430
   },
   "statArrows": {
    "aspd": 0,
    "atk": 3,
    "distance": 0,
    "hp": 3
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現；只有「已有 리퍼 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1296）",
   "source": "decompiled/src/game/promotion.lua:1296"
  },
  {
   "key": "D:심판관:r3",
   "id": "심판관",
   "name": "심판관",
   "asset": "심판관",
   "nameZh": "仲裁者",
   "nameZhKey": "unit.name.심판관",
   "symbol": "D",
   "rank": 3,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "D:RarePaladin:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": "균형형",
   "factions": [
    "holy"
   ],
   "factionInGame": "holy",
   "prismOnly": false,
   "stats": {
    "aspd": 1.1,
    "atk": 84,
    "distance": 60,
    "hp": 520
   },
   "statArrows": {
    "aspd": 0,
    "atk": 3,
    "distance": 0,
    "hp": 3
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "稀有度限 rare；只有「已有 팔라딘 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1340）",
   "source": "decompiled/src/game/promotion.lua:1340"
  },
  {
   "key": "D:암흑장군:r3",
   "id": "암흑장군",
   "name": "암흑장군",
   "asset": "암흑장군",
   "nameZh": "暗黑將軍",
   "nameZhKey": "unit.name.암흑 장군",
   "symbol": "D",
   "rank": 3,
   "reachable": false,
   "entry": [
    "no-subclass-direct",
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "D:RarePaladin:r2",
    "D:서리칼날:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": "어둠의 구체",
   "skillDesc": "4초마다, 구체로 적 최대 3명에게 ATK 120% 피해를 주고 1초간 스턴.",
   "condition": "稀有度限 normal/advanced/rare/legendary；單位還沒有任何職業名就直接要選 rank 3 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L1489） ／ 稀有度限 normal/advanced/legendary/prism/jackpot5th；只有「已有 서리칼날 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1489） ／ 稀有度限 normal/advanced/legendary/prism/jackpot5th；只有「已有 팔라딘 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1489）",
   "source": "decompiled/src/game/promotion.lua:1489"
  },
  {
   "key": "D:엔트로드:r3",
   "id": "엔트로드",
   "name": "엔트로드",
   "asset": "엔트로드",
   "nameZh": "樹人領主",
   "nameZhKey": "unit.name.엔트 로드",
   "symbol": "D",
   "rank": 3,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "D:엔트:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [
    "forest"
   ],
   "factionInGame": "forest",
   "prismOnly": false,
   "stats": {
    "aspd": 1.1,
    "atk": 58,
    "distance": 60,
    "hp": 480
   },
   "statArrows": null,
   "skillName": "숲주의 계승",
   "skillDesc": "고대 수목의 정수를 이어받은 최종 분기입니다.",
   "condition": "任何稀有度都會出現；只有「已有 엔트 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1381；判斷 L1374）",
   "source": "decompiled/src/game/promotion.lua:1381"
  },
  {
   "key": "D:우드워든:r3",
   "id": "우드워든",
   "name": "우드워든",
   "asset": "우드워든",
   "nameZh": "林地守衛",
   "nameZhKey": "unit.name.우드 워든",
   "symbol": "D",
   "rank": 3,
   "reachable": false,
   "entry": [
    "no-subclass-direct",
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "D:RarePaladin:r2",
    "D:서리칼날:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": "뿌리 일격",
   "skillDesc": "4초마다, 지면에서 뿌리가 튀어나와 적 최대 3명에게 ATK 140% 피해.",
   "condition": "稀有度限 normal/advanced/rare/legendary；單位還沒有任何職業名就直接要選 rank 3 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L1496） ／ 稀有度限 normal/advanced/legendary/prism/jackpot5th；只有「已有 서리칼날 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1496） ／ 稀有度限 normal/advanced/legendary/prism/jackpot5th；只有「已有 팔라딘 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1496）",
   "source": "decompiled/src/game/promotion.lua:1496"
  },
  {
   "key": "D:장군:r3",
   "id": "장군",
   "name": "장군",
   "asset": "장군",
   "nameZh": "將軍",
   "nameZhKey": "unit.name.장군",
   "symbol": "D",
   "rank": 3,
   "reachable": true,
   "entry": [
    "standard"
   ],
   "inTree": true,
   "parent": "베테랑",
   "parents": [
    "베테랑"
   ],
   "parentKeys": [
    "D:베테랑:r2"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "검황",
    "암흑장군",
    "우드워든"
   ],
   "childKeys": [
    "D:검황:r4",
    "D:암흑장군:r4",
    "D:우드워든:r4"
   ],
   "classType": null,
   "factions": [
    "outlaw"
   ],
   "factionInGame": "outlaw",
   "prismOnly": false,
   "stats": {
    "aspd": 1.2,
    "atk": 40,
    "distance": 60,
    "hp": 360
   },
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1369；判斷 L1364）",
   "source": "decompiled/src/game/promotion.lua:1369"
  },
  {
   "key": "D:파멸의 천사:r3",
   "id": "파멸의 천사",
   "name": "파멸의 천사",
   "asset": "파멸의 천사",
   "nameZh": "毀滅天使",
   "nameZhKey": "unit.name.파멸의 천사",
   "symbol": "D",
   "rank": 3,
   "reachable": true,
   "entry": [
    "standard"
   ],
   "inTree": true,
   "parent": "타락천사",
   "parents": [
    "타락천사"
   ],
   "parentKeys": [
    "D:타락천사:r2"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "검황",
    "암흑장군",
    "우드워든"
   ],
   "childKeys": [
    "D:검황:r4",
    "D:암흑장군:r4",
    "D:우드워든:r4"
   ],
   "classType": "범위형",
   "factions": [
    "abyss"
   ],
   "factionInGame": "abyss",
   "prismOnly": false,
   "stats": {
    "aspd": 0.9,
    "atk": 108,
    "distance": 65,
    "hp": 560
   },
   "statArrows": {
    "aspd": -1,
    "atk": 3,
    "distance": 1,
    "hp": 4
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1253）",
   "source": "decompiled/src/game/promotion.lua:1253"
  },
  {
   "key": "D:프랑켄슈타인:r3",
   "id": "프랑켄슈타인",
   "name": "프랑켄슈타인",
   "asset": "프랑켄슈타인",
   "nameZh": "弗蘭肯斯坦",
   "nameZhKey": "unit.name.프랑켄슈타인",
   "symbol": "D",
   "rank": 3,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "D:빅터:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [
    "engineer"
   ],
   "factionInGame": "engineer",
   "prismOnly": false,
   "stats": {
    "aspd": 1.2,
    "atk": 65,
    "distance": 60,
    "hp": 280
   },
   "statArrows": null,
   "skillName": "인조 각성",
   "skillDesc": "금단의 힘으로 완성된 괴물 보디입니다.",
   "condition": "任何稀有度都會出現；只有「已有 빅터 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1393；判斷 L1386）",
   "source": "decompiled/src/game/promotion.lua:1393"
  },
  {
   "key": "D:검황:r4",
   "id": "검황",
   "name": "검황",
   "asset": "검황",
   "nameZh": "劍皇",
   "nameZhKey": "unit.name.검황",
   "symbol": "D",
   "rank": 4,
   "reachable": false,
   "entry": [
    "no-subclass-direct",
    "standard"
   ],
   "inTree": true,
   "parent": "도미니온",
   "parents": [
    "도미니온",
    "장군",
    "파멸의 천사"
   ],
   "parentKeys": [
    "D:도미니온:r3",
    "D:장군:r3",
    "D:파멸의 천사:r3"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "검황",
    "암흑장군",
    "우드워든"
   ],
   "childKeys": [
    "D:검황:r5",
    "D:암흑장군:r5",
    "D:우드워든:r5"
   ],
   "classType": null,
   "factions": [
    "empire"
   ],
   "factionInGame": null,
   "prismOnly": false,
   "stats": {
    "aspd": 1.4,
    "atk": 44,
    "distance": 60,
    "hp": 260
   },
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1359,1415,1482） ／ 任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 4 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L1359,1415,1482）",
   "source": "decompiled/src/game/promotion.lua:1359,1415,1482"
  },
  {
   "key": "D:글룸:r4",
   "id": "글룸",
   "name": "글룸",
   "asset": "글룸",
   "nameZh": "幽暗",
   "nameZhKey": "unit.name.글룸",
   "symbol": "D",
   "rank": 4,
   "reachable": false,
   "entry": [
    "special-parent",
    "standard"
   ],
   "inTree": true,
   "parent": "검황",
   "parents": [
    "검황"
   ],
   "parentKeys": [
    "D:검황:r3"
   ],
   "otherParentKeys": [
    "D:망령:r3"
   ],
   "rank2Entry": false,
   "children": [
    "카오스"
   ],
   "childKeys": [
    "D:카오스:r5"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1472；判斷 L1454） ／ 任何稀有度都會出現；只有「已有 망령 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1472；判斷 L1455）",
   "source": "decompiled/src/game/promotion.lua:1472"
  },
  {
   "key": "D:암흑장군:r4",
   "id": "암흑장군",
   "name": "암흑장군",
   "asset": "암흑장군",
   "nameZh": "暗黑將軍",
   "nameZhKey": "unit.name.암흑 장군",
   "symbol": "D",
   "rank": 4,
   "reachable": false,
   "entry": [
    "no-subclass-direct",
    "standard"
   ],
   "inTree": true,
   "parent": "도미니온",
   "parents": [
    "도미니온",
    "장군",
    "파멸의 천사"
   ],
   "parentKeys": [
    "D:도미니온:r3",
    "D:장군:r3",
    "D:파멸의 천사:r3"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "검황",
    "암흑장군",
    "우드워든"
   ],
   "childKeys": [
    "D:검황:r5",
    "D:암흑장군:r5",
    "D:우드워든:r5"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": "어둠의 구체",
   "skillDesc": "4초마다, 구체로 적 최대 3명에게 ATK 120% 피해를 주고 1초간 스턴.",
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1489） ／ 任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 4 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L1489）",
   "source": "decompiled/src/game/promotion.lua:1489"
  },
  {
   "key": "D:우드워든:r4",
   "id": "우드워든",
   "name": "우드워든",
   "asset": "우드워든",
   "nameZh": "林地守衛",
   "nameZhKey": "unit.name.우드 워든",
   "symbol": "D",
   "rank": 4,
   "reachable": false,
   "entry": [
    "no-subclass-direct",
    "standard"
   ],
   "inTree": true,
   "parent": "도미니온",
   "parents": [
    "도미니온",
    "장군",
    "파멸의 천사"
   ],
   "parentKeys": [
    "D:도미니온:r3",
    "D:장군:r3",
    "D:파멸의 천사:r3"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "검황",
    "암흑장군",
    "우드워든"
   ],
   "childKeys": [
    "D:검황:r5",
    "D:암흑장군:r5",
    "D:우드워든:r5"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": "뿌리 일격",
   "skillDesc": "4초마다, 지면에서 뿌리가 튀어나와 적 최대 3명에게 ATK 140% 피해.",
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1496） ／ 任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 4 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L1496）",
   "source": "decompiled/src/game/promotion.lua:1496"
  },
  {
   "key": "D:검황:r5",
   "id": "검황",
   "name": "검황",
   "asset": "검황",
   "nameZh": "劍皇",
   "nameZhKey": "unit.name.검황",
   "symbol": "D",
   "rank": 5,
   "reachable": false,
   "entry": [
    "no-subclass-direct",
    "standard"
   ],
   "inTree": true,
   "parent": "검황",
   "parents": [
    "검황",
    "암흑장군",
    "우드워든"
   ],
   "parentKeys": [
    "D:검황:r4",
    "D:암흑장군:r4",
    "D:우드워든:r4"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [
    "empire"
   ],
   "factionInGame": null,
   "prismOnly": false,
   "stats": {
    "aspd": 1.4,
    "atk": 44,
    "distance": 60,
    "hp": 260
   },
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1359,1415,1482） ／ 任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 5 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L1359,1415,1482）",
   "source": "decompiled/src/game/promotion.lua:1359,1415,1482"
  },
  {
   "key": "D:암흑장군:r5",
   "id": "암흑장군",
   "name": "암흑장군",
   "asset": "암흑장군",
   "nameZh": "暗黑將軍",
   "nameZhKey": "unit.name.암흑 장군",
   "symbol": "D",
   "rank": 5,
   "reachable": false,
   "entry": [
    "no-subclass-direct",
    "standard"
   ],
   "inTree": true,
   "parent": "검황",
   "parents": [
    "검황",
    "암흑장군",
    "우드워든"
   ],
   "parentKeys": [
    "D:검황:r4",
    "D:암흑장군:r4",
    "D:우드워든:r4"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": "어둠의 구체",
   "skillDesc": "4초마다, 구체로 적 최대 3명에게 ATK 120% 피해를 주고 1초간 스턴.",
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1489；判斷 L1454） ／ 任何稀有度都會出現（promotion.lua 定義 L1489） ／ 任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 5 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L1489）",
   "source": "decompiled/src/game/promotion.lua:1489"
  },
  {
   "key": "D:우드워든:r5",
   "id": "우드워든",
   "name": "우드워든",
   "asset": "우드워든",
   "nameZh": "林地守衛",
   "nameZhKey": "unit.name.우드 워든",
   "symbol": "D",
   "rank": 5,
   "reachable": false,
   "entry": [
    "no-subclass-direct",
    "standard"
   ],
   "inTree": true,
   "parent": "검황",
   "parents": [
    "검황",
    "암흑장군",
    "우드워든"
   ],
   "parentKeys": [
    "D:검황:r4",
    "D:암흑장군:r4",
    "D:우드워든:r4"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": "뿌리 일격",
   "skillDesc": "4초마다, 지면에서 뿌리가 튀어나와 적 최대 3명에게 ATK 140% 피해.",
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1496；判斷 L1454） ／ 任何稀有度都會出現（promotion.lua 定義 L1496） ／ 任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 5 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L1496）",
   "source": "decompiled/src/game/promotion.lua:1496"
  },
  {
   "key": "D:카오스:r5",
   "id": "카오스",
   "name": "카오스",
   "asset": "카오스",
   "nameZh": "混沌",
   "nameZhKey": "unit.name.카오스",
   "symbol": "D",
   "rank": 5,
   "reachable": false,
   "entry": [
    "standard"
   ],
   "inTree": true,
   "parent": "글룸",
   "parents": [
    "글룸"
   ],
   "parentKeys": [
    "D:글룸:r4"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1445；判斷 L1428）",
   "source": "decompiled/src/game/promotion.lua:1445"
  },
  {
   "key": "H:경기병:r1",
   "id": "경기병",
   "name": "경기병",
   "asset": "경기병",
   "nameZh": "輕騎兵",
   "nameZhKey": "unit.name.경기병",
   "symbol": "H",
   "rank": 1,
   "reachable": false,
   "entry": [
    "orphan-special"
   ],
   "inTree": false,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "초원 기병",
    "후사르"
   ],
   "childKeys": [
    "H:초원 기병:r2",
    "H:후사르:r2"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": null,
   "source": null
  },
  {
   "key": "H:사령기병:r1",
   "id": "사령기병",
   "name": "사령기병",
   "asset": "사령기병",
   "nameZh": "亡靈騎兵",
   "nameZhKey": "unit.name.사령기병",
   "symbol": "H",
   "rank": 1,
   "reachable": false,
   "entry": [
    "orphan-special"
   ],
   "inTree": false,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "나이트메어",
    "월광사제"
   ],
   "childKeys": [
    "H:나이트메어:r2",
    "H:월광사제:r2"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": null,
   "source": null
  },
  {
   "key": "H:철기병:r1",
   "id": "철기병",
   "name": "철기병",
   "asset": "철기병",
   "nameZh": "鐵騎兵",
   "nameZhKey": "unit.name.철기병",
   "symbol": "H",
   "rank": 1,
   "reachable": false,
   "entry": [
    "orphan-special"
   ],
   "inTree": false,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "야만 기병",
    "엘프 기병"
   ],
   "childKeys": [
    "H:야만 기병:r2",
    "H:엘프 기병:r2"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": null,
   "source": null
  },
  {
   "key": "H:환수기병:r1",
   "id": "환수기병",
   "name": "환수기병",
   "asset": "환수기병",
   "nameZh": "幻獸騎兵",
   "nameZhKey": "unit.name.환수기병",
   "symbol": "H",
   "rank": 1,
   "reachable": false,
   "entry": [
    "orphan-special"
   ],
   "inTree": false,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "실반",
    "페이즈"
   ],
   "childKeys": [
    "H:실반:r2",
    "H:페이즈:r2"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": null,
   "source": null
  },
  {
   "key": "H:나이트메어:r2",
   "id": "나이트메어",
   "name": "나이트메어",
   "asset": "나이트메어",
   "nameZh": "夢魘",
   "nameZhKey": "unit.name.나이트메어",
   "symbol": "H",
   "rank": 2,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "H:사령기병:r1"
   ],
   "rank2Entry": false,
   "children": [
    "아포칼립스"
   ],
   "childKeys": [
    "H:아포칼립스:r3"
   ],
   "classType": "치명형",
   "factions": [
    "undead"
   ],
   "factionInGame": "undead",
   "prismOnly": false,
   "stats": {
    "aspd": 1.1,
    "atk": 72,
    "distance": 55,
    "hp": 300
   },
   "statArrows": {
    "aspd": -1,
    "atk": 4,
    "distance": 0,
    "hp": 3
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現；只有「已有 사령기병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2417）",
   "source": "decompiled/src/game/promotion.lua:2417"
  },
  {
   "key": "H:도끼 기병:r2",
   "id": "도끼 기병",
   "name": "도끼 기병",
   "asset": "도끼 기병",
   "nameZh": "斧騎兵",
   "nameZhKey": "unit.name.도끼 기병",
   "symbol": "H",
   "rank": 2,
   "reachable": true,
   "entry": [
    "standard"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": true,
   "children": [
    "무법 기병"
   ],
   "childKeys": [
    "H:무법 기병:r3"
   ],
   "classType": null,
   "factions": [
    "outlaw"
   ],
   "factionInGame": "outlaw",
   "prismOnly": false,
   "stats": {
    "aspd": 1.2,
    "atk": 38,
    "distance": 55,
    "hp": 110
   },
   "statArrows": null,
   "skillName": "전직 특성",
   "skillDesc": "도끼 기병으로 전직",
   "condition": "稀有度限 normal/rare/legendary；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L2501）",
   "source": "decompiled/src/game/promotion.lua:2501"
  },
  {
   "key": "H:돌격병:r2",
   "id": "돌격병",
   "name": "돌격병",
   "asset": "돌격병",
   "nameZh": "衝鋒兵",
   "nameZhKey": "unit.name.돌격병",
   "symbol": "H",
   "rank": 2,
   "reachable": true,
   "entry": [
    "standard"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": true,
   "children": [
    "MiniHorseMan03"
   ],
   "childKeys": [
    "H:MiniHorseMan03:r3"
   ],
   "classType": null,
   "factions": [
    "empire"
   ],
   "factionInGame": "empire",
   "prismOnly": false,
   "stats": {
    "aspd": 1.2,
    "atk": 28,
    "distance": 55,
    "hp": 150
   },
   "statArrows": null,
   "skillName": "전직 특성",
   "skillDesc": "기본 기병 상위 전직",
   "condition": "稀有度限 normal/rare/legendary；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L2494）",
   "source": "decompiled/src/game/promotion.lua:2494"
  },
  {
   "key": "H:실반:r2",
   "id": "실반",
   "name": "실반",
   "asset": "실반",
   "nameZh": "希爾凡",
   "nameZhKey": "unit.name.실반",
   "symbol": "H",
   "rank": 2,
   "reachable": true,
   "entry": [
    "special-parent",
    "standard"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "H:환수기병:r1"
   ],
   "rank2Entry": true,
   "children": [
    "숲의 심장"
   ],
   "childKeys": [
    "H:숲의 심장:r3"
   ],
   "classType": "방어형",
   "factions": [
    "forest"
   ],
   "factionInGame": "forest",
   "prismOnly": true,
   "stats": {
    "aspd": 1.2,
    "atk": 66,
    "distance": 55,
    "hp": 420,
    "speed": 65
   },
   "statArrows": {
    "aspd": -1,
    "atk": 2,
    "distance": 0,
    "hp": 3
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "只有 prism 稀有度（或 jackpot5th 標記）才會出現；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L2379） ／ 任何稀有度都會出現；只有「已有 환수기병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2379）",
   "source": "decompiled/src/game/promotion.lua:2379"
  },
  {
   "key": "H:야만 기병:r2",
   "id": "야만 기병",
   "name": "야만 기병",
   "asset": "야만 기병",
   "nameZh": "蠻族騎兵",
   "nameZhKey": "unit.name.야만 기병",
   "symbol": "H",
   "rank": 2,
   "reachable": true,
   "entry": [
    "special-parent",
    "standard"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "H:철기병:r1"
   ],
   "rank2Entry": true,
   "children": [
    "광폭 기병"
   ],
   "childKeys": [
    "H:광폭 기병:r3"
   ],
   "classType": null,
   "factions": [
    "tribe"
   ],
   "factionInGame": "tribe",
   "prismOnly": false,
   "stats": {
    "aspd": 1.15,
    "atk": 50,
    "distance": 55,
    "hp": 150
   },
   "statArrows": null,
   "skillName": "전직 특성",
   "skillDesc": "야만 기병으로 전직",
   "condition": "稀有度限 advanced；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L2483） ／ 任何稀有度都會出現；只有「已有 철기병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2483；判斷 L2469）",
   "source": "decompiled/src/game/promotion.lua:2483"
  },
  {
   "key": "H:엘프 기병:r2",
   "id": "엘프 기병",
   "name": "엘프 기병",
   "asset": "엘프 기병",
   "nameZh": "精靈騎兵",
   "nameZhKey": "unit.name.엘프 기병",
   "symbol": "H",
   "rank": 2,
   "reachable": true,
   "entry": [
    "special-parent",
    "standard"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "H:철기병:r1"
   ],
   "rank2Entry": true,
   "children": [
    "하이 엘프 기병"
   ],
   "childKeys": [
    "H:하이 엘프 기병:r3"
   ],
   "classType": null,
   "factions": [
    "forest"
   ],
   "factionInGame": "forest",
   "prismOnly": false,
   "stats": {
    "aspd": 1.4,
    "atk": 30,
    "distance": 55,
    "hp": 190
   },
   "statArrows": null,
   "skillName": "전직 특성",
   "skillDesc": "엘프 기병으로 전직",
   "condition": "稀有度限 advanced；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L2476） ／ 任何稀有度都會出現；只有「已有 철기병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2476；判斷 L2469）",
   "source": "decompiled/src/game/promotion.lua:2476"
  },
  {
   "key": "H:월광사제:r2",
   "id": "월광사제",
   "name": "월광사제",
   "asset": "월광사제",
   "nameZh": "月光祭司",
   "nameZhKey": "unit.name.월광사제",
   "symbol": "H",
   "rank": 2,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "H:사령기병:r1"
   ],
   "rank2Entry": false,
   "children": [
    "초승달 여왕"
   ],
   "childKeys": [
    "H:초승달 여왕:r3"
   ],
   "classType": "지원형",
   "factions": [
    "celestial"
   ],
   "factionInGame": "celestial",
   "prismOnly": false,
   "stats": {
    "aspd": 1.2,
    "atk": 50,
    "distance": 150,
    "hp": 230
   },
   "statArrows": {
    "aspd": 0,
    "atk": 1,
    "distance": 5,
    "hp": 1
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現；只有「已有 사령기병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2430）",
   "source": "decompiled/src/game/promotion.lua:2430"
  },
  {
   "key": "H:초원 기병:r2",
   "id": "초원 기병",
   "name": "초원 기병",
   "asset": "초원 기병",
   "nameZh": "草原騎兵",
   "nameZhKey": "unit.name.초원 기병",
   "symbol": "H",
   "rank": 2,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "H:경기병:r1"
   ],
   "rank2Entry": false,
   "children": [
    "켄타로우스"
   ],
   "childKeys": [
    "H:켄타로우스:r3"
   ],
   "classType": "범위형",
   "factions": [
    "tribe"
   ],
   "factionInGame": "tribe",
   "prismOnly": false,
   "stats": {
    "aspd": 0.7,
    "atk": 48,
    "distance": 55,
    "hp": 210
   },
   "statArrows": {
    "aspd": -3,
    "atk": 3,
    "distance": 0,
    "hp": 1
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現；只有「已有 경기병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2445）",
   "source": "decompiled/src/game/promotion.lua:2445"
  },
  {
   "key": "H:페이즈:r2",
   "id": "페이즈",
   "name": "페이즈",
   "asset": "페이즈",
   "nameZh": "相位",
   "nameZhKey": "unit.name.페이즈",
   "symbol": "H",
   "rank": 2,
   "reachable": true,
   "entry": [
    "special-parent",
    "standard"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "H:환수기병:r1"
   ],
   "rank2Entry": true,
   "children": [
    "크로노워커"
   ],
   "childKeys": [
    "H:크로노워커:r3"
   ],
   "classType": "공격형",
   "factions": [
    "arcane"
   ],
   "factionInGame": "arcane",
   "prismOnly": true,
   "stats": {
    "aspd": 1.4,
    "atk": 78,
    "distance": 55,
    "hp": 320,
    "speed": 75
   },
   "statArrows": {
    "aspd": 1,
    "atk": 3,
    "distance": 0,
    "hp": 1
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "只有 prism 稀有度（或 jackpot5th 標記）才會出現；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L2392） ／ 任何稀有度都會出現；只有「已有 환수기병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2392）",
   "source": "decompiled/src/game/promotion.lua:2392"
  },
  {
   "key": "H:후사르:r2",
   "id": "후사르",
   "name": "후사르",
   "asset": "후사르",
   "nameZh": "驃騎兵",
   "nameZhKey": "unit.name.후사르",
   "symbol": "H",
   "rank": 2,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "H:경기병:r1"
   ],
   "rank2Entry": false,
   "children": [
    "윙드 후사르"
   ],
   "childKeys": [
    "H:윙드 후사르:r3"
   ],
   "classType": "지원형",
   "factions": [
    "empire"
   ],
   "factionInGame": "empire",
   "prismOnly": false,
   "stats": {
    "aspd": 1.4,
    "atk": 34,
    "distance": 55,
    "hp": 260
   },
   "statArrows": {
    "aspd": 1,
    "atk": 1,
    "distance": 0,
    "hp": 3
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現；只有「已有 경기병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2457）",
   "source": "decompiled/src/game/promotion.lua:2457"
  },
  {
   "key": "H:MiniHorseMan03:r3",
   "id": "MiniHorseMan03",
   "name": "중기병",
   "asset": "MiniHorseMan03",
   "nameZh": "重騎兵",
   "nameZhKey": "unit.name.중기병",
   "symbol": "H",
   "rank": 3,
   "reachable": true,
   "entry": [
    "no-subclass-direct",
    "standard"
   ],
   "inTree": true,
   "parent": "돌격병",
   "parents": [
    "돌격병"
   ],
   "parentKeys": [
    "H:돌격병:r2"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "그리즐"
   ],
   "childKeys": [
    "H:그리즐:r4"
   ],
   "classType": null,
   "factions": [
    "empire"
   ],
   "factionInGame": "empire",
   "prismOnly": false,
   "stats": {
    "aspd": 1.1,
    "atk": 34,
    "distance": 55,
    "hp": 320
   },
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2649,2759；判斷 L2639） ／ 稀有度限 normal/advanced/rare/legendary；單位還沒有任何職業名就直接要選 rank 3 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L2649,2759）",
   "source": "decompiled/src/game/promotion.lua:2649,2759"
  },
  {
   "key": "H:광폭 기병:r3",
   "id": "광폭 기병",
   "name": "광폭 기병",
   "asset": "광폭 기병",
   "nameZh": "狂暴騎兵",
   "nameZhKey": "unit.name.광폭 기병",
   "symbol": "H",
   "rank": 3,
   "reachable": true,
   "entry": [
    "standard"
   ],
   "inTree": true,
   "parent": "야만 기병",
   "parents": [
    "야만 기병"
   ],
   "parentKeys": [
    "H:야만 기병:r2"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "그리즐"
   ],
   "childKeys": [
    "H:그리즐:r4"
   ],
   "classType": null,
   "factions": [
    "tribe"
   ],
   "factionInGame": "tribe",
   "prismOnly": false,
   "stats": {
    "aspd": 1.2,
    "atk": 75,
    "distance": 55,
    "hp": 220
   },
   "statArrows": null,
   "skillName": "전직 특성",
   "skillDesc": "광폭 기병으로 전직",
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2673；判斷 L2641）",
   "source": "decompiled/src/game/promotion.lua:2673"
  },
  {
   "key": "H:무법 기병:r3",
   "id": "무법 기병",
   "name": "무법 기병",
   "asset": "무법 기병",
   "nameZh": "亡命騎兵",
   "nameZhKey": "unit.name.무법 기병",
   "symbol": "H",
   "rank": 3,
   "reachable": true,
   "entry": [
    "standard"
   ],
   "inTree": true,
   "parent": "도끼 기병",
   "parents": [
    "도끼 기병"
   ],
   "parentKeys": [
    "H:도끼 기병:r2"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "MiniHorseMan03",
    "워베어"
   ],
   "childKeys": [
    "H:MiniHorseMan03:r4",
    "H:워베어:r4"
   ],
   "classType": null,
   "factions": [
    "outlaw"
   ],
   "factionInGame": "outlaw",
   "prismOnly": false,
   "stats": {
    "aspd": 1.2,
    "atk": 58,
    "distance": 55,
    "hp": 180
   },
   "statArrows": null,
   "skillName": "전직 특성",
   "skillDesc": "무법 기병으로 전직",
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2661；判斷 L2642）",
   "source": "decompiled/src/game/promotion.lua:2661"
  },
  {
   "key": "H:숲의 심장:r3",
   "id": "숲의 심장",
   "name": "숲의 심장",
   "asset": "숲의 심장",
   "nameZh": "森林之心",
   "nameZhKey": "unit.name.숲의 심장",
   "symbol": "H",
   "rank": 3,
   "reachable": true,
   "entry": [
    "no-subclass-direct",
    "standard"
   ],
   "inTree": true,
   "parent": "실반",
   "parents": [
    "실반"
   ],
   "parentKeys": [
    "H:실반:r2"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "MiniHorseMan03",
    "워베어"
   ],
   "childKeys": [
    "H:MiniHorseMan03:r4",
    "H:워베어:r4"
   ],
   "classType": "방어형",
   "factions": [
    "forest"
   ],
   "factionInGame": "forest",
   "prismOnly": false,
   "stats": {
    "aspd": 1.2,
    "atk": 94,
    "distance": 60,
    "hp": 680,
    "speed": 65
   },
   "statArrows": {
    "aspd": 0,
    "atk": 3,
    "distance": 1,
    "hp": 4
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2556） ／ 只有 prism 稀有度（或 jackpot5th 標記）才會出現；單位還沒有任何職業名就直接要選 rank 3 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L2556）",
   "source": "decompiled/src/game/promotion.lua:2556"
  },
  {
   "key": "H:아포칼립스:r3",
   "id": "아포칼립스",
   "name": "아포칼립스",
   "asset": "아포칼립스",
   "nameZh": "天啟",
   "nameZhKey": "unit.name.아포칼립스",
   "symbol": "H",
   "rank": 3,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "H:나이트메어:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": "치명형",
   "factions": [
    "undead"
   ],
   "factionInGame": "undead",
   "prismOnly": false,
   "stats": {
    "aspd": 1.1,
    "atk": 104,
    "distance": 55,
    "hp": 430
   },
   "statArrows": {
    "aspd": 0,
    "atk": 4,
    "distance": 0,
    "hp": 4
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現；只有「已有 나이트메어 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2597）",
   "source": "decompiled/src/game/promotion.lua:2597"
  },
  {
   "key": "H:워베어:r3",
   "id": "워베어",
   "name": "워베어",
   "asset": "워베어",
   "nameZh": "戰熊",
   "nameZhKey": "unit.name.워베어",
   "symbol": "H",
   "rank": 3,
   "reachable": false,
   "entry": [
    "no-subclass-direct"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "그리즐"
   ],
   "childKeys": [
    "H:그리즐:r4"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": "稀有度限 normal/advanced/rare/legendary；單位還沒有任何職業名就直接要選 rank 3 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L2764）",
   "source": "decompiled/src/game/promotion.lua:2764"
  },
  {
   "key": "H:윙드 후사르:r3",
   "id": "윙드 후사르",
   "name": "윙드 후사르",
   "asset": "윙드 후사르",
   "nameZh": "翼騎兵",
   "nameZhKey": "unit.name.윙드 후사르",
   "symbol": "H",
   "rank": 3,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "H:후사르:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": "지원형",
   "factions": [
    "empire"
   ],
   "factionInGame": "empire",
   "prismOnly": false,
   "stats": {
    "aspd": 1.4,
    "atk": 44,
    "distance": 55,
    "hp": 400
   },
   "statArrows": {
    "aspd": 0,
    "atk": 2,
    "distance": 0,
    "hp": 4
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現；只有「已有 후사르 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2627）",
   "source": "decompiled/src/game/promotion.lua:2627"
  },
  {
   "key": "H:초승달 여왕:r3",
   "id": "초승달 여왕",
   "name": "초승달 여왕",
   "asset": "초승달 여왕",
   "nameZh": "新月女王",
   "nameZhKey": "unit.name.초승달 여왕",
   "symbol": "H",
   "rank": 3,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "H:월광사제:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": "지원형",
   "factions": [
    "celestial"
   ],
   "factionInGame": "celestial",
   "prismOnly": false,
   "stats": {
    "aspd": 1.3,
    "atk": 70,
    "distance": 160,
    "hp": 320
   },
   "statArrows": {
    "aspd": 1,
    "atk": 3,
    "distance": 1,
    "hp": 3
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現；只有「已有 월광사제 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2581）",
   "source": "decompiled/src/game/promotion.lua:2581"
  },
  {
   "key": "H:켄타로우스:r3",
   "id": "켄타로우스",
   "name": "켄타우로스",
   "asset": "켄타로우스",
   "nameZh": "半人馬",
   "nameZhKey": "unit.name.켄타로우스",
   "symbol": "H",
   "rank": 3,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "H:초원 기병:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": "범위형",
   "factions": [
    "tribe"
   ],
   "factionInGame": "tribe",
   "prismOnly": false,
   "stats": {
    "aspd": 0.8,
    "atk": 68,
    "distance": 60,
    "hp": 300
   },
   "statArrows": {
    "aspd": 1,
    "atk": 3,
    "distance": 1,
    "hp": 3
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現；只有「已有 초원 기병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2612）",
   "source": "decompiled/src/game/promotion.lua:2612"
  },
  {
   "key": "H:크로노워커:r3",
   "id": "크로노워커",
   "name": "크로노워커",
   "asset": "크로노워커",
   "nameZh": "時間行者",
   "nameZhKey": "unit.name.크로노워커",
   "symbol": "H",
   "rank": 3,
   "reachable": true,
   "entry": [
    "standard"
   ],
   "inTree": true,
   "parent": "페이즈",
   "parents": [
    "페이즈"
   ],
   "parentKeys": [
    "H:페이즈:r2"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "MiniHorseMan03",
    "워베어"
   ],
   "childKeys": [
    "H:MiniHorseMan03:r4",
    "H:워베어:r4"
   ],
   "classType": "공격형",
   "factions": [
    "arcane"
   ],
   "factionInGame": "arcane",
   "prismOnly": false,
   "stats": {
    "aspd": 1.4,
    "atk": 108,
    "distance": 60,
    "hp": 440,
    "speed": 75
   },
   "statArrows": {
    "aspd": 0,
    "atk": 3,
    "distance": 1,
    "hp": 2
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2521）",
   "source": "decompiled/src/game/promotion.lua:2521"
  },
  {
   "key": "H:하이 엘프 기병:r3",
   "id": "하이 엘프 기병",
   "name": "하이 엘프 기병",
   "asset": "하이 엘프 기병",
   "nameZh": "高等精靈騎兵",
   "nameZhKey": "unit.name.하이 엘프 기병",
   "symbol": "H",
   "rank": 3,
   "reachable": true,
   "entry": [
    "standard"
   ],
   "inTree": true,
   "parent": "엘프 기병",
   "parents": [
    "엘프 기병"
   ],
   "parentKeys": [
    "H:엘프 기병:r2"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "그리즐"
   ],
   "childKeys": [
    "H:그리즐:r4"
   ],
   "classType": null,
   "factions": [
    "forest"
   ],
   "factionInGame": "forest",
   "prismOnly": false,
   "stats": {
    "aspd": 1.5,
    "atk": 38,
    "distance": 55,
    "hp": 340
   },
   "statArrows": null,
   "skillName": "전직 특성",
   "skillDesc": "하이 엘프 기병으로 전직",
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2685；判斷 L2640）",
   "source": "decompiled/src/game/promotion.lua:2685"
  },
  {
   "key": "H:MiniHorseMan03:r4",
   "id": "MiniHorseMan03",
   "name": "중기병",
   "asset": "MiniHorseMan03",
   "nameZh": "重騎兵",
   "nameZhKey": "unit.name.중기병",
   "symbol": "H",
   "rank": 4,
   "reachable": false,
   "entry": [
    "no-subclass-direct",
    "standard"
   ],
   "inTree": true,
   "parent": "무법 기병",
   "parents": [
    "무법 기병",
    "숲의 심장",
    "크로노워커"
   ],
   "parentKeys": [
    "H:무법 기병:r3",
    "H:숲의 심장:r3",
    "H:크로노워커:r3"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "MiniHorseMan03",
    "워베어"
   ],
   "childKeys": [
    "H:MiniHorseMan03:r5",
    "H:워베어:r5"
   ],
   "classType": null,
   "factions": [
    "empire"
   ],
   "factionInGame": null,
   "prismOnly": false,
   "stats": {
    "aspd": 1.1,
    "atk": 34,
    "distance": 55,
    "hp": 320
   },
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2649,2759） ／ 任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 4 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L2649,2759）",
   "source": "decompiled/src/game/promotion.lua:2649,2759"
  },
  {
   "key": "H:그리즐:r4",
   "id": "그리즐",
   "name": "그리즐",
   "asset": "그리즐",
   "nameZh": "格里茲爾",
   "nameZhKey": "unit.name.그리즐",
   "symbol": "H",
   "rank": 4,
   "reachable": false,
   "entry": [
    "special-parent",
    "standard"
   ],
   "inTree": true,
   "parent": "MiniHorseMan03",
   "parents": [
    "MiniHorseMan03",
    "광폭 기병",
    "하이 엘프 기병"
   ],
   "parentKeys": [
    "H:MiniHorseMan03:r3",
    "H:광폭 기병:r3",
    "H:하이 엘프 기병:r3"
   ],
   "otherParentKeys": [
    "H:워베어:r3"
   ],
   "rank2Entry": false,
   "children": [
    "우르간"
   ],
   "childKeys": [
    "H:우르간:r5"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2700,2713） ／ 任何稀有度都會出現（promotion.lua 定義 L2700,2713；判斷 L2693） ／ 任何稀有度都會出現（promotion.lua 定義 L2700,2713；判斷 L2692） ／ 任何稀有度都會出現；只有「已有 워베어 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2700,2713）",
   "source": "decompiled/src/game/promotion.lua:2700,2713"
  },
  {
   "key": "H:워베어:r4",
   "id": "워베어",
   "name": "워베어",
   "asset": "워베어",
   "nameZh": "戰熊",
   "nameZhKey": "unit.name.워베어",
   "symbol": "H",
   "rank": 4,
   "reachable": false,
   "entry": [
    "no-subclass-direct",
    "standard"
   ],
   "inTree": true,
   "parent": "무법 기병",
   "parents": [
    "무법 기병",
    "숲의 심장",
    "크로노워커"
   ],
   "parentKeys": [
    "H:무법 기병:r3",
    "H:숲의 심장:r3",
    "H:크로노워커:r3"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "MiniHorseMan03",
    "워베어"
   ],
   "childKeys": [
    "H:MiniHorseMan03:r5",
    "H:워베어:r5"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2764） ／ 任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 4 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L2764）",
   "source": "decompiled/src/game/promotion.lua:2764"
  },
  {
   "key": "H:MiniHorseMan03:r5",
   "id": "MiniHorseMan03",
   "name": "중기병",
   "asset": "MiniHorseMan03",
   "nameZh": "重騎兵",
   "nameZhKey": "unit.name.중기병",
   "symbol": "H",
   "rank": 5,
   "reachable": false,
   "entry": [
    "no-subclass-direct",
    "standard"
   ],
   "inTree": true,
   "parent": "MiniHorseMan03",
   "parents": [
    "MiniHorseMan03",
    "워베어"
   ],
   "parentKeys": [
    "H:MiniHorseMan03:r4",
    "H:워베어:r4"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [
    "empire"
   ],
   "factionInGame": null,
   "prismOnly": false,
   "stats": {
    "aspd": 1.1,
    "atk": 34,
    "distance": 55,
    "hp": 320
   },
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2649,2759） ／ 任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 5 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L2649,2759）",
   "source": "decompiled/src/game/promotion.lua:2649,2759"
  },
  {
   "key": "H:우르간:r5",
   "id": "우르간",
   "name": "우르간",
   "asset": "우르간",
   "nameZh": "烏爾甘",
   "nameZhKey": "unit.name.우르간",
   "symbol": "H",
   "rank": 5,
   "reachable": false,
   "entry": [
    "standard"
   ],
   "inTree": true,
   "parent": "그리즐",
   "parents": [
    "그리즐"
   ],
   "parentKeys": [
    "H:그리즐:r4"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2740；判斷 L2735）",
   "source": "decompiled/src/game/promotion.lua:2740"
  },
  {
   "key": "H:워베어:r5",
   "id": "워베어",
   "name": "워베어",
   "asset": "워베어",
   "nameZh": "戰熊",
   "nameZhKey": "unit.name.워베어",
   "symbol": "H",
   "rank": 5,
   "reachable": false,
   "entry": [
    "no-subclass-direct",
    "standard"
   ],
   "inTree": true,
   "parent": "MiniHorseMan03",
   "parents": [
    "MiniHorseMan03",
    "워베어"
   ],
   "parentKeys": [
    "H:MiniHorseMan03:r4",
    "H:워베어:r4"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2764；判斷 L2705） ／ 任何稀有度都會出現（promotion.lua 定義 L2764；判斷 L2706） ／ 任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 5 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L2764）",
   "source": "decompiled/src/game/promotion.lua:2764"
  },
  {
   "key": "Joker:FerretTamer:r2",
   "id": "FerretTamer",
   "name": "페럿 조련사",
   "asset": "FerretTamer",
   "nameZh": "雪貂馴養師",
   "nameZhKey": "unit.name.페럿 조련사",
   "symbol": "Joker",
   "rank": 2,
   "reachable": true,
   "entry": [
    "standard"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": true,
   "children": [
    "Ringmaster"
   ],
   "childKeys": [
    "Joker:Ringmaster:r3"
   ],
   "classType": "소환형",
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": {
    "aspd": 1,
    "atk": 34,
    "distance": 140,
    "hp": 155
   },
   "statArrows": {
    "aspd": 0,
    "atk": 1,
    "distance": 0,
    "hp": 3
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L325）",
   "source": "decompiled/src/game/promotion.lua:325"
  },
  {
   "key": "Joker:Trickster:r2",
   "id": "Trickster",
   "name": "트릭스터",
   "asset": "Trickster",
   "nameZh": "詭術師",
   "nameZhKey": "unit.name.트릭스터",
   "symbol": "Joker",
   "rank": 2,
   "reachable": true,
   "entry": [
    "standard"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": true,
   "children": [
    "Illusionist"
   ],
   "childKeys": [
    "Joker:Illusionist:r3"
   ],
   "classType": "지원형",
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": {
    "aspd": 0.95,
    "atk": 42,
    "distance": 145,
    "hp": 125
   },
   "statArrows": {
    "aspd": -1,
    "atk": 2,
    "distance": 1,
    "hp": 2
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L313）",
   "source": "decompiled/src/game/promotion.lua:313"
  },
  {
   "key": "Joker:Illusionist:r3",
   "id": "Illusionist",
   "name": "환술사",
   "asset": "Illusionist",
   "nameZh": "幻術師",
   "nameZhKey": "unit.name.환술사",
   "symbol": "Joker",
   "rank": 3,
   "reachable": true,
   "entry": [
    "standard"
   ],
   "inTree": true,
   "parent": "Trickster",
   "parents": [
    "Trickster"
   ],
   "parentKeys": [
    "Joker:Trickster:r2"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "C1",
    "C2",
    "C3"
   ],
   "childKeys": [
    "Joker:C1:r4",
    "Joker:C2:r4",
    "Joker:C3:r4"
   ],
   "classType": "지원형",
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": {
    "aspd": 0.95,
    "atk": 66,
    "distance": 150,
    "hp": 210
   },
   "statArrows": {
    "aspd": 0,
    "atk": 3,
    "distance": 1,
    "hp": 3
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現（promotion.lua 定義 L278；判斷 L269）",
   "source": "decompiled/src/game/promotion.lua:278"
  },
  {
   "key": "Joker:Ringmaster:r3",
   "id": "Ringmaster",
   "name": "서커스 단장",
   "asset": "Ringmaster",
   "nameZh": "馬戲團團長",
   "nameZhKey": "unit.name.서커스 단장",
   "symbol": "Joker",
   "rank": 3,
   "reachable": true,
   "entry": [
    "standard"
   ],
   "inTree": true,
   "parent": "FerretTamer",
   "parents": [
    "FerretTamer"
   ],
   "parentKeys": [
    "Joker:FerretTamer:r2"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "C1",
    "C2",
    "C3"
   ],
   "childKeys": [
    "Joker:C1:r4",
    "Joker:C2:r4",
    "Joker:C3:r4"
   ],
   "classType": "소환형",
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": {
    "aspd": 1,
    "atk": 50,
    "distance": 140,
    "hp": 275
   },
   "statArrows": {
    "aspd": 0,
    "atk": 2,
    "distance": 0,
    "hp": 3
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現（promotion.lua 定義 L293；判斷 L270）",
   "source": "decompiled/src/game/promotion.lua:293"
  },
  {
   "key": "Joker:C1:r4",
   "id": "C1",
   "name": "클래스 A",
   "asset": null,
   "nameZh": "職業 A",
   "nameZhKey": "unit.name.클래스 A",
   "symbol": "Joker",
   "rank": 4,
   "reachable": false,
   "entry": [
    "no-subclass-direct",
    "standard"
   ],
   "inTree": true,
   "parent": "Illusionist",
   "parents": [
    "Illusionist",
    "Ringmaster"
   ],
   "parentKeys": [
    "Joker:Illusionist:r3",
    "Joker:Ringmaster:r3"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "C1",
    "C2",
    "C3"
   ],
   "childKeys": [
    "Joker:C1:r5",
    "Joker:C2:r5",
    "Joker:C3:r5"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現 ／ 任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 4 時的預設選項（遊戲是否真的會走到未確認）",
   "source": null
  },
  {
   "key": "Joker:C2:r4",
   "id": "C2",
   "name": "클래스 B",
   "asset": null,
   "nameZh": "職業 B",
   "nameZhKey": "unit.name.클래스 B",
   "symbol": "Joker",
   "rank": 4,
   "reachable": false,
   "entry": [
    "no-subclass-direct",
    "standard"
   ],
   "inTree": true,
   "parent": "Illusionist",
   "parents": [
    "Illusionist",
    "Ringmaster"
   ],
   "parentKeys": [
    "Joker:Illusionist:r3",
    "Joker:Ringmaster:r3"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "C1",
    "C2",
    "C3"
   ],
   "childKeys": [
    "Joker:C1:r5",
    "Joker:C2:r5",
    "Joker:C3:r5"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現 ／ 任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 4 時的預設選項（遊戲是否真的會走到未確認）",
   "source": null
  },
  {
   "key": "Joker:C3:r4",
   "id": "C3",
   "name": "클래스 C",
   "asset": null,
   "nameZh": "職業 C",
   "nameZhKey": "unit.name.클래스 C",
   "symbol": "Joker",
   "rank": 4,
   "reachable": false,
   "entry": [
    "no-subclass-direct",
    "standard"
   ],
   "inTree": true,
   "parent": "Illusionist",
   "parents": [
    "Illusionist",
    "Ringmaster"
   ],
   "parentKeys": [
    "Joker:Illusionist:r3",
    "Joker:Ringmaster:r3"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "C1",
    "C2",
    "C3"
   ],
   "childKeys": [
    "Joker:C1:r5",
    "Joker:C2:r5",
    "Joker:C3:r5"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現 ／ 任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 4 時的預設選項（遊戲是否真的會走到未確認）",
   "source": null
  },
  {
   "key": "Joker:C1:r5",
   "id": "C1",
   "name": "클래스 A",
   "asset": null,
   "nameZh": "職業 A",
   "nameZhKey": "unit.name.클래스 A",
   "symbol": "Joker",
   "rank": 5,
   "reachable": false,
   "entry": [
    "no-subclass-direct",
    "standard"
   ],
   "inTree": true,
   "parent": "C1",
   "parents": [
    "C1",
    "C2",
    "C3"
   ],
   "parentKeys": [
    "Joker:C1:r4",
    "Joker:C2:r4",
    "Joker:C3:r4"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現 ／ 任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 5 時的預設選項（遊戲是否真的會走到未確認）",
   "source": null
  },
  {
   "key": "Joker:C2:r5",
   "id": "C2",
   "name": "클래스 B",
   "asset": null,
   "nameZh": "職業 B",
   "nameZhKey": "unit.name.클래스 B",
   "symbol": "Joker",
   "rank": 5,
   "reachable": false,
   "entry": [
    "no-subclass-direct",
    "standard"
   ],
   "inTree": true,
   "parent": "C1",
   "parents": [
    "C1",
    "C2",
    "C3"
   ],
   "parentKeys": [
    "Joker:C1:r4",
    "Joker:C2:r4",
    "Joker:C3:r4"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現 ／ 任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 5 時的預設選項（遊戲是否真的會走到未確認）",
   "source": null
  },
  {
   "key": "Joker:C3:r5",
   "id": "C3",
   "name": "클래스 C",
   "asset": null,
   "nameZh": "職業 C",
   "nameZhKey": "unit.name.클래스 C",
   "symbol": "Joker",
   "rank": 5,
   "reachable": false,
   "entry": [
    "no-subclass-direct",
    "standard"
   ],
   "inTree": true,
   "parent": "C1",
   "parents": [
    "C1",
    "C2",
    "C3"
   ],
   "parentKeys": [
    "Joker:C1:r4",
    "Joker:C2:r4",
    "Joker:C3:r4"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現 ／ 任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 5 時的預設選項（遊戲是否真的會走到未確認）",
   "source": null
  },
  {
   "key": "M:금단술사:r1",
   "id": "금단술사",
   "name": "금단술사",
   "asset": "금단술사",
   "nameZh": "禁術法師",
   "nameZhKey": "unit.name.금단술사",
   "symbol": "M",
   "rank": 1,
   "reachable": false,
   "entry": [
    "orphan-special"
   ],
   "inTree": false,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "리치",
    "예지술사"
   ],
   "childKeys": [
    "M:리치:r2",
    "M:예지술사:r2"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": null,
   "source": null
  },
  {
   "key": "M:마도사:r1",
   "id": "마도사",
   "name": "마도사",
   "asset": "마도사",
   "nameZh": "術士",
   "nameZhKey": "unit.name.마도사",
   "symbol": "M",
   "rank": 1,
   "reachable": false,
   "entry": [
    "orphan-special"
   ],
   "inTree": false,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "리치",
    "야생법사",
    "엘프법사",
    "예지술사"
   ],
   "childKeys": [
    "M:리치:r2",
    "M:야생법사:r2",
    "M:엘프법사:r2",
    "M:예지술사:r2"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": null,
   "source": null
  },
  {
   "key": "M:비술사:r1",
   "id": "비술사",
   "name": "비술사",
   "asset": "비술사",
   "nameZh": "奧術師",
   "nameZhKey": "unit.name.비술사",
   "symbol": "M",
   "rank": 1,
   "reachable": false,
   "entry": [
    "orphan-special"
   ],
   "inTree": false,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "리치",
    "수정술사",
    "예지술사",
    "화령술사"
   ],
   "childKeys": [
    "M:리치:r2",
    "M:수정술사:r2",
    "M:예지술사:r2",
    "M:화령술사:r2"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": null,
   "source": null
  },
  {
   "key": "M:해골술사:r1",
   "id": "해골술사",
   "name": "해골술사",
   "asset": "해골술사",
   "nameZh": "白骨法師",
   "nameZhKey": "unit.name.해골술사",
   "symbol": "M",
   "rank": 1,
   "reachable": false,
   "entry": [
    "orphan-special"
   ],
   "inTree": false,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "리치",
    "심연술사",
    "예지술사",
    "흑마법사"
   ],
   "childKeys": [
    "M:리치:r2",
    "M:심연술사:r2",
    "M:예지술사:r2",
    "M:흑마법사:r2"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": null,
   "source": null
  },
  {
   "key": "M:리치:r2",
   "id": "리치",
   "name": "리치",
   "asset": "리치",
   "nameZh": "巫妖",
   "nameZhKey": "unit.name.리치",
   "symbol": "M",
   "rank": 2,
   "reachable": true,
   "entry": [
    "special-parent",
    "standard"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "M:금단술사:r1",
    "M:마도사:r1",
    "M:비술사:r1",
    "M:해골술사:r1"
   ],
   "rank2Entry": true,
   "children": [
    "리치로드"
   ],
   "childKeys": [
    "M:리치로드:r3"
   ],
   "classType": "소환형",
   "factions": [
    "undead"
   ],
   "factionInGame": "undead",
   "prismOnly": true,
   "stats": {
    "aspd": 1.1,
    "atk": 68,
    "distance": 150,
    "hp": 200
   },
   "statArrows": {
    "aspd": -1,
    "atk": 1,
    "distance": 1,
    "hp": 2
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "只有 prism 稀有度（或 jackpot5th 標記）才會出現；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L1914） ／ 任何稀有度都會出現；只有「已有 금단술사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1914） ／ 只有 prism 稀有度（或 jackpot5th 標記）才會出現；只有「已有 마도사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1914） ／ 只有 prism 稀有度（或 jackpot5th 標記）才會出現；只有「已有 비술사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1914） ／ 只有 prism 稀有度（或 jackpot5th 標記）才會出現；只有「已有 해골술사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1914）",
   "source": "decompiled/src/game/promotion.lua:1914"
  },
  {
   "key": "M:수정술사:r2",
   "id": "수정술사",
   "name": "수정술사",
   "asset": "수정술사",
   "nameZh": "水晶法師",
   "nameZhKey": "unit.name.수정술사",
   "symbol": "M",
   "rank": 2,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "M:비술사:r1"
   ],
   "rank2Entry": false,
   "children": [
    "예언자",
    "운디네"
   ],
   "childKeys": [
    "M:예언자:r3",
    "M:운디네:r3"
   ],
   "classType": "지원형",
   "factions": [
    "forest"
   ],
   "factionInGame": "forest",
   "prismOnly": false,
   "stats": {
    "aspd": 1.2,
    "atk": 44,
    "distance": 140,
    "hp": 140
   },
   "statArrows": {
    "aspd": 0,
    "atk": 2,
    "distance": 0,
    "hp": 2
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "稀有度限 normal/advanced/rare/legendary；只有「已有 비술사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1967）",
   "source": "decompiled/src/game/promotion.lua:1967"
  },
  {
   "key": "M:심연술사:r2",
   "id": "심연술사",
   "name": "심연술사",
   "asset": "심연술사",
   "nameZh": "深淵法師",
   "nameZhKey": "unit.name.심연술사",
   "symbol": "M",
   "rank": 2,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "M:해골술사:r1"
   ],
   "rank2Entry": false,
   "children": [
    "아크메이지",
    "예언자"
   ],
   "childKeys": [
    "M:아크메이지:r3",
    "M:예언자:r3"
   ],
   "classType": "공격형",
   "factions": [
    "abyss"
   ],
   "factionInGame": "abyss",
   "prismOnly": false,
   "stats": {
    "aspd": 0.9,
    "atk": 72,
    "distance": 140,
    "hp": 150
   },
   "statArrows": {
    "aspd": -3,
    "atk": 4,
    "distance": 0,
    "hp": 2
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "稀有度限 normal/advanced/rare/legendary；只有「已有 해골술사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1939）",
   "source": "decompiled/src/game/promotion.lua:1939"
  },
  {
   "key": "M:야생법사:r2",
   "id": "야생법사",
   "name": "야생법사",
   "asset": "야생법사",
   "nameZh": "荒野法師",
   "nameZhKey": "unit.name.야생 법사",
   "symbol": "M",
   "rank": 2,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "M:마도사:r1"
   ],
   "rank2Entry": false,
   "children": [
    "예언자",
    "원시법사"
   ],
   "childKeys": [
    "M:예언자:r3",
    "M:원시법사:r3"
   ],
   "classType": null,
   "factions": [
    "tribe"
   ],
   "factionInGame": "tribe",
   "prismOnly": false,
   "stats": {
    "aspd": 1,
    "atk": 42,
    "distance": 50,
    "hp": 130
   },
   "statArrows": null,
   "skillName": "마력 구체",
   "skillDesc": "4초마다 마력 구체를 발사해 최대 3명의 적에게 ATK 110% 피해",
   "condition": "稀有度限 normal/advanced/rare/legendary；只有「已有 마도사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2005；判斷 L1991）",
   "source": "decompiled/src/game/promotion.lua:2005"
  },
  {
   "key": "M:엘프법사:r2",
   "id": "엘프법사",
   "name": "엘프법사",
   "asset": "엘프법사",
   "nameZh": "精靈法師",
   "nameZhKey": "unit.name.엘프 법사",
   "symbol": "M",
   "rank": 2,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "M:마도사:r1"
   ],
   "rank2Entry": false,
   "children": [
    "엘프 현자",
    "예언자"
   ],
   "childKeys": [
    "M:엘프 현자:r3",
    "M:예언자:r3"
   ],
   "classType": null,
   "factions": [
    "forest"
   ],
   "factionInGame": "forest",
   "prismOnly": false,
   "stats": {
    "aspd": 1.35,
    "atk": 30,
    "distance": 140,
    "hp": 100
   },
   "statArrows": null,
   "skillName": "전직 특성",
   "skillDesc": "엘프 마법사 상위 전직",
   "condition": "稀有度限 normal/advanced/rare/legendary；只有「已有 마도사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1998；判斷 L1991）",
   "source": "decompiled/src/game/promotion.lua:1998"
  },
  {
   "key": "M:예지술사:r2",
   "id": "예지술사",
   "name": "예지술사",
   "asset": "예지술사",
   "nameZh": "預知術士",
   "nameZhKey": "unit.name.예지술사",
   "symbol": "M",
   "rank": 2,
   "reachable": true,
   "entry": [
    "special-parent",
    "standard"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "M:금단술사:r1",
    "M:마도사:r1",
    "M:비술사:r1",
    "M:해골술사:r1"
   ],
   "rank2Entry": true,
   "children": [
    "예언자"
   ],
   "childKeys": [
    "M:예언자:r3"
   ],
   "classType": "지원형",
   "factions": [
    "arcane"
   ],
   "factionInGame": "arcane",
   "prismOnly": true,
   "stats": {
    "aspd": 1.2,
    "atk": 80,
    "distance": 150,
    "hp": 220
   },
   "statArrows": {
    "aspd": 0,
    "atk": 2,
    "distance": 1,
    "hp": 2
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "只有 prism 稀有度（或 jackpot5th 標記）才會出現；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L1901） ／ 任何稀有度都會出現；只有「已有 금단술사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1901） ／ 只有 prism 稀有度（或 jackpot5th 標記）才會出現；只有「已有 마도사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1901） ／ 只有 prism 稀有度（或 jackpot5th 標記）才會出現；只有「已有 비술사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1901） ／ 只有 prism 稀有度（或 jackpot5th 標記）才會出現；只有「已有 해골술사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1901）",
   "source": "decompiled/src/game/promotion.lua:1901"
  },
  {
   "key": "M:주술사:r2",
   "id": "주술사",
   "name": "주술사",
   "asset": "주술사",
   "nameZh": "薩滿",
   "nameZhKey": "unit.name.주술사",
   "symbol": "M",
   "rank": 2,
   "reachable": true,
   "entry": [
    "standard"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": true,
   "children": [
    "대주술사",
    "예언자"
   ],
   "childKeys": [
    "M:대주술사:r3",
    "M:예언자:r3"
   ],
   "classType": null,
   "factions": [
    "tribe"
   ],
   "factionInGame": "tribe",
   "prismOnly": false,
   "stats": {
    "aspd": 1.2,
    "atk": 25,
    "distance": 140,
    "hp": 80
   },
   "statArrows": null,
   "skillName": "마력 구체",
   "skillDesc": "4초마다 마력 구체를 발사해 최대 3명의 적에게 ATK 110% 피해",
   "condition": "稀有度限 normal/advanced/rare/legendary；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L2016）",
   "source": "decompiled/src/game/promotion.lua:2016"
  },
  {
   "key": "M:치유술사:r2",
   "id": "치유술사",
   "name": "치유술사",
   "asset": "치유술사",
   "nameZh": "治療師",
   "nameZhKey": "unit.name.치유술사",
   "symbol": "M",
   "rank": 2,
   "reachable": true,
   "entry": [
    "standard"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": true,
   "children": [
    "대사제",
    "루나 현자",
    "예언자"
   ],
   "childKeys": [
    "M:대사제:r3",
    "M:루나 현자:r4",
    "M:예언자:r3"
   ],
   "classType": null,
   "factions": [
    "holy"
   ],
   "factionInGame": "holy",
   "prismOnly": false,
   "stats": {
    "aspd": 1.3,
    "atk": 18,
    "distance": 115,
    "hp": 90
   },
   "statArrows": null,
   "skillName": "치유의 장",
   "skillDesc": "치유의 장을 생성해, 3초 동안 범위 내 체력이 가장 낮은 아군 2명의 체력을 5%씩 회복",
   "condition": "稀有度限 normal/advanced/rare/legendary；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L2023）",
   "source": "decompiled/src/game/promotion.lua:2023"
  },
  {
   "key": "M:화령술사:r2",
   "id": "화령술사",
   "name": "화령술사",
   "asset": "화령술사",
   "nameZh": "火靈召喚師",
   "nameZhKey": "unit.name.화령술사",
   "symbol": "M",
   "rank": 2,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "M:비술사:r1"
   ],
   "rank2Entry": false,
   "children": [
    "샐러맨더",
    "예언자"
   ],
   "childKeys": [
    "M:샐러맨더:r3",
    "M:예언자:r3"
   ],
   "classType": "소환형",
   "factions": [
    "arcane"
   ],
   "factionInGame": "arcane",
   "prismOnly": false,
   "stats": {
    "aspd": 1.1,
    "atk": 38,
    "distance": 140,
    "hp": 125
   },
   "statArrows": {
    "aspd": -1,
    "atk": 1,
    "distance": 0,
    "hp": 1
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "稀有度限 normal/advanced/rare/legendary；只有「已有 비술사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1979）",
   "source": "decompiled/src/game/promotion.lua:1979"
  },
  {
   "key": "M:흑마법사:r2",
   "id": "흑마법사",
   "name": "흑마법사",
   "asset": "흑마법사",
   "nameZh": "黑魔法師",
   "nameZhKey": "unit.name.흑마법사",
   "symbol": "M",
   "rank": 2,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "M:해골술사:r1"
   ],
   "rank2Entry": false,
   "children": [
    "예언자",
    "워록"
   ],
   "childKeys": [
    "M:예언자:r3",
    "M:워록:r3"
   ],
   "classType": "지원형",
   "factions": [
    "undead"
   ],
   "factionInGame": "undead",
   "prismOnly": false,
   "stats": {
    "aspd": 1.2,
    "atk": 48,
    "distance": 140,
    "hp": 175
   },
   "statArrows": {
    "aspd": 0,
    "atk": 1,
    "distance": 0,
    "hp": 3
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "稀有度限 normal/advanced/rare/legendary；只有「已有 해골술사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1952）",
   "source": "decompiled/src/game/promotion.lua:1952"
  },
  {
   "key": "M:대사제:r3",
   "id": "대사제",
   "name": "대사제",
   "asset": "대사제",
   "nameZh": "大祭司",
   "nameZhKey": "unit.name.대사제",
   "symbol": "M",
   "rank": 3,
   "reachable": true,
   "entry": [
    "standard"
   ],
   "inTree": true,
   "parent": "치유술사",
   "parents": [
    "치유술사"
   ],
   "parentKeys": [
    "M:치유술사:r2"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "본메이지",
    "암흑술사",
    "현자 엘프"
   ],
   "childKeys": [
    "M:본메이지:r4",
    "M:암흑술사:r4",
    "M:현자 엘프:r4"
   ],
   "classType": null,
   "factions": [
    "holy"
   ],
   "factionInGame": "holy",
   "prismOnly": false,
   "stats": {
    "aspd": 1.3,
    "atk": 30,
    "distance": 115,
    "hp": 160
   },
   "statArrows": null,
   "skillName": "치유 성역",
   "skillDesc": "치유 성역을 생성해, 3초 동안 범위 내 체력이 가장 낮은 아군 3명의 체력을 7%씩 회복",
   "condition": "稀有度限 normal/advanced/rare/legendary（promotion.lua 定義 L2156；判斷 L2149）",
   "source": "decompiled/src/game/promotion.lua:2156"
  },
  {
   "key": "M:대주술사:r3",
   "id": "대주술사",
   "name": "대주술사",
   "asset": "대주술사",
   "nameZh": "大薩滿",
   "nameZhKey": "unit.name.대주술사",
   "symbol": "M",
   "rank": 3,
   "reachable": true,
   "entry": [
    "standard"
   ],
   "inTree": true,
   "parent": "주술사",
   "parents": [
    "주술사"
   ],
   "parentKeys": [
    "M:주술사:r2"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "루나 현자"
   ],
   "childKeys": [
    "M:루나 현자:r4"
   ],
   "classType": null,
   "factions": [
    "tribe"
   ],
   "factionInGame": "tribe",
   "prismOnly": false,
   "stats": {
    "aspd": 1.2,
    "atk": 36,
    "distance": 140,
    "hp": 140
   },
   "statArrows": null,
   "skillName": "전직 특성",
   "skillDesc": "대주술사 전직",
   "condition": "稀有度限 normal/advanced/rare/legendary（promotion.lua 定義 L2144；判斷 L2137）",
   "source": "decompiled/src/game/promotion.lua:2144"
  },
  {
   "key": "M:리치로드:r3",
   "id": "리치로드",
   "name": "리치로드",
   "asset": "리치로드",
   "nameZh": "巫妖領主",
   "nameZhKey": "unit.name.리치로드",
   "symbol": "M",
   "rank": 3,
   "reachable": true,
   "entry": [
    "standard"
   ],
   "inTree": true,
   "parent": "리치",
   "parents": [
    "리치"
   ],
   "parentKeys": [
    "M:리치:r2"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "본메이지",
    "암흑술사",
    "현자 엘프"
   ],
   "childKeys": [
    "M:본메이지:r4",
    "M:암흑술사:r4",
    "M:현자 엘프:r4"
   ],
   "classType": "소환형",
   "factions": [
    "undead"
   ],
   "factionInGame": "undead",
   "prismOnly": false,
   "stats": {
    "aspd": 1.1,
    "atk": 96,
    "distance": 150,
    "hp": 280
   },
   "statArrows": {
    "aspd": 0,
    "atk": 3,
    "distance": 1,
    "hp": 2
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2036）",
   "source": "decompiled/src/game/promotion.lua:2036"
  },
  {
   "key": "M:본메이지:r3",
   "id": "본메이지",
   "name": "본메이지",
   "asset": "본메이지",
   "nameZh": "白骨法師",
   "nameZhKey": "unit.name.본 메이지",
   "symbol": "M",
   "rank": 3,
   "reachable": false,
   "entry": [
    "no-subclass-direct"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": "부패의 저주",
   "skillDesc": "4초마다 적 1명에게 3초간 부패의 저주 (받는 피해 +20%)",
   "condition": "稀有度限 normal/advanced/rare/legendary；單位還沒有任何職業名就直接要選 rank 3 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L2266,2307,2330）",
   "source": "decompiled/src/game/promotion.lua:2266,2307,2330"
  },
  {
   "key": "M:샐러맨더:r3",
   "id": "샐러맨더",
   "name": "샐러맨더",
   "asset": "샐러맨더",
   "nameZh": "沙羅曼達",
   "nameZhKey": "unit.name.샐러맨더",
   "symbol": "M",
   "rank": 3,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "M:화령술사:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": "소환형",
   "factions": [
    "arcane"
   ],
   "factionInGame": "arcane",
   "prismOnly": false,
   "stats": {
    "aspd": 1.1,
    "atk": 48,
    "distance": 140,
    "hp": 165
   },
   "statArrows": {
    "aspd": 0,
    "atk": 2,
    "distance": 0,
    "hp": 2
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "稀有度限 normal/advanced/rare/legendary；只有「已有 화령술사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2125）",
   "source": "decompiled/src/game/promotion.lua:2125"
  },
  {
   "key": "M:아크메이지:r3",
   "id": "아크메이지",
   "name": "아크메이지",
   "asset": "아크메이지",
   "nameZh": "大魔導師",
   "nameZhKey": "unit.name.아크메이지",
   "symbol": "M",
   "rank": 3,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "M:심연술사:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": "공격형",
   "factions": [
    "abyss"
   ],
   "factionInGame": "abyss",
   "prismOnly": false,
   "stats": {
    "aspd": 1,
    "atk": 110,
    "distance": 140,
    "hp": 220
   },
   "statArrows": {
    "aspd": 1,
    "atk": 4,
    "distance": 0,
    "hp": 3
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "稀有度限 normal/advanced/rare/legendary；只有「已有 심연술사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2079）",
   "source": "decompiled/src/game/promotion.lua:2079"
  },
  {
   "key": "M:암흑술사:r3",
   "id": "암흑술사",
   "name": "암흑술사",
   "asset": "암흑술사",
   "nameZh": "暗黑術士",
   "nameZhKey": "unit.name.암흑 술사",
   "symbol": "M",
   "rank": 3,
   "reachable": false,
   "entry": [
    "no-subclass-direct"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": "어둠의 탄환",
   "skillDesc": "3초마다 ATK 170% 강화된 어둠의 탄환 발사",
   "condition": "稀有度限 normal/advanced/rare/legendary；單位還沒有任何職業名就直接要選 rank 3 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L2259,2300,2323）",
   "source": "decompiled/src/game/promotion.lua:2259,2300,2323"
  },
  {
   "key": "M:엘프 현자:r3",
   "id": "엘프 현자",
   "name": "엘프 현자",
   "asset": "엘프 현자",
   "nameZh": "精靈賢者",
   "nameZhKey": "unit.name.엘프 현자",
   "symbol": "M",
   "rank": 3,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "M:엘프법사:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [
    "forest"
   ],
   "factionInGame": "forest",
   "prismOnly": false,
   "stats": {
    "aspd": 1.6,
    "atk": 40,
    "distance": 140,
    "hp": 150
   },
   "statArrows": null,
   "skillName": "전직 특성",
   "skillDesc": "엘프 현자 전직",
   "condition": "稀有度限 normal/advanced/rare/legendary；只有「已有 엘프법사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2180,2192；判斷 L2173）",
   "source": "decompiled/src/game/promotion.lua:2180,2192"
  },
  {
   "key": "M:예언자:r3",
   "id": "예언자",
   "name": "예언자",
   "asset": "예언자",
   "nameZh": "預言者",
   "nameZhKey": "unit.name.예언자",
   "symbol": "M",
   "rank": 3,
   "reachable": true,
   "entry": [
    "no-subclass-direct",
    "special-parent",
    "standard"
   ],
   "inTree": true,
   "parent": "예지술사",
   "parents": [
    "예지술사",
    "주술사",
    "치유술사"
   ],
   "parentKeys": [
    "M:예지술사:r2",
    "M:주술사:r2",
    "M:치유술사:r2"
   ],
   "otherParentKeys": [
    "M:수정술사:r2",
    "M:심연술사:r2",
    "M:야생법사:r2",
    "M:엘프법사:r2",
    "M:화령술사:r2",
    "M:흑마법사:r2"
   ],
   "rank2Entry": false,
   "children": [
    "본메이지",
    "암흑술사",
    "현자 엘프"
   ],
   "childKeys": [
    "M:본메이지:r4",
    "M:암흑술사:r4",
    "M:현자 엘프:r4"
   ],
   "classType": "지원형",
   "factions": [
    "arcane"
   ],
   "factionInGame": "arcane",
   "prismOnly": false,
   "stats": {
    "aspd": 1.2,
    "atk": 112,
    "distance": 150,
    "hp": 320
   },
   "statArrows": {
    "aspd": 0,
    "atk": 3,
    "distance": 1,
    "hp": 3
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2054） ／ 只有 prism 稀有度（或 jackpot5th 標記）才會出現（promotion.lua 定義 L2054） ／ 只有 prism 稀有度（或 jackpot5th 標記）才會出現；單位還沒有任何職業名就直接要選 rank 3 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L2054） ／ 只有 prism 稀有度（或 jackpot5th 標記）才會出現；只有「已有 심연술사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2054） ／ 只有 prism 稀有度（或 jackpot5th 標記）才會出現；只有「已有 수정술사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2054） ／ 只有 prism 稀有度（或 jackpot5th 標記）才會出現；只有「已有 흑마법사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2054） ／ 只有 prism 稀有度（或 jackpot5th 標記）才會出現；只有「已有 화령술사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2054） ／ 只有 prism 稀有度（或 jackpot5th 標記）才會出現；只有「已有 야생법사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2054） ／ 只有 prism 稀有度（或 jackpot5th 標記）才會出現；只有「已有 엘프법사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2054）",
   "source": "decompiled/src/game/promotion.lua:2054"
  },
  {
   "key": "M:운디네:r3",
   "id": "운디네",
   "name": "운디네",
   "asset": "운디네",
   "nameZh": "溫蒂妮",
   "nameZhKey": "unit.name.운디네",
   "symbol": "M",
   "rank": 3,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "M:수정술사:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": "지원형",
   "factions": [
    "forest"
   ],
   "factionInGame": "forest",
   "prismOnly": false,
   "stats": {
    "aspd": 1.25,
    "atk": 58,
    "distance": 140,
    "hp": 190
   },
   "statArrows": {
    "aspd": 1,
    "atk": 3,
    "distance": 0,
    "hp": 3
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "稀有度限 normal/advanced/rare/legendary；只有「已有 수정술사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2110）",
   "source": "decompiled/src/game/promotion.lua:2110"
  },
  {
   "key": "M:워록:r3",
   "id": "워록",
   "name": "워록",
   "asset": "워록",
   "nameZh": "術士",
   "nameZhKey": "unit.name.워록",
   "symbol": "M",
   "rank": 3,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "M:흑마법사:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": "지원형",
   "factions": [
    "undead"
   ],
   "factionInGame": "undead",
   "prismOnly": false,
   "stats": {
    "aspd": 1.2,
    "atk": 72,
    "distance": 140,
    "hp": 245
   },
   "statArrows": {
    "aspd": 0,
    "atk": 4,
    "distance": 0,
    "hp": 3
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "稀有度限 normal/advanced/rare/legendary；只有「已有 흑마법사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2095）",
   "source": "decompiled/src/game/promotion.lua:2095"
  },
  {
   "key": "M:원시법사:r3",
   "id": "원시법사",
   "name": "원시법사",
   "asset": "원시법사",
   "nameZh": "原始法師",
   "nameZhKey": "unit.name.원시 법사",
   "symbol": "M",
   "rank": 3,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "M:야생법사:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [
    "tribe"
   ],
   "factionInGame": "tribe",
   "prismOnly": false,
   "stats": {
    "aspd": 0.9,
    "atk": 75,
    "distance": 50,
    "hp": 230
   },
   "statArrows": null,
   "skillName": "전직 특성",
   "skillDesc": "원시법사 전직",
   "condition": "稀有度限 normal/advanced/rare/legendary；只有「已有 야생법사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2168；判斷 L2161）",
   "source": "decompiled/src/game/promotion.lua:2168"
  },
  {
   "key": "M:현자 엘프:r3",
   "id": "현자 엘프",
   "name": "현자 엘프",
   "asset": "현자 엘프",
   "nameZh": "賢者精靈",
   "nameZhKey": "unit.name.현자 엘프",
   "symbol": "M",
   "rank": 3,
   "reachable": false,
   "entry": [
    "no-subclass-direct"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": "정령의 축복",
   "skillDesc": "4초마다 아군 중 ATK 가장 높은 유닛 1명에게 3초간 ATK +30%",
   "condition": "稀有度限 normal/advanced/rare/legendary；單位還沒有任何職業名就直接要選 rank 3 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L2251,2292,2316）",
   "source": "decompiled/src/game/promotion.lua:2251,2292,2316"
  },
  {
   "key": "M:루나 현자:r4",
   "id": "루나 현자",
   "name": "루나 현자",
   "asset": "루나 현자",
   "nameZh": "月之賢者",
   "nameZhKey": "unit.name.루나 현자",
   "symbol": "M",
   "rank": 4,
   "reachable": false,
   "entry": [
    "special-parent",
    "standard"
   ],
   "inTree": true,
   "parent": "대주술사",
   "parents": [
    "대주술사"
   ],
   "parentKeys": [
    "M:대주술사:r3"
   ],
   "otherParentKeys": [
    "M:치유술사:r2"
   ],
   "rank2Entry": false,
   "children": [
    "안틀러"
   ],
   "childKeys": [
    "M:안틀러:r5"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": "전직 특성",
   "skillDesc": "루나 현자 전직",
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2227；判斷 L2206） ／ 任何稀有度都會出現；只有「已有 치유술사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2227；判斷 L2207）",
   "source": "decompiled/src/game/promotion.lua:2227"
  },
  {
   "key": "M:본메이지:r4",
   "id": "본메이지",
   "name": "본메이지",
   "asset": "본메이지",
   "nameZh": "白骨法師",
   "nameZhKey": "unit.name.본 메이지",
   "symbol": "M",
   "rank": 4,
   "reachable": false,
   "entry": [
    "no-subclass-direct",
    "standard"
   ],
   "inTree": true,
   "parent": "대사제",
   "parents": [
    "대사제",
    "리치로드",
    "예언자"
   ],
   "parentKeys": [
    "M:대사제:r3",
    "M:리치로드:r3",
    "M:예언자:r3"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "본메이지",
    "암흑술사",
    "현자 엘프"
   ],
   "childKeys": [
    "M:본메이지:r5",
    "M:암흑술사:r5",
    "M:현자 엘프:r5"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": "부패의 저주",
   "skillDesc": "4초마다 적 1명에게 3초간 부패의 저주 (받는 피해 +20%)",
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2266,2307,2330） ／ 任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 4 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L2266,2307,2330）",
   "source": "decompiled/src/game/promotion.lua:2266,2307,2330"
  },
  {
   "key": "M:암흑술사:r4",
   "id": "암흑술사",
   "name": "암흑술사",
   "asset": "암흑술사",
   "nameZh": "暗黑術士",
   "nameZhKey": "unit.name.암흑 술사",
   "symbol": "M",
   "rank": 4,
   "reachable": false,
   "entry": [
    "no-subclass-direct",
    "standard"
   ],
   "inTree": true,
   "parent": "대사제",
   "parents": [
    "대사제",
    "리치로드",
    "예언자"
   ],
   "parentKeys": [
    "M:대사제:r3",
    "M:리치로드:r3",
    "M:예언자:r3"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "본메이지",
    "암흑술사",
    "현자 엘프"
   ],
   "childKeys": [
    "M:본메이지:r5",
    "M:암흑술사:r5",
    "M:현자 엘프:r5"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": "어둠의 탄환",
   "skillDesc": "3초마다 ATK 170% 강화된 어둠의 탄환 발사",
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2259,2300,2323） ／ 任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 4 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L2259,2300,2323）",
   "source": "decompiled/src/game/promotion.lua:2259,2300,2323"
  },
  {
   "key": "M:현자 엘프:r4",
   "id": "현자 엘프",
   "name": "현자 엘프",
   "asset": "현자 엘프",
   "nameZh": "賢者精靈",
   "nameZhKey": "unit.name.현자 엘프",
   "symbol": "M",
   "rank": 4,
   "reachable": false,
   "entry": [
    "no-subclass-direct",
    "standard"
   ],
   "inTree": true,
   "parent": "대사제",
   "parents": [
    "대사제",
    "리치로드",
    "예언자"
   ],
   "parentKeys": [
    "M:대사제:r3",
    "M:리치로드:r3",
    "M:예언자:r3"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "본메이지",
    "암흑술사",
    "현자 엘프"
   ],
   "childKeys": [
    "M:본메이지:r5",
    "M:암흑술사:r5",
    "M:현자 엘프:r5"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": "정령의 축복",
   "skillDesc": "4초마다 아군 중 ATK 가장 높은 유닛 1명에게 3초간 ATK +30%",
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2251,2292,2316） ／ 任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 4 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L2251,2292,2316）",
   "source": "decompiled/src/game/promotion.lua:2251,2292,2316"
  },
  {
   "key": "M:본메이지:r5",
   "id": "본메이지",
   "name": "본메이지",
   "asset": "본메이지",
   "nameZh": "白骨法師",
   "nameZhKey": "unit.name.본 메이지",
   "symbol": "M",
   "rank": 5,
   "reachable": false,
   "entry": [
    "no-subclass-direct",
    "standard"
   ],
   "inTree": true,
   "parent": "본메이지",
   "parents": [
    "본메이지",
    "암흑술사",
    "현자 엘프"
   ],
   "parentKeys": [
    "M:본메이지:r4",
    "M:암흑술사:r4",
    "M:현자 엘프:r4"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": "부패의 저주",
   "skillDesc": "4초마다 적 1명에게 3초간 부패의 저주 (받는 피해 +20%)",
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2266,2307,2330） ／ 任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 5 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L2266,2307,2330）",
   "source": "decompiled/src/game/promotion.lua:2266,2307,2330"
  },
  {
   "key": "M:안틀러:r5",
   "id": "안틀러",
   "name": "안틀러",
   "asset": "안틀러",
   "nameZh": "鹿角賢者",
   "nameZhKey": "unit.name.안틀러",
   "symbol": "M",
   "rank": 5,
   "reachable": false,
   "entry": [
    "standard"
   ],
   "inTree": true,
   "parent": "루나 현자",
   "parents": [
    "루나 현자"
   ],
   "parentKeys": [
    "M:루나 현자:r4"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": "전직 특성",
   "skillDesc": "안틀러 전직",
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2240；判斷 L2233）",
   "source": "decompiled/src/game/promotion.lua:2240"
  },
  {
   "key": "M:암흑술사:r5",
   "id": "암흑술사",
   "name": "암흑술사",
   "asset": "암흑술사",
   "nameZh": "暗黑術士",
   "nameZhKey": "unit.name.암흑 술사",
   "symbol": "M",
   "rank": 5,
   "reachable": false,
   "entry": [
    "no-subclass-direct",
    "standard"
   ],
   "inTree": true,
   "parent": "본메이지",
   "parents": [
    "본메이지",
    "암흑술사",
    "현자 엘프"
   ],
   "parentKeys": [
    "M:본메이지:r4",
    "M:암흑술사:r4",
    "M:현자 엘프:r4"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": "어둠의 탄환",
   "skillDesc": "3초마다 ATK 170% 강화된 어둠의 탄환 발사",
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2259,2300,2323） ／ 任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 5 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L2259,2300,2323）",
   "source": "decompiled/src/game/promotion.lua:2259,2300,2323"
  },
  {
   "key": "M:현자 엘프:r5",
   "id": "현자 엘프",
   "name": "현자 엘프",
   "asset": "현자 엘프",
   "nameZh": "賢者精靈",
   "nameZhKey": "unit.name.현자 엘프",
   "symbol": "M",
   "rank": 5,
   "reachable": false,
   "entry": [
    "no-subclass-direct",
    "standard"
   ],
   "inTree": true,
   "parent": "본메이지",
   "parents": [
    "본메이지",
    "암흑술사",
    "현자 엘프"
   ],
   "parentKeys": [
    "M:본메이지:r4",
    "M:암흑술사:r4",
    "M:현자 엘프:r4"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": "정령의 축복",
   "skillDesc": "4초마다 아군 중 ATK 가장 높은 유닛 1명에게 3초간 ATK +30%",
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2251,2292,2316） ／ 任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 5 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L2251,2292,2316）",
   "source": "decompiled/src/game/promotion.lua:2251,2292,2316"
  },
  {
   "key": "S:랜서:r1",
   "id": "랜서",
   "name": "랜서",
   "asset": "랜서",
   "nameZh": "槍術師",
   "nameZhKey": "unit.name.랜서",
   "symbol": "S",
   "rank": 1,
   "reachable": false,
   "entry": [
    "orphan-special"
   ],
   "inTree": false,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "창술사",
    "천공병"
   ],
   "childKeys": [
    "S:창술사:r2",
    "S:천공병:r2"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": null,
   "source": null
  },
  {
   "key": "S:백골 창병:r1",
   "id": "백골 창병",
   "name": "백골 창병",
   "asset": "백골 창병",
   "nameZh": "白骨槍兵",
   "nameZhKey": "unit.name.백골 창병",
   "symbol": "S",
   "rank": 1,
   "reachable": false,
   "entry": [
    "orphan-special"
   ],
   "inTree": false,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "망령병",
    "흑위병"
   ],
   "childKeys": [
    "S:망령병:r2",
    "S:흑위병:r2"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": null,
   "source": null
  },
  {
   "key": "S:보병:r1",
   "id": "보병",
   "name": "보병",
   "asset": "보병",
   "nameZh": "步兵",
   "nameZhKey": "unit.name.보병",
   "symbol": "S",
   "rank": 1,
   "reachable": false,
   "entry": [
    "orphan-special"
   ],
   "inTree": false,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "바이킹",
    "엘프 보병"
   ],
   "childKeys": [
    "S:바이킹:r2",
    "S:엘프 보병:r2"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": null,
   "source": null
  },
  {
   "key": "S:창투사:r1",
   "id": "창투사",
   "name": "창투사",
   "asset": "창투사",
   "nameZh": "槍鬥士",
   "nameZhKey": "unit.name.창투사",
   "symbol": "S",
   "rank": 1,
   "reachable": false,
   "entry": [
    "orphan-special"
   ],
   "inTree": false,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "고대 창병",
    "투기 창병"
   ],
   "childKeys": [
    "S:고대 창병:r2",
    "S:투기 창병:r2"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": null,
   "source": null
  },
  {
   "key": "S:MiniSpearMan02:r2",
   "id": "MiniSpearMan02",
   "name": "창위병",
   "asset": "MiniSpearMan02",
   "nameZh": "槍衛",
   "nameZhKey": "unit.name.MiniSpearMan02",
   "symbol": "S",
   "rank": 2,
   "reachable": true,
   "entry": [
    "standard"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": true,
   "children": [
    "MiniSpearMan03"
   ],
   "childKeys": [
    "S:MiniSpearMan03:r3"
   ],
   "classType": null,
   "factions": [
    "empire"
   ],
   "factionInGame": "empire",
   "prismOnly": false,
   "stats": {
    "aspd": 1.35,
    "atk": 18,
    "distance": 55,
    "hp": 120
   },
   "statArrows": null,
   "skillName": "전직 특성",
   "skillDesc": "기본 창병 상위 전직",
   "condition": "稀有度限 normal/advanced/rare/legendary；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L1665）",
   "source": "decompiled/src/game/promotion.lua:1665"
  },
  {
   "key": "S:고대 창병:r2",
   "id": "고대 창병",
   "name": "고대 창병",
   "asset": "고대 창병",
   "nameZh": "古代槍兵",
   "nameZhKey": "unit.name.고대 창병",
   "symbol": "S",
   "rank": 2,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "S:창투사:r1"
   ],
   "rank2Entry": false,
   "children": [
    "스파르타"
   ],
   "childKeys": [
    "S:스파르타:r3"
   ],
   "classType": "균형형",
   "factions": [
    "empire"
   ],
   "factionInGame": "empire",
   "prismOnly": false,
   "stats": {
    "aspd": 1.3,
    "atk": 38,
    "distance": 60,
    "hp": 210
   },
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現；只有「已有 창투사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1629；判斷 L1623）",
   "source": "decompiled/src/game/promotion.lua:1629"
  },
  {
   "key": "S:망령병:r2",
   "id": "망령병",
   "name": "망령병",
   "asset": "망령병",
   "nameZh": "亡靈槍兵",
   "nameZhKey": "unit.name.망령병",
   "symbol": "S",
   "rank": 2,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "S:백골 창병:r1"
   ],
   "rank2Entry": false,
   "children": [
    "SpearRevenant"
   ],
   "childKeys": [
    "S:SpearRevenant:r3"
   ],
   "classType": "공격형",
   "factions": [
    "undead"
   ],
   "factionInGame": "undead",
   "prismOnly": false,
   "stats": {
    "aspd": 1.4,
    "atk": 68,
    "distance": 60,
    "hp": 220
   },
   "statArrows": {
    "aspd": 2,
    "atk": 4,
    "distance": -1,
    "hp": 2
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現；只有「已有 백골 창병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1580）",
   "source": "decompiled/src/game/promotion.lua:1580"
  },
  {
   "key": "S:바이킹:r2",
   "id": "바이킹",
   "name": "바이킹",
   "asset": "바이킹",
   "nameZh": "維京人",
   "nameZhKey": "unit.name.바이킹",
   "symbol": "S",
   "rank": 2,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "S:보병:r1"
   ],
   "rank2Entry": false,
   "children": [
    "바바리안"
   ],
   "childKeys": [
    "S:바바리안:r3"
   ],
   "classType": null,
   "factions": [
    "tribe"
   ],
   "factionInGame": "tribe",
   "prismOnly": false,
   "stats": {
    "aspd": 1.2,
    "atk": 36,
    "distance": 55,
    "hp": 135
   },
   "statArrows": null,
   "skillName": "전직 특성",
   "skillDesc": "강인한 전사로 전직",
   "condition": "任何稀有度都會出現；只有「已有 보병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1654；判斷 L1640）",
   "source": "decompiled/src/game/promotion.lua:1654"
  },
  {
   "key": "S:약탈자:r2",
   "id": "약탈자",
   "name": "약탈자",
   "asset": "약탈자",
   "nameZh": "掠奪者",
   "nameZhKey": "unit.name.약탈자",
   "symbol": "S",
   "rank": 2,
   "reachable": true,
   "entry": [
    "standard"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": true,
   "children": [
    "무법자"
   ],
   "childKeys": [
    "S:무법자:r3"
   ],
   "classType": null,
   "factions": [
    "outlaw"
   ],
   "factionInGame": "outlaw",
   "prismOnly": false,
   "stats": {
    "aspd": 1.5,
    "atk": 20,
    "distance": 55,
    "hp": 95
   },
   "statArrows": null,
   "skillName": "전직 특성",
   "skillDesc": "약탈 특화 전직",
   "condition": "稀有度限 normal/advanced/rare/legendary；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L1672）",
   "source": "decompiled/src/game/promotion.lua:1672"
  },
  {
   "key": "S:엘프 보병:r2",
   "id": "엘프 보병",
   "name": "엘프 보병",
   "asset": "엘프 보병",
   "nameZh": "精靈步兵",
   "nameZhKey": "unit.name.엘프 보병",
   "symbol": "S",
   "rank": 2,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "S:보병:r1"
   ],
   "rank2Entry": false,
   "children": [
    "하이 엘프 보병"
   ],
   "childKeys": [
    "S:하이 엘프 보병:r3"
   ],
   "classType": null,
   "factions": [
    "forest"
   ],
   "factionInGame": "forest",
   "prismOnly": false,
   "stats": {
    "aspd": 1.4,
    "atk": 24,
    "distance": 55,
    "hp": 165
   },
   "statArrows": null,
   "skillName": "전직 특성",
   "skillDesc": "정예 엘프 보병으로 전직",
   "condition": "任何稀有度都會出現；只有「已有 보병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1647；判斷 L1640）",
   "source": "decompiled/src/game/promotion.lua:1647"
  },
  {
   "key": "S:창술사:r2",
   "id": "창술사",
   "name": "창술사",
   "asset": "창술사",
   "nameZh": "槍術士",
   "nameZhKey": "unit.name.창술사",
   "symbol": "S",
   "rank": 2,
   "reachable": true,
   "entry": [
    "special-parent",
    "standard"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "S:랜서:r1"
   ],
   "rank2Entry": true,
   "children": [
    "랜스마스터"
   ],
   "childKeys": [
    "S:랜스마스터:r3"
   ],
   "classType": "범위형",
   "factions": [
    "empire"
   ],
   "factionInGame": "empire",
   "prismOnly": true,
   "stats": {
    "aspd": 1.1,
    "atk": 68,
    "distance": 80,
    "hp": 290
   },
   "statArrows": {
    "aspd": -2,
    "atk": 2,
    "distance": 2,
    "hp": 2
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "只有 prism 稀有度（或 jackpot5th 標記）才會出現；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L1549,1612） ／ 任何稀有度都會出現；只有「已有 랜서 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1549,1612）",
   "source": "decompiled/src/game/promotion.lua:1549,1612"
  },
  {
   "key": "S:천공병:r2",
   "id": "천공병",
   "name": "천공병",
   "asset": "천공병",
   "nameZh": "天空槍兵",
   "nameZhKey": "unit.name.천공병",
   "symbol": "S",
   "rank": 2,
   "reachable": true,
   "entry": [
    "special-parent",
    "standard"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "S:랜서:r1"
   ],
   "rank2Entry": true,
   "children": [
    "발키리"
   ],
   "childKeys": [
    "S:발키리:r3"
   ],
   "classType": "공격형",
   "factions": [
    "celestial"
   ],
   "factionInGame": "celestial",
   "prismOnly": true,
   "stats": {
    "aspd": 1.4,
    "atk": 68,
    "distance": 65,
    "hp": 320
   },
   "statArrows": {
    "aspd": 0,
    "atk": 2,
    "distance": 1,
    "hp": 3
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "只有 prism 稀有度（或 jackpot5th 標記）才會出現；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L1536,1599） ／ 任何稀有度都會出現；只有「已有 랜서 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1536,1599）",
   "source": "decompiled/src/game/promotion.lua:1536,1599"
  },
  {
   "key": "S:투기 창병:r2",
   "id": "투기 창병",
   "name": "투기 창병",
   "asset": "투기 창병",
   "nameZh": "競技場槍兵",
   "nameZhKey": "unit.name.투기 창병",
   "symbol": "S",
   "rank": 2,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "S:창투사:r1"
   ],
   "rank2Entry": false,
   "children": [
    "글래디에이터"
   ],
   "childKeys": [
    "S:글래디에이터:r3"
   ],
   "classType": "공격형",
   "factions": [
    "outlaw"
   ],
   "factionInGame": "outlaw",
   "prismOnly": false,
   "stats": {
    "aspd": 1.4,
    "atk": 44,
    "distance": 60,
    "hp": 185
   },
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現；只有「已有 창투사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1635；判斷 L1623）",
   "source": "decompiled/src/game/promotion.lua:1635"
  },
  {
   "key": "S:흑위병:r2",
   "id": "흑위병",
   "name": "흑위병",
   "asset": "흑위병",
   "nameZh": "黑衛兵",
   "nameZhKey": "unit.name.흑위병",
   "symbol": "S",
   "rank": 2,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "S:백골 창병:r1"
   ],
   "rank2Entry": false,
   "children": [
    "처형자"
   ],
   "childKeys": [
    "S:처형자:r3"
   ],
   "classType": "방어형",
   "factions": [
    "abyss"
   ],
   "factionInGame": "abyss",
   "prismOnly": false,
   "stats": {
    "aspd": 1.1,
    "atk": 56,
    "distance": 75,
    "hp": 300
   },
   "statArrows": {
    "aspd": -1,
    "atk": 2,
    "distance": 1,
    "hp": 4
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現；只有「已有 백골 창병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1567）",
   "source": "decompiled/src/game/promotion.lua:1567"
  },
  {
   "key": "S:MiniSpearMan03:r3",
   "id": "MiniSpearMan03",
   "name": "근위병",
   "asset": "MiniSpearMan03",
   "nameZh": "衛兵",
   "nameZhKey": "unit.name.MiniSpearMan03",
   "symbol": "S",
   "rank": 3,
   "reachable": true,
   "entry": [
    "no-subclass-direct",
    "standard"
   ],
   "inTree": true,
   "parent": "MiniSpearMan02",
   "parents": [
    "MiniSpearMan02"
   ],
   "parentKeys": [
    "S:MiniSpearMan02:r2"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "크러셔"
   ],
   "childKeys": [
    "S:크러셔:r4"
   ],
   "classType": null,
   "factions": [
    "empire"
   ],
   "factionInGame": "empire",
   "prismOnly": false,
   "stats": {
    "aspd": 1.25,
    "atk": 26,
    "distance": 55,
    "hp": 240
   },
   "statArrows": null,
   "skillName": "결벽의 방진",
   "skillDesc": "2초마다 1초간 받는 피해 -40%. 해당 시간 피격 시 즉시 반격 (ATK 50%)",
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1840,1878；判斷 L1803） ／ 任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 3 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L1840,1878）",
   "source": "decompiled/src/game/promotion.lua:1840,1878"
  },
  {
   "key": "S:SpearRevenant:r3",
   "id": "SpearRevenant",
   "name": "레버넌트",
   "asset": "SpearRevenant",
   "nameZh": "亡魂",
   "nameZhKey": "unit.name.레버넌트",
   "symbol": "S",
   "rank": 3,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "S:망령병:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": "공격형",
   "factions": [
    "undead"
   ],
   "factionInGame": "undead",
   "prismOnly": false,
   "stats": {
    "aspd": 1.5,
    "atk": 90,
    "distance": 65,
    "hp": 300
   },
   "statArrows": {
    "aspd": 3,
    "atk": 5,
    "distance": -1,
    "hp": 3
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現；只有「已有 망령병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1769）",
   "source": "decompiled/src/game/promotion.lua:1769"
  },
  {
   "key": "S:글래디에이터:r3",
   "id": "글래디에이터",
   "name": "글래디에이터",
   "asset": "글래디에이터",
   "nameZh": "角鬥士",
   "nameZhKey": "unit.name.글래디에이터",
   "symbol": "S",
   "rank": 3,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "S:투기 창병:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": "공격형",
   "factions": [
    "outlaw"
   ],
   "factionInGame": "outlaw",
   "prismOnly": false,
   "stats": {
    "aspd": 1.5,
    "atk": 58,
    "distance": 60,
    "hp": 250
   },
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現；只有「已有 투기 창병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1787；判斷 L1781）",
   "source": "decompiled/src/game/promotion.lua:1787"
  },
  {
   "key": "S:랜스마스터:r3",
   "id": "랜스마스터",
   "name": "랜스마스터",
   "asset": "랜스마스터",
   "nameZh": "長槍大師",
   "nameZhKey": "unit.name.랜스마스터",
   "symbol": "S",
   "rank": 3,
   "reachable": true,
   "entry": [
    "standard"
   ],
   "inTree": true,
   "parent": "창술사",
   "parents": [
    "창술사"
   ],
   "parentKeys": [
    "S:창술사:r2"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "MiniSpearMan03",
    "허스칼"
   ],
   "childKeys": [
    "S:MiniSpearMan03:r4",
    "S:허스칼:r4"
   ],
   "classType": "범위형",
   "factions": [
    "empire"
   ],
   "factionInGame": "empire",
   "prismOnly": false,
   "stats": {
    "aspd": 1.1,
    "atk": 110,
    "distance": 90,
    "hp": 380
   },
   "statArrows": {
    "aspd": 0,
    "atk": 3,
    "distance": 1,
    "hp": 2
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1735）",
   "source": "decompiled/src/game/promotion.lua:1735"
  },
  {
   "key": "S:무법자:r3",
   "id": "무법자",
   "name": "무법자",
   "asset": "무법자",
   "nameZh": "亡命徒",
   "nameZhKey": "unit.name.무법자",
   "symbol": "S",
   "rank": 3,
   "reachable": true,
   "entry": [
    "standard"
   ],
   "inTree": true,
   "parent": "약탈자",
   "parents": [
    "약탈자"
   ],
   "parentKeys": [
    "S:약탈자:r2"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "MiniSpearMan03",
    "허스칼"
   ],
   "childKeys": [
    "S:MiniSpearMan03:r4",
    "S:허스칼:r4"
   ],
   "classType": null,
   "factions": [
    "outlaw"
   ],
   "factionInGame": "outlaw",
   "prismOnly": false,
   "stats": {
    "aspd": 1.5,
    "atk": 34,
    "distance": 55,
    "hp": 180
   },
   "statArrows": null,
   "skillName": "전직 특성",
   "skillDesc": "무법자 특화 전직",
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1852；判斷 L1804）",
   "source": "decompiled/src/game/promotion.lua:1852"
  },
  {
   "key": "S:바바리안:r3",
   "id": "바바리안",
   "name": "바바리안",
   "asset": "바바리안",
   "nameZh": "蠻族",
   "nameZhKey": "unit.name.바바리안",
   "symbol": "S",
   "rank": 3,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "S:바이킹:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [
    "tribe"
   ],
   "factionInGame": "tribe",
   "prismOnly": false,
   "stats": {
    "aspd": 1.2,
    "atk": 60,
    "distance": 55,
    "hp": 200
   },
   "statArrows": null,
   "skillName": "전직 특성",
   "skillDesc": "바바리안으로 전직",
   "condition": "任何稀有度都會出現；只有「已有 바이킹 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1828；判斷 L1806）",
   "source": "decompiled/src/game/promotion.lua:1828"
  },
  {
   "key": "S:발키리:r3",
   "id": "발키리",
   "name": "발키리",
   "asset": "발키리",
   "nameZh": "女武神",
   "nameZhKey": "unit.name.발키리",
   "symbol": "S",
   "rank": 3,
   "reachable": true,
   "entry": [
    "standard"
   ],
   "inTree": true,
   "parent": "천공병",
   "parents": [
    "천공병"
   ],
   "parentKeys": [
    "S:천공병:r2"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "MiniSpearMan03",
    "허스칼"
   ],
   "childKeys": [
    "S:MiniSpearMan03:r4",
    "S:허스칼:r4"
   ],
   "classType": "공격형",
   "factions": [
    "celestial"
   ],
   "factionInGame": "celestial",
   "prismOnly": false,
   "stats": {
    "aspd": 1.5,
    "atk": 104,
    "distance": 70,
    "hp": 480
   },
   "statArrows": {
    "aspd": 1,
    "atk": 3,
    "distance": 1,
    "hp": 3
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1717）",
   "source": "decompiled/src/game/promotion.lua:1717"
  },
  {
   "key": "S:스파르타:r3",
   "id": "스파르타",
   "name": "스파르타",
   "asset": "스파르타",
   "nameZh": "斯巴達人",
   "nameZhKey": "unit.name.스파르타",
   "symbol": "S",
   "rank": 3,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "S:고대 창병:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": "균형형",
   "factions": [
    "empire"
   ],
   "factionInGame": "empire",
   "prismOnly": false,
   "stats": {
    "aspd": 0.8,
    "atk": 64,
    "distance": 60,
    "hp": 380
   },
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現；只有「已有 고대 창병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1798；判斷 L1792）",
   "source": "decompiled/src/game/promotion.lua:1798"
  },
  {
   "key": "S:처형자:r3",
   "id": "처형자",
   "name": "처형자",
   "asset": "처형자",
   "nameZh": "處刑者",
   "nameZhKey": "unit.name.처형자",
   "symbol": "S",
   "rank": 3,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "S:흑위병:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": "방어형",
   "factions": [
    "abyss"
   ],
   "factionInGame": "abyss",
   "prismOnly": false,
   "stats": {
    "aspd": 1.2,
    "atk": 82,
    "distance": 80,
    "hp": 460
   },
   "statArrows": {
    "aspd": 0,
    "atk": 4,
    "distance": 2,
    "hp": 5
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現；只有「已有 흑위병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1753）",
   "source": "decompiled/src/game/promotion.lua:1753"
  },
  {
   "key": "S:하이 엘프 보병:r3",
   "id": "하이 엘프 보병",
   "name": "하이 엘프 보병",
   "asset": "하이 엘프 보병",
   "nameZh": "高等精靈步兵",
   "nameZhKey": "unit.name.하이 엘프 보병",
   "symbol": "S",
   "rank": 3,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "S:엘프 보병:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [
    "forest"
   ],
   "factionInGame": "forest",
   "prismOnly": false,
   "stats": {
    "aspd": 1.6,
    "atk": 30,
    "distance": 55,
    "hp": 290
   },
   "statArrows": null,
   "skillName": "전직 특성",
   "skillDesc": "하이 엘프 보병으로 전직",
   "condition": "任何稀有度都會出現；只有「已有 엘프 보병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1816；判斷 L1805）",
   "source": "decompiled/src/game/promotion.lua:1816"
  },
  {
   "key": "S:허스칼:r3",
   "id": "허스칼",
   "name": "허스칼",
   "asset": "허스칼",
   "nameZh": "侍衛",
   "nameZhKey": "unit.name.허스칼",
   "symbol": "S",
   "rank": 3,
   "reachable": false,
   "entry": [
    "no-subclass-direct"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "크러셔"
   ],
   "childKeys": [
    "S:크러셔:r4"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": "전직 특성",
   "skillDesc": "상위 창병 전직",
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 3 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L1885）",
   "source": "decompiled/src/game/promotion.lua:1885"
  },
  {
   "key": "S:MiniSpearMan03:r4",
   "id": "MiniSpearMan03",
   "name": "근위병",
   "asset": "MiniSpearMan03",
   "nameZh": "衛兵",
   "nameZhKey": "unit.name.MiniSpearMan03",
   "symbol": "S",
   "rank": 4,
   "reachable": false,
   "entry": [
    "no-subclass-direct",
    "standard"
   ],
   "inTree": true,
   "parent": "랜스마스터",
   "parents": [
    "랜스마스터",
    "무법자",
    "발키리"
   ],
   "parentKeys": [
    "S:랜스마스터:r3",
    "S:무법자:r3",
    "S:발키리:r3"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "MiniSpearMan03",
    "허스칼"
   ],
   "childKeys": [
    "S:MiniSpearMan03:r5",
    "S:허스칼:r5"
   ],
   "classType": null,
   "factions": [
    "empire"
   ],
   "factionInGame": null,
   "prismOnly": false,
   "stats": {
    "aspd": 1.25,
    "atk": 26,
    "distance": 55,
    "hp": 240
   },
   "statArrows": null,
   "skillName": "결벽의 방진",
   "skillDesc": "2초마다 1초간 받는 피해 -40%. 해당 시간 피격 시 즉시 반격 (ATK 50%)",
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1840,1878） ／ 任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 4 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L1840,1878）",
   "source": "decompiled/src/game/promotion.lua:1840,1878"
  },
  {
   "key": "S:크러셔:r4",
   "id": "크러셔",
   "name": "크러셔",
   "asset": "크러셔",
   "nameZh": "粉碎者",
   "nameZhKey": "unit.name.크러셔",
   "symbol": "S",
   "rank": 4,
   "reachable": false,
   "entry": [
    "special-parent",
    "standard"
   ],
   "inTree": true,
   "parent": "MiniSpearMan03",
   "parents": [
    "MiniSpearMan03"
   ],
   "parentKeys": [
    "S:MiniSpearMan03:r3"
   ],
   "otherParentKeys": [
    "S:허스칼:r3"
   ],
   "rank2Entry": false,
   "children": [
    "젠"
   ],
   "childKeys": [
    "S:젠:r5"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1688；判斷 L1678） ／ 任何稀有度都會出現；只有「已有 허스칼 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1688；判斷 L1679）",
   "source": "decompiled/src/game/promotion.lua:1688"
  },
  {
   "key": "S:허스칼:r4",
   "id": "허스칼",
   "name": "허스칼",
   "asset": "허스칼",
   "nameZh": "侍衛",
   "nameZhKey": "unit.name.허스칼",
   "symbol": "S",
   "rank": 4,
   "reachable": false,
   "entry": [
    "no-subclass-direct",
    "standard"
   ],
   "inTree": true,
   "parent": "랜스마스터",
   "parents": [
    "랜스마스터",
    "무법자",
    "발키리"
   ],
   "parentKeys": [
    "S:랜스마스터:r3",
    "S:무법자:r3",
    "S:발키리:r3"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "MiniSpearMan03",
    "허스칼"
   ],
   "childKeys": [
    "S:MiniSpearMan03:r5",
    "S:허스칼:r5"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": "전직 특성",
   "skillDesc": "상위 창병 전직",
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1885） ／ 任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 4 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L1885）",
   "source": "decompiled/src/game/promotion.lua:1885"
  },
  {
   "key": "S:MiniSpearMan03:r5",
   "id": "MiniSpearMan03",
   "name": "근위병",
   "asset": "MiniSpearMan03",
   "nameZh": "衛兵",
   "nameZhKey": "unit.name.MiniSpearMan03",
   "symbol": "S",
   "rank": 5,
   "reachable": false,
   "entry": [
    "no-subclass-direct",
    "standard"
   ],
   "inTree": true,
   "parent": "MiniSpearMan03",
   "parents": [
    "MiniSpearMan03",
    "허스칼"
   ],
   "parentKeys": [
    "S:MiniSpearMan03:r4",
    "S:허스칼:r4"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [
    "empire"
   ],
   "factionInGame": null,
   "prismOnly": false,
   "stats": {
    "aspd": 1.25,
    "atk": 26,
    "distance": 55,
    "hp": 240
   },
   "statArrows": null,
   "skillName": "결벽의 방진",
   "skillDesc": "2초마다 1초간 받는 피해 -40%. 해당 시간 피격 시 즉시 반격 (ATK 50%)",
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1840,1878；判斷 L1678） ／ 任何稀有度都會出現（promotion.lua 定義 L1840,1878；判斷 L1679） ／ 任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 5 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L1840,1878）",
   "source": "decompiled/src/game/promotion.lua:1840,1878"
  },
  {
   "key": "S:젠:r5",
   "id": "젠",
   "name": "젠",
   "asset": "젠",
   "nameZh": "禪",
   "nameZhKey": "unit.name.젠",
   "symbol": "S",
   "rank": 5,
   "reachable": false,
   "entry": [
    "standard"
   ],
   "inTree": true,
   "parent": "크러셔",
   "parents": [
    "크러셔"
   ],
   "parentKeys": [
    "S:크러셔:r4"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1516；判斷 L1511）",
   "source": "decompiled/src/game/promotion.lua:1516"
  },
  {
   "key": "S:허스칼:r5",
   "id": "허스칼",
   "name": "허스칼",
   "asset": "허스칼",
   "nameZh": "侍衛",
   "nameZhKey": "unit.name.허스칼",
   "symbol": "S",
   "rank": 5,
   "reachable": false,
   "entry": [
    "no-subclass-direct",
    "standard"
   ],
   "inTree": true,
   "parent": "MiniSpearMan03",
   "parents": [
    "MiniSpearMan03",
    "허스칼"
   ],
   "parentKeys": [
    "S:MiniSpearMan03:r4",
    "S:허스칼:r4"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": "전직 특성",
   "skillDesc": "상위 창병 전직",
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1885；判斷 L1678） ／ 任何稀有度都會出現（promotion.lua 定義 L1885；判斷 L1679） ／ 任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 5 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L1885）",
   "source": "decompiled/src/game/promotion.lua:1885"
  },
  {
   "key": "W:슬레이어:r1",
   "id": "슬레이어",
   "name": "슬레이어",
   "asset": "슬레이어",
   "nameZh": "屠戮者",
   "nameZhKey": "unit.name.슬레이어",
   "symbol": "W",
   "rank": 1,
   "reachable": false,
   "entry": [
    "orphan-special"
   ],
   "inTree": false,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "듀라한",
    "백기사"
   ],
   "childKeys": [
    "W:듀라한:r2",
    "W:백기사:r2"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": null,
   "source": null
  },
  {
   "key": "W:철퇴병:r1",
   "id": "철퇴병",
   "name": "철퇴병",
   "asset": "철퇴병",
   "nameZh": "錘兵",
   "nameZhKey": "unit.name.철퇴병",
   "symbol": "W",
   "rank": 1,
   "reachable": false,
   "entry": [
    "orphan-special"
   ],
   "inTree": false,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "사수 병사",
    "엘프병사"
   ],
   "childKeys": [
    "W:사수 병사:r2",
    "W:엘프병사:r2"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": null,
   "source": null
  },
  {
   "key": "W:투사:r1",
   "id": "투사",
   "name": "투사",
   "asset": "투사",
   "nameZh": "鬥士",
   "nameZhKey": "unit.name.투사",
   "symbol": "W",
   "rank": 1,
   "reachable": false,
   "entry": [
    "orphan-special"
   ],
   "inTree": false,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "성기사",
    "염투사"
   ],
   "childKeys": [
    "W:성기사:r2",
    "W:염투사:r2"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": null,
   "source": null
  },
  {
   "key": "W:해골 투사:r1",
   "id": "해골 투사",
   "name": "해골 투사",
   "asset": "해골 투사",
   "nameZh": "骷髏鬥士",
   "nameZhKey": "unit.name.해골 투사",
   "symbol": "W",
   "rank": 1,
   "reachable": false,
   "entry": [
    "orphan-special"
   ],
   "inTree": false,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "마검사",
    "암검사"
   ],
   "childKeys": [
    "W:마검사:r2",
    "W:마검사:r4",
    "W:암검사:r2",
    "W:암검사:r4"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": null,
   "source": null
  },
  {
   "key": "W:MiniSwordMan02:r2",
   "id": "MiniSwordMan02",
   "name": "병사",
   "asset": "MiniSwordMan02",
   "nameZh": "士兵",
   "nameZhKey": "unit.name.MiniSwordMan02",
   "symbol": "W",
   "rank": 2,
   "reachable": true,
   "entry": [
    "standard"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": true,
   "children": [
    "MiniSwordMan03"
   ],
   "childKeys": [
    "W:MiniSwordMan03:r3",
    "W:MiniSwordMan03:r4",
    "W:MiniSwordMan03:r5"
   ],
   "classType": null,
   "factions": [
    "empire"
   ],
   "factionInGame": "empire",
   "prismOnly": false,
   "stats": {
    "aspd": 1.6,
    "atk": 15,
    "distance": 50,
    "hp": 120
   },
   "statArrows": null,
   "skillName": "전직 특성",
   "skillDesc": "기본 전사 상위 전직",
   "condition": "稀有度限 normal/advanced/rare/legendary；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L483）",
   "source": "decompiled/src/game/promotion.lua:483"
  },
  {
   "key": "W:듀라한:r2",
   "id": "듀라한",
   "name": "듀라한",
   "asset": "듀라한",
   "nameZh": "杜拉漢",
   "nameZhKey": "unit.name.듀라한",
   "symbol": "W",
   "rank": 2,
   "reachable": true,
   "entry": [
    "special-parent",
    "standard"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "W:슬레이어:r1"
   ],
   "rank2Entry": true,
   "children": [
    "팬텀"
   ],
   "childKeys": [
    "W:팬텀:r3"
   ],
   "classType": "공속형",
   "factions": [
    "undead"
   ],
   "factionInGame": "undead",
   "prismOnly": true,
   "stats": {
    "aspd": 2.2,
    "atk": 56,
    "distance": 50,
    "hp": 300
   },
   "statArrows": {
    "aspd": 4,
    "atk": 2,
    "distance": 0,
    "hp": 2
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "只有 prism 稀有度（或 jackpot5th 標記）才會出現；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L452） ／ 任何稀有度都會出現；只有「已有 슬레이어 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L452）",
   "source": "decompiled/src/game/promotion.lua:452"
  },
  {
   "key": "W:마검사:r2",
   "id": "마검사",
   "name": "마검사",
   "asset": "마검사",
   "nameZh": "魔劍士",
   "nameZhKey": "unit.name.마검사",
   "symbol": "W",
   "rank": 2,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "W:해골 투사:r1"
   ],
   "rank2Entry": false,
   "children": [
    "게이즈"
   ],
   "childKeys": [
    "W:게이즈:r3",
    "W:게이즈:r4"
   ],
   "classType": "균형형",
   "factions": [
    "abyss"
   ],
   "factionInGame": "abyss",
   "prismOnly": false,
   "stats": {
    "aspd": 1.6,
    "atk": 50,
    "distance": 50,
    "hp": 280
   },
   "statArrows": {
    "aspd": 1,
    "atk": 3,
    "distance": 0,
    "hp": 3
   },
   "skillName": "전직 특성",
   "skillDesc": "공포 시선 특화 전직",
   "condition": "任何稀有度都會出現；只有「已有 해골 투사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L402,483；判斷 L357）",
   "source": "decompiled/src/game/promotion.lua:402,483"
  },
  {
   "key": "W:백기사:r2",
   "id": "백기사",
   "name": "백기사",
   "asset": "백기사",
   "nameZh": "白騎士",
   "nameZhKey": "unit.name.백기사",
   "symbol": "W",
   "rank": 2,
   "reachable": true,
   "entry": [
    "special-parent",
    "standard"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "W:슬레이어:r1"
   ],
   "rank2Entry": true,
   "children": [
    "성배기사"
   ],
   "childKeys": [
    "W:성배기사:r3"
   ],
   "classType": "방어형",
   "factions": [
    "holy"
   ],
   "factionInGame": "holy",
   "prismOnly": true,
   "stats": {
    "aspd": 1.4,
    "atk": 64,
    "distance": 50,
    "hp": 430
   },
   "statArrows": {
    "aspd": -1,
    "atk": 3,
    "distance": 0,
    "hp": 4
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "只有 prism 稀有度（或 jackpot5th 標記）才會出現；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L465） ／ 任何稀有度都會出現；只有「已有 슬레이어 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L465）",
   "source": "decompiled/src/game/promotion.lua:465"
  },
  {
   "key": "W:사수 병사:r2",
   "id": "사수 병사",
   "name": "사수 병사",
   "asset": "사수 병사",
   "nameZh": "射手兵",
   "nameZhKey": "unit.name.사수 병사",
   "symbol": "W",
   "rank": 2,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "W:철퇴병:r1"
   ],
   "rank2Entry": false,
   "children": [
    "바그"
   ],
   "childKeys": [
    "W:바그:r3",
    "W:바그:r4",
    "W:바그:r5"
   ],
   "classType": null,
   "factions": [
    "tribe"
   ],
   "factionInGame": "tribe",
   "prismOnly": false,
   "stats": {
    "aspd": 1.8,
    "atk": 24,
    "distance": 50,
    "hp": 150
   },
   "statArrows": null,
   "skillName": "전직 특성",
   "skillDesc": "자연 특화 전직",
   "condition": "任何稀有度都會出現；只有「已有 철퇴병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L496；判斷 L476）",
   "source": "decompiled/src/game/promotion.lua:496"
  },
  {
   "key": "W:성기사:r2",
   "id": "성기사",
   "name": "성기사",
   "asset": "성기사",
   "nameZh": "聖騎士",
   "nameZhKey": "unit.name.성기사",
   "symbol": "W",
   "rank": 2,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "W:투사:r1"
   ],
   "rank2Entry": false,
   "children": [
    "템플러"
   ],
   "childKeys": [
    "W:템플러:r3"
   ],
   "classType": null,
   "factions": [
    "holy"
   ],
   "factionInGame": "holy",
   "prismOnly": false,
   "stats": {
    "aspd": 1.5,
    "atk": 32,
    "distance": 50,
    "hp": 240
   },
   "statArrows": null,
   "skillName": "전직 특성",
   "skillDesc": "성역 수호 특화 전직",
   "condition": "任何稀有度都會出現；只有「已有 투사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L483,686；判斷 L477）",
   "source": "decompiled/src/game/promotion.lua:483,686"
  },
  {
   "key": "W:암검사:r2",
   "id": "암검사",
   "name": "암검사",
   "asset": "암검사",
   "nameZh": "暗劍士",
   "nameZhKey": "unit.name.암검사",
   "symbol": "W",
   "rank": 2,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "W:해골 투사:r1"
   ],
   "rank2Entry": false,
   "children": [
    "마그누스"
   ],
   "childKeys": [
    "W:마그누스:r3",
    "W:마그누스:r4"
   ],
   "classType": "치명형",
   "factions": [
    "abyss"
   ],
   "factionInGame": "abyss",
   "prismOnly": false,
   "stats": {
    "aspd": 1.2,
    "atk": 76,
    "distance": 50,
    "hp": 240
   },
   "statArrows": {
    "aspd": -2,
    "atk": 5,
    "distance": 0,
    "hp": 2
   },
   "skillName": "전직 특성",
   "skillDesc": "침묵 오라 특화 전직",
   "condition": "任何稀有度都會出現；只有「已有 해골 투사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L416,496；判斷 L357）",
   "source": "decompiled/src/game/promotion.lua:416,496"
  },
  {
   "key": "W:엘프병사:r2",
   "id": "엘프병사",
   "name": "엘프병사",
   "asset": "엘프병사",
   "nameZh": "精靈士兵",
   "nameZhKey": "unit.name.엘프 병사",
   "symbol": "W",
   "rank": 2,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "W:철퇴병:r1"
   ],
   "rank2Entry": false,
   "children": [
    "엘프기사"
   ],
   "childKeys": [
    "W:엘프기사:r3",
    "W:엘프기사:r4",
    "W:엘프기사:r5"
   ],
   "classType": null,
   "factions": [
    "forest"
   ],
   "factionInGame": "forest",
   "prismOnly": false,
   "stats": {
    "aspd": 1.6,
    "atk": 26,
    "distance": 50,
    "hp": 160
   },
   "statArrows": null,
   "skillName": "전직 특성",
   "skillDesc": "민첩 특화 전직",
   "condition": "任何稀有度都會出現；只有「已有 철퇴병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L483；判斷 L476）",
   "source": "decompiled/src/game/promotion.lua:483"
  },
  {
   "key": "W:염투사:r2",
   "id": "염투사",
   "name": "염투사",
   "asset": "염투사",
   "nameZh": "炎鬥士",
   "nameZhKey": "unit.name.염투사",
   "symbol": "W",
   "rank": 2,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "W:투사:r1"
   ],
   "rank2Entry": false,
   "children": [
    "플레어"
   ],
   "childKeys": [
    "W:플레어:r3",
    "W:플레어:r4",
    "W:플레어:r5"
   ],
   "classType": null,
   "factions": [
    "arcane"
   ],
   "factionInGame": "arcane",
   "prismOnly": false,
   "stats": {
    "aspd": 1.7,
    "atk": 40,
    "distance": 50,
    "hp": 190
   },
   "statArrows": null,
   "skillName": "전직 특성",
   "skillDesc": "화염 수호 특화 전직",
   "condition": "任何稀有度都會出現；只有「已有 투사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L496；判斷 L477）",
   "source": "decompiled/src/game/promotion.lua:496"
  },
  {
   "key": "W:해적:r2",
   "id": "해적",
   "name": "해적",
   "asset": "해적",
   "nameZh": "海盜",
   "nameZhKey": "unit.name.해적",
   "symbol": "W",
   "rank": 2,
   "reachable": true,
   "entry": [
    "standard"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": true,
   "children": [
    "해적왕"
   ],
   "childKeys": [
    "W:해적왕:r3",
    "W:해적왕:r4",
    "W:해적왕:r5"
   ],
   "classType": null,
   "factions": [
    "outlaw"
   ],
   "factionInGame": "outlaw",
   "prismOnly": false,
   "stats": {
    "aspd": 1.7,
    "atk": 22,
    "distance": 50,
    "hp": 90
   },
   "statArrows": null,
   "skillName": "칼날 파동",
   "skillDesc": "4초마다 공격력 100%를 최대 2명에게 파동 타격",
   "condition": "稀有度限 normal/advanced/rare/legendary；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L496）",
   "source": "decompiled/src/game/promotion.lua:496"
  },
  {
   "key": "W:MiniSwordMan03:r3",
   "id": "MiniSwordMan03",
   "name": "기사",
   "asset": "MiniSwordMan03",
   "nameZh": "騎士",
   "nameZhKey": "unit.name.MiniSwordMan03",
   "symbol": "W",
   "rank": 3,
   "reachable": true,
   "entry": [
    "no-subclass-direct",
    "standard"
   ],
   "inTree": true,
   "parent": "MiniSwordMan02",
   "parents": [
    "MiniSwordMan02"
   ],
   "parentKeys": [
    "W:MiniSwordMan02:r2"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "플레어"
   ],
   "childKeys": [
    "W:플레어:r4"
   ],
   "classType": null,
   "factions": [
    "empire"
   ],
   "factionInGame": "empire",
   "prismOnly": false,
   "stats": {
    "aspd": 1.3,
    "atk": 25,
    "distance": 50,
    "hp": 300
   },
   "statArrows": null,
   "skillName": "반격 태세",
   "skillDesc": "4초마다 1.5초간 모든 피해를 막고 공격한 적에게 피해 반사",
   "condition": "任何稀有度都會出現（promotion.lua 定義 L563,671；判斷 L556） ／ 任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 3 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L563,671）",
   "source": "decompiled/src/game/promotion.lua:563,671"
  },
  {
   "key": "W:게이즈:r3",
   "id": "게이즈",
   "name": "게이즈",
   "asset": "게이즈",
   "nameZh": "凝視者",
   "nameZhKey": "unit.name.게이즈",
   "symbol": "W",
   "rank": 3,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "W:마검사:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": "증폭형",
   "factions": [
    "abyss"
   ],
   "factionInGame": "abyss",
   "prismOnly": false,
   "stats": {
    "aspd": 1.7,
    "atk": 78,
    "distance": 50,
    "hp": 340
   },
   "statArrows": {
    "aspd": 1,
    "atk": 4,
    "distance": 0,
    "hp": 3
   },
   "skillName": "심연의 응시",
   "skillDesc": "심연의 눈을 뜬 단일 상위 전직",
   "condition": "任何稀有度都會出現；只有「已有 마검사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L636；判斷 L628）",
   "source": "decompiled/src/game/promotion.lua:636"
  },
  {
   "key": "W:마그누스:r3",
   "id": "마그누스",
   "name": "마그누스",
   "asset": "마그누스",
   "nameZh": "馬格努斯",
   "nameZhKey": "unit.name.마그누스",
   "symbol": "W",
   "rank": 3,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "W:암검사:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": "범위형",
   "factions": [
    "abyss"
   ],
   "factionInGame": "abyss",
   "prismOnly": false,
   "stats": {
    "aspd": 0.6,
    "atk": 135,
    "distance": 55,
    "hp": 500
   },
   "statArrows": {
    "aspd": -4,
    "atk": 4,
    "distance": 1,
    "hp": 5
   },
   "skillName": "심연의 군주",
   "skillDesc": "어둠의 힘을 완성한 단일 상위 전직",
   "condition": "任何稀有度都會出現；只有「已有 암검사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L347,655；判斷 L339）",
   "source": "decompiled/src/game/promotion.lua:347,655"
  },
  {
   "key": "W:바그:r3",
   "id": "바그",
   "name": "바그",
   "asset": "바그",
   "nameZh": "巴格",
   "nameZhKey": "unit.name.바그",
   "symbol": "W",
   "rank": 3,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "W:사수 병사:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [
    "tribe"
   ],
   "factionInGame": "tribe",
   "prismOnly": false,
   "stats": {
    "aspd": 1.5,
    "atk": 40,
    "distance": 50,
    "hp": 280
   },
   "statArrows": null,
   "skillName": "자연의 맹세",
   "skillDesc": "자연의 힘으로 각성한 상위 전직",
   "condition": "任何稀有度都會出現；只有「已有 사수 병사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L599；判斷 L592）",
   "source": "decompiled/src/game/promotion.lua:599"
  },
  {
   "key": "W:성기사:r3",
   "id": "성기사",
   "name": "성기사",
   "asset": "성기사",
   "nameZh": "聖騎士",
   "nameZhKey": "unit.name.성기사",
   "symbol": "W",
   "rank": 3,
   "reachable": false,
   "entry": [
    "no-subclass-direct"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "레버넌트",
    "팔라딘"
   ],
   "childKeys": [
    "W:레버넌트:r4",
    "W:팔라딘:r4"
   ],
   "classType": null,
   "factions": [
    "holy"
   ],
   "factionInGame": "holy",
   "prismOnly": false,
   "stats": {
    "aspd": 1.5,
    "atk": 32,
    "distance": 50,
    "hp": 240
   },
   "statArrows": null,
   "skillName": "성스러운 회복",
   "skillDesc": "1초마다 최저 체력 아군 HP 2% 회복",
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 3 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L483,686）",
   "source": "decompiled/src/game/promotion.lua:483,686"
  },
  {
   "key": "W:성배기사:r3",
   "id": "성배기사",
   "name": "성배기사",
   "asset": "성배기사",
   "nameZh": "聖杯騎士",
   "nameZhKey": "unit.name.성배기사",
   "symbol": "W",
   "rank": 3,
   "reachable": true,
   "entry": [
    "standard"
   ],
   "inTree": true,
   "parent": "백기사",
   "parents": [
    "백기사"
   ],
   "parentKeys": [
    "W:백기사:r2"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "MiniSwordMan03",
    "성기사",
    "암기사"
   ],
   "childKeys": [
    "W:MiniSwordMan03:r4",
    "W:성기사:r4",
    "W:암기사:r4"
   ],
   "classType": "방어형",
   "factions": [
    "holy"
   ],
   "factionInGame": "holy",
   "prismOnly": false,
   "stats": {
    "aspd": 1.2,
    "atk": 88,
    "distance": 50,
    "hp": 780
   },
   "statArrows": {
    "aspd": -2,
    "atk": 3,
    "distance": 0,
    "hp": 5
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現（promotion.lua 定義 L543）",
   "source": "decompiled/src/game/promotion.lua:543"
  },
  {
   "key": "W:암기사:r3",
   "id": "암기사",
   "name": "암기사",
   "asset": "암기사",
   "nameZh": "暗影騎士",
   "nameZhKey": "unit.name.암기사",
   "symbol": "W",
   "rank": 3,
   "reachable": false,
   "entry": [
    "no-subclass-direct"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": "암영 흡혈",
   "skillDesc": "다음 공격 피해의 25% 회복 (재사용 2초)",
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 3 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L679）",
   "source": "decompiled/src/game/promotion.lua:679"
  },
  {
   "key": "W:엘프기사:r3",
   "id": "엘프기사",
   "name": "엘프기사",
   "asset": "엘프기사",
   "nameZh": "精靈騎士",
   "nameZhKey": "unit.name.엘프 기사",
   "symbol": "W",
   "rank": 3,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "W:엘프병사:r2"
   ],
   "rank2Entry": false,
   "children": [
    "드루이드"
   ],
   "childKeys": [
    "W:드루이드:r4"
   ],
   "classType": null,
   "factions": [
    "forest"
   ],
   "factionInGame": "forest",
   "prismOnly": false,
   "stats": {
    "aspd": 1.5,
    "atk": 32,
    "distance": 50,
    "hp": 320
   },
   "statArrows": null,
   "skillName": "질풍 연격",
   "skillDesc": "1.5초마다 ATK 110% 연속 베기",
   "condition": "任何稀有度都會出現；只有「已有 엘프병사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L587；判斷 L580）",
   "source": "decompiled/src/game/promotion.lua:587"
  },
  {
   "key": "W:템플러:r3",
   "id": "템플러",
   "name": "템플러",
   "asset": "템플러",
   "nameZh": "聖殿騎士",
   "nameZhKey": "unit.name.템플러",
   "symbol": "W",
   "rank": 3,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "W:성기사:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [
    "holy"
   ],
   "factionInGame": "holy",
   "prismOnly": false,
   "stats": {
    "aspd": 1.4,
    "atk": 44,
    "distance": 50,
    "hp": 420
   },
   "statArrows": null,
   "skillName": "신성 강림",
   "skillDesc": "신격에 각성한 단일 상위 전직",
   "condition": "任何稀有度都會出現；只有「已有 성기사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L611；判斷 L604）",
   "source": "decompiled/src/game/promotion.lua:611"
  },
  {
   "key": "W:팬텀:r3",
   "id": "팬텀",
   "name": "팬텀",
   "asset": "팬텀",
   "nameZh": "幻影",
   "nameZhKey": "unit.name.팬텀",
   "symbol": "W",
   "rank": 3,
   "reachable": true,
   "entry": [
    "standard"
   ],
   "inTree": true,
   "parent": "듀라한",
   "parents": [
    "듀라한"
   ],
   "parentKeys": [
    "W:듀라한:r2"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "MiniSwordMan03",
    "성기사",
    "암기사"
   ],
   "childKeys": [
    "W:MiniSwordMan03:r4",
    "W:성기사:r4",
    "W:암기사:r4"
   ],
   "classType": "공속형",
   "factions": [
    "undead"
   ],
   "factionInGame": "undead",
   "prismOnly": false,
   "stats": {
    "aspd": 2.6,
    "atk": 72,
    "distance": 50,
    "hp": 520
   },
   "statArrows": {
    "aspd": 5,
    "atk": 3,
    "distance": 0,
    "hp": 4
   },
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現（promotion.lua 定義 L527）",
   "source": "decompiled/src/game/promotion.lua:527"
  },
  {
   "key": "W:플레어:r3",
   "id": "플레어",
   "name": "플레어",
   "asset": "플레어",
   "nameZh": "熾焰",
   "nameZhKey": "unit.name.플레어",
   "symbol": "W",
   "rank": 3,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "W:염투사:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [
    "arcane"
   ],
   "factionInGame": "arcane",
   "prismOnly": false,
   "stats": {
    "aspd": 1.7,
    "atk": 64,
    "distance": 50,
    "hp": 260
   },
   "statArrows": null,
   "skillName": "화염 각성",
   "skillDesc": "화염의 힘으로 각성한 단일 상위 전직",
   "condition": "任何稀有度都會出現；只有「已有 염투사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L364,623）",
   "source": "decompiled/src/game/promotion.lua:364,623"
  },
  {
   "key": "W:해적왕:r3",
   "id": "해적왕",
   "name": "해적왕",
   "asset": "해적왕",
   "nameZh": "海盜王",
   "nameZhKey": "unit.name.해적왕",
   "symbol": "W",
   "rank": 3,
   "reachable": true,
   "entry": [
    "standard"
   ],
   "inTree": true,
   "parent": "해적",
   "parents": [
    "해적"
   ],
   "parentKeys": [
    "W:해적:r2"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "MiniSwordMan03",
    "성기사",
    "암기사"
   ],
   "childKeys": [
    "W:MiniSwordMan03:r4",
    "W:성기사:r4",
    "W:암기사:r4"
   ],
   "classType": null,
   "factions": [
    "outlaw"
   ],
   "factionInGame": "outlaw",
   "prismOnly": false,
   "stats": {
    "aspd": 1.8,
    "atk": 36,
    "distance": 50,
    "hp": 160
   },
   "statArrows": null,
   "skillName": "폭풍의 칼날",
   "skillDesc": "전방으로 ATK 130% 폭풍의 칼날을 날려 최대 3명 피해",
   "condition": "任何稀有度都會出現（promotion.lua 定義 L575；判斷 L568）",
   "source": "decompiled/src/game/promotion.lua:575"
  },
  {
   "key": "W:MiniSwordMan03:r4",
   "id": "MiniSwordMan03",
   "name": "기사",
   "asset": "MiniSwordMan03",
   "nameZh": "騎士",
   "nameZhKey": "unit.name.MiniSwordMan03",
   "symbol": "W",
   "rank": 4,
   "reachable": false,
   "entry": [
    "no-subclass-direct",
    "special-parent",
    "standard"
   ],
   "inTree": true,
   "parent": "성배기사",
   "parents": [
    "성배기사",
    "팬텀",
    "해적왕"
   ],
   "parentKeys": [
    "W:성배기사:r3",
    "W:팬텀:r3",
    "W:해적왕:r3"
   ],
   "otherParentKeys": [
    "W:MiniSwordMan02:r2"
   ],
   "rank2Entry": false,
   "children": [
    "MiniSwordMan03",
    "성기사",
    "암기사"
   ],
   "childKeys": [
    "W:MiniSwordMan03:r5",
    "W:성기사:r5",
    "W:암기사:r5"
   ],
   "classType": null,
   "factions": [
    "empire"
   ],
   "factionInGame": null,
   "prismOnly": false,
   "stats": {
    "aspd": 1.3,
    "atk": 25,
    "distance": 50,
    "hp": 300
   },
   "statArrows": null,
   "skillName": "반격 태세",
   "skillDesc": "4초마다 1.5초간 모든 피해를 막고 공격한 적에게 피해 반사",
   "condition": "任何稀有度都會出現（promotion.lua 定義 L563,671） ／ 任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 4 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L563,671） ／ 任何稀有度都會出現；只有「已有 병사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L563,671；判斷 L556）",
   "source": "decompiled/src/game/promotion.lua:563,671"
  },
  {
   "key": "W:게이즈:r4",
   "id": "게이즈",
   "name": "게이즈",
   "asset": "게이즈",
   "nameZh": "凝視者",
   "nameZhKey": "unit.name.게이즈",
   "symbol": "W",
   "rank": 4,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "W:마검사:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": "증폭형",
   "factions": [
    "abyss"
   ],
   "factionInGame": null,
   "prismOnly": false,
   "stats": {
    "aspd": 1.7,
    "atk": 78,
    "distance": 50,
    "hp": 340
   },
   "statArrows": {
    "aspd": 1,
    "atk": 4,
    "distance": 0,
    "hp": 3
   },
   "skillName": "심연의 응시",
   "skillDesc": "심연의 눈을 뜬 단일 상위 전직",
   "condition": "任何稀有度都會出現；只有「已有 마검사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L636；判斷 L628）",
   "source": "decompiled/src/game/promotion.lua:636"
  },
  {
   "key": "W:드루이드:r4",
   "id": "드루이드",
   "name": "드루이드",
   "asset": "드루이드",
   "nameZh": "德魯伊",
   "nameZhKey": "unit.name.드루이드",
   "symbol": "W",
   "rank": 4,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "W:엘프기사:r3"
   ],
   "rank2Entry": false,
   "children": [
    "마그누스"
   ],
   "childKeys": [
    "W:마그누스:r5"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": {
    "aspd": 1.3,
    "atk": 34,
    "distance": 60,
    "hp": 160
   },
   "statArrows": null,
   "skillName": "바람의 상처",
   "skillDesc": "공격 시 25% 확률로 대상을 관통하는 검기 발사",
   "condition": "任何稀有度都會出現；只有「已有 엘프기사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L391；判斷 L356）",
   "source": "decompiled/src/game/promotion.lua:391"
  },
  {
   "key": "W:레버넌트:r4",
   "id": "레버넌트",
   "name": "레버넌트",
   "asset": "레버넌트",
   "nameZh": "亡魂",
   "nameZhKey": "unit.name.레버넌트",
   "symbol": "W",
   "rank": 4,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "W:성기사:r3"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [
    "undead"
   ],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": "심연의 복수",
   "skillDesc": "공격 시 20% 확률로 준 피해의 50%만큼 광역 피해",
   "condition": "任何稀有度都會出現；只有「已有 성기사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L381；判斷 L355）",
   "source": "decompiled/src/game/promotion.lua:381"
  },
  {
   "key": "W:마검사:r4",
   "id": "마검사",
   "name": "마검사",
   "asset": "마검사",
   "nameZh": "魔劍士",
   "nameZhKey": "unit.name.마검사",
   "symbol": "W",
   "rank": 4,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "W:해골 투사:r1"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": "균형형",
   "factions": [
    "abyss"
   ],
   "factionInGame": null,
   "prismOnly": false,
   "stats": {
    "aspd": 1.6,
    "atk": 50,
    "distance": 50,
    "hp": 280
   },
   "statArrows": {
    "aspd": 1,
    "atk": 3,
    "distance": 0,
    "hp": 3
   },
   "skillName": "공포의 시선",
   "skillDesc": "3초마다 주변 적들에게 ATK 60% 피해를 입히고 1초간 둔화시킵니다",
   "condition": "任何稀有度都會出現；只有「已有 해골 투사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L402,483；判斷 L357）",
   "source": "decompiled/src/game/promotion.lua:402,483"
  },
  {
   "key": "W:마그누스:r4",
   "id": "마그누스",
   "name": "마그누스",
   "asset": "마그누스",
   "nameZh": "馬格努斯",
   "nameZhKey": "unit.name.마그누스",
   "symbol": "W",
   "rank": 4,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "W:암검사:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": "범위형",
   "factions": [
    "abyss"
   ],
   "factionInGame": null,
   "prismOnly": false,
   "stats": {
    "aspd": 0.6,
    "atk": 135,
    "distance": 55,
    "hp": 500
   },
   "statArrows": {
    "aspd": -4,
    "atk": 4,
    "distance": 1,
    "hp": 5
   },
   "skillName": "심연의 군주",
   "skillDesc": "어둠의 힘을 완성한 단일 상위 전직",
   "condition": "任何稀有度都會出現；只有「已有 암검사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L347,655；判斷 L339）",
   "source": "decompiled/src/game/promotion.lua:347,655"
  },
  {
   "key": "W:바그:r4",
   "id": "바그",
   "name": "바그",
   "asset": "바그",
   "nameZh": "巴格",
   "nameZhKey": "unit.name.바그",
   "symbol": "W",
   "rank": 4,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "W:사수 병사:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [
    "tribe"
   ],
   "factionInGame": null,
   "prismOnly": false,
   "stats": {
    "aspd": 1.5,
    "atk": 40,
    "distance": 50,
    "hp": 280
   },
   "statArrows": null,
   "skillName": "자연의 맹세",
   "skillDesc": "자연의 힘으로 각성한 상위 전직",
   "condition": "任何稀有度都會出現；只有「已有 사수 병사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L599；判斷 L592）",
   "source": "decompiled/src/game/promotion.lua:599"
  },
  {
   "key": "W:성기사:r4",
   "id": "성기사",
   "name": "성기사",
   "asset": "성기사",
   "nameZh": "聖騎士",
   "nameZhKey": "unit.name.성기사",
   "symbol": "W",
   "rank": 4,
   "reachable": false,
   "entry": [
    "no-subclass-direct",
    "standard"
   ],
   "inTree": true,
   "parent": "성배기사",
   "parents": [
    "성배기사",
    "팬텀",
    "해적왕"
   ],
   "parentKeys": [
    "W:성배기사:r3",
    "W:팬텀:r3",
    "W:해적왕:r3"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "템플러"
   ],
   "childKeys": [
    "W:템플러:r5"
   ],
   "classType": null,
   "factions": [
    "holy"
   ],
   "factionInGame": null,
   "prismOnly": false,
   "stats": {
    "aspd": 1.5,
    "atk": 32,
    "distance": 50,
    "hp": 240
   },
   "statArrows": null,
   "skillName": "성스러운 회복",
   "skillDesc": "1초마다 최저 체력 아군 HP 2% 회복",
   "condition": "任何稀有度都會出現（promotion.lua 定義 L483,686） ／ 任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 4 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L483,686）",
   "source": "decompiled/src/game/promotion.lua:483,686"
  },
  {
   "key": "W:암검사:r4",
   "id": "암검사",
   "name": "암검사",
   "asset": "암검사",
   "nameZh": "暗劍士",
   "nameZhKey": "unit.name.암검사",
   "symbol": "W",
   "rank": 4,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "W:해골 투사:r1"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": "치명형",
   "factions": [
    "abyss"
   ],
   "factionInGame": null,
   "prismOnly": false,
   "stats": {
    "aspd": 1.2,
    "atk": 76,
    "distance": 50,
    "hp": 240
   },
   "statArrows": {
    "aspd": -2,
    "atk": 5,
    "distance": 0,
    "hp": 2
   },
   "skillName": "어둠의 침묵",
   "skillDesc": "공격 시 15% 확률로 대상을 1.5초간 침묵 상태로 만듭니다",
   "condition": "任何稀有度都會出現；只有「已有 해골 투사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L416,496；判斷 L357）",
   "source": "decompiled/src/game/promotion.lua:416,496"
  },
  {
   "key": "W:암기사:r4",
   "id": "암기사",
   "name": "암기사",
   "asset": "암기사",
   "nameZh": "暗影騎士",
   "nameZhKey": "unit.name.암기사",
   "symbol": "W",
   "rank": 4,
   "reachable": false,
   "entry": [
    "no-subclass-direct",
    "standard"
   ],
   "inTree": true,
   "parent": "성배기사",
   "parents": [
    "성배기사",
    "팬텀",
    "해적왕"
   ],
   "parentKeys": [
    "W:성배기사:r3",
    "W:팬텀:r3",
    "W:해적왕:r3"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [
    "MiniSwordMan03",
    "성기사",
    "암기사"
   ],
   "childKeys": [
    "W:MiniSwordMan03:r5",
    "W:성기사:r5",
    "W:암기사:r5"
   ],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": "암영 흡혈",
   "skillDesc": "다음 공격 피해의 25% 회복 (재사용 2초)",
   "condition": "任何稀有度都會出現（promotion.lua 定義 L679） ／ 任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 4 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L679）",
   "source": "decompiled/src/game/promotion.lua:679"
  },
  {
   "key": "W:엘프기사:r4",
   "id": "엘프기사",
   "name": "엘프기사",
   "asset": "엘프기사",
   "nameZh": "精靈騎士",
   "nameZhKey": "unit.name.엘프 기사",
   "symbol": "W",
   "rank": 4,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "W:엘프병사:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [
    "forest"
   ],
   "factionInGame": null,
   "prismOnly": false,
   "stats": {
    "aspd": 1.5,
    "atk": 32,
    "distance": 50,
    "hp": 320
   },
   "statArrows": null,
   "skillName": "질풍 연격",
   "skillDesc": "1.5초마다 ATK 110% 연속 베기",
   "condition": "任何稀有度都會出現；只有「已有 엘프병사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L587；判斷 L580）",
   "source": "decompiled/src/game/promotion.lua:587"
  },
  {
   "key": "W:팔라딘:r4",
   "id": "팔라딘",
   "name": "팔라딘",
   "asset": "팔라딘",
   "nameZh": "聖武士",
   "nameZhKey": "unit.name.팔라딘",
   "symbol": "W",
   "rank": 4,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "W:성기사:r3"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [
    "holy"
   ],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": "천상의 보호",
   "skillDesc": "3초마다 모든 아군에게 2초간 받는 피해 20% 감소 보호막 부여",
   "condition": "任何稀有度都會出現；只有「已有 성기사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L374；判斷 L355）",
   "source": "decompiled/src/game/promotion.lua:374"
  },
  {
   "key": "W:플레어:r4",
   "id": "플레어",
   "name": "플레어",
   "asset": "플레어",
   "nameZh": "熾焰",
   "nameZhKey": "unit.name.플레어",
   "symbol": "W",
   "rank": 4,
   "reachable": false,
   "entry": [
    "special-parent",
    "standard"
   ],
   "inTree": true,
   "parent": "MiniSwordMan03",
   "parents": [
    "MiniSwordMan03"
   ],
   "parentKeys": [
    "W:MiniSwordMan03:r3"
   ],
   "otherParentKeys": [
    "W:염투사:r2"
   ],
   "rank2Entry": false,
   "children": [
    "MiniSwordMan03",
    "성기사",
    "암기사"
   ],
   "childKeys": [
    "W:MiniSwordMan03:r5",
    "W:성기사:r5",
    "W:암기사:r5"
   ],
   "classType": null,
   "factions": [
    "arcane"
   ],
   "factionInGame": null,
   "prismOnly": false,
   "stats": {
    "aspd": 1.7,
    "atk": 64,
    "distance": 50,
    "hp": 260
   },
   "statArrows": null,
   "skillName": "화염 각성",
   "skillDesc": "화염의 힘으로 각성한 단일 상위 전직",
   "condition": "任何稀有度都會出現（promotion.lua 定義 L364,623；判斷 L354） ／ 任何稀有度都會出現；只有「已有 염투사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L364,623）",
   "source": "decompiled/src/game/promotion.lua:364,623"
  },
  {
   "key": "W:해적왕:r4",
   "id": "해적왕",
   "name": "해적왕",
   "asset": "해적왕",
   "nameZh": "海盜王",
   "nameZhKey": "unit.name.해적왕",
   "symbol": "W",
   "rank": 4,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "W:해적:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [
    "outlaw"
   ],
   "factionInGame": null,
   "prismOnly": false,
   "stats": {
    "aspd": 1.8,
    "atk": 36,
    "distance": 50,
    "hp": 160
   },
   "statArrows": null,
   "skillName": "폭풍의 칼날",
   "skillDesc": "전방으로 ATK 130% 폭풍의 칼날을 날려 최대 3명 피해",
   "condition": "任何稀有度都會出現；只有「已有 해적 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L575；判斷 L568）",
   "source": "decompiled/src/game/promotion.lua:575"
  },
  {
   "key": "W:MiniSwordMan03:r5",
   "id": "MiniSwordMan03",
   "name": "기사",
   "asset": "MiniSwordMan03",
   "nameZh": "騎士",
   "nameZhKey": "unit.name.MiniSwordMan03",
   "symbol": "W",
   "rank": 5,
   "reachable": false,
   "entry": [
    "no-subclass-direct",
    "special-parent",
    "standard"
   ],
   "inTree": true,
   "parent": "MiniSwordMan03",
   "parents": [
    "MiniSwordMan03",
    "암기사",
    "플레어"
   ],
   "parentKeys": [
    "W:MiniSwordMan03:r4",
    "W:암기사:r4",
    "W:플레어:r4"
   ],
   "otherParentKeys": [
    "W:MiniSwordMan02:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [
    "empire"
   ],
   "factionInGame": null,
   "prismOnly": false,
   "stats": {
    "aspd": 1.3,
    "atk": 25,
    "distance": 50,
    "hp": 300
   },
   "statArrows": null,
   "skillName": "반격 태세",
   "skillDesc": "4초마다 1.5초간 모든 피해를 막고 공격한 적에게 피해 반사",
   "condition": "任何稀有度都會出現（promotion.lua 定義 L563,671；判斷 L354） ／ 任何稀有度都會出現（promotion.lua 定義 L563,671） ／ 任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 5 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L563,671） ／ 任何稀有度都會出現；只有「已有 병사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L563,671；判斷 L556）",
   "source": "decompiled/src/game/promotion.lua:563,671"
  },
  {
   "key": "W:마그누스:r5",
   "id": "마그누스",
   "name": "마그누스",
   "asset": "마그누스",
   "nameZh": "馬格努斯",
   "nameZhKey": "unit.name.마그누스",
   "symbol": "W",
   "rank": 5,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "W:드루이드:r4"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [
    "abyss"
   ],
   "factionInGame": null,
   "prismOnly": false,
   "stats": {
    "aspd": 0.6,
    "atk": 135,
    "distance": 55,
    "hp": 500
   },
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": "任何稀有度都會出現；只有「已有 드루이드 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L347,655；判斷 L338）",
   "source": "decompiled/src/game/promotion.lua:347,655"
  },
  {
   "key": "W:바그:r5",
   "id": "바그",
   "name": "바그",
   "asset": "바그",
   "nameZh": "巴格",
   "nameZhKey": "unit.name.바그",
   "symbol": "W",
   "rank": 5,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "W:사수 병사:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [
    "tribe"
   ],
   "factionInGame": null,
   "prismOnly": false,
   "stats": {
    "aspd": 1.5,
    "atk": 40,
    "distance": 50,
    "hp": 280
   },
   "statArrows": null,
   "skillName": "자연의 맹세",
   "skillDesc": "자연의 힘으로 각성한 상위 전직",
   "condition": "任何稀有度都會出現；只有「已有 사수 병사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L599；判斷 L592）",
   "source": "decompiled/src/game/promotion.lua:599"
  },
  {
   "key": "W:성기사:r5",
   "id": "성기사",
   "name": "성기사",
   "asset": "성기사",
   "nameZh": "聖騎士",
   "nameZhKey": "unit.name.성기사",
   "symbol": "W",
   "rank": 5,
   "reachable": false,
   "entry": [
    "no-subclass-direct",
    "standard"
   ],
   "inTree": true,
   "parent": "MiniSwordMan03",
   "parents": [
    "MiniSwordMan03",
    "암기사",
    "플레어"
   ],
   "parentKeys": [
    "W:MiniSwordMan03:r4",
    "W:암기사:r4",
    "W:플레어:r4"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [
    "holy"
   ],
   "factionInGame": null,
   "prismOnly": false,
   "stats": {
    "aspd": 1.5,
    "atk": 32,
    "distance": 50,
    "hp": 240
   },
   "statArrows": null,
   "skillName": "성스러운 회복",
   "skillDesc": "1초마다 최저 체력 아군 HP 2% 회복",
   "condition": "任何稀有度都會出現（promotion.lua 定義 L483,686；判斷 L354） ／ 任何稀有度都會出現（promotion.lua 定義 L483,686） ／ 任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 5 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L483,686）",
   "source": "decompiled/src/game/promotion.lua:483,686"
  },
  {
   "key": "W:암기사:r5",
   "id": "암기사",
   "name": "암기사",
   "asset": "암기사",
   "nameZh": "暗影騎士",
   "nameZhKey": "unit.name.암기사",
   "symbol": "W",
   "rank": 5,
   "reachable": false,
   "entry": [
    "no-subclass-direct",
    "standard"
   ],
   "inTree": true,
   "parent": "MiniSwordMan03",
   "parents": [
    "MiniSwordMan03",
    "암기사",
    "플레어"
   ],
   "parentKeys": [
    "W:MiniSwordMan03:r4",
    "W:암기사:r4",
    "W:플레어:r4"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": "암영 흡혈",
   "skillDesc": "다음 공격 피해의 25% 회복 (재사용 2초)",
   "condition": "任何稀有度都會出現（promotion.lua 定義 L679；判斷 L354） ／ 任何稀有度都會出現（promotion.lua 定義 L679） ／ 任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 5 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L679）",
   "source": "decompiled/src/game/promotion.lua:679"
  },
  {
   "key": "W:엘프기사:r5",
   "id": "엘프기사",
   "name": "엘프기사",
   "asset": "엘프기사",
   "nameZh": "精靈騎士",
   "nameZhKey": "unit.name.엘프 기사",
   "symbol": "W",
   "rank": 5,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "W:엘프병사:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [
    "forest"
   ],
   "factionInGame": null,
   "prismOnly": false,
   "stats": {
    "aspd": 1.5,
    "atk": 32,
    "distance": 50,
    "hp": 320
   },
   "statArrows": null,
   "skillName": "질풍 연격",
   "skillDesc": "1.5초마다 ATK 110% 연속 베기",
   "condition": "任何稀有度都會出現；只有「已有 엘프병사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L587；判斷 L580）",
   "source": "decompiled/src/game/promotion.lua:587"
  },
  {
   "key": "W:템플러:r5",
   "id": "템플러",
   "name": "템플러",
   "asset": "템플러",
   "nameZh": "聖殿騎士",
   "nameZhKey": "unit.name.템플러",
   "symbol": "W",
   "rank": 5,
   "reachable": false,
   "entry": [
    "standard"
   ],
   "inTree": true,
   "parent": "성기사",
   "parents": [
    "성기사"
   ],
   "parentKeys": [
    "W:성기사:r4"
   ],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [
    "holy"
   ],
   "factionInGame": null,
   "prismOnly": false,
   "stats": {
    "aspd": 1.4,
    "atk": 44,
    "distance": 50,
    "hp": 420
   },
   "statArrows": null,
   "skillName": "신성 강림",
   "skillDesc": "신격에 각성한 단일 상위 전직",
   "condition": "任何稀有度都會出現（promotion.lua 定義 L611；判斷 L604）",
   "source": "decompiled/src/game/promotion.lua:611"
  },
  {
   "key": "W:플레어:r5",
   "id": "플레어",
   "name": "플레어",
   "asset": "플레어",
   "nameZh": "熾焰",
   "nameZhKey": "unit.name.플레어",
   "symbol": "W",
   "rank": 5,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "W:염투사:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [
    "arcane"
   ],
   "factionInGame": null,
   "prismOnly": false,
   "stats": {
    "aspd": 1.7,
    "atk": 64,
    "distance": 50,
    "hp": 260
   },
   "statArrows": null,
   "skillName": "화염 각성",
   "skillDesc": "화염의 힘으로 각성한 단일 상위 전직",
   "condition": "任何稀有度都會出現；只有「已有 염투사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L364,623）",
   "source": "decompiled/src/game/promotion.lua:364,623"
  },
  {
   "key": "W:해적왕:r5",
   "id": "해적왕",
   "name": "해적왕",
   "asset": "해적왕",
   "nameZh": "海盜王",
   "nameZhKey": "unit.name.해적왕",
   "symbol": "W",
   "rank": 5,
   "reachable": false,
   "entry": [
    "special-parent"
   ],
   "inTree": true,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [
    "W:해적:r2"
   ],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [
    "outlaw"
   ],
   "factionInGame": null,
   "prismOnly": false,
   "stats": {
    "aspd": 1.8,
    "atk": 36,
    "distance": 50,
    "hp": 160
   },
   "statArrows": null,
   "skillName": "폭풍의 칼날",
   "skillDesc": "전방으로 ATK 130% 폭풍의 칼날을 날려 최대 3명 피해",
   "condition": "任何稀有度都會出現；只有「已有 해적 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L575；判斷 L568）",
   "source": "decompiled/src/game/promotion.lua:575"
  },
  {
   "key": "orphan:해적대장",
   "id": "해적대장",
   "name": "해적대장",
   "asset": "해적대장",
   "nameZh": null,
   "nameZhKey": null,
   "symbol": null,
   "rank": null,
   "reachable": false,
   "entry": [
    "faction-list-only"
   ],
   "inTree": false,
   "parent": null,
   "parents": [],
   "parentKeys": [],
   "otherParentKeys": [],
   "rank2Entry": false,
   "children": [],
   "childKeys": [],
   "classType": null,
   "factions": [
    "outlaw"
   ],
   "factionInGame": null,
   "prismOnly": false,
   "stats": null,
   "statArrows": null,
   "skillName": null,
   "skillDesc": null,
   "condition": "只出現在陣營成員名單，promotion.lua 的任何分支都不會產生它（可能是特殊單位、敵人或舊資料）",
   "source": "decompiled/src/data/faction.lua（成員名單）"
  }
 ],
 "edges": [
  {
   "sym": "A",
   "rank": 2,
   "parent": null,
   "child": "MiniArcherMan02",
   "from": null,
   "to": "A:MiniArcherMan02:r2",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "稀有度限 normal/advanced/rare/legendary；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L808）",
   "defLines": [
    808
   ],
   "conditionLine": null
  },
  {
   "sym": "A",
   "rank": 2,
   "parent": null,
   "child": "순찰자",
   "from": null,
   "to": "A:순찰자:r2",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "稀有度限 normal/advanced/rare/legendary；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L815）",
   "defLines": [
    815
   ],
   "conditionLine": null
  },
  {
   "sym": "A",
   "rank": 2,
   "parent": null,
   "child": "큐피드",
   "from": null,
   "to": "A:큐피드:r2",
   "kind": "standard",
   "grades": [
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "只有 prism 稀有度（或 jackpot5th 標記）才會出現；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L707）",
   "defLines": [
    707
   ],
   "conditionLine": null
  },
  {
   "sym": "A",
   "rank": 2,
   "parent": null,
   "child": "은빛사수",
   "from": null,
   "to": "A:은빛사수:r2",
   "kind": "standard",
   "grades": [
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "只有 prism 稀有度（或 jackpot5th 標記）才會出現；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L720）",
   "defLines": [
    720
   ],
   "conditionLine": null
  },
  {
   "sym": "A",
   "rank": 3,
   "parent": "MiniArcherMan02",
   "child": "MiniArcherMan03",
   "from": "A:MiniArcherMan02:r2",
   "to": "A:MiniArcherMan03:r3",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L930,1022；判斷 L857）",
   "defLines": [
    930,
    1022
   ],
   "conditionLine": 857
  },
  {
   "sym": "A",
   "rank": 3,
   "parent": "순찰자",
   "child": "명사수",
   "from": "A:순찰자:r2",
   "to": "A:명사수:r3",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L942,1029；判斷 L919）",
   "defLines": [
    942,
    1029
   ],
   "conditionLine": 919
  },
  {
   "sym": "A",
   "rank": 3,
   "parent": "은빛사수",
   "child": "이클립스",
   "from": "A:은빛사수:r2",
   "to": "A:이클립스:r3",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L828）",
   "defLines": [
    828
   ],
   "conditionLine": null
  },
  {
   "sym": "A",
   "rank": 3,
   "parent": "큐피드",
   "child": "세라프",
   "from": "A:큐피드:r2",
   "to": "A:세라프:r3",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L846）",
   "defLines": [
    846
   ],
   "conditionLine": null
  },
  {
   "sym": "A",
   "rank": 4,
   "parent": "MiniArcherMan03",
   "child": "로빈 후드",
   "from": "A:MiniArcherMan03:r3",
   "to": "A:로빈 후드:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L979；判斷 L969）",
   "defLines": [
    979
   ],
   "conditionLine": 969
  },
  {
   "sym": "A",
   "rank": 4,
   "parent": "명사수",
   "child": "MiniArcherMan03",
   "from": "A:명사수:r3",
   "to": "A:MiniArcherMan03:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L930,1022）",
   "defLines": [
    930,
    1022
   ],
   "conditionLine": null
  },
  {
   "sym": "A",
   "rank": 4,
   "parent": "명사수",
   "child": "명사수",
   "from": "A:명사수:r3",
   "to": "A:명사수:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L942,1029）",
   "defLines": [
    942,
    1029
   ],
   "conditionLine": null
  },
  {
   "sym": "A",
   "rank": 4,
   "parent": "세라프",
   "child": "MiniArcherMan03",
   "from": "A:세라프:r3",
   "to": "A:MiniArcherMan03:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L930,1022）",
   "defLines": [
    930,
    1022
   ],
   "conditionLine": null
  },
  {
   "sym": "A",
   "rank": 4,
   "parent": "세라프",
   "child": "명사수",
   "from": "A:세라프:r3",
   "to": "A:명사수:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L942,1029）",
   "defLines": [
    942,
    1029
   ],
   "conditionLine": null
  },
  {
   "sym": "A",
   "rank": 4,
   "parent": "이클립스",
   "child": "MiniArcherMan03",
   "from": "A:이클립스:r3",
   "to": "A:MiniArcherMan03:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L930,1022）",
   "defLines": [
    930,
    1022
   ],
   "conditionLine": null
  },
  {
   "sym": "A",
   "rank": 4,
   "parent": "이클립스",
   "child": "명사수",
   "from": "A:이클립스:r3",
   "to": "A:명사수:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L942,1029）",
   "defLines": [
    942,
    1029
   ],
   "conditionLine": null
  },
  {
   "sym": "A",
   "rank": 5,
   "parent": "MiniArcherMan03",
   "child": "MiniArcherMan03",
   "from": "A:MiniArcherMan03:r4",
   "to": "A:MiniArcherMan03:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L930,1022）",
   "defLines": [
    930,
    1022
   ],
   "conditionLine": null
  },
  {
   "sym": "A",
   "rank": 5,
   "parent": "MiniArcherMan03",
   "child": "명사수",
   "from": "A:MiniArcherMan03:r4",
   "to": "A:명사수:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L942,1029）",
   "defLines": [
    942,
    1029
   ],
   "conditionLine": null
  },
  {
   "sym": "A",
   "rank": 5,
   "parent": "로빈 후드",
   "child": "그린 섀도우",
   "from": "A:로빈 후드:r4",
   "to": "A:그린 섀도우:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1002；判斷 L994）",
   "defLines": [
    1002
   ],
   "conditionLine": 994
  },
  {
   "sym": "A",
   "rank": 5,
   "parent": "명사수",
   "child": "MiniArcherMan03",
   "from": "A:명사수:r4",
   "to": "A:MiniArcherMan03:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L930,1022）",
   "defLines": [
    930,
    1022
   ],
   "conditionLine": null
  },
  {
   "sym": "A",
   "rank": 5,
   "parent": "명사수",
   "child": "명사수",
   "from": "A:명사수:r4",
   "to": "A:명사수:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L942,1029）",
   "defLines": [
    942,
    1029
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 2,
   "parent": null,
   "child": "황제",
   "from": null,
   "to": "D:황제:r2",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "稀有度限 normal/advanced/rare/legendary；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L1187）",
   "defLines": [
    1187
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 2,
   "parent": null,
   "child": "베테랑",
   "from": null,
   "to": "D:베테랑:r2",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "稀有度限 normal/advanced/rare/legendary；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L1194）",
   "defLines": [
    1194
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 2,
   "parent": null,
   "child": "대천사",
   "from": null,
   "to": "D:대천사:r2",
   "kind": "standard",
   "grades": [
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "只有 prism 稀有度（或 jackpot5th 標記）才會出現；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L1064）",
   "defLines": [
    1064
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 2,
   "parent": null,
   "child": "타락천사",
   "from": null,
   "to": "D:타락천사:r2",
   "kind": "standard",
   "grades": [
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "只有 prism 稀有度（或 jackpot5th 標記）才會出現；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L1077）",
   "defLines": [
    1077
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 3,
   "parent": "대천사",
   "child": "도미니온",
   "from": "D:대천사:r2",
   "to": "D:도미니온:r3",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1221）",
   "defLines": [
    1221
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 3,
   "parent": "베테랑",
   "child": "장군",
   "from": "D:베테랑:r2",
   "to": "D:장군:r3",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1369；判斷 L1364）",
   "defLines": [
    1369
   ],
   "conditionLine": 1364
  },
  {
   "sym": "D",
   "rank": 3,
   "parent": "타락천사",
   "child": "파멸의 천사",
   "from": "D:타락천사:r2",
   "to": "D:파멸의 천사:r3",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1253）",
   "defLines": [
    1253
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 3,
   "parent": "황제",
   "child": "검황",
   "from": "D:황제:r2",
   "to": "D:검황:r3",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1359,1415,1482；判斷 L1354）",
   "defLines": [
    1359,
    1415,
    1482
   ],
   "conditionLine": 1354
  },
  {
   "sym": "D",
   "rank": 4,
   "parent": "검황",
   "child": "글룸",
   "from": "D:검황:r3",
   "to": "D:글룸:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1472；判斷 L1454）",
   "defLines": [
    1472
   ],
   "conditionLine": 1454
  },
  {
   "sym": "D",
   "rank": 4,
   "parent": "도미니온",
   "child": "검황",
   "from": "D:도미니온:r3",
   "to": "D:검황:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1359,1415,1482）",
   "defLines": [
    1359,
    1415,
    1482
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 4,
   "parent": "도미니온",
   "child": "암흑장군",
   "from": "D:도미니온:r3",
   "to": "D:암흑장군:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1489）",
   "defLines": [
    1489
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 4,
   "parent": "도미니온",
   "child": "우드워든",
   "from": "D:도미니온:r3",
   "to": "D:우드워든:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1496）",
   "defLines": [
    1496
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 4,
   "parent": "장군",
   "child": "검황",
   "from": "D:장군:r3",
   "to": "D:검황:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1359,1415,1482）",
   "defLines": [
    1359,
    1415,
    1482
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 4,
   "parent": "장군",
   "child": "암흑장군",
   "from": "D:장군:r3",
   "to": "D:암흑장군:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1489）",
   "defLines": [
    1489
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 4,
   "parent": "장군",
   "child": "우드워든",
   "from": "D:장군:r3",
   "to": "D:우드워든:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1496）",
   "defLines": [
    1496
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 4,
   "parent": "파멸의 천사",
   "child": "검황",
   "from": "D:파멸의 천사:r3",
   "to": "D:검황:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1359,1415,1482）",
   "defLines": [
    1359,
    1415,
    1482
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 4,
   "parent": "파멸의 천사",
   "child": "암흑장군",
   "from": "D:파멸의 천사:r3",
   "to": "D:암흑장군:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1489）",
   "defLines": [
    1489
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 4,
   "parent": "파멸의 천사",
   "child": "우드워든",
   "from": "D:파멸의 천사:r3",
   "to": "D:우드워든:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1496）",
   "defLines": [
    1496
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 5,
   "parent": "검황",
   "child": "검황",
   "from": "D:검황:r4",
   "to": "D:검황:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1359,1415,1482）",
   "defLines": [
    1359,
    1415,
    1482
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 5,
   "parent": "검황",
   "child": "암흑장군",
   "from": "D:검황:r4",
   "to": "D:암흑장군:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1489；判斷 L1454）",
   "defLines": [
    1489
   ],
   "conditionLine": 1454
  },
  {
   "sym": "D",
   "rank": 5,
   "parent": "검황",
   "child": "우드워든",
   "from": "D:검황:r4",
   "to": "D:우드워든:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1496；判斷 L1454）",
   "defLines": [
    1496
   ],
   "conditionLine": 1454
  },
  {
   "sym": "D",
   "rank": 5,
   "parent": "글룸",
   "child": "카오스",
   "from": "D:글룸:r4",
   "to": "D:카오스:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1445；判斷 L1428）",
   "defLines": [
    1445
   ],
   "conditionLine": 1428
  },
  {
   "sym": "D",
   "rank": 5,
   "parent": "암흑장군",
   "child": "검황",
   "from": "D:암흑장군:r4",
   "to": "D:검황:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1359,1415,1482）",
   "defLines": [
    1359,
    1415,
    1482
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 5,
   "parent": "암흑장군",
   "child": "암흑장군",
   "from": "D:암흑장군:r4",
   "to": "D:암흑장군:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1489）",
   "defLines": [
    1489
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 5,
   "parent": "암흑장군",
   "child": "우드워든",
   "from": "D:암흑장군:r4",
   "to": "D:우드워든:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1496）",
   "defLines": [
    1496
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 5,
   "parent": "우드워든",
   "child": "검황",
   "from": "D:우드워든:r4",
   "to": "D:검황:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1359,1415,1482）",
   "defLines": [
    1359,
    1415,
    1482
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 5,
   "parent": "우드워든",
   "child": "암흑장군",
   "from": "D:우드워든:r4",
   "to": "D:암흑장군:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1489）",
   "defLines": [
    1489
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 5,
   "parent": "우드워든",
   "child": "우드워든",
   "from": "D:우드워든:r4",
   "to": "D:우드워든:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1496）",
   "defLines": [
    1496
   ],
   "conditionLine": null
  },
  {
   "sym": "H",
   "rank": 2,
   "parent": null,
   "child": "돌격병",
   "from": null,
   "to": "H:돌격병:r2",
   "kind": "standard",
   "grades": [
    "normal",
    "rare",
    "legendary"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "稀有度限 normal/rare/legendary；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L2494）",
   "defLines": [
    2494
   ],
   "conditionLine": null
  },
  {
   "sym": "H",
   "rank": 2,
   "parent": null,
   "child": "도끼 기병",
   "from": null,
   "to": "H:도끼 기병:r2",
   "kind": "standard",
   "grades": [
    "normal",
    "rare",
    "legendary"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "稀有度限 normal/rare/legendary；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L2501）",
   "defLines": [
    2501
   ],
   "conditionLine": null
  },
  {
   "sym": "H",
   "rank": 2,
   "parent": null,
   "child": "엘프 기병",
   "from": null,
   "to": "H:엘프 기병:r2",
   "kind": "standard",
   "grades": [
    "advanced"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "稀有度限 advanced；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L2476）",
   "defLines": [
    2476
   ],
   "conditionLine": null
  },
  {
   "sym": "H",
   "rank": 2,
   "parent": null,
   "child": "야만 기병",
   "from": null,
   "to": "H:야만 기병:r2",
   "kind": "standard",
   "grades": [
    "advanced"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "稀有度限 advanced；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L2483）",
   "defLines": [
    2483
   ],
   "conditionLine": null
  },
  {
   "sym": "H",
   "rank": 2,
   "parent": null,
   "child": "실반",
   "from": null,
   "to": "H:실반:r2",
   "kind": "standard",
   "grades": [
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "只有 prism 稀有度（或 jackpot5th 標記）才會出現；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L2379）",
   "defLines": [
    2379
   ],
   "conditionLine": null
  },
  {
   "sym": "H",
   "rank": 2,
   "parent": null,
   "child": "페이즈",
   "from": null,
   "to": "H:페이즈:r2",
   "kind": "standard",
   "grades": [
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "只有 prism 稀有度（或 jackpot5th 標記）才會出現；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L2392）",
   "defLines": [
    2392
   ],
   "conditionLine": null
  },
  {
   "sym": "H",
   "rank": 3,
   "parent": "도끼 기병",
   "child": "무법 기병",
   "from": "H:도끼 기병:r2",
   "to": "H:무법 기병:r3",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2661；判斷 L2642）",
   "defLines": [
    2661
   ],
   "conditionLine": 2642
  },
  {
   "sym": "H",
   "rank": 3,
   "parent": "돌격병",
   "child": "MiniHorseMan03",
   "from": "H:돌격병:r2",
   "to": "H:MiniHorseMan03:r3",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2649,2759；判斷 L2639）",
   "defLines": [
    2649,
    2759
   ],
   "conditionLine": 2639
  },
  {
   "sym": "H",
   "rank": 3,
   "parent": "실반",
   "child": "숲의 심장",
   "from": "H:실반:r2",
   "to": "H:숲의 심장:r3",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2556）",
   "defLines": [
    2556
   ],
   "conditionLine": null
  },
  {
   "sym": "H",
   "rank": 3,
   "parent": "야만 기병",
   "child": "광폭 기병",
   "from": "H:야만 기병:r2",
   "to": "H:광폭 기병:r3",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2673；判斷 L2641）",
   "defLines": [
    2673
   ],
   "conditionLine": 2641
  },
  {
   "sym": "H",
   "rank": 3,
   "parent": "엘프 기병",
   "child": "하이 엘프 기병",
   "from": "H:엘프 기병:r2",
   "to": "H:하이 엘프 기병:r3",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2685；判斷 L2640）",
   "defLines": [
    2685
   ],
   "conditionLine": 2640
  },
  {
   "sym": "H",
   "rank": 3,
   "parent": "페이즈",
   "child": "크로노워커",
   "from": "H:페이즈:r2",
   "to": "H:크로노워커:r3",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2521）",
   "defLines": [
    2521
   ],
   "conditionLine": null
  },
  {
   "sym": "H",
   "rank": 4,
   "parent": "MiniHorseMan03",
   "child": "그리즐",
   "from": "H:MiniHorseMan03:r3",
   "to": "H:그리즐:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2700,2713）",
   "defLines": [
    2700,
    2713
   ],
   "conditionLine": null
  },
  {
   "sym": "H",
   "rank": 4,
   "parent": "광폭 기병",
   "child": "그리즐",
   "from": "H:광폭 기병:r3",
   "to": "H:그리즐:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2700,2713；判斷 L2693）",
   "defLines": [
    2700,
    2713
   ],
   "conditionLine": 2693
  },
  {
   "sym": "H",
   "rank": 4,
   "parent": "무법 기병",
   "child": "MiniHorseMan03",
   "from": "H:무법 기병:r3",
   "to": "H:MiniHorseMan03:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2649,2759）",
   "defLines": [
    2649,
    2759
   ],
   "conditionLine": null
  },
  {
   "sym": "H",
   "rank": 4,
   "parent": "무법 기병",
   "child": "워베어",
   "from": "H:무법 기병:r3",
   "to": "H:워베어:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2764）",
   "defLines": [
    2764
   ],
   "conditionLine": null
  },
  {
   "sym": "H",
   "rank": 4,
   "parent": "숲의 심장",
   "child": "MiniHorseMan03",
   "from": "H:숲의 심장:r3",
   "to": "H:MiniHorseMan03:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2649,2759）",
   "defLines": [
    2649,
    2759
   ],
   "conditionLine": null
  },
  {
   "sym": "H",
   "rank": 4,
   "parent": "숲의 심장",
   "child": "워베어",
   "from": "H:숲의 심장:r3",
   "to": "H:워베어:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2764）",
   "defLines": [
    2764
   ],
   "conditionLine": null
  },
  {
   "sym": "H",
   "rank": 4,
   "parent": "크로노워커",
   "child": "MiniHorseMan03",
   "from": "H:크로노워커:r3",
   "to": "H:MiniHorseMan03:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2649,2759）",
   "defLines": [
    2649,
    2759
   ],
   "conditionLine": null
  },
  {
   "sym": "H",
   "rank": 4,
   "parent": "크로노워커",
   "child": "워베어",
   "from": "H:크로노워커:r3",
   "to": "H:워베어:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2764）",
   "defLines": [
    2764
   ],
   "conditionLine": null
  },
  {
   "sym": "H",
   "rank": 4,
   "parent": "하이 엘프 기병",
   "child": "그리즐",
   "from": "H:하이 엘프 기병:r3",
   "to": "H:그리즐:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2700,2713；判斷 L2692）",
   "defLines": [
    2700,
    2713
   ],
   "conditionLine": 2692
  },
  {
   "sym": "H",
   "rank": 5,
   "parent": "MiniHorseMan03",
   "child": "MiniHorseMan03",
   "from": "H:MiniHorseMan03:r4",
   "to": "H:MiniHorseMan03:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2649,2759）",
   "defLines": [
    2649,
    2759
   ],
   "conditionLine": null
  },
  {
   "sym": "H",
   "rank": 5,
   "parent": "MiniHorseMan03",
   "child": "워베어",
   "from": "H:MiniHorseMan03:r4",
   "to": "H:워베어:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2764；判斷 L2705）",
   "defLines": [
    2764
   ],
   "conditionLine": 2705
  },
  {
   "sym": "H",
   "rank": 5,
   "parent": "그리즐",
   "child": "우르간",
   "from": "H:그리즐:r4",
   "to": "H:우르간:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2740；判斷 L2735）",
   "defLines": [
    2740
   ],
   "conditionLine": 2735
  },
  {
   "sym": "H",
   "rank": 5,
   "parent": "워베어",
   "child": "MiniHorseMan03",
   "from": "H:워베어:r4",
   "to": "H:MiniHorseMan03:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2649,2759）",
   "defLines": [
    2649,
    2759
   ],
   "conditionLine": null
  },
  {
   "sym": "H",
   "rank": 5,
   "parent": "워베어",
   "child": "워베어",
   "from": "H:워베어:r4",
   "to": "H:워베어:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2764；判斷 L2706）",
   "defLines": [
    2764
   ],
   "conditionLine": 2706
  },
  {
   "sym": "Joker",
   "rank": 2,
   "parent": null,
   "child": "Trickster",
   "from": null,
   "to": "Joker:Trickster:r2",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L313）",
   "defLines": [
    313
   ],
   "conditionLine": null
  },
  {
   "sym": "Joker",
   "rank": 2,
   "parent": null,
   "child": "FerretTamer",
   "from": null,
   "to": "Joker:FerretTamer:r2",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L325）",
   "defLines": [
    325
   ],
   "conditionLine": null
  },
  {
   "sym": "Joker",
   "rank": 3,
   "parent": "FerretTamer",
   "child": "Ringmaster",
   "from": "Joker:FerretTamer:r2",
   "to": "Joker:Ringmaster:r3",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L293；判斷 L270）",
   "defLines": [
    293
   ],
   "conditionLine": 270
  },
  {
   "sym": "Joker",
   "rank": 3,
   "parent": "Trickster",
   "child": "Illusionist",
   "from": "Joker:Trickster:r2",
   "to": "Joker:Illusionist:r3",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L278；判斷 L269）",
   "defLines": [
    278
   ],
   "conditionLine": 269
  },
  {
   "sym": "Joker",
   "rank": 4,
   "parent": "Illusionist",
   "child": "C1",
   "from": "Joker:Illusionist:r3",
   "to": "Joker:C1:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現",
   "defLines": [],
   "conditionLine": null
  },
  {
   "sym": "Joker",
   "rank": 4,
   "parent": "Illusionist",
   "child": "C2",
   "from": "Joker:Illusionist:r3",
   "to": "Joker:C2:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現",
   "defLines": [],
   "conditionLine": null
  },
  {
   "sym": "Joker",
   "rank": 4,
   "parent": "Illusionist",
   "child": "C3",
   "from": "Joker:Illusionist:r3",
   "to": "Joker:C3:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現",
   "defLines": [],
   "conditionLine": null
  },
  {
   "sym": "Joker",
   "rank": 4,
   "parent": "Ringmaster",
   "child": "C1",
   "from": "Joker:Ringmaster:r3",
   "to": "Joker:C1:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現",
   "defLines": [],
   "conditionLine": null
  },
  {
   "sym": "Joker",
   "rank": 4,
   "parent": "Ringmaster",
   "child": "C2",
   "from": "Joker:Ringmaster:r3",
   "to": "Joker:C2:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現",
   "defLines": [],
   "conditionLine": null
  },
  {
   "sym": "Joker",
   "rank": 4,
   "parent": "Ringmaster",
   "child": "C3",
   "from": "Joker:Ringmaster:r3",
   "to": "Joker:C3:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現",
   "defLines": [],
   "conditionLine": null
  },
  {
   "sym": "Joker",
   "rank": 5,
   "parent": "C1",
   "child": "C1",
   "from": "Joker:C1:r4",
   "to": "Joker:C1:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現",
   "defLines": [],
   "conditionLine": null
  },
  {
   "sym": "Joker",
   "rank": 5,
   "parent": "C1",
   "child": "C2",
   "from": "Joker:C1:r4",
   "to": "Joker:C2:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現",
   "defLines": [],
   "conditionLine": null
  },
  {
   "sym": "Joker",
   "rank": 5,
   "parent": "C1",
   "child": "C3",
   "from": "Joker:C1:r4",
   "to": "Joker:C3:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現",
   "defLines": [],
   "conditionLine": null
  },
  {
   "sym": "Joker",
   "rank": 5,
   "parent": "C2",
   "child": "C1",
   "from": "Joker:C2:r4",
   "to": "Joker:C1:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現",
   "defLines": [],
   "conditionLine": null
  },
  {
   "sym": "Joker",
   "rank": 5,
   "parent": "C2",
   "child": "C2",
   "from": "Joker:C2:r4",
   "to": "Joker:C2:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現",
   "defLines": [],
   "conditionLine": null
  },
  {
   "sym": "Joker",
   "rank": 5,
   "parent": "C2",
   "child": "C3",
   "from": "Joker:C2:r4",
   "to": "Joker:C3:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現",
   "defLines": [],
   "conditionLine": null
  },
  {
   "sym": "Joker",
   "rank": 5,
   "parent": "C3",
   "child": "C1",
   "from": "Joker:C3:r4",
   "to": "Joker:C1:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現",
   "defLines": [],
   "conditionLine": null
  },
  {
   "sym": "Joker",
   "rank": 5,
   "parent": "C3",
   "child": "C2",
   "from": "Joker:C3:r4",
   "to": "Joker:C2:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現",
   "defLines": [],
   "conditionLine": null
  },
  {
   "sym": "Joker",
   "rank": 5,
   "parent": "C3",
   "child": "C3",
   "from": "Joker:C3:r4",
   "to": "Joker:C3:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現",
   "defLines": [],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 2,
   "parent": null,
   "child": "주술사",
   "from": null,
   "to": "M:주술사:r2",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "稀有度限 normal/advanced/rare/legendary；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L2016）",
   "defLines": [
    2016
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 2,
   "parent": null,
   "child": "치유술사",
   "from": null,
   "to": "M:치유술사:r2",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "稀有度限 normal/advanced/rare/legendary；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L2023）",
   "defLines": [
    2023
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 2,
   "parent": null,
   "child": "예지술사",
   "from": null,
   "to": "M:예지술사:r2",
   "kind": "standard",
   "grades": [
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "只有 prism 稀有度（或 jackpot5th 標記）才會出現；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L1901）",
   "defLines": [
    1901
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 2,
   "parent": null,
   "child": "리치",
   "from": null,
   "to": "M:리치:r2",
   "kind": "standard",
   "grades": [
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "只有 prism 稀有度（或 jackpot5th 標記）才會出現；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L1914）",
   "defLines": [
    1914
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 3,
   "parent": "리치",
   "child": "리치로드",
   "from": "M:리치:r2",
   "to": "M:리치로드:r3",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2036）",
   "defLines": [
    2036
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 3,
   "parent": "예지술사",
   "child": "예언자",
   "from": "M:예지술사:r2",
   "to": "M:예언자:r3",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2054）",
   "defLines": [
    2054
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 3,
   "parent": "주술사",
   "child": "대주술사",
   "from": "M:주술사:r2",
   "to": "M:대주술사:r3",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "稀有度限 normal/advanced/rare/legendary（promotion.lua 定義 L2144；判斷 L2137）",
   "defLines": [
    2144
   ],
   "conditionLine": 2137
  },
  {
   "sym": "M",
   "rank": 3,
   "parent": "주술사",
   "child": "예언자",
   "from": "M:주술사:r2",
   "to": "M:예언자:r3",
   "kind": "standard",
   "grades": [
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "只有 prism 稀有度（或 jackpot5th 標記）才會出現（promotion.lua 定義 L2054）",
   "defLines": [
    2054
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 3,
   "parent": "치유술사",
   "child": "대사제",
   "from": "M:치유술사:r2",
   "to": "M:대사제:r3",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "稀有度限 normal/advanced/rare/legendary（promotion.lua 定義 L2156；判斷 L2149）",
   "defLines": [
    2156
   ],
   "conditionLine": 2149
  },
  {
   "sym": "M",
   "rank": 3,
   "parent": "치유술사",
   "child": "예언자",
   "from": "M:치유술사:r2",
   "to": "M:예언자:r3",
   "kind": "standard",
   "grades": [
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "只有 prism 稀有度（或 jackpot5th 標記）才會出現（promotion.lua 定義 L2054）",
   "defLines": [
    2054
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 4,
   "parent": "대사제",
   "child": "현자 엘프",
   "from": "M:대사제:r3",
   "to": "M:현자 엘프:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2251,2292,2316）",
   "defLines": [
    2251,
    2292,
    2316
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 4,
   "parent": "대사제",
   "child": "암흑술사",
   "from": "M:대사제:r3",
   "to": "M:암흑술사:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2259,2300,2323）",
   "defLines": [
    2259,
    2300,
    2323
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 4,
   "parent": "대사제",
   "child": "본메이지",
   "from": "M:대사제:r3",
   "to": "M:본메이지:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2266,2307,2330）",
   "defLines": [
    2266,
    2307,
    2330
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 4,
   "parent": "대주술사",
   "child": "루나 현자",
   "from": "M:대주술사:r3",
   "to": "M:루나 현자:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2227；判斷 L2206）",
   "defLines": [
    2227
   ],
   "conditionLine": 2206
  },
  {
   "sym": "M",
   "rank": 4,
   "parent": "리치로드",
   "child": "현자 엘프",
   "from": "M:리치로드:r3",
   "to": "M:현자 엘프:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2251,2292,2316）",
   "defLines": [
    2251,
    2292,
    2316
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 4,
   "parent": "리치로드",
   "child": "암흑술사",
   "from": "M:리치로드:r3",
   "to": "M:암흑술사:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2259,2300,2323）",
   "defLines": [
    2259,
    2300,
    2323
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 4,
   "parent": "리치로드",
   "child": "본메이지",
   "from": "M:리치로드:r3",
   "to": "M:본메이지:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2266,2307,2330）",
   "defLines": [
    2266,
    2307,
    2330
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 4,
   "parent": "예언자",
   "child": "현자 엘프",
   "from": "M:예언자:r3",
   "to": "M:현자 엘프:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2251,2292,2316）",
   "defLines": [
    2251,
    2292,
    2316
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 4,
   "parent": "예언자",
   "child": "암흑술사",
   "from": "M:예언자:r3",
   "to": "M:암흑술사:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2259,2300,2323）",
   "defLines": [
    2259,
    2300,
    2323
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 4,
   "parent": "예언자",
   "child": "본메이지",
   "from": "M:예언자:r3",
   "to": "M:본메이지:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2266,2307,2330）",
   "defLines": [
    2266,
    2307,
    2330
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 5,
   "parent": "루나 현자",
   "child": "안틀러",
   "from": "M:루나 현자:r4",
   "to": "M:안틀러:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2240；判斷 L2233）",
   "defLines": [
    2240
   ],
   "conditionLine": 2233
  },
  {
   "sym": "M",
   "rank": 5,
   "parent": "본메이지",
   "child": "현자 엘프",
   "from": "M:본메이지:r4",
   "to": "M:현자 엘프:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2251,2292,2316）",
   "defLines": [
    2251,
    2292,
    2316
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 5,
   "parent": "본메이지",
   "child": "암흑술사",
   "from": "M:본메이지:r4",
   "to": "M:암흑술사:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2259,2300,2323）",
   "defLines": [
    2259,
    2300,
    2323
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 5,
   "parent": "본메이지",
   "child": "본메이지",
   "from": "M:본메이지:r4",
   "to": "M:본메이지:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2266,2307,2330）",
   "defLines": [
    2266,
    2307,
    2330
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 5,
   "parent": "암흑술사",
   "child": "현자 엘프",
   "from": "M:암흑술사:r4",
   "to": "M:현자 엘프:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2251,2292,2316）",
   "defLines": [
    2251,
    2292,
    2316
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 5,
   "parent": "암흑술사",
   "child": "암흑술사",
   "from": "M:암흑술사:r4",
   "to": "M:암흑술사:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2259,2300,2323）",
   "defLines": [
    2259,
    2300,
    2323
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 5,
   "parent": "암흑술사",
   "child": "본메이지",
   "from": "M:암흑술사:r4",
   "to": "M:본메이지:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2266,2307,2330）",
   "defLines": [
    2266,
    2307,
    2330
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 5,
   "parent": "현자 엘프",
   "child": "현자 엘프",
   "from": "M:현자 엘프:r4",
   "to": "M:현자 엘프:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2251,2292,2316）",
   "defLines": [
    2251,
    2292,
    2316
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 5,
   "parent": "현자 엘프",
   "child": "암흑술사",
   "from": "M:현자 엘프:r4",
   "to": "M:암흑술사:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2259,2300,2323）",
   "defLines": [
    2259,
    2300,
    2323
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 5,
   "parent": "현자 엘프",
   "child": "본메이지",
   "from": "M:현자 엘프:r4",
   "to": "M:본메이지:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L2266,2307,2330）",
   "defLines": [
    2266,
    2307,
    2330
   ],
   "conditionLine": null
  },
  {
   "sym": "S",
   "rank": 2,
   "parent": null,
   "child": "MiniSpearMan02",
   "from": null,
   "to": "S:MiniSpearMan02:r2",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "稀有度限 normal/advanced/rare/legendary；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L1665）",
   "defLines": [
    1665
   ],
   "conditionLine": null
  },
  {
   "sym": "S",
   "rank": 2,
   "parent": null,
   "child": "약탈자",
   "from": null,
   "to": "S:약탈자:r2",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "稀有度限 normal/advanced/rare/legendary；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L1672）",
   "defLines": [
    1672
   ],
   "conditionLine": null
  },
  {
   "sym": "S",
   "rank": 2,
   "parent": null,
   "child": "천공병",
   "from": null,
   "to": "S:천공병:r2",
   "kind": "standard",
   "grades": [
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "只有 prism 稀有度（或 jackpot5th 標記）才會出現；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L1536,1599）",
   "defLines": [
    1536,
    1599
   ],
   "conditionLine": null
  },
  {
   "sym": "S",
   "rank": 2,
   "parent": null,
   "child": "창술사",
   "from": null,
   "to": "S:창술사:r2",
   "kind": "standard",
   "grades": [
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "只有 prism 稀有度（或 jackpot5th 標記）才會出現；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L1549,1612）",
   "defLines": [
    1549,
    1612
   ],
   "conditionLine": null
  },
  {
   "sym": "S",
   "rank": 3,
   "parent": "MiniSpearMan02",
   "child": "MiniSpearMan03",
   "from": "S:MiniSpearMan02:r2",
   "to": "S:MiniSpearMan03:r3",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1840,1878；判斷 L1803）",
   "defLines": [
    1840,
    1878
   ],
   "conditionLine": 1803
  },
  {
   "sym": "S",
   "rank": 3,
   "parent": "약탈자",
   "child": "무법자",
   "from": "S:약탈자:r2",
   "to": "S:무법자:r3",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1852；判斷 L1804）",
   "defLines": [
    1852
   ],
   "conditionLine": 1804
  },
  {
   "sym": "S",
   "rank": 3,
   "parent": "창술사",
   "child": "랜스마스터",
   "from": "S:창술사:r2",
   "to": "S:랜스마스터:r3",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1735）",
   "defLines": [
    1735
   ],
   "conditionLine": null
  },
  {
   "sym": "S",
   "rank": 3,
   "parent": "천공병",
   "child": "발키리",
   "from": "S:천공병:r2",
   "to": "S:발키리:r3",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1717）",
   "defLines": [
    1717
   ],
   "conditionLine": null
  },
  {
   "sym": "S",
   "rank": 4,
   "parent": "MiniSpearMan03",
   "child": "크러셔",
   "from": "S:MiniSpearMan03:r3",
   "to": "S:크러셔:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1688；判斷 L1678）",
   "defLines": [
    1688
   ],
   "conditionLine": 1678
  },
  {
   "sym": "S",
   "rank": 4,
   "parent": "랜스마스터",
   "child": "MiniSpearMan03",
   "from": "S:랜스마스터:r3",
   "to": "S:MiniSpearMan03:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1840,1878）",
   "defLines": [
    1840,
    1878
   ],
   "conditionLine": null
  },
  {
   "sym": "S",
   "rank": 4,
   "parent": "랜스마스터",
   "child": "허스칼",
   "from": "S:랜스마스터:r3",
   "to": "S:허스칼:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1885）",
   "defLines": [
    1885
   ],
   "conditionLine": null
  },
  {
   "sym": "S",
   "rank": 4,
   "parent": "무법자",
   "child": "MiniSpearMan03",
   "from": "S:무법자:r3",
   "to": "S:MiniSpearMan03:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1840,1878）",
   "defLines": [
    1840,
    1878
   ],
   "conditionLine": null
  },
  {
   "sym": "S",
   "rank": 4,
   "parent": "무법자",
   "child": "허스칼",
   "from": "S:무법자:r3",
   "to": "S:허스칼:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1885）",
   "defLines": [
    1885
   ],
   "conditionLine": null
  },
  {
   "sym": "S",
   "rank": 4,
   "parent": "발키리",
   "child": "MiniSpearMan03",
   "from": "S:발키리:r3",
   "to": "S:MiniSpearMan03:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1840,1878）",
   "defLines": [
    1840,
    1878
   ],
   "conditionLine": null
  },
  {
   "sym": "S",
   "rank": 4,
   "parent": "발키리",
   "child": "허스칼",
   "from": "S:발키리:r3",
   "to": "S:허스칼:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1885）",
   "defLines": [
    1885
   ],
   "conditionLine": null
  },
  {
   "sym": "S",
   "rank": 5,
   "parent": "MiniSpearMan03",
   "child": "MiniSpearMan03",
   "from": "S:MiniSpearMan03:r4",
   "to": "S:MiniSpearMan03:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1840,1878；判斷 L1678）",
   "defLines": [
    1840,
    1878
   ],
   "conditionLine": 1678
  },
  {
   "sym": "S",
   "rank": 5,
   "parent": "MiniSpearMan03",
   "child": "허스칼",
   "from": "S:MiniSpearMan03:r4",
   "to": "S:허스칼:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1885；判斷 L1678）",
   "defLines": [
    1885
   ],
   "conditionLine": 1678
  },
  {
   "sym": "S",
   "rank": 5,
   "parent": "크러셔",
   "child": "젠",
   "from": "S:크러셔:r4",
   "to": "S:젠:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1516；判斷 L1511）",
   "defLines": [
    1516
   ],
   "conditionLine": 1511
  },
  {
   "sym": "S",
   "rank": 5,
   "parent": "허스칼",
   "child": "MiniSpearMan03",
   "from": "S:허스칼:r4",
   "to": "S:MiniSpearMan03:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1840,1878；判斷 L1679）",
   "defLines": [
    1840,
    1878
   ],
   "conditionLine": 1679
  },
  {
   "sym": "S",
   "rank": 5,
   "parent": "허스칼",
   "child": "허스칼",
   "from": "S:허스칼:r4",
   "to": "S:허스칼:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L1885；判斷 L1679）",
   "defLines": [
    1885
   ],
   "conditionLine": 1679
  },
  {
   "sym": "W",
   "rank": 2,
   "parent": null,
   "child": "MiniSwordMan02",
   "from": null,
   "to": "W:MiniSwordMan02:r2",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "稀有度限 normal/advanced/rare/legendary；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L483）",
   "defLines": [
    483
   ],
   "conditionLine": null
  },
  {
   "sym": "W",
   "rank": 2,
   "parent": null,
   "child": "해적",
   "from": null,
   "to": "W:해적:r2",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "稀有度限 normal/advanced/rare/legendary；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L496）",
   "defLines": [
    496
   ],
   "conditionLine": null
  },
  {
   "sym": "W",
   "rank": 2,
   "parent": null,
   "child": "듀라한",
   "from": null,
   "to": "W:듀라한:r2",
   "kind": "standard",
   "grades": [
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "只有 prism 稀有度（或 jackpot5th 標記）才會出現；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L452）",
   "defLines": [
    452
   ],
   "conditionLine": null
  },
  {
   "sym": "W",
   "rank": 2,
   "parent": null,
   "child": "백기사",
   "from": null,
   "to": "W:백기사:r2",
   "kind": "standard",
   "grades": [
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "只有 prism 稀有度（或 jackpot5th 標記）才會出現；從基礎單位首次升階（rank 1→2）（promotion.lua 定義 L465）",
   "defLines": [
    465
   ],
   "conditionLine": null
  },
  {
   "sym": "W",
   "rank": 3,
   "parent": "MiniSwordMan02",
   "child": "MiniSwordMan03",
   "from": "W:MiniSwordMan02:r2",
   "to": "W:MiniSwordMan03:r3",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L563,671；判斷 L556）",
   "defLines": [
    563,
    671
   ],
   "conditionLine": 556
  },
  {
   "sym": "W",
   "rank": 3,
   "parent": "듀라한",
   "child": "팬텀",
   "from": "W:듀라한:r2",
   "to": "W:팬텀:r3",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L527）",
   "defLines": [
    527
   ],
   "conditionLine": null
  },
  {
   "sym": "W",
   "rank": 3,
   "parent": "백기사",
   "child": "성배기사",
   "from": "W:백기사:r2",
   "to": "W:성배기사:r3",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L543）",
   "defLines": [
    543
   ],
   "conditionLine": null
  },
  {
   "sym": "W",
   "rank": 3,
   "parent": "해적",
   "child": "해적왕",
   "from": "W:해적:r2",
   "to": "W:해적왕:r3",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L575；判斷 L568）",
   "defLines": [
    575
   ],
   "conditionLine": 568
  },
  {
   "sym": "W",
   "rank": 4,
   "parent": "MiniSwordMan03",
   "child": "플레어",
   "from": "W:MiniSwordMan03:r3",
   "to": "W:플레어:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L364,623；判斷 L354）",
   "defLines": [
    364,
    623
   ],
   "conditionLine": 354
  },
  {
   "sym": "W",
   "rank": 4,
   "parent": "성배기사",
   "child": "MiniSwordMan03",
   "from": "W:성배기사:r3",
   "to": "W:MiniSwordMan03:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L563,671）",
   "defLines": [
    563,
    671
   ],
   "conditionLine": null
  },
  {
   "sym": "W",
   "rank": 4,
   "parent": "성배기사",
   "child": "암기사",
   "from": "W:성배기사:r3",
   "to": "W:암기사:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L679）",
   "defLines": [
    679
   ],
   "conditionLine": null
  },
  {
   "sym": "W",
   "rank": 4,
   "parent": "성배기사",
   "child": "성기사",
   "from": "W:성배기사:r3",
   "to": "W:성기사:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L483,686）",
   "defLines": [
    483,
    686
   ],
   "conditionLine": null
  },
  {
   "sym": "W",
   "rank": 4,
   "parent": "팬텀",
   "child": "MiniSwordMan03",
   "from": "W:팬텀:r3",
   "to": "W:MiniSwordMan03:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L563,671）",
   "defLines": [
    563,
    671
   ],
   "conditionLine": null
  },
  {
   "sym": "W",
   "rank": 4,
   "parent": "팬텀",
   "child": "암기사",
   "from": "W:팬텀:r3",
   "to": "W:암기사:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L679）",
   "defLines": [
    679
   ],
   "conditionLine": null
  },
  {
   "sym": "W",
   "rank": 4,
   "parent": "팬텀",
   "child": "성기사",
   "from": "W:팬텀:r3",
   "to": "W:성기사:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L483,686）",
   "defLines": [
    483,
    686
   ],
   "conditionLine": null
  },
  {
   "sym": "W",
   "rank": 4,
   "parent": "해적왕",
   "child": "MiniSwordMan03",
   "from": "W:해적왕:r3",
   "to": "W:MiniSwordMan03:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L563,671）",
   "defLines": [
    563,
    671
   ],
   "conditionLine": null
  },
  {
   "sym": "W",
   "rank": 4,
   "parent": "해적왕",
   "child": "암기사",
   "from": "W:해적왕:r3",
   "to": "W:암기사:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L679）",
   "defLines": [
    679
   ],
   "conditionLine": null
  },
  {
   "sym": "W",
   "rank": 4,
   "parent": "해적왕",
   "child": "성기사",
   "from": "W:해적왕:r3",
   "to": "W:성기사:r4",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L483,686）",
   "defLines": [
    483,
    686
   ],
   "conditionLine": null
  },
  {
   "sym": "W",
   "rank": 5,
   "parent": "MiniSwordMan03",
   "child": "MiniSwordMan03",
   "from": "W:MiniSwordMan03:r4",
   "to": "W:MiniSwordMan03:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L563,671；判斷 L354）",
   "defLines": [
    563,
    671
   ],
   "conditionLine": 354
  },
  {
   "sym": "W",
   "rank": 5,
   "parent": "MiniSwordMan03",
   "child": "암기사",
   "from": "W:MiniSwordMan03:r4",
   "to": "W:암기사:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L679；判斷 L354）",
   "defLines": [
    679
   ],
   "conditionLine": 354
  },
  {
   "sym": "W",
   "rank": 5,
   "parent": "MiniSwordMan03",
   "child": "성기사",
   "from": "W:MiniSwordMan03:r4",
   "to": "W:성기사:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L483,686；判斷 L354）",
   "defLines": [
    483,
    686
   ],
   "conditionLine": 354
  },
  {
   "sym": "W",
   "rank": 5,
   "parent": "성기사",
   "child": "템플러",
   "from": "W:성기사:r4",
   "to": "W:템플러:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L611；判斷 L604）",
   "defLines": [
    611
   ],
   "conditionLine": 604
  },
  {
   "sym": "W",
   "rank": 5,
   "parent": "암기사",
   "child": "MiniSwordMan03",
   "from": "W:암기사:r4",
   "to": "W:MiniSwordMan03:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L563,671）",
   "defLines": [
    563,
    671
   ],
   "conditionLine": null
  },
  {
   "sym": "W",
   "rank": 5,
   "parent": "암기사",
   "child": "암기사",
   "from": "W:암기사:r4",
   "to": "W:암기사:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L679）",
   "defLines": [
    679
   ],
   "conditionLine": null
  },
  {
   "sym": "W",
   "rank": 5,
   "parent": "암기사",
   "child": "성기사",
   "from": "W:암기사:r4",
   "to": "W:성기사:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L483,686）",
   "defLines": [
    483,
    686
   ],
   "conditionLine": null
  },
  {
   "sym": "W",
   "rank": 5,
   "parent": "플레어",
   "child": "MiniSwordMan03",
   "from": "W:플레어:r4",
   "to": "W:MiniSwordMan03:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L563,671）",
   "defLines": [
    563,
    671
   ],
   "conditionLine": null
  },
  {
   "sym": "W",
   "rank": 5,
   "parent": "플레어",
   "child": "암기사",
   "from": "W:플레어:r4",
   "to": "W:암기사:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L679）",
   "defLines": [
    679
   ],
   "conditionLine": null
  },
  {
   "sym": "W",
   "rank": 5,
   "parent": "플레어",
   "child": "성기사",
   "from": "W:플레어:r4",
   "to": "W:성기사:r5",
   "kind": "standard",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現（promotion.lua 定義 L483,686）",
   "defLines": [
    483,
    686
   ],
   "conditionLine": null
  },
  {
   "sym": "A",
   "rank": 3,
   "parent": null,
   "child": "MiniArcherMan03",
   "from": null,
   "to": "A:MiniArcherMan03:r3",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 3 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L930,1022）",
   "defLines": [
    930,
    1022
   ],
   "conditionLine": null
  },
  {
   "sym": "A",
   "rank": 3,
   "parent": null,
   "child": "명사수",
   "from": null,
   "to": "A:명사수:r3",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 3 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L942,1029）",
   "defLines": [
    942,
    1029
   ],
   "conditionLine": null
  },
  {
   "sym": "A",
   "rank": 4,
   "parent": null,
   "child": "MiniArcherMan03",
   "from": null,
   "to": "A:MiniArcherMan03:r4",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 4 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L930,1022）",
   "defLines": [
    930,
    1022
   ],
   "conditionLine": null
  },
  {
   "sym": "A",
   "rank": 4,
   "parent": null,
   "child": "명사수",
   "from": null,
   "to": "A:명사수:r4",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 4 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L942,1029）",
   "defLines": [
    942,
    1029
   ],
   "conditionLine": null
  },
  {
   "sym": "A",
   "rank": 5,
   "parent": null,
   "child": "MiniArcherMan03",
   "from": null,
   "to": "A:MiniArcherMan03:r5",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 5 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L930,1022）",
   "defLines": [
    930,
    1022
   ],
   "conditionLine": null
  },
  {
   "sym": "A",
   "rank": 5,
   "parent": null,
   "child": "명사수",
   "from": null,
   "to": "A:명사수:r5",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 5 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L942,1029）",
   "defLines": [
    942,
    1029
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 3,
   "parent": null,
   "child": "검황",
   "from": null,
   "to": "D:검황:r3",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "稀有度限 normal/advanced/rare/legendary；單位還沒有任何職業名就直接要選 rank 3 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L1359,1415,1482）",
   "defLines": [
    1359,
    1415,
    1482
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 3,
   "parent": null,
   "child": "암흑장군",
   "from": null,
   "to": "D:암흑장군:r3",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "稀有度限 normal/advanced/rare/legendary；單位還沒有任何職業名就直接要選 rank 3 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L1489）",
   "defLines": [
    1489
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 3,
   "parent": null,
   "child": "우드워든",
   "from": null,
   "to": "D:우드워든:r3",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "稀有度限 normal/advanced/rare/legendary；單位還沒有任何職業名就直接要選 rank 3 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L1496）",
   "defLines": [
    1496
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 3,
   "parent": null,
   "child": "도미니온",
   "from": null,
   "to": "D:도미니온:r3",
   "kind": "no-subclass-direct",
   "grades": [
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "只有 prism 稀有度（或 jackpot5th 標記）才會出現；單位還沒有任何職業名就直接要選 rank 3 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L1221）",
   "defLines": [
    1221
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 4,
   "parent": null,
   "child": "검황",
   "from": null,
   "to": "D:검황:r4",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 4 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L1359,1415,1482）",
   "defLines": [
    1359,
    1415,
    1482
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 4,
   "parent": null,
   "child": "암흑장군",
   "from": null,
   "to": "D:암흑장군:r4",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 4 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L1489）",
   "defLines": [
    1489
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 4,
   "parent": null,
   "child": "우드워든",
   "from": null,
   "to": "D:우드워든:r4",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 4 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L1496）",
   "defLines": [
    1496
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 5,
   "parent": null,
   "child": "검황",
   "from": null,
   "to": "D:검황:r5",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 5 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L1359,1415,1482）",
   "defLines": [
    1359,
    1415,
    1482
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 5,
   "parent": null,
   "child": "암흑장군",
   "from": null,
   "to": "D:암흑장군:r5",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 5 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L1489）",
   "defLines": [
    1489
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 5,
   "parent": null,
   "child": "우드워든",
   "from": null,
   "to": "D:우드워든:r5",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 5 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L1496）",
   "defLines": [
    1496
   ],
   "conditionLine": null
  },
  {
   "sym": "H",
   "rank": 3,
   "parent": null,
   "child": "MiniHorseMan03",
   "from": null,
   "to": "H:MiniHorseMan03:r3",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "稀有度限 normal/advanced/rare/legendary；單位還沒有任何職業名就直接要選 rank 3 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L2649,2759）",
   "defLines": [
    2649,
    2759
   ],
   "conditionLine": null
  },
  {
   "sym": "H",
   "rank": 3,
   "parent": null,
   "child": "워베어",
   "from": null,
   "to": "H:워베어:r3",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "稀有度限 normal/advanced/rare/legendary；單位還沒有任何職業名就直接要選 rank 3 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L2764）",
   "defLines": [
    2764
   ],
   "conditionLine": null
  },
  {
   "sym": "H",
   "rank": 3,
   "parent": null,
   "child": "숲의 심장",
   "from": null,
   "to": "H:숲의 심장:r3",
   "kind": "no-subclass-direct",
   "grades": [
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "只有 prism 稀有度（或 jackpot5th 標記）才會出現；單位還沒有任何職業名就直接要選 rank 3 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L2556）",
   "defLines": [
    2556
   ],
   "conditionLine": null
  },
  {
   "sym": "H",
   "rank": 4,
   "parent": null,
   "child": "MiniHorseMan03",
   "from": null,
   "to": "H:MiniHorseMan03:r4",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 4 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L2649,2759）",
   "defLines": [
    2649,
    2759
   ],
   "conditionLine": null
  },
  {
   "sym": "H",
   "rank": 4,
   "parent": null,
   "child": "워베어",
   "from": null,
   "to": "H:워베어:r4",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 4 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L2764）",
   "defLines": [
    2764
   ],
   "conditionLine": null
  },
  {
   "sym": "H",
   "rank": 5,
   "parent": null,
   "child": "MiniHorseMan03",
   "from": null,
   "to": "H:MiniHorseMan03:r5",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 5 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L2649,2759）",
   "defLines": [
    2649,
    2759
   ],
   "conditionLine": null
  },
  {
   "sym": "H",
   "rank": 5,
   "parent": null,
   "child": "워베어",
   "from": null,
   "to": "H:워베어:r5",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 5 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L2764）",
   "defLines": [
    2764
   ],
   "conditionLine": null
  },
  {
   "sym": "Joker",
   "rank": 4,
   "parent": null,
   "child": "C1",
   "from": null,
   "to": "Joker:C1:r4",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 4 時的預設選項（遊戲是否真的會走到未確認）",
   "defLines": [],
   "conditionLine": null
  },
  {
   "sym": "Joker",
   "rank": 4,
   "parent": null,
   "child": "C2",
   "from": null,
   "to": "Joker:C2:r4",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 4 時的預設選項（遊戲是否真的會走到未確認）",
   "defLines": [],
   "conditionLine": null
  },
  {
   "sym": "Joker",
   "rank": 4,
   "parent": null,
   "child": "C3",
   "from": null,
   "to": "Joker:C3:r4",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 4 時的預設選項（遊戲是否真的會走到未確認）",
   "defLines": [],
   "conditionLine": null
  },
  {
   "sym": "Joker",
   "rank": 5,
   "parent": null,
   "child": "C1",
   "from": null,
   "to": "Joker:C1:r5",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 5 時的預設選項（遊戲是否真的會走到未確認）",
   "defLines": [],
   "conditionLine": null
  },
  {
   "sym": "Joker",
   "rank": 5,
   "parent": null,
   "child": "C2",
   "from": null,
   "to": "Joker:C2:r5",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 5 時的預設選項（遊戲是否真的會走到未確認）",
   "defLines": [],
   "conditionLine": null
  },
  {
   "sym": "Joker",
   "rank": 5,
   "parent": null,
   "child": "C3",
   "from": null,
   "to": "Joker:C3:r5",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 5 時的預設選項（遊戲是否真的會走到未確認）",
   "defLines": [],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 3,
   "parent": null,
   "child": "현자 엘프",
   "from": null,
   "to": "M:현자 엘프:r3",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "稀有度限 normal/advanced/rare/legendary；單位還沒有任何職業名就直接要選 rank 3 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L2251,2292,2316）",
   "defLines": [
    2251,
    2292,
    2316
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 3,
   "parent": null,
   "child": "암흑술사",
   "from": null,
   "to": "M:암흑술사:r3",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "稀有度限 normal/advanced/rare/legendary；單位還沒有任何職業名就直接要選 rank 3 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L2259,2300,2323）",
   "defLines": [
    2259,
    2300,
    2323
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 3,
   "parent": null,
   "child": "본메이지",
   "from": null,
   "to": "M:본메이지:r3",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "稀有度限 normal/advanced/rare/legendary；單位還沒有任何職業名就直接要選 rank 3 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L2266,2307,2330）",
   "defLines": [
    2266,
    2307,
    2330
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 3,
   "parent": null,
   "child": "예언자",
   "from": null,
   "to": "M:예언자:r3",
   "kind": "no-subclass-direct",
   "grades": [
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "只有 prism 稀有度（或 jackpot5th 標記）才會出現；單位還沒有任何職業名就直接要選 rank 3 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L2054）",
   "defLines": [
    2054
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 4,
   "parent": null,
   "child": "현자 엘프",
   "from": null,
   "to": "M:현자 엘프:r4",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 4 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L2251,2292,2316）",
   "defLines": [
    2251,
    2292,
    2316
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 4,
   "parent": null,
   "child": "암흑술사",
   "from": null,
   "to": "M:암흑술사:r4",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 4 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L2259,2300,2323）",
   "defLines": [
    2259,
    2300,
    2323
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 4,
   "parent": null,
   "child": "본메이지",
   "from": null,
   "to": "M:본메이지:r4",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 4 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L2266,2307,2330）",
   "defLines": [
    2266,
    2307,
    2330
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 5,
   "parent": null,
   "child": "현자 엘프",
   "from": null,
   "to": "M:현자 엘프:r5",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 5 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L2251,2292,2316）",
   "defLines": [
    2251,
    2292,
    2316
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 5,
   "parent": null,
   "child": "암흑술사",
   "from": null,
   "to": "M:암흑술사:r5",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 5 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L2259,2300,2323）",
   "defLines": [
    2259,
    2300,
    2323
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 5,
   "parent": null,
   "child": "본메이지",
   "from": null,
   "to": "M:본메이지:r5",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 5 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L2266,2307,2330）",
   "defLines": [
    2266,
    2307,
    2330
   ],
   "conditionLine": null
  },
  {
   "sym": "S",
   "rank": 3,
   "parent": null,
   "child": "MiniSpearMan03",
   "from": null,
   "to": "S:MiniSpearMan03:r3",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 3 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L1840,1878）",
   "defLines": [
    1840,
    1878
   ],
   "conditionLine": null
  },
  {
   "sym": "S",
   "rank": 3,
   "parent": null,
   "child": "허스칼",
   "from": null,
   "to": "S:허스칼:r3",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 3 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L1885）",
   "defLines": [
    1885
   ],
   "conditionLine": null
  },
  {
   "sym": "S",
   "rank": 4,
   "parent": null,
   "child": "MiniSpearMan03",
   "from": null,
   "to": "S:MiniSpearMan03:r4",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 4 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L1840,1878）",
   "defLines": [
    1840,
    1878
   ],
   "conditionLine": null
  },
  {
   "sym": "S",
   "rank": 4,
   "parent": null,
   "child": "허스칼",
   "from": null,
   "to": "S:허스칼:r4",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 4 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L1885）",
   "defLines": [
    1885
   ],
   "conditionLine": null
  },
  {
   "sym": "S",
   "rank": 5,
   "parent": null,
   "child": "MiniSpearMan03",
   "from": null,
   "to": "S:MiniSpearMan03:r5",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 5 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L1840,1878）",
   "defLines": [
    1840,
    1878
   ],
   "conditionLine": null
  },
  {
   "sym": "S",
   "rank": 5,
   "parent": null,
   "child": "허스칼",
   "from": null,
   "to": "S:허스칼:r5",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 5 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L1885）",
   "defLines": [
    1885
   ],
   "conditionLine": null
  },
  {
   "sym": "W",
   "rank": 3,
   "parent": null,
   "child": "MiniSwordMan03",
   "from": null,
   "to": "W:MiniSwordMan03:r3",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 3 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L563,671）",
   "defLines": [
    563,
    671
   ],
   "conditionLine": null
  },
  {
   "sym": "W",
   "rank": 3,
   "parent": null,
   "child": "암기사",
   "from": null,
   "to": "W:암기사:r3",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 3 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L679）",
   "defLines": [
    679
   ],
   "conditionLine": null
  },
  {
   "sym": "W",
   "rank": 3,
   "parent": null,
   "child": "성기사",
   "from": null,
   "to": "W:성기사:r3",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 3 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L483,686）",
   "defLines": [
    483,
    686
   ],
   "conditionLine": null
  },
  {
   "sym": "W",
   "rank": 4,
   "parent": null,
   "child": "MiniSwordMan03",
   "from": null,
   "to": "W:MiniSwordMan03:r4",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 4 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L563,671）",
   "defLines": [
    563,
    671
   ],
   "conditionLine": null
  },
  {
   "sym": "W",
   "rank": 4,
   "parent": null,
   "child": "암기사",
   "from": null,
   "to": "W:암기사:r4",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 4 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L679）",
   "defLines": [
    679
   ],
   "conditionLine": null
  },
  {
   "sym": "W",
   "rank": 4,
   "parent": null,
   "child": "성기사",
   "from": null,
   "to": "W:성기사:r4",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 4 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L483,686）",
   "defLines": [
    483,
    686
   ],
   "conditionLine": null
  },
  {
   "sym": "W",
   "rank": 5,
   "parent": null,
   "child": "MiniSwordMan03",
   "from": null,
   "to": "W:MiniSwordMan03:r5",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 5 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L563,671）",
   "defLines": [
    563,
    671
   ],
   "conditionLine": null
  },
  {
   "sym": "W",
   "rank": 5,
   "parent": null,
   "child": "암기사",
   "from": null,
   "to": "W:암기사:r5",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 5 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L679）",
   "defLines": [
    679
   ],
   "conditionLine": null
  },
  {
   "sym": "W",
   "rank": 5,
   "parent": null,
   "child": "성기사",
   "from": null,
   "to": "W:성기사:r5",
   "kind": "no-subclass-direct",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；單位還沒有任何職業名就直接要選 rank 5 時的預設選項（遊戲是否真的會走到未確認）（promotion.lua 定義 L483,686）",
   "defLines": [
    483,
    686
   ],
   "conditionLine": null
  },
  {
   "sym": "A",
   "rank": 2,
   "parent": "명궁",
   "child": "큐피드",
   "from": "A:명궁:r1",
   "to": "A:큐피드:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 명궁 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L707）",
   "defLines": [
    707
   ],
   "conditionLine": null
  },
  {
   "sym": "A",
   "rank": 2,
   "parent": "명궁",
   "child": "은빛사수",
   "from": "A:명궁:r1",
   "to": "A:은빛사수:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 명궁 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L720）",
   "defLines": [
    720
   ],
   "conditionLine": null
  },
  {
   "sym": "A",
   "rank": 2,
   "parent": "정찰병",
   "child": "엘프 궁수",
   "from": "A:정찰병:r1",
   "to": "A:엘프 궁수:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 정찰병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L790；判斷 L783）",
   "defLines": [
    790
   ],
   "conditionLine": 783
  },
  {
   "sym": "A",
   "rank": 2,
   "parent": "정찰병",
   "child": "레인저",
   "from": "A:정찰병:r1",
   "to": "A:레인저:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 정찰병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L797；判斷 L783）",
   "defLines": [
    797
   ],
   "conditionLine": 783
  },
  {
   "sym": "A",
   "rank": 2,
   "parent": "총포수",
   "child": "화포수",
   "from": "A:총포수:r1",
   "to": "A:화포수:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 총포수 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L773；判斷 L768）",
   "defLines": [
    773
   ],
   "conditionLine": 768
  },
  {
   "sym": "A",
   "rank": 2,
   "parent": "총포수",
   "child": "척탄병",
   "from": "A:총포수:r1",
   "to": "A:척탄병:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 총포수 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L778；判斷 L768）",
   "defLines": [
    778
   ],
   "conditionLine": 768
  },
  {
   "sym": "A",
   "rank": 2,
   "parent": "해골궁수",
   "child": "암흑사수",
   "from": "A:해골궁수:r1",
   "to": "A:암흑사수:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 해골궁수 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L744）",
   "defLines": [
    744
   ],
   "conditionLine": null
  },
  {
   "sym": "A",
   "rank": 2,
   "parent": "해골궁수",
   "child": "환영사수",
   "from": "A:해골궁수:r1",
   "to": "A:환영사수:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 해골궁수 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L756）",
   "defLines": [
    756
   ],
   "conditionLine": null
  },
  {
   "sym": "A",
   "rank": 3,
   "parent": "암흑사수",
   "child": "레이븐",
   "from": "A:암흑사수:r2",
   "to": "A:레이븐:r3",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [
    "Dark Archer",
    "암흑사수 (Dark Archer)"
   ],
   "condition": "任何稀有度都會出現；只有「已有 암흑사수 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L872）",
   "defLines": [
    872
   ],
   "conditionLine": null
  },
  {
   "sym": "A",
   "rank": 3,
   "parent": "환영사수",
   "child": "미라지",
   "from": "A:환영사수:r2",
   "to": "A:미라지:r3",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [
    "Illusion Archer",
    "환영사수 (Illusion Archer)"
   ],
   "condition": "任何稀有度都會出現；只有「已有 환영사수 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L887）",
   "defLines": [
    887
   ],
   "conditionLine": null
  },
  {
   "sym": "A",
   "rank": 3,
   "parent": "레인저",
   "child": "데드아이",
   "from": "A:레인저:r2",
   "to": "A:데드아이:r3",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 레인저 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L962；判斷 L921）",
   "defLines": [
    962
   ],
   "conditionLine": 921
  },
  {
   "sym": "A",
   "rank": 3,
   "parent": "엘프궁수",
   "child": "하이 엘프",
   "from": "A:엘프궁수:r2",
   "to": "A:하이 엘프:r3",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [
    "엘프 궁수"
   ],
   "condition": "任何稀有度都會出現；只有「已有 엘프궁수 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L952；判斷 L920）",
   "defLines": [
    952
   ],
   "conditionLine": 920
  },
  {
   "sym": "A",
   "rank": 3,
   "parent": "척탄병",
   "child": "폭파대장",
   "from": "A:척탄병:r2",
   "to": "A:폭파대장:r3",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 척탄병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L914；判斷 L909）",
   "defLines": [
    914
   ],
   "conditionLine": 909
  },
  {
   "sym": "A",
   "rank": 3,
   "parent": "화포수",
   "child": "캐노니어",
   "from": "A:화포수:r2",
   "to": "A:캐노니어:r3",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 화포수 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L904；判斷 L899）",
   "defLines": [
    904
   ],
   "conditionLine": 899
  },
  {
   "sym": "A",
   "rank": 4,
   "parent": "순찰자",
   "child": "로빈 후드",
   "from": "A:순찰자:r2",
   "to": "A:로빈 후드:r4",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 순찰자 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L979；判斷 L970）",
   "defLines": [
    979
   ],
   "conditionLine": 970
  },
  {
   "sym": "D",
   "rank": 2,
   "parent": "드루이드",
   "child": "황제",
   "from": "D:드루이드:r1",
   "to": "D:황제:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "稀有度限 normal/rare/legendary/prism/jackpot5th；只有「已有 드루이드 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1187；判斷 L1162）",
   "defLines": [
    1187
   ],
   "conditionLine": 1162
  },
  {
   "sym": "D",
   "rank": 2,
   "parent": "드루이드",
   "child": "베테랑",
   "from": "D:드루이드:r1",
   "to": "D:베테랑:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "稀有度限 normal/rare/legendary/prism/jackpot5th；只有「已有 드루이드 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1194；判斷 L1162）",
   "defLines": [
    1194
   ],
   "conditionLine": 1162
  },
  {
   "sym": "D",
   "rank": 2,
   "parent": "드루이드",
   "child": "엔트",
   "from": "D:드루이드:r1",
   "to": "D:엔트:r2",
   "kind": "special-parent",
   "grades": [
    "advanced"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "稀有度限 advanced；只有「已有 드루이드 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1169；判斷 L1162）",
   "defLines": [
    1169
   ],
   "conditionLine": 1162
  },
  {
   "sym": "D",
   "rank": 2,
   "parent": "드루이드",
   "child": "빅터",
   "from": "D:드루이드:r1",
   "to": "D:빅터:r2",
   "kind": "special-parent",
   "grades": [
    "advanced"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "稀有度限 advanced；只有「已有 드루이드 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1176；判斷 L1162）",
   "defLines": [
    1176
   ],
   "conditionLine": 1162
  },
  {
   "sym": "D",
   "rank": 2,
   "parent": "셰이드",
   "child": "LegendarySpecter",
   "from": "D:셰이드:r1",
   "to": "D:LegendarySpecter:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 셰이드 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1102）",
   "defLines": [
    1102
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 2,
   "parent": "셰이드",
   "child": "리퍼",
   "from": "D:셰이드:r1",
   "to": "D:리퍼:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 셰이드 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1115）",
   "defLines": [
    1115
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 2,
   "parent": "수호자",
   "child": "RarePaladin",
   "from": "D:수호자:r1",
   "to": "D:RarePaladin:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 수호자 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1132）",
   "defLines": [
    1132
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 2,
   "parent": "수호자",
   "child": "서리칼날",
   "from": "D:수호자:r1",
   "to": "D:서리칼날:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 수호자 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1144）",
   "defLines": [
    1144
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 2,
   "parent": "천사",
   "child": "대천사",
   "from": "D:천사:r1",
   "to": "D:대천사:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 천사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1064）",
   "defLines": [
    1064
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 2,
   "parent": "천사",
   "child": "타락천사",
   "from": "D:천사:r1",
   "to": "D:타락천사:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 천사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1077）",
   "defLines": [
    1077
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 3,
   "parent": "서리칼날",
   "child": "검황",
   "from": "D:서리칼날:r2",
   "to": "D:검황:r3",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [
    "Frostblade",
    "서리칼날 (Frostblade)"
   ],
   "condition": "稀有度限 normal/advanced/legendary/prism/jackpot5th；只有「已有 서리칼날 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1359,1415,1482）",
   "defLines": [
    1359,
    1415,
    1482
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 3,
   "parent": "서리칼날",
   "child": "암흑장군",
   "from": "D:서리칼날:r2",
   "to": "D:암흑장군:r3",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [
    "Frostblade",
    "서리칼날 (Frostblade)"
   ],
   "condition": "稀有度限 normal/advanced/legendary/prism/jackpot5th；只有「已有 서리칼날 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1489）",
   "defLines": [
    1489
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 3,
   "parent": "서리칼날",
   "child": "우드워든",
   "from": "D:서리칼날:r2",
   "to": "D:우드워든:r3",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [
    "Frostblade",
    "서리칼날 (Frostblade)"
   ],
   "condition": "稀有度限 normal/advanced/legendary/prism/jackpot5th；只有「已有 서리칼날 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1496）",
   "defLines": [
    1496
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 3,
   "parent": "서리칼날",
   "child": "빙결여제",
   "from": "D:서리칼날:r2",
   "to": "D:빙결여제:r3",
   "kind": "special-parent",
   "grades": [
    "rare"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [
    "Frostblade",
    "서리칼날 (Frostblade)"
   ],
   "condition": "稀有度限 rare；只有「已有 서리칼날 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1323）",
   "defLines": [
    1323
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 3,
   "parent": "스펙터",
   "child": "CrownRevenant",
   "from": "D:LegendarySpecter:r2",
   "to": "D:CrownRevenant:r3",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [
    "LegendarySpecter",
    "Specter",
    "스펙터 (Specter)"
   ],
   "condition": "任何稀有度都會出現；只有「已有 스펙터 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1278）",
   "defLines": [
    1278
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 3,
   "parent": "팔라딘",
   "child": "검황",
   "from": "D:RarePaladin:r2",
   "to": "D:검황:r3",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [
    "Paladin",
    "RarePaladin",
    "팔라딘 (Paladin)"
   ],
   "condition": "稀有度限 normal/advanced/legendary/prism/jackpot5th；只有「已有 팔라딘 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1359,1415,1482）",
   "defLines": [
    1359,
    1415,
    1482
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 3,
   "parent": "팔라딘",
   "child": "암흑장군",
   "from": "D:RarePaladin:r2",
   "to": "D:암흑장군:r3",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [
    "Paladin",
    "RarePaladin",
    "팔라딘 (Paladin)"
   ],
   "condition": "稀有度限 normal/advanced/legendary/prism/jackpot5th；只有「已有 팔라딘 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1489）",
   "defLines": [
    1489
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 3,
   "parent": "팔라딘",
   "child": "우드워든",
   "from": "D:RarePaladin:r2",
   "to": "D:우드워든:r3",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [
    "Paladin",
    "RarePaladin",
    "팔라딘 (Paladin)"
   ],
   "condition": "稀有度限 normal/advanced/legendary/prism/jackpot5th；只有「已有 팔라딘 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1496）",
   "defLines": [
    1496
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 3,
   "parent": "팔라딘",
   "child": "심판관",
   "from": "D:RarePaladin:r2",
   "to": "D:심판관:r3",
   "kind": "special-parent",
   "grades": [
    "rare"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [
    "Paladin",
    "RarePaladin",
    "팔라딘 (Paladin)"
   ],
   "condition": "稀有度限 rare；只有「已有 팔라딘 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1340）",
   "defLines": [
    1340
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 3,
   "parent": "리퍼",
   "child": "소울리퍼",
   "from": "D:리퍼:r2",
   "to": "D:소울리퍼:r3",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [
    "Reaper",
    "리퍼 (Reaper)"
   ],
   "condition": "任何稀有度都會出現；只有「已有 리퍼 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1296）",
   "defLines": [
    1296
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 3,
   "parent": "드루이드",
   "child": "바그",
   "from": "D:드루이드:r1",
   "to": "D:바그:r3",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 드루이드 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1405；判斷 L1398）",
   "defLines": [
    1405
   ],
   "conditionLine": 1398
  },
  {
   "sym": "D",
   "rank": 3,
   "parent": "빅터",
   "child": "프랑켄슈타인",
   "from": "D:빅터:r2",
   "to": "D:프랑켄슈타인:r3",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 빅터 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1393；判斷 L1386）",
   "defLines": [
    1393
   ],
   "conditionLine": 1386
  },
  {
   "sym": "D",
   "rank": 3,
   "parent": "엔트",
   "child": "엔트로드",
   "from": "D:엔트:r2",
   "to": "D:엔트로드:r3",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 엔트 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1381；判斷 L1374）",
   "defLines": [
    1381
   ],
   "conditionLine": 1374
  },
  {
   "sym": "D",
   "rank": 3,
   "parent": "해적왕",
   "child": "검황",
   "from": "D:해적왕:r2",
   "to": "D:검황:r3",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 해적왕 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1359,1415,1482）",
   "defLines": [
    1359,
    1415,
    1482
   ],
   "conditionLine": null
  },
  {
   "sym": "D",
   "rank": 3,
   "parent": "해적왕",
   "child": "망령",
   "from": "D:해적왕:r2",
   "to": "D:망령:r3",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 해적왕 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1420；判斷 L1410）",
   "defLines": [
    1420
   ],
   "conditionLine": 1410
  },
  {
   "sym": "D",
   "rank": 4,
   "parent": "망령",
   "child": "글룸",
   "from": "D:망령:r3",
   "to": "D:글룸:r4",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 망령 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1472；判斷 L1455）",
   "defLines": [
    1472
   ],
   "conditionLine": 1455
  },
  {
   "sym": "H",
   "rank": 2,
   "parent": "경기병",
   "child": "초원 기병",
   "from": "H:경기병:r1",
   "to": "H:초원 기병:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 경기병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2445）",
   "defLines": [
    2445
   ],
   "conditionLine": null
  },
  {
   "sym": "H",
   "rank": 2,
   "parent": "경기병",
   "child": "후사르",
   "from": "H:경기병:r1",
   "to": "H:후사르:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 경기병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2457）",
   "defLines": [
    2457
   ],
   "conditionLine": null
  },
  {
   "sym": "H",
   "rank": 2,
   "parent": "사령기병",
   "child": "나이트메어",
   "from": "H:사령기병:r1",
   "to": "H:나이트메어:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 사령기병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2417）",
   "defLines": [
    2417
   ],
   "conditionLine": null
  },
  {
   "sym": "H",
   "rank": 2,
   "parent": "사령기병",
   "child": "월광사제",
   "from": "H:사령기병:r1",
   "to": "H:월광사제:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 사령기병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2430）",
   "defLines": [
    2430
   ],
   "conditionLine": null
  },
  {
   "sym": "H",
   "rank": 2,
   "parent": "철기병",
   "child": "엘프 기병",
   "from": "H:철기병:r1",
   "to": "H:엘프 기병:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 철기병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2476；判斷 L2469）",
   "defLines": [
    2476
   ],
   "conditionLine": 2469
  },
  {
   "sym": "H",
   "rank": 2,
   "parent": "철기병",
   "child": "야만 기병",
   "from": "H:철기병:r1",
   "to": "H:야만 기병:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 철기병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2483；判斷 L2469）",
   "defLines": [
    2483
   ],
   "conditionLine": 2469
  },
  {
   "sym": "H",
   "rank": 2,
   "parent": "환수기병",
   "child": "실반",
   "from": "H:환수기병:r1",
   "to": "H:실반:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 환수기병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2379）",
   "defLines": [
    2379
   ],
   "conditionLine": null
  },
  {
   "sym": "H",
   "rank": 2,
   "parent": "환수기병",
   "child": "페이즈",
   "from": "H:환수기병:r1",
   "to": "H:페이즈:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 환수기병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2392）",
   "defLines": [
    2392
   ],
   "conditionLine": null
  },
  {
   "sym": "H",
   "rank": 3,
   "parent": "후사르",
   "child": "윙드 후사르",
   "from": "H:후사르:r2",
   "to": "H:윙드 후사르:r3",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [
    "Hussar",
    "후사르 (Hussar)"
   ],
   "condition": "任何稀有度都會出現；只有「已有 후사르 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2627）",
   "defLines": [
    2627
   ],
   "conditionLine": null
  },
  {
   "sym": "H",
   "rank": 3,
   "parent": "월광사제",
   "child": "초승달 여왕",
   "from": "H:월광사제:r2",
   "to": "H:초승달 여왕:r3",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [
    "Moon Priestess",
    "월광사제 (Moon Priestess)"
   ],
   "condition": "任何稀有度都會出現；只有「已有 월광사제 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2581）",
   "defLines": [
    2581
   ],
   "conditionLine": null
  },
  {
   "sym": "H",
   "rank": 3,
   "parent": "나이트메어",
   "child": "아포칼립스",
   "from": "H:나이트메어:r2",
   "to": "H:아포칼립스:r3",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [
    "Nightmare",
    "나이트메어 (Nightmare)"
   ],
   "condition": "任何稀有度都會出現；只有「已有 나이트메어 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2597）",
   "defLines": [
    2597
   ],
   "conditionLine": null
  },
  {
   "sym": "H",
   "rank": 3,
   "parent": "초원 기병",
   "child": "켄타로우스",
   "from": "H:초원 기병:r2",
   "to": "H:켄타로우스:r3",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [
    "Steppe Cavalry",
    "초원 기병 (Steppe Cavalry)"
   ],
   "condition": "任何稀有度都會出現；只有「已有 초원 기병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2612）",
   "defLines": [
    2612
   ],
   "conditionLine": null
  },
  {
   "sym": "H",
   "rank": 4,
   "parent": "워베어",
   "child": "그리즐",
   "from": "H:워베어:r3",
   "to": "H:그리즐:r4",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 워베어 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2700,2713）",
   "defLines": [
    2700,
    2713
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 2,
   "parent": "금단술사",
   "child": "예지술사",
   "from": "M:금단술사:r1",
   "to": "M:예지술사:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 금단술사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1901）",
   "defLines": [
    1901
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 2,
   "parent": "금단술사",
   "child": "리치",
   "from": "M:금단술사:r1",
   "to": "M:리치:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 금단술사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1914）",
   "defLines": [
    1914
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 2,
   "parent": "마도사",
   "child": "엘프법사",
   "from": "M:마도사:r1",
   "to": "M:엘프법사:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "稀有度限 normal/advanced/rare/legendary；只有「已有 마도사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1998；判斷 L1991）",
   "defLines": [
    1998
   ],
   "conditionLine": 1991
  },
  {
   "sym": "M",
   "rank": 2,
   "parent": "마도사",
   "child": "야생법사",
   "from": "M:마도사:r1",
   "to": "M:야생법사:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "稀有度限 normal/advanced/rare/legendary；只有「已有 마도사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2005；判斷 L1991）",
   "defLines": [
    2005
   ],
   "conditionLine": 1991
  },
  {
   "sym": "M",
   "rank": 2,
   "parent": "마도사",
   "child": "예지술사",
   "from": "M:마도사:r1",
   "to": "M:예지술사:r2",
   "kind": "special-parent",
   "grades": [
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "只有 prism 稀有度（或 jackpot5th 標記）才會出現；只有「已有 마도사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1901）",
   "defLines": [
    1901
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 2,
   "parent": "마도사",
   "child": "리치",
   "from": "M:마도사:r1",
   "to": "M:리치:r2",
   "kind": "special-parent",
   "grades": [
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "只有 prism 稀有度（或 jackpot5th 標記）才會出現；只有「已有 마도사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1914）",
   "defLines": [
    1914
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 2,
   "parent": "비술사",
   "child": "수정술사",
   "from": "M:비술사:r1",
   "to": "M:수정술사:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "稀有度限 normal/advanced/rare/legendary；只有「已有 비술사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1967）",
   "defLines": [
    1967
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 2,
   "parent": "비술사",
   "child": "화령술사",
   "from": "M:비술사:r1",
   "to": "M:화령술사:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "稀有度限 normal/advanced/rare/legendary；只有「已有 비술사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1979）",
   "defLines": [
    1979
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 2,
   "parent": "비술사",
   "child": "예지술사",
   "from": "M:비술사:r1",
   "to": "M:예지술사:r2",
   "kind": "special-parent",
   "grades": [
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "只有 prism 稀有度（或 jackpot5th 標記）才會出現；只有「已有 비술사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1901）",
   "defLines": [
    1901
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 2,
   "parent": "비술사",
   "child": "리치",
   "from": "M:비술사:r1",
   "to": "M:리치:r2",
   "kind": "special-parent",
   "grades": [
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "只有 prism 稀有度（或 jackpot5th 標記）才會出現；只有「已有 비술사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1914）",
   "defLines": [
    1914
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 2,
   "parent": "해골술사",
   "child": "심연술사",
   "from": "M:해골술사:r1",
   "to": "M:심연술사:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "稀有度限 normal/advanced/rare/legendary；只有「已有 해골술사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1939）",
   "defLines": [
    1939
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 2,
   "parent": "해골술사",
   "child": "흑마법사",
   "from": "M:해골술사:r1",
   "to": "M:흑마법사:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "稀有度限 normal/advanced/rare/legendary；只有「已有 해골술사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1952）",
   "defLines": [
    1952
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 2,
   "parent": "해골술사",
   "child": "예지술사",
   "from": "M:해골술사:r1",
   "to": "M:예지술사:r2",
   "kind": "special-parent",
   "grades": [
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "只有 prism 稀有度（或 jackpot5th 標記）才會出現；只有「已有 해골술사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1901）",
   "defLines": [
    1901
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 2,
   "parent": "해골술사",
   "child": "리치",
   "from": "M:해골술사:r1",
   "to": "M:리치:r2",
   "kind": "special-parent",
   "grades": [
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "只有 prism 稀有度（或 jackpot5th 標記）才會出現；只有「已有 해골술사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1914）",
   "defLines": [
    1914
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 3,
   "parent": "심연술사",
   "child": "아크메이지",
   "from": "M:심연술사:r2",
   "to": "M:아크메이지:r3",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [
    "Abyss Mage",
    "심연술사 (Abyss Mage)"
   ],
   "condition": "稀有度限 normal/advanced/rare/legendary；只有「已有 심연술사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2079）",
   "defLines": [
    2079
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 3,
   "parent": "심연술사",
   "child": "예언자",
   "from": "M:심연술사:r2",
   "to": "M:예언자:r3",
   "kind": "special-parent",
   "grades": [
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [
    "Abyss Mage",
    "심연술사 (Abyss Mage)"
   ],
   "condition": "只有 prism 稀有度（或 jackpot5th 標記）才會出現；只有「已有 심연술사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2054）",
   "defLines": [
    2054
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 3,
   "parent": "수정술사",
   "child": "운디네",
   "from": "M:수정술사:r2",
   "to": "M:운디네:r3",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [
    "Crystal Mage"
   ],
   "condition": "稀有度限 normal/advanced/rare/legendary；只有「已有 수정술사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2110）",
   "defLines": [
    2110
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 3,
   "parent": "수정술사",
   "child": "예언자",
   "from": "M:수정술사:r2",
   "to": "M:예언자:r3",
   "kind": "special-parent",
   "grades": [
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [
    "Crystal Mage"
   ],
   "condition": "只有 prism 稀有度（或 jackpot5th 標記）才會出現；只有「已有 수정술사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2054）",
   "defLines": [
    2054
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 3,
   "parent": "흑마법사",
   "child": "워록",
   "from": "M:흑마법사:r2",
   "to": "M:워록:r3",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [
    "Dark Mage",
    "흑마법사 (Dark Mage)"
   ],
   "condition": "稀有度限 normal/advanced/rare/legendary；只有「已有 흑마법사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2095）",
   "defLines": [
    2095
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 3,
   "parent": "흑마법사",
   "child": "예언자",
   "from": "M:흑마법사:r2",
   "to": "M:예언자:r3",
   "kind": "special-parent",
   "grades": [
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [
    "Dark Mage",
    "흑마법사 (Dark Mage)"
   ],
   "condition": "只有 prism 稀有度（或 jackpot5th 標記）才會出現；只有「已有 흑마법사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2054）",
   "defLines": [
    2054
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 3,
   "parent": "화령술사",
   "child": "샐러맨더",
   "from": "M:화령술사:r2",
   "to": "M:샐러맨더:r3",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [
    "Flamecaller"
   ],
   "condition": "稀有度限 normal/advanced/rare/legendary；只有「已有 화령술사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2125）",
   "defLines": [
    2125
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 3,
   "parent": "화령술사",
   "child": "예언자",
   "from": "M:화령술사:r2",
   "to": "M:예언자:r3",
   "kind": "special-parent",
   "grades": [
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [
    "Flamecaller"
   ],
   "condition": "只有 prism 稀有度（或 jackpot5th 標記）才會出現；只有「已有 화령술사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2054）",
   "defLines": [
    2054
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 3,
   "parent": "야생법사",
   "child": "원시법사",
   "from": "M:야생법사:r2",
   "to": "M:원시법사:r3",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "稀有度限 normal/advanced/rare/legendary；只有「已有 야생법사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2168；判斷 L2161）",
   "defLines": [
    2168
   ],
   "conditionLine": 2161
  },
  {
   "sym": "M",
   "rank": 3,
   "parent": "야생법사",
   "child": "예언자",
   "from": "M:야생법사:r2",
   "to": "M:예언자:r3",
   "kind": "special-parent",
   "grades": [
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "只有 prism 稀有度（或 jackpot5th 標記）才會出現；只有「已有 야생법사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2054）",
   "defLines": [
    2054
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 3,
   "parent": "엘프법사",
   "child": "엘프 현자",
   "from": "M:엘프법사:r2",
   "to": "M:엘프 현자:r3",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "稀有度限 normal/advanced/rare/legendary；只有「已有 엘프법사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2180,2192；判斷 L2173）",
   "defLines": [
    2180,
    2192
   ],
   "conditionLine": 2173
  },
  {
   "sym": "M",
   "rank": 3,
   "parent": "엘프법사",
   "child": "예언자",
   "from": "M:엘프법사:r2",
   "to": "M:예언자:r3",
   "kind": "special-parent",
   "grades": [
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "只有 prism 稀有度（或 jackpot5th 標記）才會出現；只有「已有 엘프법사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2054）",
   "defLines": [
    2054
   ],
   "conditionLine": null
  },
  {
   "sym": "M",
   "rank": 4,
   "parent": "치유술사",
   "child": "루나 현자",
   "from": "M:치유술사:r2",
   "to": "M:루나 현자:r4",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 치유술사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L2227；判斷 L2207）",
   "defLines": [
    2227
   ],
   "conditionLine": 2207
  },
  {
   "sym": "S",
   "rank": 2,
   "parent": "랜서",
   "child": "천공병",
   "from": "S:랜서:r1",
   "to": "S:천공병:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 랜서 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1536,1599）",
   "defLines": [
    1536,
    1599
   ],
   "conditionLine": null
  },
  {
   "sym": "S",
   "rank": 2,
   "parent": "랜서",
   "child": "창술사",
   "from": "S:랜서:r1",
   "to": "S:창술사:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 랜서 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1549,1612）",
   "defLines": [
    1549,
    1612
   ],
   "conditionLine": null
  },
  {
   "sym": "S",
   "rank": 2,
   "parent": "백골 창병",
   "child": "흑위병",
   "from": "S:백골 창병:r1",
   "to": "S:흑위병:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 백골 창병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1567）",
   "defLines": [
    1567
   ],
   "conditionLine": null
  },
  {
   "sym": "S",
   "rank": 2,
   "parent": "백골 창병",
   "child": "망령병",
   "from": "S:백골 창병:r1",
   "to": "S:망령병:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 백골 창병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1580）",
   "defLines": [
    1580
   ],
   "conditionLine": null
  },
  {
   "sym": "S",
   "rank": 2,
   "parent": "보병",
   "child": "엘프 보병",
   "from": "S:보병:r1",
   "to": "S:엘프 보병:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 보병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1647；判斷 L1640）",
   "defLines": [
    1647
   ],
   "conditionLine": 1640
  },
  {
   "sym": "S",
   "rank": 2,
   "parent": "보병",
   "child": "바이킹",
   "from": "S:보병:r1",
   "to": "S:바이킹:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 보병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1654；判斷 L1640）",
   "defLines": [
    1654
   ],
   "conditionLine": 1640
  },
  {
   "sym": "S",
   "rank": 2,
   "parent": "창투사",
   "child": "고대 창병",
   "from": "S:창투사:r1",
   "to": "S:고대 창병:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 창투사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1629；判斷 L1623）",
   "defLines": [
    1629
   ],
   "conditionLine": 1623
  },
  {
   "sym": "S",
   "rank": 2,
   "parent": "창투사",
   "child": "투기 창병",
   "from": "S:창투사:r1",
   "to": "S:투기 창병:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 창투사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1635；判斷 L1623）",
   "defLines": [
    1635
   ],
   "conditionLine": 1623
  },
  {
   "sym": "S",
   "rank": 3,
   "parent": "흑위병",
   "child": "처형자",
   "from": "S:흑위병:r2",
   "to": "S:처형자:r3",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [
    "Black Guard",
    "흑위병 (Black Guard)"
   ],
   "condition": "任何稀有度都會出現；只有「已有 흑위병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1753）",
   "defLines": [
    1753
   ],
   "conditionLine": null
  },
  {
   "sym": "S",
   "rank": 3,
   "parent": "망령병",
   "child": "SpearRevenant",
   "from": "S:망령병:r2",
   "to": "S:SpearRevenant:r3",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [
    "Wraith Spearman",
    "망령병 (Wraith Spearman)"
   ],
   "condition": "任何稀有度都會出現；只有「已有 망령병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1769）",
   "defLines": [
    1769
   ],
   "conditionLine": null
  },
  {
   "sym": "S",
   "rank": 3,
   "parent": "고대 창병",
   "child": "스파르타",
   "from": "S:고대 창병:r2",
   "to": "S:스파르타:r3",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 고대 창병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1798；判斷 L1792）",
   "defLines": [
    1798
   ],
   "conditionLine": 1792
  },
  {
   "sym": "S",
   "rank": 3,
   "parent": "바이킹",
   "child": "바바리안",
   "from": "S:바이킹:r2",
   "to": "S:바바리안:r3",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 바이킹 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1828；判斷 L1806）",
   "defLines": [
    1828
   ],
   "conditionLine": 1806
  },
  {
   "sym": "S",
   "rank": 3,
   "parent": "엘프 보병",
   "child": "하이 엘프 보병",
   "from": "S:엘프 보병:r2",
   "to": "S:하이 엘프 보병:r3",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 엘프 보병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1816；判斷 L1805）",
   "defLines": [
    1816
   ],
   "conditionLine": 1805
  },
  {
   "sym": "S",
   "rank": 3,
   "parent": "투기 창병",
   "child": "글래디에이터",
   "from": "S:투기 창병:r2",
   "to": "S:글래디에이터:r3",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 투기 창병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1787；判斷 L1781）",
   "defLines": [
    1787
   ],
   "conditionLine": 1781
  },
  {
   "sym": "S",
   "rank": 4,
   "parent": "허스칼",
   "child": "크러셔",
   "from": "S:허스칼:r3",
   "to": "S:크러셔:r4",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 허스칼 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L1688；判斷 L1679）",
   "defLines": [
    1688
   ],
   "conditionLine": 1679
  },
  {
   "sym": "W",
   "rank": 2,
   "parent": "슬레이어",
   "child": "듀라한",
   "from": "W:슬레이어:r1",
   "to": "W:듀라한:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 슬레이어 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L452）",
   "defLines": [
    452
   ],
   "conditionLine": null
  },
  {
   "sym": "W",
   "rank": 2,
   "parent": "슬레이어",
   "child": "백기사",
   "from": "W:슬레이어:r1",
   "to": "W:백기사:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 슬레이어 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L465）",
   "defLines": [
    465
   ],
   "conditionLine": null
  },
  {
   "sym": "W",
   "rank": 2,
   "parent": "철퇴병",
   "child": "엘프병사",
   "from": "W:철퇴병:r1",
   "to": "W:엘프병사:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 철퇴병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L483；判斷 L476）",
   "defLines": [
    483
   ],
   "conditionLine": 476
  },
  {
   "sym": "W",
   "rank": 2,
   "parent": "철퇴병",
   "child": "사수 병사",
   "from": "W:철퇴병:r1",
   "to": "W:사수 병사:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 철퇴병 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L496；判斷 L476）",
   "defLines": [
    496
   ],
   "conditionLine": 476
  },
  {
   "sym": "W",
   "rank": 2,
   "parent": "투사",
   "child": "성기사",
   "from": "W:투사:r1",
   "to": "W:성기사:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 투사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L483,686；判斷 L477）",
   "defLines": [
    483,
    686
   ],
   "conditionLine": 477
  },
  {
   "sym": "W",
   "rank": 2,
   "parent": "투사",
   "child": "염투사",
   "from": "W:투사:r1",
   "to": "W:염투사:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 투사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L496；判斷 L477）",
   "defLines": [
    496
   ],
   "conditionLine": 477
  },
  {
   "sym": "W",
   "rank": 2,
   "parent": "해골 투사",
   "child": "마검사",
   "from": "W:해골 투사:r1",
   "to": "W:마검사:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 해골 투사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L402,483；判斷 L357）",
   "defLines": [
    402,
    483
   ],
   "conditionLine": 357
  },
  {
   "sym": "W",
   "rank": 2,
   "parent": "해골 투사",
   "child": "암검사",
   "from": "W:해골 투사:r1",
   "to": "W:암검사:r2",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 해골 투사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L416,496；判斷 L357）",
   "defLines": [
    416,
    496
   ],
   "conditionLine": 357
  },
  {
   "sym": "W",
   "rank": 3,
   "parent": "마검사",
   "child": "게이즈",
   "from": "W:마검사:r2",
   "to": "W:게이즈:r3",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 마검사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L636；判斷 L628）",
   "defLines": [
    636
   ],
   "conditionLine": 628
  },
  {
   "sym": "W",
   "rank": 3,
   "parent": "사수 병사",
   "child": "바그",
   "from": "W:사수 병사:r2",
   "to": "W:바그:r3",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 사수 병사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L599；判斷 L592）",
   "defLines": [
    599
   ],
   "conditionLine": 592
  },
  {
   "sym": "W",
   "rank": 3,
   "parent": "성기사",
   "child": "템플러",
   "from": "W:성기사:r2",
   "to": "W:템플러:r3",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 성기사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L611；判斷 L604）",
   "defLines": [
    611
   ],
   "conditionLine": 604
  },
  {
   "sym": "W",
   "rank": 3,
   "parent": "암검사",
   "child": "마그누스",
   "from": "W:암검사:r2",
   "to": "W:마그누스:r3",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 암검사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L347,655；判斷 L339）",
   "defLines": [
    347,
    655
   ],
   "conditionLine": 339
  },
  {
   "sym": "W",
   "rank": 3,
   "parent": "엘프병사",
   "child": "엘프기사",
   "from": "W:엘프병사:r2",
   "to": "W:엘프기사:r3",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 엘프병사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L587；判斷 L580）",
   "defLines": [
    587
   ],
   "conditionLine": 580
  },
  {
   "sym": "W",
   "rank": 3,
   "parent": "염투사",
   "child": "플레어",
   "from": "W:염투사:r2",
   "to": "W:플레어:r3",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 염투사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L364,623）",
   "defLines": [
    364,
    623
   ],
   "conditionLine": null
  },
  {
   "sym": "W",
   "rank": 4,
   "parent": "병사",
   "child": "MiniSwordMan03",
   "from": "W:MiniSwordMan02:r2",
   "to": "W:MiniSwordMan03:r4",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [
    "MiniSwordMan02"
   ],
   "condition": "任何稀有度都會出現；只有「已有 병사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L563,671；判斷 L556）",
   "defLines": [
    563,
    671
   ],
   "conditionLine": 556
  },
  {
   "sym": "W",
   "rank": 4,
   "parent": "마검사",
   "child": "게이즈",
   "from": "W:마검사:r2",
   "to": "W:게이즈:r4",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 마검사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L636；判斷 L628）",
   "defLines": [
    636
   ],
   "conditionLine": 628
  },
  {
   "sym": "W",
   "rank": 4,
   "parent": "사수 병사",
   "child": "바그",
   "from": "W:사수 병사:r2",
   "to": "W:바그:r4",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 사수 병사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L599；判斷 L592）",
   "defLines": [
    599
   ],
   "conditionLine": 592
  },
  {
   "sym": "W",
   "rank": 4,
   "parent": "성기사",
   "child": "팔라딘",
   "from": "W:성기사:r3",
   "to": "W:팔라딘:r4",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 성기사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L374；判斷 L355）",
   "defLines": [
    374
   ],
   "conditionLine": 355
  },
  {
   "sym": "W",
   "rank": 4,
   "parent": "성기사",
   "child": "레버넌트",
   "from": "W:성기사:r3",
   "to": "W:레버넌트:r4",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 성기사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L381；判斷 L355）",
   "defLines": [
    381
   ],
   "conditionLine": 355
  },
  {
   "sym": "W",
   "rank": 4,
   "parent": "암검사",
   "child": "마그누스",
   "from": "W:암검사:r2",
   "to": "W:마그누스:r4",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 암검사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L347,655；判斷 L339）",
   "defLines": [
    347,
    655
   ],
   "conditionLine": 339
  },
  {
   "sym": "W",
   "rank": 4,
   "parent": "엘프기사",
   "child": "드루이드",
   "from": "W:엘프기사:r3",
   "to": "W:드루이드:r4",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 엘프기사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L391；判斷 L356）",
   "defLines": [
    391
   ],
   "conditionLine": 356
  },
  {
   "sym": "W",
   "rank": 4,
   "parent": "엘프병사",
   "child": "엘프기사",
   "from": "W:엘프병사:r2",
   "to": "W:엘프기사:r4",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 엘프병사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L587；判斷 L580）",
   "defLines": [
    587
   ],
   "conditionLine": 580
  },
  {
   "sym": "W",
   "rank": 4,
   "parent": "염투사",
   "child": "플레어",
   "from": "W:염투사:r2",
   "to": "W:플레어:r4",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 염투사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L364,623）",
   "defLines": [
    364,
    623
   ],
   "conditionLine": null
  },
  {
   "sym": "W",
   "rank": 4,
   "parent": "해골 투사",
   "child": "마검사",
   "from": "W:해골 투사:r1",
   "to": "W:마검사:r4",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 해골 투사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L402,483；判斷 L357）",
   "defLines": [
    402,
    483
   ],
   "conditionLine": 357
  },
  {
   "sym": "W",
   "rank": 4,
   "parent": "해골 투사",
   "child": "암검사",
   "from": "W:해골 투사:r1",
   "to": "W:암검사:r4",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 해골 투사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L416,496；判斷 L357）",
   "defLines": [
    416,
    496
   ],
   "conditionLine": 357
  },
  {
   "sym": "W",
   "rank": 4,
   "parent": "해적",
   "child": "해적왕",
   "from": "W:해적:r2",
   "to": "W:해적왕:r4",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 해적 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L575；判斷 L568）",
   "defLines": [
    575
   ],
   "conditionLine": 568
  },
  {
   "sym": "W",
   "rank": 5,
   "parent": "병사",
   "child": "MiniSwordMan03",
   "from": "W:MiniSwordMan02:r2",
   "to": "W:MiniSwordMan03:r5",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [
    "MiniSwordMan02"
   ],
   "condition": "任何稀有度都會出現；只有「已有 병사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L563,671；判斷 L556）",
   "defLines": [
    563,
    671
   ],
   "conditionLine": 556
  },
  {
   "sym": "W",
   "rank": 5,
   "parent": "드루이드",
   "child": "마그누스",
   "from": "W:드루이드:r4",
   "to": "W:마그누스:r5",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [
    "마검사",
    "암검사"
   ],
   "condition": "任何稀有度都會出現；只有「已有 드루이드 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L347,655；判斷 L338）",
   "defLines": [
    347,
    655
   ],
   "conditionLine": 338
  },
  {
   "sym": "W",
   "rank": 5,
   "parent": "사수 병사",
   "child": "바그",
   "from": "W:사수 병사:r2",
   "to": "W:바그:r5",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 사수 병사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L599；判斷 L592）",
   "defLines": [
    599
   ],
   "conditionLine": 592
  },
  {
   "sym": "W",
   "rank": 5,
   "parent": "엘프병사",
   "child": "엘프기사",
   "from": "W:엘프병사:r2",
   "to": "W:엘프기사:r5",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 엘프병사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L587；判斷 L580）",
   "defLines": [
    587
   ],
   "conditionLine": 580
  },
  {
   "sym": "W",
   "rank": 5,
   "parent": "염투사",
   "child": "플레어",
   "from": "W:염투사:r2",
   "to": "W:플레어:r5",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 염투사 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L364,623）",
   "defLines": [
    364,
    623
   ],
   "conditionLine": null
  },
  {
   "sym": "W",
   "rank": 5,
   "parent": "해적",
   "child": "해적왕",
   "from": "W:해적:r2",
   "to": "W:해적왕:r5",
   "kind": "special-parent",
   "grades": [
    "normal",
    "advanced",
    "rare",
    "legendary",
    "prism",
    "jackpot5th"
   ],
   "axes": [
    "none",
    "hp",
    "atk",
    "aspd"
   ],
   "randomPool": false,
   "parentAliases": [],
   "condition": "任何稀有度都會出現；只有「已有 해적 這個職業名」的單位才走這條（非標準入口）（promotion.lua 定義 L575；判斷 L568）",
   "defLines": [
    575
   ],
   "conditionLine": 568
  }
 ],
 "unresolved": [
  {
   "type": "member-not-in-tree",
   "faction": "outlaw",
   "id": "해적대장",
   "note": "陣營名單有、職業樹窮舉不到；已建立 inTree=false 物件"
  },
  {
   "type": "no-standard-parent",
   "keys": [
    "A:레인저:r2",
    "A:암흑사수:r2",
    "A:엘프 궁수:r2",
    "A:척탄병:r2",
    "A:화포수:r2",
    "A:환영사수:r2",
    "A:데드아이:r3",
    "A:레이븐:r3",
    "A:미라지:r3",
    "A:캐노니어:r3",
    "A:폭파대장:r3",
    "A:하이 엘프:r3",
    "D:LegendarySpecter:r2",
    "D:RarePaladin:r2",
    "D:리퍼:r2",
    "D:빅터:r2",
    "D:서리칼날:r2",
    "D:엔트:r2",
    "D:CrownRevenant:r3",
    "D:망령:r3",
    "D:바그:r3",
    "D:빙결여제:r3",
    "D:소울리퍼:r3",
    "D:심판관:r3",
    "D:암흑장군:r3",
    "D:엔트로드:r3",
    "D:우드워든:r3",
    "D:프랑켄슈타인:r3",
    "H:나이트메어:r2",
    "H:월광사제:r2",
    "H:초원 기병:r2",
    "H:후사르:r2",
    "H:아포칼립스:r3",
    "H:워베어:r3",
    "H:윙드 후사르:r3",
    "H:초승달 여왕:r3",
    "H:켄타로우스:r3",
    "M:수정술사:r2",
    "M:심연술사:r2",
    "M:야생법사:r2",
    "M:엘프법사:r2",
    "M:화령술사:r2",
    "M:흑마법사:r2",
    "M:본메이지:r3",
    "M:샐러맨더:r3",
    "M:아크메이지:r3",
    "M:암흑술사:r3",
    "M:엘프 현자:r3",
    "M:운디네:r3",
    "M:워록:r3",
    "M:원시법사:r3",
    "M:현자 엘프:r3",
    "S:고대 창병:r2",
    "S:망령병:r2",
    "S:바이킹:r2",
    "S:엘프 보병:r2",
    "S:투기 창병:r2",
    "S:흑위병:r2",
    "S:SpearRevenant:r3",
    "S:글래디에이터:r3",
    "S:바바리안:r3",
    "S:스파르타:r3",
    "S:처형자:r3",
    "S:하이 엘프 보병:r3",
    "S:허스칼:r3",
    "W:마검사:r2",
    "W:사수 병사:r2",
    "W:성기사:r2",
    "W:암검사:r2",
    "W:엘프병사:r2",
    "W:염투사:r2",
    "W:게이즈:r3",
    "W:마그누스:r3",
    "W:바그:r3",
    "W:성기사:r3",
    "W:암기사:r3",
    "W:엘프기사:r3",
    "W:템플러:r3",
    "W:플레어:r3"
   ],
   "note": "這些 rank 2/3 職業沒有任何「標準流程」的上一階：只在 (a) 單位還沒有職業名就直接要選 rank 3（entry=no-subclass-direct，battlefield.lua 的 classSelectTargetRank 預設是 3，所以可能發生但未實測），或 (b) 單位已帶有 철퇴병／투사／해골 투사／슬레이어 等 rank 1 職業名（entry=special-parent；promotion.lua 有寫分支，但單位何時會帶這些名字未查明）時出現。"
  },
  {
   "type": "info",
   "note": "非標準 parent 查詢中 31 筆其實是標準節點的別名，已併入標準節點（略）"
  }
 ]
};
