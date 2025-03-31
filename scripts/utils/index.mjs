import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

/**
 * 更新文件夹对应文件
 * @param {string} content 内容
 * @param {string} filePath 文件路径
*/
export function updateFile(content, filePath) {
  const __filename = fileURLToPath(import.meta.url);

  const __dirname = path.dirname(__filename);

  const resolvePath = path.resolve(__dirname, filePath);

  writeFileSync(resolvePath, content, 'utf-8');

  console.log(`${resolvePath} 更新成功！`);
}

/**
 * 更新 example 文件夹对应文件
 * @param {string} content 内容
 * @param {string} filename 文件名
 */
export function updateExample(content, filename) {
  updateFile(content, `../../example/${filename}.md`);
}
