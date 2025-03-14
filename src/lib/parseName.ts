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
  if (!name) {
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

  let surname = '';
  let givenName = name;
  let isCompoundSurname = false;
  let isSingleCharacterSurname = false;

  if (name.length >= 3) {
    const potentialSurname = name.slice(0, 2);
    if (getIsCompoundSurname(potentialSurname)) {
      surname = potentialSurname;
      givenName = name.slice(2);
      isCompoundSurname = true;
    }
  }

  if (!isCompoundSurname) {
    const potentialSurname = name.slice(0, 1);
    if (getIsSingleCharacterSurname(potentialSurname)) {
      surname = potentialSurname;
      givenName = name.slice(1);
      isSingleCharacterSurname = true;
    }
  }

  const isGivenNameDuplicated = getIsDuplicatedGivenName(givenName);
  const isCommonSurname = getIsCommonSurname(surname);
  const givenNameLength = givenName.length;

  return {
    surname,
    givenName,
    givenNameLength,
    isCompoundSurname,
    isSingleCharacterSurname,
    isGivenNameDuplicated,
    isCommonSurname,
  };
}

export default parseName;
