import { getAllSurname } from '../dist/index.js';
import { updateExample } from './utils/index.mjs';

const surnames = getAllSurname();

const surnamesPreview = surnames
  .map(
    (item) =>
      `

## [${item}](https://baike.baidu.com/item/${item}姓)`
  )
  .join('');

const preview = `
# 姓氏大全${surnamesPreview}
`;

updateExample(preview, 'surnames');
