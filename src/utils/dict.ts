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

/** 所有常见姓氏 */
const COMMON_SURNAMES = commonSurnameDict.dict.split(' ');
/** 所有常见复姓 */
const COMMON_COMPOUND_SURNAMES = COMMON_SURNAMES.filter(
  (words) => words.length > 1,
);
/** 所有常见单字姓 */
const COMMON_SINGLE_CHARACTER_SURNAMES = COMMON_SURNAMES.filter(
  (words) => words.length === 1,
);

/** 所有名 */
const WORDS = getAllDictWords();
/** 所有女性名 */
const FEMALE_WORDS = wordsDict.female.split('');
/** 所有男性名 */
const MALE_WORDS = wordsDict.male.split('');
/** 所有中性名 */
const NORMAL_WORDS = wordsDict.normal.split('');

/** 金属性 */
const METAL_WORDS = wordsDict.metal.split('');
/** 木属性 */
const WOOD_WORDS = wordsDict.wood.split('');
/** 水属性 */
const WATER_WORDS = wordsDict.water.split('');
/** 火属性 */
const FIRE_WORDS = wordsDict.fire.split('');
/** 土属性 */
const EARTH_WORDS = wordsDict.earth.split('');

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
 * 获取所有常见姓
 */
export function getAllCommonSurname(): string[] {
  return COMMON_SURNAMES;
}

/**
 * @private
 * 获取所有常见复姓
 */
export function getAllCommonCompoundSurname(): string[] {
  return COMMON_COMPOUND_SURNAMES;
}

/**
 * @private
 * 获取所有常见单字姓
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
 * 获取所常见姓氏数量
 */
export function getAllCommonSurnameSize(): number {
  return COMMON_SURNAMES.length;
}

/**
 * @private
 * 获取所有常见复姓数量
 */
export function getAllCommonCompoundSurnameSize(): number {
  return COMMON_COMPOUND_SURNAMES.length;
}

/**
 * @private
 * 获取所常见单字姓数量
 */
export function getAllCommonSingleCharacterSurnameSize(): number {
  return COMMON_SINGLE_CHARACTER_SURNAMES.length;
}

/**
 * @private
 * 获取完整名字典
 */
export function getAllDictWords(): string[] {
  const list = Object.values(wordsDict);
  const result = [];
  for (const item of list) {
    result.push(...item.split(''));
  }
  const uniqueResult = Array.from(new Set(result));
  return uniqueResult;
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

/**
 * @private
 * 获取所有女性名
 */
export function getAllFemaleWords(): string[] {
  return FEMALE_WORDS;
}

/**
 * @private
 * 获取所有男性名
 */
export function getAllMaleWords(): string[] {
  return MALE_WORDS;
}

/**
 * @private
 * 获取所有中性名
 */
export function getAllNormalWords(): string[] {
  return NORMAL_WORDS;
}

/**
 * @private
 * 获取所有女性名数量
 */
export function getAllFemaleWordsSize(): number {
  return FEMALE_WORDS.length;
}

/**
 * @private
 * 获取所有男性名数量
 */
export function getAllMaleWordsSize(): number {
  return MALE_WORDS.length;
}

/**
 * @private
 * 获取所有金属性名
 */
export function getAllMetalWords(): string[] {
  return METAL_WORDS;
}

/**
 * @private
 * 获取所有木属性名
 */
export function getAllWoodWords(): string[] {
  return WOOD_WORDS;
}

/**
 * @private
 * 获取所有水属性名
 */
export function getAllWaterWords(): string[] {
  return WATER_WORDS;
}

/**
 * @private
 * 获取所有火属性名
 */
export function getAllFireWords(): string[] {
  return FIRE_WORDS;
}

/**
 * @private
 * 获取所有土属性名
 */
export function getAllEarthWords(): string[] {
  return EARTH_WORDS;
}

/**
 * @private
 * 获取所有金属性名数量
 */
export function getAllMetalWordsSize(): number {
  return METAL_WORDS.length;
}

/**
 * @private
 * 获取所有木属性名数量
 */
export function getAllWoodWordsSize(): number {
  return WOOD_WORDS.length;
}

/**
 * @private
 * 获取所有水属性名数量
 */
export function getAllWaterWordsSize(): number {
  return WATER_WORDS.length;
}

/**
 * @private
 * 获取所有火属性名数量
 */
export function getAllFireWordsSize(): number {
  return FIRE_WORDS.length;
}

/**
 * @private
 * 获取所有土属性名数量
 */
export function getAllEarthWordsSize(): number {
  return EARTH_WORDS.length;
}
