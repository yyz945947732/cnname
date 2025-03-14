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
    label: 'getAllSurname("common-compound")',
    value: getAllSurname('common-compound'),
  },
  {
    label: 'getAllSurname("common-compound").length',
    value: getAllSurname('common-compound').length,
  },
  {
    label: 'getAllSurname("common-single")',
    value: getAllSurname('common-single'),
  },
  {
    label: 'getAllSurname("common-single").length',
    value: getAllSurname('common-single').length,
  },
];
