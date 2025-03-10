import allSurnameDict from '../../dict/allSurnames.json';
import commonSurnameDict from '../../dict/commonSurname.json';
import wordsDict from '../../dict/words.json';
import type { Algorithm, Options, SurnameType } from '../types';
import { DEFAULT_ALGORITHM, DEFAULT_SURNAME_TYPE } from './default';

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
 * 随机获取名
 */
export function pickRandomWords(n = 1): string {
  return pickRandomEle(WORDS, n).join('');
}

/**
 * @private
 * 按随机算法获取姓氏
 */
export function pickSurnameByAlgorithm(
  surnameType: SurnameType,
  algorithm: Algorithm,
): string {
  const list = getSurnameListBySurnameType(surnameType);
  return safePickSingleEleByAlgorithm(list, algorithm);
}

/**
 * @private
 * 随机获取叠字名
 */
export function pickDuplicatedGivenName(len = 2): string {
  const num = Number.isInteger(len) ? len : 2;
  const givenName = safePickSingleEleByRandom(WORDS);
  const duplicatedGivenName = givenName.repeat(num);
  return duplicatedGivenName;
}

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
 * 获取所有名数量
 */
export function getAllWordeSize(): number {
  return WORDS.length;
}

/**
 * @private
 * 判断值是否存在姓氏中
 */
export function getIsSurname(surname: string): boolean {
  return ALL_SURNAMES.some((item) => item === surname);
}

/**
 * @private
 * 判断值是否存在复姓中
 */
export function getIsCompoundSurname(surname: string): boolean {
  return ALL_COMPOUND_SURNAMES.some((item) => item === surname);
}

/**
 * @private
 * 判断值是否存在单字姓中
 */
export function getIsSingleCharacterSurname(surname: string): boolean {
  return ALL_SINGLE_CHARACTER_SURNAMES.some((item) => item === surname);
}

/**
 * @private
 * 判断值为配置对象
 */
export function isOptions(value: unknown): value is Options {
  return (
    Object.prototype.toString.call(value) === '[object Object]' &&
    Object.getPrototypeOf(value) === Object.prototype
  );
}

/**
 * @private
 * 根据高级配置获取单个结果
 */
export function getSingleResult(options: Options): string {
  const {
    part = 'fullName',
    surnameType = DEFAULT_SURNAME_TYPE,
    algorithm = DEFAULT_ALGORITHM,
    duplicatedGivenNameOnly = false,
    givenNameLength,
    surname: fixedSurname,
  } = options;

  const nameLength = Number.isInteger(givenNameLength)
    ? givenNameLength
    : Math.random() > 0.5
      ? 2
      : 1;

  let surname: string;
  let givenName: string;

  if (part !== 'givenName') {
    surname = Array.isArray(fixedSurname)
      ? safePickSingleEleByAlgorithm(fixedSurname, algorithm)
      : fixedSurname || pickSurnameByAlgorithm(surnameType, algorithm);
  }
  if (part !== 'surname') {
    givenName = duplicatedGivenNameOnly
      ? pickDuplicatedGivenName(givenNameLength)
      : pickRandomWords(nameLength);
  }

  switch (part) {
    case 'fullName':
      return surname + givenName;
    case 'surname':
      return surname;
    case 'givenName':
      return givenName;
    default:
      return surname + givenName;
  }
}

/**
 * @private
 * 根据高级配置获取集合最大大小
 */
export function getMaxSetSize(options: Options): number {
  const {
    surnameType = 'all',
    part = 'fullName',
    duplicatedGivenNameOnly = false,
    surname,
  } = options;

  const MAX_ALL_SURNAME_SIZE = getAllSurnameSize();
  const MAX_ALL_COMPOUND_SURNAME_SIZE = getAllCompoundSurnameSize();
  const MAX_ALL_SINGLE_CHARACTER_SURNAME_SIZE =
    getAllSingleCharacterSurnameSize();
  const MAX_COMMON_SURNAME_SIZE = getAllCommonSurnameSize();
  const MAX_COMMON_COMPOUND_SURNAME_SIZE = getAllCommonCompoundSurnameSize();
  const MAX_COMMON_SINGLE_CHARACTER_SURNAME_SIZE =
    getAllCommonSingleCharacterSurnameSize();
  const MAX_WORD_SIZE = getAllWordeSize();

  const MAX_SURNAME_SIZE_MAP: Record<SurnameType, number> = {
    all: MAX_ALL_SURNAME_SIZE,
    'all-compound': MAX_ALL_COMPOUND_SURNAME_SIZE,
    'all-single': MAX_ALL_SINGLE_CHARACTER_SURNAME_SIZE,
    common: MAX_COMMON_SURNAME_SIZE,
    'common-single': MAX_COMMON_SINGLE_CHARACTER_SURNAME_SIZE,
    'common-compound': MAX_COMMON_COMPOUND_SURNAME_SIZE,
  };

  const MAX_SURNAME_SIZE =
    MAX_SURNAME_SIZE_MAP[surnameType] ?? MAX_ALL_SURNAME_SIZE;

  if (part !== 'surname') {
    return duplicatedGivenNameOnly ? MAX_WORD_SIZE : Number.MAX_SAFE_INTEGER;
  }

  if (Array.isArray(surname)) {
    return surname.length;
  }

  if (surname !== undefined) {
    return 1;
  }

  return MAX_SURNAME_SIZE;
}

