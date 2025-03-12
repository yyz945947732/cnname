import type { Options } from '../types/index';
import {
  getSingleResult,
  handleuUniqueSrunamePartEdgeCase,
  isOptions,
  pickRandomWords,
  pickSurnameByAlgorithm,
} from '../utils';
import {
  DEFAULT_SURNAME_ALGORITHM,
  DEFAULT_SURNAME_TYPE,
} from '../utils/default';
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

function cnname(
  parameter1?: number | string | Options,
  parameter2?: number,
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
    num = 0;
  }

  const result = Array.from({ length: num }, () => {
    const surname =
      fixSurname ||
      pickSurnameByAlgorithm(DEFAULT_SURNAME_TYPE, DEFAULT_SURNAME_ALGORITHM);
    const nameLength = Math.random() > 0.5 ? 2 : 1;
    const givenName = pickRandomWords('all', nameLength);
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
  const { count = 1, part = 'fullName', unique = false } = options;

  const num = count < 0 ? 0 : count;

  const result = Array.from({ length: num }, () => {
    return getSingleResult(options);
  }).filter(Boolean);

  if (unique) {
    const maxSetSize = getMaxSetSize(options);
    const uniqueResult = new Set<string>(result);

    // 由于姓氏数据样本量太少，考虑到性能问题直接返回全部数据
    if (part === 'surname' && num > maxSetSize) {
      const list = handleuUniqueSrunamePartEdgeCase(options);
      if (list) {
        return list;
      }
    }

    while (uniqueResult.size < num && uniqueResult.size < maxSetSize) {
      uniqueResult.add(getSingleResult(options));
    }
    return Array.from(uniqueResult);
  }

  return result;
}

export default cnname;
