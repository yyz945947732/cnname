import { getName } from '../dist/index.js';
import { updateExample } from './utils/index.mjs';

const 主角 = getName();
const 反派 = getName('张');

const novel = `# 第 1 章 千人围攻

"${主角}，你已经被我们围攻了！！！"

${反派}的厉啸从身后传来，随着尖锐的破空声，一声利箭没入${主角}身旁的黄土墙。

${主角}心头微凉，定睛一看。

只见阴暗的密林四处，已经隐隐约约钻出千道黑色人影。

他们分别是：

${getName(1000).join('，')}。
`;

updateExample(novel, 'novel');
