import { cnnamestr } from '../../dist/index.js';

export default [
  {
    label: 'cnnamestr()',
    value: cnnamestr(),
  },
  {
    label: 'cnnamestr("彭")',
    value: cnnamestr('彭'),
  },
  {
    label: 'cnnamestr(5)',
    value: cnnamestr(5),
  },
  {
    label: 'cnnamestr("姚", 5)',
    value: cnnamestr('姚', 5),
  },
  {
    label: 'cnnamestr({ count: 5 })',
    value: cnnamestr({ count: 5 }),
  },
  {
    label: 'cnnamestr({ count: 5, unique: true, duplicatedGivenNameOnly: true })',
    value: cnnamestr({ count: 5, unique: true, duplicatedGivenNameOnly: true }),
  }
];
