import type { Options } from '../types';
import { isOptions } from '../utils';
import getName from './getName';

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

/**
 * 返回随机名
 * @param {Options} options 高级配置
 * @returns {string[]} 随机名数组
 */
function getGivenName(options: Options): string[];

function getGivenName(parameter1?: number | Options): string | string[] {
  if (typeof parameter1 === 'number') {
    return getName({ returnType: 'givenName', count: parameter1 });
  }
  if (isOptions(parameter1)) {
    return getName({ ...parameter1, returnType: 'givenName' });
  }
  return getName({ returnType: 'givenName' })?.[0];
}

export default getGivenName;
