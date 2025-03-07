import { pickRandomSurname } from '../utils';

/**
 * 返回随机姓氏
 * @returns {string} 随机姓氏
 */
function getSurname(): string;

/**
 * 返回随机姓氏
 * @param {number} num 随机个数
 * @returns {string[]} 随机姓氏数组
 */
function getSurname(num: number): string[];

function getSurname(num?: number): string | string[] {
  let resultNum = num ?? 1;
  if (num < 0) {
    resultNum = 1;
  }
  const result = Array.from({ length: resultNum }, () => {
    const surname = pickRandomSurname();
    return surname;
  });
  return num === undefined ? result[0] : result;
}

export default getSurname;
