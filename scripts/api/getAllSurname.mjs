import { getAllSurname } from '../../dist/index.js';

export default [
  {
    label: 'getAllSurname("common")',
    value: getAllSurname('common'),
  },
  {
    label: 'getAllSurname("common").length',
    value: getAllSurname('common').length,
  },
  {
    label: 'getAllSurname("compound-common")',
    value: getAllSurname('compound-common'),
  },
  {
    label: 'getAllSurname("compound-common").length',
    value: getAllSurname('compound-common').length,
  },
  {
    label: 'getAllSurname("single-common")',
    value: getAllSurname('single-common'),
  },
  {
    label: 'getAllSurname("single-common").length',
    value: getAllSurname('single-common').length,
  },
];
