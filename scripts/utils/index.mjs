import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

/**
 * 更新 example 文件夹对应文件
 * @param {string} content 内容
 * @param {string} filename 文件名
 */
export function updateExample(content, filename) {
  const __filename = fileURLToPath(import.meta.url);

  const __dirname = path.dirname(__filename);

  const examplePath = path.resolve(__dirname, `../../example/${filename}.md`);

  writeFileSync(examplePath, content, 'utf-8');

  console.log(`${filename}.md 更新成功！`);
}
