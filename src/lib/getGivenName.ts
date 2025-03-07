import { pickRandomWords } from '../utils';

/**
 * 返回随机名
 * @returns {string} 随机名
 */
function getGivenName(): string;

/**
 * 返回随机名
 * @param {number} num 随机个数
 * @returns {string[]} 随机名数组
 */
function getGivenName(num: number): string[];

function getGivenName(num?: number): string | string[] {
  let resultNum = num ?? 1;
  if (num < 0) {
    resultNum = 1;
  }
  const result = Array.from({ length: resultNum }, () => {
    const nameLength = Math.random() > 0.5 ? 2 : 1;
    const givenName = pickRandomWords(nameLength);
    return givenName;
  });

  return num === undefined ? result[0] : result;
}

export default getGivenName;
