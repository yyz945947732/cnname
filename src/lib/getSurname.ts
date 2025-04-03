import type { Options } from '../types';
import { isOptions } from '../utils';
import getName from './getName';

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

/**
 * 返回随机姓氏
 * @param {Options} options 高级配置
 * @returns {string[]} 随机姓氏数组
 */
function getSurname(options: Options): string[];

function getSurname(parameter1?: number | Options): string | string[] {
  if (typeof parameter1 === 'number') {
    return getName({ returnType: 'surname', count: parameter1 });
  }
  if (isOptions(parameter1)) {
    return getName({ ...parameter1, returnType: 'surname' });
  }
  return getName({ returnType: 'surname' })?.[0];
}

export default getSurname;
