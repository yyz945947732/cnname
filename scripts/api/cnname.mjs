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
];
