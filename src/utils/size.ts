import type { GivenNameType, Options, SurnameType } from '../types';
import { DEFAULT_SURNAME_TYPE } from './default';
import {
  getAllAnimalWordsSize,
  getAllCommonCompoundSurnameSize,
  getAllCommonSingleCharacterSurnameSize,
  getAllCommonSurnameSize,
  getAllCompoundSurnameSize,
  getAllEarthWordsSize,
  getAllFemaleWordsSize,
  getAllFireWordsSize,
  getAllMaleWordsSize,
  getAllMetalWordsSize,
  getAllSingleCharacterSurnameSize,
  getAllSurnameSize,
  getAllWaterWordsSize,
  getAllWoodWordsSize,
  getAllWordsSize,
} from './dict';
import { getGivenNameTypeList } from './index';

/**
 * @private
 * 根据高级配置获取集合最大大小
 */
export function getMaxSetSize(options: Options): number {
  const { returnType = 'fullName' } = options;

  const maxSurnameNum = getSurnamePartMaxSize(options);
  const maxGivenNameNum = getGivenNamePartMaxSize(options);

  if (returnType === 'surname') {
    return maxSurnameNum;
  }

  if (returnType === 'givenName') {
    return maxGivenNameNum;
  }

  return maxSurnameNum * maxGivenNameNum;
}

/**
 * @private
 * 计算 `returnType` 为 `surname` 时，集合大小
 */
function getSurnamePartMaxSize(options: Options): number {
  const { surnameType = DEFAULT_SURNAME_TYPE, surname, returnType } = options;
  if (Array.isArray(surname)) {
    return Math.max(new Set(surname).size, returnType === 'surname' ? 0 : 1);
  }
  if (surname !== undefined) {
    return 1;
  }
  return getListSizeBySurnameType(surnameType);
}

/**
 * @private
 * 计算 `returnType` 为 `givenName` 时，集合大小
 */
function getGivenNamePartMaxSize(options: Options): number {
  const { givenNameLength, givenNameDuplicated, givenNameStartsWith, givenNameEndsWith, givenName, returnType } =
    options;

  if (Array.isArray(givenName)) {
    return Math.max(new Set(givenName).size, returnType === 'givenName' ? 0 : 1);
  }
  if (givenName !== undefined || givenNameDuplicated) {
    return 1;
  }

  let len = givenNameLength || 2;

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
    const givenNameTypeList = getGivenNameTypeList(options);
    return getListSizeByGivenNameType(givenNameTypeList?.[0]);
  }
  return Number.MAX_SAFE_INTEGER;
}

/**
 * @private
 * 根据 `surnameType` 获取集合大小
 */
function getListSizeBySurnameType(surnameType: SurnameType): number {
  const MAX_SURNAME_SIZE_MAP: Record<SurnameType, number> = {
    all: getAllSurnameSize(),
    'all-compound': getAllCompoundSurnameSize(),
    'all-single': getAllSingleCharacterSurnameSize(),
    common: getAllCommonSurnameSize(),
    'common-single': getAllCommonSingleCharacterSurnameSize(),
    'common-compound': getAllCommonCompoundSurnameSize(),
  };

  return MAX_SURNAME_SIZE_MAP[surnameType] ?? MAX_SURNAME_SIZE_MAP.all;
}

/**
 * @private
 * 根据 `givenNameType` 获取集合大小
 */
function getListSizeByGivenNameType(givenNameType: GivenNameType): number {
  const MAX_ALL_GIVEN_NAME_SIZE = getAllWordsSize();

  const MAX_GIVEN_NAME_SIZE_MAP: Record<GivenNameType, number> = {
    male: getAllMaleWordsSize(),
    female: getAllFemaleWordsSize(),
    metal: getAllMetalWordsSize(),
    wood: getAllWoodWordsSize(),
    water: getAllWaterWordsSize(),
    fire: getAllFireWordsSize(),
    earth: getAllEarthWordsSize(),
    animal: getAllAnimalWordsSize(),
  };

  return MAX_GIVEN_NAME_SIZE_MAP[givenNameType] ?? MAX_ALL_GIVEN_NAME_SIZE;
}
