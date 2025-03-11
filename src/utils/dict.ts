import allSurnameDict from '../../dict/allSurnames.json';
import commonSurnameDict from '../../dict/commonSurname.json';
import wordsDict from '../../dict/words.json';

/** 所有姓氏 */
const ALL_SURNAMES = allSurnameDict.dict.split(' ');
/** 所有复姓 */
const ALL_COMPOUND_SURNAMES = ALL_SURNAMES.filter((words) => words.length > 1);
/** 所有单字姓 */
const ALL_SINGLE_CHARACTER_SURNAMES = ALL_SURNAMES.filter(
  (words) => words.length === 1,
);
/** 所有常用姓氏 */
const COMMON_SURNAMES = commonSurnameDict.dict.split(' ');
/** 所有常用复姓 */
const COMMON_COMPOUND_SURNAMES = COMMON_SURNAMES.filter(
  (words) => words.length > 1,
);
/** 所有常用单字姓 */
const COMMON_SINGLE_CHARACTER_SURNAMES = COMMON_SURNAMES.filter(
  (words) => words.length === 1,
);
/** 所有名 */
const WORDS = wordsDict.dict.split('');

/**
 * @private
 * 获取所有姓
 */
export function getAllSurname(): string[] {
  return ALL_SURNAMES;
}

/**
 * @private
 * 获取所有复姓
 */
export function getAllCompoundSurname(): string[] {
  return ALL_COMPOUND_SURNAMES;
}

/**
 * @private
 * 获取所有单字姓
 */
export function getAllSingleCharacterSurname(): string[] {
  return ALL_SINGLE_CHARACTER_SURNAMES;
}

/**
 * @private
 * 获取所有常用姓
 */
export function getAllCommonSurname(): string[] {
  return COMMON_SURNAMES;
}

/**
 * @private
 * 获取所有常用复姓
 */
export function getAllCommonCompoundSurname(): string[] {
  return COMMON_COMPOUND_SURNAMES;
}

/**
 * @private
 * 获取所有常用单字姓
 */
export function getAllCommonSingleCharacterSurname(): string[] {
  return COMMON_SINGLE_CHARACTER_SURNAMES;
}

/**
 * 获取所有姓氏数量
 */
export function getAllSurnameSize(): number {
  return ALL_SURNAMES.length;
}

/**
 * @private
 * 获取所有复姓数量
 */
export function getAllCompoundSurnameSize(): number {
  return ALL_COMPOUND_SURNAMES.length;
}

/**
 * @private
 * 获取所有单字姓数量
 */
export function getAllSingleCharacterSurnameSize(): number {
  return ALL_SINGLE_CHARACTER_SURNAMES.length;
}

/**
 * @private
 * 获取所有常用姓氏数量
 */
export function getAllCommonSurnameSize(): number {
  return COMMON_SURNAMES.length;
}

/**
 * @private
 * 获取所有常用复姓数量
 */
export function getAllCommonCompoundSurnameSize(): number {
  return COMMON_COMPOUND_SURNAMES.length;
}

/**
 * @private
 * 获取所有常用单字姓数量
 */
export function getAllCommonSingleCharacterSurnameSize(): number {
  return COMMON_SINGLE_CHARACTER_SURNAMES.length;
}

/**
 * @private
 * 获取所有名
 */
export function getAllWords(): string[] {
  return WORDS;
}

/**
 * @private
 * 获取所有名数量
 */
export function getAllWordeSize(): number {
  return WORDS.length;
}
