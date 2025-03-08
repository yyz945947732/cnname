import { getAllSurname, getAllSingleCharacterSurname, getAllCompoundSurname, getAllCommonSurname, getAllCommonSingleCharacterSurname, getAllCommonCompoundSurname } from '../utils';
import type { SurnameType } from '../types';

/**
 * 获取所有姓氏
 * @param {SurnameType} surnameType 姓氏类型，`'all'` | `'single'` | `'compound'` | `'common'` | `'single-common'` | `'compound-common'`, 默认为 `all`
 * @returns {string[]} 获取所有姓氏
 */
function getSurnameList(surnameType: SurnameType = 'all'): string[] {
  switch (surnameType) {
    case 'all':
      return getAllSurname();
    case 'single':
      return getAllSingleCharacterSurname();
    case 'compound':
      return getAllCompoundSurname();
    case 'common':
      return getAllCommonSurname();
    case 'single-common':
      return getAllCommonSingleCharacterSurname();
    case 'compound-common':
      return getAllCommonCompoundSurname();
    default:
      return getAllSurname();
  }
}

export default getSurnameList;
