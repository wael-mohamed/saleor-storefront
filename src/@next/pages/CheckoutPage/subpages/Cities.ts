interface ICity {
  label: string;
  value: number;
}
const shippingMethods = [
  {
    id: "U2hpcHBpbmdNZXRob2Q6Mzk=",
    zone: 1,
  },
  {
    id: "U2hpcHBpbmdNZXRob2Q6NDE=",
    zone: 2,
  },
  {
    id: "U2hpcHBpbmdNZXRob2Q6NDI=",
    zone: 3,
  },
  {
    id: "U2hpcHBpbmdNZXRob2Q6NDM=",
    zone: 4,
  },
  {
    id: "U2hpcHBpbmdNZXRob2Q6NDQ=",
    zone: 5,
  },
  {
    id: "U2hpcHBpbmdNZXRob2Q6NDU=",
    zone: 6,
  },
  {
    id: "U2hpcHBpbmdNZXRob2Q6NDY=",
    zone: 7,
  },
];
const zone01: ICity[] = [
  {
    label: "MOSTAGANEM",
    value: 27,
  },
];
const zone02: ICity[] = [
  {
    label: "ORAN",
    value: 31,
  },
  {
    label: "TISSEMSILT",
    value: 38,
  },
  {
    label: "CHLEF",
    value: 2,
  },
  {
    label: "AIN DEFLA",
    value: 44,
  },
  {
    label: "TIARET",
    value: 14,
  },
  {
    label: "SAIDA",
    value: 20,
  },
  {
    label: "AIN TEMOUCHENT",
    value: 46,
  },
  {
    label: "RELIZANE",
    value: 48,
  },
  {
    label: "MASCARA",
    value: 29,
  },
  {
    label: "SIDI BEL ABBES",
    value: 22,
  },
  {
    label: "TLEMCEN",
    value: 13,
  },
];
const zone03: ICity[] = [
  {
    label: "BLIDA",
    value: 9,
  },
  {
    label: "BOUMERDES",
    value: 35,
  },
  {
    label: "TIPAZA",
    value: 42,
  },
  {
    label: "MEDEA",
    value: 26,
  },
  {
    label: "BOUIRA",
    value: 10,
  },
  {
    label: "TIZI OUZOU",
    value: 15,
  },
  {
    label: "ALGER",
    value: 16,
  },
];
const zone04: ICity[] = [
  {
    label: "M'SILA",
    value: 28,
  },
  {
    label: "TEBESSA",
    value: 12,
  },
  {
    label: "GUELMA",
    value: 24,
  },
  {
    label: "EL TAREF",
    value: 36,
  },
  {
    label: "SOUK AHRAS",
    value: 41,
  },
  {
    label: "KHENCHELA",
    value: 40,
  },
  {
    label: "BATNA",
    value: 5,
  },
  {
    label: "BEJAIA",
    value: 6,
  },
  {
    label: "JIJEL",
    value: 18,
  },
  {
    label: "SETIF",
    value: 19,
  },
  {
    label: "CONSTANTINE",
    value: 25,
  },
  {
    label: "MILA",
    value: 43,
  },
  {
    label: "OUM EL BOUAGHI",
    value: 4,
  },
  {
    label: "ANNABA",
    value: 23,
  },
  {
    label: "SKIKDA",
    value: 21,
  },
  {
    label: "BORDJ BOU ARRERIDJ",
    value: 34,
  },
];
const zone05: ICity[] = [
  {
    label: "LAGHOUAT",
    value: 3,
  },
  {
    label: "BISKRA",
    value: 7,
  },
  {
    label: "DJELFA",
    value: 17,
  },
  {
    label: "OUARGLA",
    value: 30,
  },
  {
    label: "GHARDAIA",
    value: 47,
  },
  {
    label: "ADRAR",
    value: 1,
  },
  {
    label: "BECHAR",
    value: 8,
  },
  {
    label: "NAAMA",
    value: 45,
  },
  {
    label: "EL OUED",
    value: 39,
  },
];
const zone06: ICity[] = [
  {
    label: "EL BAYADH",
    value: 32,
  },
];
const zone07: ICity[] = [
  {
    label: "TAMANRASSET",
    value: 11,
  },
  {
    label: "ILLIZI",
    value: 33,
  },
  {
    label: "TINDOUF",
    value: 37,
  },
];
export const getCities = () => {
  return zone01
    .concat(zone02)
    .concat(zone03)
    .concat(zone04)
    .concat(zone05)
    .concat(zone06)
    .concat(zone07);
};
const getZoneByCityName = (cityName: string) => {
  if (hasCityName(zone01, cityName)) {
    return 1;
  }
  if (hasCityName(zone02, cityName)) {
    return 2;
  }
  if (hasCityName(zone03, cityName)) {
    return 3;
  }
  if (hasCityName(zone04, cityName)) {
    return 4;
  }
  if (hasCityName(zone05, cityName)) {
    return 5;
  }
  if (hasCityName(zone06, cityName)) {
    return 6;
  }
  return 7;
};

export const getShippingMethod = (cityName?: string) => {
  return cityName
    ? shippingMethods.find((sm) => sm.zone === getZoneByCityName(cityName))?.id
    : null;
};
const hasCityName = (zone: ICity[], cityName: string) => {
  return zone.find((city) => city.label === cityName);
};
