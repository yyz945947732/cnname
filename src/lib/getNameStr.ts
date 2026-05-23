import type { Options } from '../types/index';
import getName from './getName';

/**
 * 返回随机中文名
 * @returns {string} 随机中文名
 */
function getNameStr(): string;

/**
 * 返回随机中文名
 * @param {number} num 随机个数
 * @returns {string} 一串随机中文名
 */
function getNameStr(num: number): string;

/**
 * 返回随机中文名
 * @param {string} surname 姓氏
 * @returns {string} 随机中文名
 */
function getNameStr(surname: string): string;

/**
 * 返回随机中文名
 * @param {string} surname 姓氏
 * @param {number} num 随机个数
 * @returns {string} 一串随机中文名
 */
function getNameStr(surname: string, num: number): string;

/**
 * 返回随机中文名
 * @param {Options} options 高级配置
 * @returns {string} 一串随机中文名
 */
function getNameStr(options: Options): string;

function getNameStr(parameter1?: string | number | Options, parameter2?: number): string {
  let result: string | string[];

  if (typeof parameter1 === 'string' && parameter2 !== undefined) {
    result = getName(parameter1, parameter2);
  } else if (typeof parameter1 === 'string') {
    result = getName(parameter1);
  } else if (typeof parameter1 === 'number') {
    result = getName(parameter1);
  } else if (parameter1) {
    result = getName(parameter1);
  } else {
    result = getName();
  }

  return Array.isArray(result) ? result.join() : result;
}

export default getNameStr;
