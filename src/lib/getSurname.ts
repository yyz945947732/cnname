import { pickSurnameByStrategy } from '../utils';
import { DEFAULT_SURNAME_PICK_STRATEGY, DEFAULT_SURNAME_RARITY } from '../utils/default';

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

function getSurname(parameter1?: number): string | string[] {
  let num = parameter1 ?? 1;

  if (num < 0) {
    num = 0;
  }

  const result = [];
  const single = parameter1 === undefined;

  for (let i = 0; i < num; i++) {
    const surname = pickSurnameByStrategy(DEFAULT_SURNAME_RARITY, DEFAULT_SURNAME_PICK_STRATEGY);
    result.push(surname);
  }

  return single ? result[0] : result;
}

export default getSurname;
