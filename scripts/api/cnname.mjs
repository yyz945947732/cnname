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
    label: 'cnname({ count: 5, unique: true, duplicatedGivenNameOnly: true })',
    value: cnname({ count: 5, unique: true, duplicatedGivenNameOnly: true }),
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
    label: 'cnname({ count: 5, unique: true, part: "surname" })',
    value: cnname({ count: 5, unique: true, part: "surname" }),
  },
  {
    label: 'cnname({ count: 5, unique: true, part: "givenName" })',
    value: cnname({ count: 5, unique: true, part: "givenName" }),
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
    label: 'cnname({ count: 5, unique: true,  surname: ["张", "李"] })',
    value: cnname({ count: 5, unique: true, surname: ["张", "李"] }),
  },
];
