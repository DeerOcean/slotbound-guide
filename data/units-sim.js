window.SB_UNITS_SIM = {
"pre": [
{
"k": 0,
"used": 1,
"open": 1,
"open_avg": 1.0,
"full": 2,
"full_avg": 2.0,
"xlv": 1,
"ximp": 0
},
{
"k": 1,
"used": 2,
"open": 2,
"open_avg": 1.0,
"full": 3,
"full_avg": 1.5,
"xlv": 2,
"ximp": 1
},
{
"k": 2,
"used": 3,
"open": 4,
"open_avg": 1.33,
"full": 5,
"full_avg": 1.67,
"xlv": 3,
"ximp": 2
},
{
"k": 3,
"used": 4,
"open": 5,
"open_avg": 1.25,
"full": 6,
"full_avg": 1.5,
"xlv": 4,
"ximp": 3
},
{
"k": 4,
"used": 5,
"open": 6,
"open_avg": 1.2,
"full": 7,
"full_avg": 1.4,
"xlv": 5,
"ximp": 4
},
{
"k": 5,
"used": 6,
"open": 8,
"open_avg": 1.33,
"full": 9,
"full_avg": 1.5,
"xlv": 6,
"ximp": 5
},
{
"k": 6,
"used": 7,
"open": 8,
"open_avg": 1.14,
"full": 9,
"full_avg": 1.29,
"xlv": 8,
"ximp": 5
},
{
"k": 7,
"used": 8,
"open": 9,
"open_avg": 1.12,
"full": 10,
"full_avg": 1.25,
"xlv": 10,
"ximp": 5
},
{
"k": 8,
"used": 9,
"open": 10,
"open_avg": 1.11,
"full": 11,
"full_avg": 1.22,
"xlv": 12,
"ximp": 5
}
],
"direct": [
1,
1,
1,
1,
1,
2,
2,
2,
2,
2,
2,
2
],
"examples": [
{
"name": "白板新兵",
"victim": {
"grade": "normal",
"imprints": [],
"lv": 1,
"bento": 0
},
"convert": false,
"hand": "1 + 0 + 0 + 0 = 1",
"expect": 1
},
{
"name": "吃滿 5 隻的普通兵（刻印 5 級、LV 6），主力刻印已滿",
"victim": {
"grade": "normal",
"imprints": [
[
"normal",
5
]
],
"lv": 6,
"bento": 0
},
"convert": true,
"hand": "1 + (1+4) + floor(6/3)=2 + 0 + 轉換 1 = 9",
"expect": 9
},
{
"name": "傳說兵，身上有高階 2 級、稀有 1 級刻印、LV 10、便當 +4，轉換",
"victim": {
"grade": "legendary",
"imprints": [
[
"advanced",
2
],
[
"rare",
1
]
],
"lv": 10,
"bento": 4
},
"convert": true,
"hand": "1 + (2+1) + (3+0) + floor(10/3)=3 + 4 + 轉換 5 = 19",
"expect": 19
},
{
"name": "稜彩新兵，主力格滿選保留",
"victim": {
"grade": "prism",
"imprints": [],
"lv": 1,
"bento": 0
},
"convert": true,
"hand": "1 + 0 + 0 + 0 + 轉換 8 = 9",
"expect": 9
}
],
"need": [
{
"grade": "normal",
"slots": 1,
"n2_fast": 3,
"n2_slow": 4,
"n3_fast": 6,
"n3_slow": 8
},
{
"grade": "advanced",
"slots": 2,
"n2_fast": 4,
"n2_slow": 5,
"n3_fast": 8,
"n3_slow": 9
},
{
"grade": "rare",
"slots": 3,
"n2_fast": 5,
"n2_slow": 6,
"n3_fast": 10,
"n3_slow": 11
},
{
"grade": "legendary",
"slots": 4,
"n2_fast": 7,
"n2_slow": 7,
"n3_fast": 12,
"n3_slow": 12
},
{
"grade": "prism",
"slots": 5,
"n2_fast": 10,
"n2_slow": 10,
"n3_fast": 16,
"n3_slow": 16
}
]
};
