import cnname from '../dist/index.es.js';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const 主角名字 = cnname();
const 反派名字 = cnname('张');

const novel = `
# 第 1 章 千人围攻

"${主角名字}，你已经被我们围攻了！！！"

${反派名字}的厉啸从身后传来，随着尖锐的破空声，一声利箭没入${主角名字}身旁的黄土墙。

${主角名字}心头微凉，定睛一看。

只见阴暗的密林四处，已经隐隐约约钻出千道黑色人影。

他们分别是：

${cnname(1000).join('，')}
`;

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const novelPath = path.resolve(__dirname, '../example/novel.md');

writeFileSync(novelPath, novel, 'utf-8');

console.log('写入成功！');
