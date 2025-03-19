import type { SurnameType } from '../types';
import { getSurnameListBySurnameType } from '../utils/list';

/**
 * 获取所有姓氏
 * @param {SurnameType} surnameType 姓氏类型，`'all'` | `'all-single'` | `'all-compound'` | `'common'` | `'common-single'` | `'common-compound'`, 默认为 `all`
 * @returns {string[]} 获取所有姓氏
 */
function getSurnameList(surnameType: SurnameType = 'all'): string[] {
  return getSurnameListBySurnameType(surnameType);
}

export default getSurnameList;
