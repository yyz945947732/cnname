import { getName } from '../../dist/index.js';

export default [
  {
    label: 'getName()',
    value: getName(),
  },
  {
    label: 'getName("彭")',
    value: getName('彭'),
  },
  {
    label: 'getName(5)',
    value: getName(5),
  },
  {
    label: 'getName("姚", 5)',
    value: getName('姚', 5),
  },
  {
    label: 'getName({ count: 5 })',
    value: getName({ count: 5 }),
  },
  {
    label: 'getName({ count: 5, unique: true, givenNameDuplicated: true })',
    value: getName({ count: 5, unique: true, givenNameDuplicated: true }),
  },
  {
    label: 'getName({ count: 5, surname: "张" })',
    value: getName({ count: 5, surname: "张" }),
  },
  {
    label: 'getName({ count: 5, surname: "张", givenNameLength: 2 })',
    value: getName({ count: 5, surname: "张", givenNameLength: 2 }),
  },
  {
    label: 'getName({ count: 5, surname: "李", givenNameLength: 2, givenNameStartsWith: "俊" })',
    value: getName({ count: 5, surname: "李", givenNameLength: 2, givenNameStartsWith: "俊" }),
  },
  {
    label: 'getName({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" })',
    value: getName({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" }),
  },
  {
    label: 'getName({ count: 5, unique: true, returnType: "surname" })',
    value: getName({ count: 5, unique: true, returnType: "surname" }),
  },
  {
    label: 'getName({ count: 5, unique: true, returnType: "givenName" })',
    value: getName({ count: 5, unique: true, returnType: "givenName" }),
  },
  {
    label: 'getName({ count: 5, unique: true, surnameType: "single", surnameRarity: "all", givenNameLength: 1 })',
    value: getName({ count: 5, unique: true, surnameType: "single", surnameRarity: 'all', givenNameLength: 1 }),
  },
  {
    label: 'getName({ count: 5, unique: true, surnameType: "compound", surnameRarity: "all", givenNameLength: 1 })',
    value: getName({ count: 5, unique: true, surnameType: "compound", surnameRarity: 'all', givenNameLength: 1 }),
  },
  {
    label: 'getName({ count: 5, unique: true, surnameType: "single", surnameRarity: "common", givenNameLength: 1 })',
    value: getName({ count: 5, unique: true, surnameType: "single", surnameRarity: 'common', givenNameLength: 1 }),
  },
  {
    label: 'getName({ count: 5, unique: true, surnameType: "compound", surnameRarity: "common", givenNameLength: 1 })',
    value: getName({ count: 5, unique: true, surnameType: "compound", surnameRarity: 'common', givenNameLength: 1 }),
  },
  {
    label: 'getName({ count: 5, unique: true, surnameType: "single", surnameRarity: "rare", givenNameLength: 1 })',
    value: getName({ count: 5, unique: true, surnameType: "single", surnameRarity: 'rare', givenNameLength: 1 }),
  },
  {
    label: 'getName({ count: 5, unique: true, surnameType: "compound", surnameRarity: "rare", givenNameLength: 1 })',
    value: getName({ count: 5, unique: true, surnameType: "compound", surnameRarity: 'rare', givenNameLength: 1 }),
  },
  {
    label: 'getName({ count: 5, unique: true, surname: ["张", "李"] })',
    value: getName({ count: 5, unique: true, surname: ["张", "李"] }),
  },
  {
    label: 'getName({ count: 5, unique: true, surname: "关" })',
    value: getName({ count: 5, unique: true, surname: "关" }),
  },
  {
    label: 'getName({ count: 5, unique: true, givenName: ["小桐", "穗宁"] })',
    value: getName({ count: 5, unique: true, givenName: ["小桐", "穗宁"] }),
  },
  {
    label: 'getName({ count: 5, unique: true, givenName: "佳运" })',
    value: getName({ count: 5, unique: true, givenName: "佳运" }),
  },
  {
    label: 'getName({ count: 5, unique: true, givenNameAttributes: "male" })',
    value: getName({ count: 5, unique: true, givenNameAttributes: "male" }),
  },
  {
    label: 'getName({ count: 5, unique: true, givenNameAttributes: "female" })',
    value: getName({ count: 5, unique: true, givenNameAttributes: "female" }),
  },
  {
    label: 'getName({ count: 5, unique: true, givenNameAttributes: "metal" })',
    value: getName({ count: 5, unique: true, givenNameAttributes: "metal" }),
  },
  {
    label: 'getName({ count: 5, unique: true, givenNameAttributes: "wood" })',
    value: getName({ count: 5, unique: true, givenNameAttributes: "wood" }),
  },
  {
    label: 'getName({ count: 5, unique: true, givenNameAttributes: "water" })',
    value: getName({ count: 5, unique: true, givenNameAttributes: "water" }),
  },
  {
    label: 'getName({ count: 5, unique: true, givenNameAttributes: "fire" })',
    value: getName({ count: 5, unique: true, givenNameAttributes: "fire" }),
  },
  {
    label: 'getName({ count: 5, unique: true, givenNameAttributes: "earth" })',
    value: getName({ count: 5, unique: true, givenNameAttributes: "earth" }),
  },
  {
    label: 'getName({ count: 5, unique: true, givenNameAttributes: "animal" })',
    value: getName({ count: 5, unique: true, givenNameAttributes: "animal" }),
  },
  {
    label: 'getName({ count: 5, unique: true, givenNameAttributes: ["earth", "female"] })',
    value: getName({ count: 5, unique: true, givenNameAttributes: ["earth", "female"] }),
  },
  {
    label: 'getName({ count: 5, unique: true, givenNameAttributes: ["water", "fire"] })',
    value: getName({ count: 5, unique: true, givenNameAttributes: ["water", "fire"] }),
  },
  {
    label: 'getName({ count: 5, unique: true, gender: "female" })',
    value: getName({ count: 5, unique: true, gender: "female" }),
  },
  {
    label: 'getName({ count: 5, unique: true, wuxing: "fire" })',
    value: getName({ count: 5, unique: true, wuxing: "fire" }),
  },
  {
    label: 'getName({ count: 5, unique: true, wuxing: "earth", givenNameAttributes: "water" })',
    value: getName({ count: 5, unique: true, wuxing: "earth", givenNameAttributes: "water" }),
  },
  {
    label: 'getName({ count: 10, unique: true, surnamePickStrategy: "random" })',
    value: getName({ count: 10, unique: true, surnamePickStrategy: 'random' }),
  },
  {
    label: 'getName({ count: 10, unique: true, surnamePickStrategy: "weight" })',
    value: getName({ count: 10, unique: true, surnamePickStrategy: 'weight' }),
  },
];
