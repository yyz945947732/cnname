import type { GivenNameType, Options, SurnameType } from '../types';
import { DEFAULT_GIVEN_NAME_TYPE, DEFAULT_SURNAME_TYPE } from './default';
import {
  getAllCommonCompoundSurnameSize,
  getAllCommonSingleCharacterSurnameSize,
  getAllCommonSurnameSize,
  getAllCompoundSurnameSize,
  getAllFemaleWordsSize,
  getAllMaleWordsSize,
  getAllSingleCharacterSurnameSize,
  getAllSurnameSize,
  getAllWordeSize,
} from './dict';

/**
 * @private
 * 根据高级配置获取集合最大大小
 */
export function getMaxSetSize(options: Options): number {
  const { part = 'fullName' } = options;

  const maxSurnameNum = getSurnamePartMaxSize(options);
  const maxGivenNameNum = getGivenNamePartMaxSize(options);

  if (part === 'surname') {
    return maxSurnameNum;
  }

  if (part === 'givenName') {
    return maxGivenNameNum;
  }

  return maxSurnameNum * maxGivenNameNum;
}

/**
 * @private
 * 计算 `part` 为 `surname` 时，集合大小
 */
function getSurnamePartMaxSize(options: Options): number {
  const { surnameType = DEFAULT_SURNAME_TYPE, surname } = options;
  const MAX_SURNAME_SIZE = getListSizeBySurnameType(surnameType);
  if (Array.isArray(surname)) {
    const uniqueSurname = Array.from(new Set(surname));
    return uniqueSurname.length;
  }
  if (surname !== undefined) {
    return 1;
  }
  return MAX_SURNAME_SIZE;
}

/**
 * @private
 * 计算 `part` 为 `givenName` 时，集合大小
 */
function getGivenNamePartMaxSize(options: Options): number {
  const {
    givenNameType = DEFAULT_GIVEN_NAME_TYPE,
    givenNameLength,
    givenNameDuplicated,
    givenNameStartsWith,
    givenNameEndsWith,
  } = options;
  let len = givenNameLength || 2;
  if (givenNameDuplicated) {
    return 1;
  }
  if (givenNameStartsWith) {
    len -= 1;
  }
  if (givenNameEndsWith) {
    len -= 1;
  }
  if (len <= 0) {
    return 1;
  }
  if (len === 1) {
    return getListSizeByGivenNameType(givenNameType);
  }
  return Number.MAX_SAFE_INTEGER;
}

/**
 * @private
 * 根据 `surnameType` 获取集合大小
 */
function getListSizeBySurnameType(surnameType: SurnameType): number {
  const MAX_ALL_SURNAME_SIZE = getAllSurnameSize();
  const MAX_ALL_COMPOUND_SURNAME_SIZE = getAllCompoundSurnameSize();
  const MAX_ALL_SINGLE_CHARACTER_SURNAME_SIZE =
    getAllSingleCharacterSurnameSize();
  const MAX_COMMON_SURNAME_SIZE = getAllCommonSurnameSize();
  const MAX_COMMON_COMPOUND_SURNAME_SIZE = getAllCommonCompoundSurnameSize();
  const MAX_COMMON_SINGLE_CHARACTER_SURNAME_SIZE =
    getAllCommonSingleCharacterSurnameSize();

  const MAX_SURNAME_SIZE_MAP: Record<SurnameType, number> = {
    all: MAX_ALL_SURNAME_SIZE,
    'all-compound': MAX_ALL_COMPOUND_SURNAME_SIZE,
    'all-single': MAX_ALL_SINGLE_CHARACTER_SURNAME_SIZE,
    common: MAX_COMMON_SURNAME_SIZE,
    'common-single': MAX_COMMON_SINGLE_CHARACTER_SURNAME_SIZE,
    'common-compound': MAX_COMMON_COMPOUND_SURNAME_SIZE,
  };

  return MAX_SURNAME_SIZE_MAP[surnameType] ?? MAX_ALL_SURNAME_SIZE;
}

/**
 * @private
 * 根据 `givenNameType` 获取集合大小
 */
function getListSizeByGivenNameType(givenNameType: GivenNameType): number {
  const MAX_ALL_GIVEN_NAME_SIZE = getAllWordeSize();
  const MAX_MALE_GIVEN_NAME_SIZE = getAllMaleWordsSize();
  const MAX_FEMALE_GIVEN_NAME_SIZE = getAllFemaleWordsSize();

  const MAX_GIVEN_NAME_SIZE_MAP: Record<GivenNameType, number> = {
    all: MAX_ALL_GIVEN_NAME_SIZE,
    male: MAX_MALE_GIVEN_NAME_SIZE,
    female: MAX_FEMALE_GIVEN_NAME_SIZE,
  };

  return MAX_GIVEN_NAME_SIZE_MAP[givenNameType] ?? MAX_ALL_GIVEN_NAME_SIZE;
}
