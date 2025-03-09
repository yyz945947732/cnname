import type { SurnameType } from '../types';
import { getSurnameListBySurnameType } from '../utils';

/**
 * 获取所有姓氏
 * @param {SurnameType} surnameType 姓氏类型，`'all'` | `'single'` | `'compound'` | `'common'` | `'single-common'` | `'compound-common'`, 默认为 `all`
 * @returns {string[]} 获取所有姓氏
 */
function getSurnameList(surnameType: SurnameType = 'all'): string[] {
  return getSurnameListBySurnameType(surnameType);
}

export default getSurnameList;
