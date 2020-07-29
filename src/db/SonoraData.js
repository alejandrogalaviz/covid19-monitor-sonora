const data = [
  {
    id: 0,
    name: "Hermosillo",
    capital: "Hermosillo",
    confirmed: 7677,
    deaths: 11,
    compromised: 0,
    status: "alert",
    coord: {
      lat: 29.07,
      lng: -110.95,
    },
  },
  {
    id: 1,
    name: "Guaymas",
    capital: "Guaymas",
    confirmed: 705,
    deaths: 5,
    compromised: 0,
    status: "caution",
    coord: {
      lat: 27.9179,
      lng: -110.9089,
    },
  },
  {
    id: 2,
    name: "Navojoa",
    capital: "Navojoa",
    confirmed: 830,
    deaths: 5,
    compromised: 0,
    status: "caution",
    coord: {
      lat: 27.0728,
      lng: -109.4437,
    },
  },
  {
    id: 3,
    name: "Cajeme",
    capital: "Cajeme",
    confirmed: 2732,
    deaths: 18,
    compromised: 0,
    status: "alert",
    coord: {
      lat: 27.4828,
      lng: -109.9304,
    },
  },
  {
    id: 4,
    name: "Nogales",
    capital: "Nogales",
    confirmed: 1888,
    deaths: 12,
    compromised: 0,
    status: "warning",
    coord: {
      lat: 31.3012,
      lng: -110.9381,
    },
  },
  {
    id: 5,
    name: "San Luis Rio Colorado",
    capital: "San Luis Rio Colorado",
    confirmed: 1213,
    deaths: 32,
    compromised: 0,
    status: "warning",
    coord: {
      lat: 32.4519,
      lng: -114.7717,
    },
  },
  {
    id: 6,
    name: "Caborca",
    capital: "Caborca",
    confirmed: 771,
    deaths: 7,
    compromised: 0,
    status: "caution",
    coord: {
      lat: 30.7145,
      lng: -112.1616,
    },
  },
  {
    id: 7,
    name: "Agua Prieta",
    capital: "Agua Prieta",
    confirmed: 503,
    deaths: 2,
    compromised: 0,
    status: null,
    coord: {
      lat: 31.3278,
      lng: -109.549,
    },
  },
  {
    id: 8,
    name: "Huatabampo",
    capital: "Huatabampo",
    confirmed: 214,
    deaths: 4,
    compromised: 0,
    status: null,
    coord: {
      lat: 26.8271,
      lng: -109.6419,
    },
  },
  {
    id: 9,
    name: "Etchojoa",
    capital: "Etchojoa",
    confirmed: 113,
    deaths: 2,
    compromised: 0,
    status: null,
    coord: {
      lat: 26.9111,
      lng: -109.6266,
    },
  },
  {
    id: 10,
    name: "Puerto Peñasco",
    capital: "Puerto Peñasco",
    confirmed: 75,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 31.3268,
      lng: -113.5312,
    },
  },
  {
    id: 11,
    name: "Empalme",
    capital: "Empalme",
    confirmed: 163,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 27.9665,
      lng: -110.8136,
    },
  },
  {
    id: 12,
    name: "Cananea",
    capital: "Cananea",
    confirmed: 242,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 30.9898,
      lng: -110.2892,
    },
  },
  {
    id: 13,
    name: "Magdalena",
    capital: "Magdalena",
    confirmed: 203,
    deaths: 3,
    compromised: 0,
    status: null,
    coord: {
      lat: 30.6249,
      lng: -110.9714,
    },
  },
  {
    id: 14,
    name: "Tubutama",
    capital: "Tubatama",
    confirmed: 4,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 30.866667,
      lng: -111.45,
    },
  },
  {
    id: 15,
    name: "Bácum",
    capital: "Bácum",
    confirmed: 45,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 27.5505,
      lng: -110.0822,
    },
  },
  {
    id: 16,
    name: "Sáric",
    capital: "Sáric",
    confirmed: 5,
    deaths: 2,
    compromised: 0,
    status: null,
    coord: {
      lat: 31.104,
      lng: -111.3788,
    },
  },
  {
    id: 17,
    name: "Opodepe",
    capital: "Opodepe",
    confirmed: 2,
    deaths: 1,
    compromised: 0,
    status: null,
    coord: {
      lat: 29.9262,
      lng: -110.6269,
    },
  },
  {
    id: 18,
    name: "GPEC",
    capital: "GPEC",
    confirmed: 66,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 31.8647,
      lng: -112.852,
    },
  },
  {
    id: 19,
    name: "Ímuris",
    capital: "Ímuris",
    confirmed: 22,
    deaths: 1,
    compromised: 0,
    status: null,
    coord: {
      lat: 30.7895,
      lng: -110.8449,
    },
  },
  {
    id: 20,
    name: "Villa Pesqueira",
    capital: "Villa Pesqueira",
    confirmed: 2,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 29.1179,
      lng: -109.9671,
    },
  },
  {
    id: 21,
    name: "Cumpas",
    capital: "Cumpas",
    confirmed: 11,
    deaths: 1,
    compromised: 0,
    status: null,
    coord: {
      lat: 29.9947,
      lng: -109.7803,
    },
  },
  {
    id: 23,
    name: "Santa Ana",
    capital: "Santa Ana",
    confirmed: 90,
    deaths: 1,
    compromised: 0,
    status: null,
    coord: {
      lat: 30.5406,
      lng: -111.1205,
    },
  },
  {
    id: 24,
    name: "Altar",
    capital: "Altar",
    confirmed: 37,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 30.71626,
      lng: -111.83653,
    },
  },
  {
    id: 25,
    name: "Nacozari de G.",
    capital: "Nacozari de G.",
    confirmed: 53,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 30.3753,
      lng: -109.6875,
    },
  },
  {
    id: 26,
    name: "Ures",
    capital: "Ures",
    confirmed: 27,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 29.426,
      lng: -110.386,
    },
  },
  {
    id: 27,
    name: "Benito Juárez",
    capital: "Benito Juárez",
    confirmed: 32,
    deaths: 1,
    compromised: 0,
    status: null,
    coord: {
      lat: 27.417,
      lng: -110.017,
    },
  },
  {
    id: 28,
    name: "Rosario Tesopaco",
    capital: "Rosario Tesopaco",
    confirmed: 8,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 27.841111,
      lng: -109.368056,
    },
  },
  {
    id: 29,
    name: "Álamos",
    capital: "Álamos",
    confirmed: 46,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 27.0275,
      lng: -108.94,
    },
  },
  {
    id: 30,
    name: "Pitiquito",
    capital: "Pitiquito",
    confirmed: 79,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 30.677111,
      lng: -112.054892,
    },
  },
  {
    id: 31,
    name: "Ónavas",
    capital: "Ónavas",
    confirmed: 2,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 28.45,
      lng: -109.516667,
    },
  },
  {
    id: 32,
    name: "Baviácora",
    capital: "Baviácora",
    confirmed: 16,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 29.61848,
      lng: -110.14157,
    },
  },
  {
    id: 33,
    name: "Benjamín Hill",
    capital: "Benjamín Hill",
    confirmed: 15,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 29.61848,
      lng: -110.14157,
    },
  },
  {
    id: 34,
    name: "Carbó",
    capital: "Carbó",
    confirmed: 2,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 29.68967,
      lng: -110.956625,
    },
  },
  {
    id: 35,
    name: "Bavispe",
    capital: "Bavispe",
    confirmed: 5,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 30.480008,
      lng: -108.940498,
    },
  },
  {
    id: 36,
    name: "San Miguel de H.",
    capital: "San Miguel de H.",
    confirmed: 14,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 29.48737,
      lng: -110.72479,
    },
  },
  {
    id: 37,
    name: "Quiriego",
    capital: "Quiriego",
    confirmed: 5,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 29.140812,
      lng: -111.008211,
    },
  },
  {
    id: 38,
    name: "Oquitoa",
    capital: "Oquitoa",
    confirmed: 1,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 30.74943,
      lng: -111.71245,
    },
  },
  {
    id: 39,
    name: "San Ignacio R. M.",
    capital: "San Ignacio R. M.",
    confirmed: 15,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 27.415,
      lng: -110.245,
    },
  },
  {
    id: 40,
    name: "Fronteras",
    capital: "Fronteras",
    confirmed: 11,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 30.896389,
      lng: -109.568889,
    },
  },
  {
    id: 41,
    name: "Trincheras",
    capital: "Trincheras",
    confirmed: 6,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 30.399444,
      lng: -111.530833,
    },
  },
  {
    id: 42,
    name: "Sahuaripa",
    capital: "Sahuaripa",
    confirmed: 14,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 29.05,
      lng: -109.233333,
    },
  },
  {
    id: 43,
    name: "Bacerac",
    capital: "Bacerac",
    confirmed: 3,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 30.355053,
      lng: -108.947774,
    },
  },
  {
    id: 44,
    name: "Arizpe",
    capital: "Arizpe",
    confirmed: 11,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 30.316667,
      lng: -110.166667,
    },
  },
  {
    id: 45,
    name: "Aconchi",
    capital: "Aconchi",
    confirmed: 5,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 29.826389,
      lng: -110.225,
    },
  },
  {
    id: 46,
    name: "Cucurpe",
    capital: "Cucurpe",
    confirmed: 2,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 30.330278,
      lng: -110.705278,
    },
  },
  {
    id: 47,
    name: "Naco",
    capital: "Naco",
    confirmed: 7,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 31.326944,
      lng: -109.947778,
    },
  },
  {
    id: 48,
    name: "La Colorada",
    capital: "La Colorada",
    confirmed: 1,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 28.804444,
      lng: -110.58,
    },
  },
  {
    id: 49,
    name: "Villa Hidalgo",
    capital: "Villa Hidalgo",
    confirmed: 4,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 30.166667,
      lng: -109.316667,
    },
  },
  {
    id: 50,
    name: "Huachinera",
    capital: "Huachinera",
    confirmed: 1,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 30.205561,
      lng: -108.957659,
    },
  },
  {
    id: 51,
    name: "Bacoachi",
    capital: "Bacoachi",
    confirmed: 16,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 30.65315,
      lng: -109.97898,
    },
  },
  {
    id: 52,
    name: "Nácori Chico",
    capital: "Nácori Chico",
    confirmed: 7,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 29.67599,
      lng: -108.82447,
    },
  },
  {
    id: 53,
    name: "Moctezuma",
    capital: "Moctezuma",
    confirmed: 15,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 29.806111,
      lng: -109.679444,
    },
  },
  {
    id: 54,
    name: "Granados",
    capital: "Granados",
    confirmed: 4,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 29.78772,
      lng: -109.31521,
    },
  },
  {
    id: 54,
    name: "Divisaderos",
    capital: "Divisaderos",
    confirmed: 4,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 29.61726,
      lng: -109.39215,
    },
  },
  {
    id: 55,
    name: "Tepache",
    capital: "Tepache",
    confirmed: 2,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 29.516667,
      lng: -109.516667,
    },
  },
  {
    id: 56,
    name: "Santa Cruz",
    capital: "Santa Cruz",
    confirmed: 2,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 31.233611,
      lng: -110.595278,
    },
  },
  {
    id: 57,
    name: "Rayón",
    capital: "Rayón",
    confirmed: 3,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 29.717,
      lng: -110.583,
    },
  },
  {
    id: 58,
    name: "San Felipe de J.",
    capital: "San Felipe de J.",
    confirmed: 1,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 29.859722,
      lng: -110.239722,
    },
  },
  {
    id: 59,
    name: "Yécora",
    capital: "Yécora",
    confirmed: 21,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 28.371111,
      lng: -108.925556,
    },
  },
  {
    id: 60,
    name: "Huásabas",
    capital: "Huásabas",
    confirmed: 1,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 29.95923,
      lng: -109.37255,
    },
  },
  {
    id: 61,
    name: "Bacanora",
    capital: "Bacanora",
    confirmed: 1,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 28.978889,
      lng: -109.398333,
    },
  },
  {
    id: 62,
    name: "Huépac",
    capital: "Huépac",
    confirmed: 1,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 29.9,
      lng: -110.2,
    },
  },
  {
    id: 63,
    name: "San Javier",
    capital: "San Javier",
    confirmed: 3,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 28.594722,
      lng: -109.739444,
    },
  },
];

export default data;
