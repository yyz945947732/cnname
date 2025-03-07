import { pickRandomWords } from '../utils';

/**
 * 返回随机姓氏
 * @returns {string} 随机姓氏
 */
function getName(): string;

/**
 * 返回随机姓氏
 * @param {number} num 随机个数
 * @returns {string[]} 随机姓氏数组
 */
function getName(num: number): string[];

function getName(num?: number): string | string[] {
  if (num < 0) {
    num = 1;
  }
  const result = Array.from({ length: num ?? 1 }, () => {
    const nameLength = Math.random() > 0.5 ? 2 : 1;
    const name = pickRandomWords(nameLength);
    return name;
  });

  return num === undefined ? result[0] : result;
}

export default getName;
