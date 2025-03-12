import type { Algorithm, GivenNameType, Options, SurnameType } from '../types';
import {
  DEFAULT_GIVEN_NAME_TYPE,
  DEFAULT_SURNAME_ALGORITHM,
  DEFAULT_SURNAME_TYPE,
} from './default';
import {
  getAllCommonCompoundSurname,
  getAllCommonSingleCharacterSurname,
  getAllCommonSurname,
  getAllCompoundSurname,
  getAllFemaleWords,
  getAllMaleWords,
  getAllNormalWords,
  getAllSingleCharacterSurname,
  getAllSurname,
  getAllWords,
} from './dict';
import { getMaxSetSize } from './size';

/**
 * @private
 * 判断值是否存在姓氏中
 */
export function getIsSurname(surname: string): boolean {
  const allSurnames = getAllSurname();
  return allSurnames.some((item) => item === surname);
}

/**
 * @private
 * 判断值是否存在复姓中
 */
export function getIsCompoundSurname(surname: string): boolean {
  const allCompoundSurnames = getAllCompoundSurname();
  return allCompoundSurnames.some((item) => item === surname);
}

/**
 * @private
 * 判断值是否存在单字姓中
 */
export function getIsSingleCharacterSurname(surname: string): boolean {
  const allSingleCharacterSurnames = getAllSingleCharacterSurname();
  return allSingleCharacterSurnames.some((item) => item === surname);
}

/**
 * @private
 * 随机获取名
 */
export function pickRandomWords(
  givenNameType: GivenNameType = 'all',
  n = 1,
): string {
  if (givenNameType === 'all') {
    const words = getGivenNameListByGivenNameType(givenNameType);
    return pickRandomEle(words, n).join('');
  }
  return getGivenNameByGivenNameType(givenNameType, n);
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
export function pickDuplicatedGivenName(
  givenNameType: GivenNameType = 'all',
  len = 2,
  fixWord?: string,
): string {
  const num = Number.isInteger(len) ? len : 2;
  if (fixWord) {
    return fixWord.repeat(num);
  }
  const words = getGivenNameListByGivenNameType(givenNameType);
  const givenName = pickRandomSingleEle(words);
  const duplicatedGivenName = givenName.repeat(num);
  return duplicatedGivenName;
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
  const { part = 'fullName' } = options;

  let surname: string;
  let givenName: string;

  if (part !== 'givenName') {
    surname = getSurnameByOptions(options);
  }
  if (part !== 'surname') {
    givenName = getGivenNameByOptions(options);
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
 * 根据 `givenNameType` 获取所有名
 */
export function getGivenNameListByGivenNameType(
  givenNameType: GivenNameType = 'all',
): string[] {
  switch (givenNameType) {
    case 'all':
      return getAllWords();
    case 'male':
      return getAllMaleWords();
    case 'female':
      return getAllFemaleWords();
    default:
      return getAllWords();
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
  return pickFnMap[DEFAULT_SURNAME_ALGORITHM](array, n);
}

/**
 * @private
 *  打乱数组
 */
export function shuffle(array: string[]): string[] {
  let m = array.length;
  let t: string;
  let i: number;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

/**
 * @private
 * 根据 Options 获取 `surname` 的值
 */
export function getSurnameByOptions(options: Options): string {
  const {
    surnameType = DEFAULT_SURNAME_TYPE,
    surnameAlgorithm = DEFAULT_SURNAME_ALGORITHM,
    surname: fixedSurname,
  } = options;

  if (Array.isArray(fixedSurname)) {
    return safePickSingleEleByAlgorithm(fixedSurname, surnameAlgorithm);
  }

  if (fixedSurname !== undefined) {
    return fixedSurname;
  }

  return pickSurnameByAlgorithm(surnameType, surnameAlgorithm);
}

/**
 * @private
 * 根据 Options 获取 `givenName` 的值
 */
export function getGivenNameByOptions(options: Options): string {
  const {
    givenNameDuplicated = false,
    givenNameType = DEFAULT_GIVEN_NAME_TYPE,
    givenNameLength,
    givenNameStartsWith,
    givenNameEndsWith,
  } = options;

  const nameLength = Number.isInteger(givenNameLength)
    ? givenNameLength
    : Math.random() > 0.5
      ? 2
      : 1;

  let result = '';

  if (givenNameDuplicated) {
    return pickDuplicatedGivenName(
      givenNameType,
      givenNameLength,
      givenNameStartsWith || givenNameEndsWith,
    );
  }

  result = pickRandomWords(givenNameType, nameLength);

  if (givenNameStartsWith) {
    result = givenNameStartsWith + result.slice(1);
  }

  if (givenNameEndsWith) {
    result = result.slice(0, -1) + givenNameEndsWith;
  }

  return result;
}

/**
 * @private
 * 根据 `givenNameType` 获取名
 */
function getGivenNameByGivenNameType(
  givenNameType: GivenNameType,
  n = 1,
): string {
  const words = getGivenNameListByGivenNameType(givenNameType);
  const normalWords = getAllNormalWords();
  const result: string[] = [pickRandomSingleEle(words)];
  while (result.length < n) {
    if (Math.random() > 0.5) {
      result.push(pickRandomSingleEle(normalWords));
    } else {
      result.push(pickRandomSingleEle(words));
    }
  }
  return shuffle(result).join('');
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
function pickRandomSingleEle(array: string[]): string {
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
