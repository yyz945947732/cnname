import type { GivenNameAttribute, Options, SurnameDictKey, SurnameType } from '../types';
import { DEFAULT_SURNAME_RARITY } from './default';
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
  getAllRareCompoundSurnameSize,
  getAllRareSingleCharacterSurnameSize,
  getAllRareSurnameSize,
  getAllSingleCharacterSurnameSize,
  getAllSurnameSize,
  getAllWaterWordsSize,
  getAllWoodWordsSize,
  getAllWordsSize,
} from './dict';
import { getGivenNameAttributeList, getSurnameDictKey } from './index';

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
  const { surnameRarity = DEFAULT_SURNAME_RARITY, surnameType, surname, returnType } = options;
  if (Array.isArray(surname)) {
    return Math.max(new Set(surname).size, returnType === 'surname' ? 0 : 1);
  }
  if (surname !== undefined) {
    return 1;
  }
  const surnameDictKey = getSurnameDictKey(surnameRarity, surnameType);
  return getListSizeBySurnameDictKey(surnameDictKey);
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
    const givenNameAttributeList = getGivenNameAttributeList(options);
    return getListSizeByGivenNameAttribute(givenNameAttributeList?.[0]);
  }
  return Number.MAX_SAFE_INTEGER;
}

/**
 * @private
 * 根据 `surnameType` 获取集合大小
 */
function getListSizeBySurnameDictKey(surnameDictKey: SurnameDictKey): number {
  const MAX_SURNAME_SIZE_MAP: Record<SurnameDictKey, number> = {
    all: getAllSurnameSize(),
    'all-compound': getAllCompoundSurnameSize(),
    'all-single': getAllSingleCharacterSurnameSize(),
    common: getAllCommonSurnameSize(),
    'common-single': getAllCommonSingleCharacterSurnameSize(),
    'common-compound': getAllCommonCompoundSurnameSize(),
    rare: getAllRareSurnameSize(),
    'rare-compound': getAllRareCompoundSurnameSize(),
    'rare-single': getAllRareSingleCharacterSurnameSize(),
  };

  return MAX_SURNAME_SIZE_MAP[surnameDictKey] ?? MAX_SURNAME_SIZE_MAP.all;
}

/**
 * @private
 * 根据 `givenNameAttribute` 获取集合大小
 */
function getListSizeByGivenNameAttribute(givenNameAttribute: GivenNameAttribute): number {
  const MAX_ALL_GIVEN_NAME_SIZE = getAllWordsSize();

  const MAX_GIVEN_NAME_SIZE_MAP: Record<GivenNameAttribute, number> = {
    male: getAllMaleWordsSize(),
    female: getAllFemaleWordsSize(),
    metal: getAllMetalWordsSize(),
    wood: getAllWoodWordsSize(),
    water: getAllWaterWordsSize(),
    fire: getAllFireWordsSize(),
    earth: getAllEarthWordsSize(),
    animal: getAllAnimalWordsSize(),
  };

  return MAX_GIVEN_NAME_SIZE_MAP[givenNameAttribute] ?? MAX_ALL_GIVEN_NAME_SIZE;
}
