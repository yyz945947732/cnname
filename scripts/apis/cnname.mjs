import cnname from '../../dist/index.js';

export default [
  {
    label: 'cnname()',
    value: cnname(),
  },
  {
    label: 'cnname("彭")',
    value: cnname('彭'),
  },
  {
    label: 'cnname(5)',
    value: cnname(5),
  },
  {
    label: 'cnname("姚", 5)',
    value: cnname('姚', 5),
  },
  {
    label: 'cnname({ count: 5 })',
    value: cnname({ count: 5 }),
  },
  {
    label: 'cnname({ count: 5, unique: true, givenNameDuplicated: true })',
    value: cnname({ count: 5, unique: true, givenNameDuplicated: true }),
  },
  {
    label: 'cnname({ count: 5, surname: "张" })',
    value: cnname({ count: 5, surname: "张" }),
  },
  {
    label: 'cnname({ count: 5, surname: "张", givenNameLength: 2 })',
    value: cnname({ count: 5, surname: "张", givenNameLength: 2 }),
  },
  {
    label: 'cnname({ count: 5, surname: "李", givenNameLength: 2, givenNameStartsWith: "俊" })',
    value: cnname({ count: 5, surname: "李", givenNameLength: 2, givenNameStartsWith: "俊" }),
  },
  {
    label: 'cnname({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" })',
    value: cnname({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" }),
  },
  {
    label: 'cnname({ count: 5, unique: true, returnType: "surname" })',
    value: cnname({ count: 5, unique: true, returnType: "surname" }),
  },
  {
    label: 'cnname({ count: 5, unique: true, returnType: "givenName" })',
    value: cnname({ count: 5, unique: true, returnType: "givenName" }),
  },
  {
    label: 'cnname({ count: 5, unique: true, surnameType: "all-single", givenNameLength: 1 })',
    value: cnname({ count: 5, unique: true, surnameType: "all-single", givenNameLength: 1 }),
  },
  {
    label: 'cnname({ count: 5, unique: true, surnameType: "all-compound", givenNameLength: 1 })',
    value: cnname({ count: 5, unique: true, surnameType: "all-compound", givenNameLength: 1 }),
  },
  {
    label: 'cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })',
    value: cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 }),
  },
  {
    label: 'cnname({ count: 5, unique: true, surnameType: "common-single", givenNameLength: 1 })',
    value: cnname({ count: 5, unique: true, surnameType: "common-single", givenNameLength: 1 }),
  },
  {
    label: 'cnname({ count: 5, unique: true, surnameType: "common-compound", givenNameLength: 1 })',
    value: cnname({ count: 5, unique: true, surnameType: "common-compound", givenNameLength: 1 }),
  },
  {
    label: 'cnname({ count: 5, unique: true, surname: ["张", "李"] })',
    value: cnname({ count: 5, unique: true, surname: ["张", "李"] }),
  },
  {
    label: 'cnname({ count: 5, unique: true, surname: "关" })',
    value: cnname({ count: 5, unique: true, surname: "关" }),
  },
  {
    label: 'cnname({ count: 5, unique: true, givenName: ["小桐", "穗宁"] })',
    value: cnname({ count: 5, unique: true, givenName: ["小桐", "穗宁"] }),
  },
  {
    label: 'cnname({ count: 5, unique: true, givenName: "佳运" })',
    value: cnname({ count: 5, unique: true, givenName: "佳运" }),
  },
  {
    label: 'cnname({ count: 5, unique: true, givenNameAttributes: "male" })',
    value: cnname({ count: 5, unique: true, givenNameAttributes: "male" }),
  },
  {
    label: 'cnname({ count: 5, unique: true, givenNameAttributes: "female" })',
    value: cnname({ count: 5, unique: true, givenNameAttributes: "female" }),
  },
  {
    label: 'cnname({ count: 5, unique: true, givenNameAttributes: "metal" })',
    value: cnname({ count: 5, unique: true, givenNameAttributes: "metal" }),
  },
  {
    label: 'cnname({ count: 5, unique: true, givenNameAttributes: "wood" })',
    value: cnname({ count: 5, unique: true, givenNameAttributes: "wood" }),
  },
  {
    label: 'cnname({ count: 5, unique: true, givenNameAttributes: "water" })',
    value: cnname({ count: 5, unique: true, givenNameAttributes: "water" }),
  },
  {
    label: 'cnname({ count: 5, unique: true, givenNameAttributes: "fire" })',
    value: cnname({ count: 5, unique: true, givenNameAttributes: "fire" }),
  },
  {
    label: 'cnname({ count: 5, unique: true, givenNameAttributes: "earth" })',
    value: cnname({ count: 5, unique: true, givenNameAttributes: "earth" }),
  },
  {
    label: 'cnname({ count: 5, unique: true, givenNameAttributes: "animal" })',
    value: cnname({ count: 5, unique: true, givenNameAttributes: "animal" }),
  },
  {
    label: 'cnname({ count: 5, unique: true, givenNameAttributes: "all" })',
    value: cnname({ count: 5, unique: true, givenNameAttributes: "all" }),
  },
  {
    label: 'cnname({ count: 5, unique: true, givenNameAttributes: ["earth", "female"] })',
    value: cnname({ count: 5, unique: true, givenNameAttributes: ["earth", "female"] }),
  },
  {
    label: 'cnname({ count: 5, unique: true, givenNameAttributes: ["water", "fire"] })',
    value: cnname({ count: 5, unique: true, givenNameAttributes: ["water", "fire"] }),
  },
  {
    label: 'cnname({ count: 5, unique: true, gender: "female" })',
    value: cnname({ count: 5, unique: true, gender: "female" }),
  },
  {
    label: 'cnname({ count: 5, unique: true, elements: "fire" })',
    value: cnname({ count: 5, unique: true, elements: "fire" }),
  },
  {
    label: 'cnname({ count: 5, unique: true, elements: "earth", givenNameAttributes: "water" })',
    value: cnname({ count: 5, unique: true, elements: "earth", givenNameAttributes: "water" }),
  },
  {
    label: 'cnname({ count: 10, unique: true, surnamePickStrategy: "random" })',
    value: cnname({ count: 10, unique: true, surnamePickStrategy: 'random' }),
  },
  {
    label: 'cnname({ count: 10, unique: true, surnamePickStrategy: "weight" })',
    value: cnname({ count: 10, unique: true, surnamePickStrategy: 'weight' }),
  },
];
