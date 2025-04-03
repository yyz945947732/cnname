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

function getGivenName(parameter1?: number): string | string[] {
  let num = parameter1 ?? 1;

  if (num < 0) {
    num = 0;
  }

  const result = [];
  const single = parameter1 === undefined;

  for (let i = 0; i < num; i++) {
    const givenNameLen = Math.random() > 0.5 ? 2 : 1;
    const givenName = pickRandomWords(givenNameLen);
    result.push(givenName);
  }

  return single ? result[0] : result;
}

export default getGivenName;
