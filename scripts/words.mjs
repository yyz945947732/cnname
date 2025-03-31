import { createRequire } from "module";
import { updateExample } from './utils/index.mjs';

const normalWordDict = createRequire(import.meta.url)("../dict/words/normal.json");
const attributesWordDict = createRequire(import.meta.url)("../dict/words/attributes.json");

const attributesNameMap = {
  female: '女性',
  male: '男性',
  metal: '金',
  wood: '木',
  water: '水',
  fire: '火',
  earth: '土',
  animal: '动物'
};

const attributes = Object.keys(attributesWordDict);

const renderWords = words => words.split('').join(' ');

const attributesPreview = attributes
  .map(
    (attribute) =>
      `
## ${attributesNameMap[attribute]}

${renderWords(attributesWordDict[attribute])}
`
  )
  .join('');

const preview = `# 取名用字

## 普通

${renderWords(normalWordDict.normal)}
${attributesPreview}`;

updateExample(preview, 'words');