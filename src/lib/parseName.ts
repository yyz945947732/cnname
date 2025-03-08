import type { ParseNameResult } from '../types';
import { getIsCompoundSurname, getIsSingleCharacterSurname } from '../utils';

/**
 * 解析姓名
 * @param {string} name 姓名
 * @returns {ParseNameResult} 解析结果
 */
function parseName(name: string): ParseNameResult {
  if (name.length === 0) {
    return {
      surname: '',
      givenName: '',
    };
  }

  if (name.length >= 3) {
    const isCompoundSurname = getIsCompoundSurname(name.slice(0, 2));
    if (isCompoundSurname) {
      return {
        surname: name.slice(0, 2),
        givenName: name.slice(2),
      };
    }
  }

  const isSingleCharacterSurname = getIsSingleCharacterSurname(
    name.slice(0, 1),
  );
  if (isSingleCharacterSurname) {
    return {
      surname: name.slice(0, 1),
      givenName: name.slice(1),
    };
  }

  return {
    surname: '',
    givenName: name,
  };
}

export default parseName;
