import type { Options } from '../types/index';
import cnname from './cnname';

/**
 * 返回随机中文名
 * @returns {string} 随机中文名
 */
function cnnamestr(): string;

/**
 * 返回随机中文名
 * @param {number} num 随机个数
 * @returns {string} 一串随机中文名
 */
function cnnamestr(num: number): string;

/**
 * 返回随机中文名
 * @param {string} surname 姓氏
 * @returns {string} 随机中文名
 */
function cnnamestr(surname: string): string;

/**
 * 返回随机中文名
 * @param {string} surname 姓氏
 * @param {number} num 随机个数
 * @returns {string} 一串随机中文名
 */
function cnnamestr(surname: string, num: number): string;

/**
 * 返回随机中文名
 * @param {Options} options 高级配置
 * @returns {string} 一串随机中文名
 */
function cnnamestr(options: Options): string;

function cnnamestr(parameter1?: string | number | Options, parameter2?: number): string {
  const result = cnname(parameter1 as unknown as string, parameter2);
  if (Array.isArray(result)) {
    return result.join();
  }
  return result;
}

export default cnnamestr;
