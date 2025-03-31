import { createRequire } from "module";
import { getAllSurname } from '../dist/index.js';
import { updateExample } from './utils/index.mjs';

const localAllSurnames = createRequire(import.meta.url)("../dict/surnames/all.json");

const allSurnames = localAllSurnames.dict.split(' ');

const allSingle = allSurnames.filter(surname => surname.length === 1);
const allCompound =  allSurnames.filter(surname => surname.length > 1);

const allCommonSingle = getAllSurname('common-single');
const allCommonCompound = getAllSurname('common-compound');

const allRareSingle = allSingle?.filter(surname => !allCommonSingle?.includes(surname));
const allRareCompound = allCompound?.filter(surname => !allCommonCompound?.includes(surname));
const renderSurnames = (surnames) => {
  return surnames.join(' ');
};

const surnames = `# 姓氏分类

## 常见单姓

${renderSurnames(allCommonSingle)}

## 常见复姓

${renderSurnames(allCommonCompound)}

## 冷门单姓

${renderSurnames(allRareSingle)}

## 冷门复姓

${renderSurnames(allRareCompound)}
`;

updateExample(surnames, 'classify');