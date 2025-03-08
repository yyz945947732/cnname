import { pickRandomSurname, pickRandomWords, isOptions, getSingleResult, getMaxSetSize } from '../utils';
import type { Options } from '../types/index';

/**
 * 返回随机中文名
 * @returns {string} 随机中文名
 */
function cnname(): string;

/**
 * 返回随机中文名
 * @param {number} num 随机个数
 * @returns {string[]} 随机中文名数组
 */
function cnname(num: number): string[];

/**
 * 返回随机中文名
 * @param {string} surname 姓氏
 * @returns {string} 随机中文名
 */
function cnname(surname: string): string;

/**
 * 返回随机中文名
 * @param {string} surname 姓氏
 * @param {number} num 随机个数
 * @returns {string} 随机中文名数组
 */
function cnname(surname: string, num: number): string[];

/**
 * 返回随机中文名
 * @param {Options} options 高级配置
 * @returns {string[]} 随机中文名数组
 */
function cnname(options: Options): string[];

function cnname(
  parameter1?: number | string | Options,
  parameter2?: number
): string | string[] {
  let num: number;
  let fixSurname = '';
  let single = false;
  if (isOptions(parameter1)) {
    return cnnameWithOptions(parameter1);
  }
  if (typeof parameter1 === 'string') {
    fixSurname = parameter1;
    num = parameter2;
  } else if (typeof parameter1 === 'number') {
    num = parameter1;
  }

  if (num === undefined) {
    num = 1;
    single = true;
  }

  if (num < 0) {
    num = 1;
  }

  const result = Array.from({ length: num }, () => {
    const surname = fixSurname || pickRandomSurname();
    const nameLength = Math.random() > 0.5 ? 2 : 1;
    const givenName = pickRandomWords(nameLength);
    return surname + givenName;
  });

  return single ? result[0] : result;
}

/**
 * `cnname(Options)` 处理高级配置
 * @param {number} num 随机个数
 * @returns {string[]} 随机中文名数组
 */
function cnnameWithOptions(options: Options): string[] {
  const {
    count = 1,
    unique = false,
  } = options;

  const num = count < 0 ? 0 : count;

  const result = Array.from({ length: num }, () => {
    return getSingleResult(options);
  });

  if (unique) {
    const uniqueResult = new Set<string>(result);
    const maxSetSize = getMaxSetSize(options);
    while (uniqueResult.size < num && uniqueResult.size < maxSetSize) {
      uniqueResult.add(getSingleResult(options));
    }
    return Array.from(uniqueResult);
  }

  return result;
}

export default cnname;
