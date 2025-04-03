import type { SurnameRarity, SurnameType } from '../types';
import { getSurnameDictKey } from '../utils';
import { getSurnameListBySurnameDictKey } from '../utils/list';

/**
 * 获取所有姓氏
 * @param {SurnameRarity} surnameRarity 姓氏稀有度，`'all'` | `'common'` | `'rare'`，默认为 `common`。
 * @param {SurnameType} surnameType 姓氏类型，`'single'` | `'compound'`
 * @returns {string[]} 姓氏列表
 */
function getSurnameList(surnameRarity: SurnameRarity = 'all', surnameType?: SurnameType): string[] {
  const surnameDictKey = getSurnameDictKey(surnameRarity, surnameType);

  return getSurnameListBySurnameDictKey(surnameDictKey);
}

export default getSurnameList;
