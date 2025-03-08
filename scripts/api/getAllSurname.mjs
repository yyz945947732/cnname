import { getAllSurname } from '../../dist/index.js';

export default [
  {
    label: 'getAllSurname("common")',
    value: getAllSurname('common'),
  },
  {
    label: 'getAllSurname("compound-common")',
    value: getAllSurname('compound-common'),
  },
  {
    label: 'getAllSurname("single-common")',
    value: getAllSurname('single-common'),
  },
];
