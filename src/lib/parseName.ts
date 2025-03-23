import type { NameDetail } from '../types';
import {
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
      fullName: '',
      givenNameLength: 0,
      isCompoundSurname: false,
      isSingleCharacterSurname: false,
      isGivenNameDuplicated: false,
    };
  }

  let surname = '';
  let givenName = name;
  const fullName = name;
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
  const givenNameLength = givenName.length;

  return {
    surname,
    givenName,
    fullName,
    givenNameLength,
    isCompoundSurname,
    isSingleCharacterSurname,
    isGivenNameDuplicated,
  };
}

export default parseName;
