import { getAllSurnames } from '../../dist/index.js';

export default [
  {
    label: 'getAllSurnames("common")',
    value: getAllSurnames('common'),
  },
  {
    label: 'getAllSurnames("common").length',
    value: getAllSurnames('common').length,
  },
  {
    label: 'getAllSurnames("common", "compound")',
    value: getAllSurnames('common', 'compound'),
  },
  {
    label: 'getAllSurnames("common", "compound").length',
    value: getAllSurnames('common', 'compound').length,
  },
  {
    label: 'getAllSurnames("common", "single")',
    value: getAllSurnames('common', 'single'),
  },
  {
    label: 'getAllSurnames("common", "single").length',
    value: getAllSurnames('common', 'single').length,
  },
  {
    label: 'getAllSurnames().length',
    value: getAllSurnames().length,
  },
  {
    label: 'getAllSurnames("rare").length',
    value: getAllSurnames('rare').length,
  },
  {
    label: 'getAllSurnames("rare", "compound").length',
    value: getAllSurnames('rare', 'compound').length,
  },
  {
    label: 'getAllSurnames("rare", "single").length',
    value: getAllSurnames('rare', 'single').length,
  },
];
