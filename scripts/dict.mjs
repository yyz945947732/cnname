import { createRequire } from "module";
import { getAllSurname } from '../dist/index.js';
import { updateFile } from './utils/index.mjs';

const localAllSurnames = createRequire(import.meta.url)("../dict/surnames/all.json");

const allSurnames = localAllSurnames.dict.split(' ');

const allSingle = allSurnames.filter(surname => surname.length === 1);
const allCompound = allSurnames.filter(surname => surname.length > 1);

const allCommonSingle = getAllSurname('common-single');
const allCommonCompound = getAllSurname('common-compound');

const allRareSingle = allSingle?.filter(surname => !allCommonSingle?.includes(surname));
const allRareCompound = allCompound?.filter(surname => !allCommonCompound?.includes(surname));

const rare = {
  single: allRareSingle.join(' '),
  compound: allRareCompound.join(' ')
};

const renderJson = JSON.stringify(rare, null, 2);

updateFile(renderJson, '../../dict/surnames/rare.json');