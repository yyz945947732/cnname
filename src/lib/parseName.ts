import type { NameDetail } from '../types';
import {
  getIsCommonSurname,
  getIsCompoundSurname,
  getIsDuplicatedGivenName,
  getIsSingleCharacterSurname,
} from '../utils';

/**
 * 解析姓名
 * @param {string} name 姓名
 * @returns {NameDetail} 详细姓名信息
 */
function parseName(name: string): NameDetail {
  if (name.length === 0) {
    return {
      surname: '',
      givenName: '',
      givenNameLength: 0,
      isCompoundSurname: false,
      isSingleCharacterSurname: false,
      isGivenNameDuplicated: false,
      isCommonSurname: false,
    };
  }

  if (name.length >= 3) {
    const givenName = name.slice(2);
    const surname = name.slice(0, 2);
    const isCompoundSurname = getIsCompoundSurname(surname);
    if (isCompoundSurname) {
      const isGivenNameDuplicated = getIsDuplicatedGivenName(givenName);
      const isCommonSurname = getIsCommonSurname(surname);
      return {
        surname,
        givenName: name.slice(2),
        givenNameLength: name.length - 2,
        isCompoundSurname: true,
        isSingleCharacterSurname: false,
        isGivenNameDuplicated,
        isCommonSurname,
      };
    }
  }

  const surname = name.slice(0, 1);
  const isSingleCharacterSurname = getIsSingleCharacterSurname(surname);
  if (isSingleCharacterSurname) {
    const givenName = name.slice(1);
    const isCommonSurname = getIsCommonSurname(surname);
    const isGivenNameDuplicated = getIsDuplicatedGivenName(givenName);
    return {
      surname,
      givenName,
      givenNameLength: name.length - 1,
      isCompoundSurname: false,
      isSingleCharacterSurname: true,
      isGivenNameDuplicated,
      isCommonSurname,
    };
  }

  return {
    surname: '',
    givenName: name,
    givenNameLength: name.length,
    isCompoundSurname: false,
    isSingleCharacterSurname: false,
    isGivenNameDuplicated: false,
    isCommonSurname: false,
  };
}

export default parseName;
