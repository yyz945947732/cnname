import { parseName } from '../../dist/index.js';

export default [
  {
    label: 'parseName("张三")',
    value: JSON.stringify(parseName('张三')),
  },
  {
    label: 'parseName("笑三")',
    value: JSON.stringify(parseName('笑三')),
  },
  {
    label: 'parseName("三")',
    value: JSON.stringify(parseName('三')),
  },
  {
    label: 'parseName("")',
    value: JSON.stringify(parseName('')),
  },
  {
    label: 'parseName("欧阳三")',
    value: JSON.stringify(parseName('欧阳三')),
  },
];
