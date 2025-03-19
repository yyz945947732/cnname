import type { Algorithm, GivenNameType, Options, SurnameType } from '../types';
import {
  DEFAULT_SURNAME_ALGORITHM,
  DEFAULT_SURNAME_TYPE,
  GIVEN_NAME_TYPE_PRIORITY,
} from './default';
import {
  getAllCommonCompoundSurname,
  getAllCommonSingleCharacterSurname,
  getAllCommonSurname,
  getAllCompoundSurname,
  getAllEarthWords,
  getAllFemaleWords,
  getAllFireWords,
  getAllMaleWords,
  getAllMetalWords,
  getAllNormalWords,
  getAllSingleCharacterSurname,
  getAllSurname,
  getAllWaterWords,
  getAllWoodWords,
  getAllWords,
} from './dict';
import { pickRandomEle, pickRandomSingleEle, safePickSingleEleByAlgorithm } from './random';
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
 * 判断值是否存在姓氏中
 */
export function getIsCommonSurname(surname: string): boolean {
  const allCommonSurnames = getAllCommonSurname();
  return allCommonSurnames.some((item) => item === surname);
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
export function pickRandomWords(n: number, givenNameTypes?: GivenNameType[]): string {
  if (givenNameTypes?.length) {
    return getGivenNameByGivenNameType(givenNameTypes, n);
  }
  const words = getAllWords();
  return pickRandomEle(words, n).join('');
}

/**
 * @private
 * 按随机算法获取姓氏
 */
export function pickSurnameByAlgorithm(surnameType: SurnameType, algorithm: Algorithm): string {
  const list = getSurnameListBySurnameType(surnameType);
  return safePickSingleEleByAlgorithm(list, algorithm);
}

/**
 * @private
 * 随机获取叠字名
 */
export function pickDuplicatedGivenName(
  givenNameTypes: GivenNameType[],
  len = 2,
  fixWord?: string,
): string {
  if (fixWord) return fixWord.repeat(len);
  const words = getGivenNameListByGivenNameType(givenNameTypes?.[0]);
  const givenName = pickRandomSingleEle(words);
  const duplicatedGivenName = givenName.repeat(len);
  return duplicatedGivenName;
}

/**
 * @private
 * 判断是否为叠字名
 */
export function getIsDuplicatedGivenName(givenName: string): boolean {
  return givenName.length > 1 && givenName.split('').every((char) => char === givenName[0]);
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
export function getSurnameListBySurnameType(surnameType: SurnameType): string[] {
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
export function getGivenNameListByGivenNameType(givenNameType?: GivenNameType): string[] {
  switch (givenNameType) {
    case 'male':
      return getAllMaleWords();
    case 'female':
      return getAllFemaleWords();
    case 'metal':
      return getAllMetalWords();
    case 'wood':
      return getAllWoodWords();
    case 'water':
      return getAllWaterWords();
    case 'fire':
      return getAllFireWords();
    case 'earth':
      return getAllEarthWords();
    default:
      return getAllWords();
  }
}

/**
 * @private
 * 处理 `{ part: 'surname', unique: 'true' }` 边缘情况的性能问题
 */
export function handleuUniqueSrunamePartEdgeCase(options: Options): string[] {
  const { surnameType = DEFAULT_SURNAME_TYPE, surname } = options;

  if (Array.isArray(surname)) {
    return surname;
  }

  if (surname !== undefined) {
    return [surname];
  }

  return getSurnameListBySurnameType(surnameType);
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

  const givenNameTypeList = getGivenNameTypeList(options);

  if (givenNameDuplicated) {
    return pickDuplicatedGivenName(
      givenNameTypeList,
      givenNameLength,
      givenNameStartsWith || givenNameEndsWith,
    );
  }

  result = pickRandomWords(nameLength, givenNameTypeList);

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
function getGivenNameByGivenNameType(givenNameTypes: GivenNameType[], n: number): string {
  const typeWords: string[] = [];
  const normalWords = getAllNormalWords();

  for (const givenNameType of givenNameTypes) {
    const words = getGivenNameListByGivenNameType(givenNameType);
    typeWords.push(pickRandomSingleEle(words));
  }

  const result = typeWords.slice(0, n);

  while (result.length < n) {
    if (Math.random() > 0.5) {
      result.push(pickRandomSingleEle(normalWords));
    } else {
      const type = pickRandomSingleEle(givenNameTypes) as unknown as GivenNameType;
      const words = getGivenNameListByGivenNameType(type);
      result.push(pickRandomSingleEle(words));
    }
  }
  return shuffle(result).join('');
}

/**
 * @private
 * 获取需支持的 givenNameType 属性列表
 */
export function getGivenNameTypeList(options: Options): GivenNameType[] {
  const { givenNameType } = options;
  const list: GivenNameType[] = [];

  for (const type of GIVEN_NAME_TYPE_PRIORITY) {
    if (options[type] !== undefined) {
      list.push(options[type]);
    }
  }

  if (!givenNameType) {
    return list;
  }

  if (Array.isArray(givenNameType)) {
    list.push(...givenNameType);
  }

  if (typeof givenNameType === 'string') {
    list.push(givenNameType);
  }

  return list;
}
