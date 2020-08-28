const recuperados = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  2,
  2,
  2,
  2,
  2,
  2,
  4,
  4,
  4,
  5,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  7,
  7,
  11,
  12,
  12,
  13,
  13,
  17,
  35,
  37,
  41,
  42,
  43,
  44,
  48,
  60,
  61,
  61,
  61,
  61,
  62,
  73,
  77,
  79,
  79,
  91,
  92,
  92,
  106,
  113,
  128,
  138,
  138,
  146,
  149,
  163,
  163,
  163,
  163,
  195,
  232,
  299,
  299,
  324,
  334,
  334,
  334,
  334,
  348,
  359,
  365,
  377,
  379,
  386,
  401,
  430,
  430,
  486,
  512,
  512,
  529,
  553,
  580,
  605,
  647,
  649,
  649,
  692,
  707,
  707,
  831,
  981,
  1129,
  1245,
  1259,
  1272,
  1280,
  1280,
  1334,
  1334,
  1334,
  1456,
  1482,
  1632,
  1648,
  1672,
  1672,
  1804,
  1825,
  1826,
  1826,
  2049,
  2051,
  2051,
  2335,
  2605,
  2612,
  2774,
  2779,
  2779,
  3107,
  3111,
  3111,
  3111,
  3111,
  3111,
];
const decesos = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  1,
  1,
  4,
  5,
  5,
  8,
  8,
  8,
  12,
  12,
  12,
  12,
  14,
  14,
  16,
  16,
  17,
  17,
  22,
  22,
  24,
  26,
  26,
  30,
  31,
  34,
  34,
  35,
  35,
  37,
  41,
  41,
  44,
  45,
  45,
  47,
  49,
  53,
  55,
  58,
  62,
  66,
  68,
  73,
  79,
  86,
  89,
  95,
  97,
  109,
  123,
  129,
  139,
  156,
  167,
  173,
  177,
  193,
  204,
  224,
  241,
  255,
  269,
  274,
  278,
  291,
  309,
  331,
  357,
  381,
  393,
  417,
  432,
  465,
  486,
  509,
  550,
  569,
  582,
  621,
  674,
  721,
  749,
  787,
  824,
  838,
  870,
  894,
  909,
  950,
  990,
  1016,
  1034,
  1055,
  1086,
  1117,
  1152,
  1193,
  1232,
  1268,
  1287,
  1328,
  1357,
  1377,
  1406,
  1436,
  1466,
  1494,
  1524,
  1540,
  1565,
  1595,
  1630,
  1660,
  1695,
  1725,
  1756,
  1787,
  1828,
  1878,
  1929,
  1969,
  2011,
  2055,
  2089,
  2124,
  2163,
  2203,
  2257,
  2299,
  2329,
  2407,
  2426,
  2434,
  2443,
  2466,
  2476,
  2492,
  2511,
  2538,
  2550,
  2554,
  2567,
  2596,
  2627,
  2649,
];
const confirmadosTotal = [
  0,
  1,
  1,
  2,
  2,
  2,
  3,
  4,
  4,
  5,
  8,
  8,
  10,
  14,
  17,
  17,
  18,
  21,
  22,
  28,
  29,
  33,
  36,
  39,
  48,
  55,
  69,
  83,
  86,
  88,
  97,
  109,
  117,
  124,
  133,
  152,
  157,
  165,
  181,
  199,
  214,
  224,
  245,
  260,
  267,
  288,
  305,
  320,
  335,
  364,
  392,
  392,
  451,
  485,
  534,
  550,
  588,
  642,
  686,
  744,
  790,
  856,
  905,
  981,
  1037,
  1110,
  1189,
  1274,
  1410,
  1501,
  1599,
  1701,
  1809,
  1928,
  2032,
  2154,
  2284,
  2386,
  2561,
  2704,
  2818,
  3042,
  3213,
  3333,
  3494,
  3650,
  3794,
  4011,
  4275,
  4553,
  4776,
  4963,
  5062,
  5241,
  5511,
  5739,
  6173,
  6448,
  6709,
  6894,
  7306,
  7547,
  7706,
  7901,
  8139,
  8384,
  8533,
  8708,
  8976,
  9386,
  9801,
  10065,
  10332,
  10619,
  11052,
  11266,
  11644,
  12065,
  12412,
  12630,
  12850,
  13300,
  13560,
  13942,
  14387,
  14729,
  15112,
  15381,
  15676,
  15962,
  16307,
  16649,
  17092,
  17460,
  17860,
  18119,
  18526,
  19006,
  19473,
  20022,
  20592,
  21000,
  21423,
  21941,
  22337,
  22769,
  23132,
  23559,
  23969,
  24387,
  24699,
  25006,
  25191,
  25483,
  25706,
  25804,
  25991,
  26169,
  26458,
  26752,
  27068,
  27170,
  27348,
  27569,
  27754,
  27950,
];
const confirmadosDiario = [
  0,
  1,
  0,
  1,
  0,
  0,
  1,
  1,
  0,
  1,
  3,
  0,
  2,
  4,
  3,
  0,
  1,
  3,
  1,
  6,
  1,
  4,
  3,
  3,
  9,
  7,
  14,
  14,
  3,
  2,
  9,
  12,
  8,
  7,
  9,
  19,
  5,
  8,
  16,
  18,
  15,
  10,
  21,
  15,
  7,
  21,
  17,
  15,
  15,
  29,
  28,
  0,
  59,
  34,
  49,
  16,
  38,
  54,
  44,
  58,
  46,
  66,
  49,
  76,
  56,
  77,
  79,
  85,
  136,
  91,
  98,
  102,
  108,
  119,
  104,
  122,
  130,
  102,
  175,
  143,
  113,
  225,
  171,
  120,
  161,
  156,
  144,
  217,
  264,
  278,
  223,
  187,
  99,
  179,
  270,
  228,
  434,
  275,
  261,
  185,
  412,
  241,
  159,
  195,
  238,
  245,
  149,
  175,
  268,
  410,
  415,
  264,
  267,
  187,
  433,
  214,
  378,
  421,
  347,
  218,
  220,
  450,
  260,
  382,
  445,
  342,
  383,
  269,
  295,
  286,
  345,
  342,
  443,
  368,
  400,
  259,
  407,
  480,
  467,
  549,
  570,
  408,
  423,
  518,
  396,
  432,
  363,
  427,
  410,
  418,
  312,
  307,
  185,
  292,
  223,
  98,
  187,
  178,
  289,
  294,
  316,
  103,
  177,
  221,
  185,
  196,
];
const proporcionLabels = [
  "Recuperados 83.11%",
  "Estables/Domicilio - 6.42%",
  "Estables/Hospital - 0.19%",
  "Graves/Hospital - 0.82%",
  "Fallecidos - 9.48%",
];
const proporcionData = [23228, 1793, 52, 228, 2649];
const chartsData = {
  recuperados,
  decesos,
  confirmadosTotal,
  confirmadosDiario,
  proporcionLabels,
  proporcionData,
};
export default chartsData;
