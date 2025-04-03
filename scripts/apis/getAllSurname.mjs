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
    label: 'getAllSurname("common", "compound")',
    value: getAllSurname('common', 'compound'),
  },
  {
    label: 'getAllSurname("common", "compound").length',
    value: getAllSurname('common', 'compound').length,
  },
  {
    label: 'getAllSurname("common", "single")',
    value: getAllSurname('common', 'single'),
  },
  {
    label: 'getAllSurname("common", "single").length',
    value: getAllSurname('common', 'single').length,
  },
  {
    label: 'getAllSurname().length',
    value: getAllSurname().length,
  },
  {
    label: 'getAllSurname("rare").length',
    value: getAllSurname('rare').length,
  },
  {
    label: 'getAllSurname("rare", "compound").length',
    value: getAllSurname('rare', 'compound').length,
  },
  {
    label: 'getAllSurname("rare", "single").length',
    value: getAllSurname('rare', 'single').length,
  },
];