/**
 * @private
 * 获取所有姓氏
 */
export function getSurnameListBySurnameType(
  surnameType: SurnameType = 'all',
): string[] {
  switch (surnameType) {
    case 'all':
      return getAllSurname();
    case 'all-single':
      return getAllSingleCharacterSurname();
    case 'all-compound':
      return getAllCompoundSurname();
    case 'common':
      return getAllCommonSurname();
    case 'common-single':
      return getAllCommonSingleCharacterSurname();
    case 'common-compound':
      return getAllCommonCompoundSurname();
    default:
      return getAllSurname();
  }
}

/**
 * @private
 * 处理 `{ part: 'surname', unique: 'true' }` 边缘情况的性能问题
 */
export function handleuUniqueSrunamePartEdgeCase(
  options: Options,
): string[] | undefined {
  const {
    count = 1,
    surnameType = DEFAULT_SURNAME_TYPE,
    unique = false,
    part = 'fullName',
    surname,
  } = options;

  const list = getSurnameListBySurnameType(surnameType);
  const maxSetSize = getMaxSetSize(options);

  /* istanbul ignore if -- @preserve */
  if (!unique || part !== 'surname' || count <= maxSetSize) {
    return;
  }

  if (Array.isArray(surname)) {
    return surname;
  }

  if (surname !== undefined) {
    return [surname];
  }

  return list;
}

/**
 * @private
 * 通过算法从数组中随机选取 n 个元素
 */
export function pickEleByAlgorithm(
  array: string[],
  algorithm: Algorithm,
  n = 1,
): string[] {
  const pickFnMap = {
    weight: pickWeightEle,
    random: pickRandomEle,
  };

  const pickFn = pickFnMap[algorithm];

  if (pickFn) {
    return pickFn(array, n);
  }

  /* istanbul ignore next -- @preserve */
  return pickFnMap[DEFAULT_ALGORITHM](array, n);
}

/**
 * @private
 * 获取数组范围内随机数
 */
function randomNumber(a: number, b: number): number {
  return Math.floor(Math.random() * (b - a + 1));
}

/**
 * @private
 * 通过算法安全的从数组中随机选取 1 个元素
 */
function safePickSingleEleByAlgorithm(
  array: string[],
  algorithm: Algorithm,
): string {
  if (!array || !array.length) {
    return '';
  }
  return pickEleByAlgorithm(array, algorithm, 1)[0];
}

/**
 * @private
 * 通过随机算法安全的从数组中随机选取 1 个元素
 */
function safePickSingleEleByRandom(array: string[]): string {
  return safePickSingleEleByAlgorithm(array, 'random');
}

/**
 * @private
 * 通过纯随机算法从数组中随机选取 n 个元素
 */
function pickRandomEle(array: string[], n = 1): string[] {
  /* istanbul ignore if -- @preserve */
  if (!array || !array.length || n <= 0) return [];

  const result = [];
  const length = array.length;
  while (result.length < n) {
    const i = randomNumber(0, length - 1);
    result.push(array[i]);
  }

  return result;
}

/**
 * @private
 * 通过权重算法从数组中随机选取 n 个元素
 */
function pickWeightEle(array: string[], n = 1): string[] {
  /* istanbul ignore if -- @preserve */
  if (!array || !array.length || n <= 0) return [];

  const len = array.length;
  const totalWeight = (len * (len + 1)) / 2;
  const result: string[] = [];

  while (result.length < n) {
    let random = Math.random() * totalWeight;
    let index = 0;
    let weight = len;

    while (random >= weight) {
      random -= weight;
      index++;
      weight--;
    }

    result.push(array[index]);
  }

  return result;
}
