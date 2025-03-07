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
    label: 'cnname({ count: 5, unique: true, repeatedGivenNameOnly: true })',
    value: cnname({ count: 5, unique: true, repeatedGivenNameOnly: true }),
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
    label: 'cnname({ count: 5, unique: true, nameType: "surname" })',
    value: cnname({ count: 5, unique: true, nameType: "surname" }),
  },
  {
    label: 'cnname({ count: 5, unique: true, nameType: "givenName" })',
    value: cnname({ count: 5, unique: true, nameType: "givenName" }),
  },
  {
    label: 'cnname({ count: 5, unique: true, surnameType: "single", givenNameLength: 1 })',
    value: cnname({ count: 5, unique: true, surnameType: "single", givenNameLength: 1 }),
  },
  {
    label: 'cnname({ count: 5, unique: true, surnameType: "compound", givenNameLength: 1 })',
    value: cnname({ count: 5, unique: true, surnameType: "compound", givenNameLength: 1 }),
  },
  {
    label: 'cnname({ count: 5, unique: true, onlyCommonSurname: true })',
    value: cnname({ count: 5, unique: true, onlyCommonSurname: true }),
  },
  {
    label: 'cnname({ count: 5, unique: true, onlyCommonSurname: true, nameType: "surname" })',
    value: cnname({ count: 5, unique: true, onlyCommonSurname: true, nameType: "surname" }),
  },
];
