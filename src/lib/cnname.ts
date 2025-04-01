import type { Options } from '../types/index';
import { getSingleResult, isOptions, pickRandomWords, pickSurnameByAlgorithm } from '../utils';
import { DEFAULT_SURNAME_ALGORITHM, DEFAULT_SURNAME_TYPE } from '../utils/default';
import { getMaxSetSize } from '../utils/size';

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

function cnname(parameter1?: number | string | Options, parameter2?: number): string | string[] {
  let num: number;
  let fixSurname = undefined;
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
    num = 0;
  }

  const result = [];

  for (let i = 0; i < num; i++) {
    const surname = fixSurname ?? pickSurnameByAlgorithm(DEFAULT_SURNAME_TYPE, DEFAULT_SURNAME_ALGORITHM);
    const nameLength = Math.random() > 0.5 ? 2 : 1;
    const givenName = pickRandomWords(nameLength);
    const fullname = surname + givenName;
    result.push(fullname);
  }

  return single ? result[0] : result;
}

/**
 * `cnname(Options)` 处理高级配置
 * @param {number} num 随机个数
 * @returns {string[]} 随机中文名数组
 */
function cnnameWithOptions(options: Options): string[] {
  const { count = 1, unique = false } = options;

  if (count <= 0) return [];

  if (unique) {
    const maxSetSize = getMaxSetSize(options);
    const uniqueResult = new Set<string>();
    const size = Math.min(count, maxSetSize);

    while (uniqueResult.size < size) {
      uniqueResult.add(getSingleResult(options));
    }
    return Array.from(uniqueResult);
  }

  const result = [];

  for (let i = 0; i < count; i++) {
    result.push(getSingleResult(options));
  }

  return result;
}

export default cnname;
