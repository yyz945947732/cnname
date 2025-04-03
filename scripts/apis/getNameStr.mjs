import { getNameStr } from '../../dist/index.js';

export default [
  {
    label: 'getNameStr()',
    value: getNameStr(),
  },
  {
    label: 'getNameStr("彭")',
    value: getNameStr('彭'),
  },
  {
    label: 'getNameStr(5)',
    value: getNameStr(5),
  },
  {
    label: 'getNameStr("姚", 5)',
    value: getNameStr('姚', 5),
  },
  {
    label: 'getNameStr({ count: 5 })',
    value: getNameStr({ count: 5 }),
  },
  {
    label: 'getNameStr({ count: 5, unique: true, givenNameDuplicated: true })',
    value: getNameStr({ count: 5, unique: true, givenNameDuplicated: true }),
  }
];
