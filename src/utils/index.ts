import type { GivenNameAttribute, Options, PickStrategy, SurnameType } from '../types';
import {
  DEFAULT_SURNAME_PICK_STRATEGY,
  DEFAULT_SURNAME_TYPE,
  GIVEN_NAME_INCLUDE_ONE_CHARACTER_ATTRIBUTE,
  GIVEN_NAME_TYPE_PRIORITY,
} from './default';
import {
  getAllCompoundSurname,
  getAllNormalWords,
  getAllSingleCharacterSurname,
  getAllSurname,
  getAllWords,
} from './dict';
import { getGivenNameListByGivenNameAttribute, getSurnameListBySurnameType } from './list';
import { pickRandomEle, pickRandomSingleEle, safePickSingleEleByStrategy } from './random';

/**
 * @private
 * 判断值是否存在姓氏中
 */
export function getIsSurname(surname: string): boolean {
  const set = new Set(getAllSurname());
  return set.has(surname);
}

/**
 * @private
 * 判断值是否存在复姓中
 */
export function getIsCompoundSurname(surname: string): boolean {
  const set = new Set(getAllCompoundSurname());
  return set.has(surname);
}

/**
 * @private
 * 判断值是否存在单字姓中
 */
export function getIsSingleCharacterSurname(surname: string): boolean {
  const set = new Set(getAllSingleCharacterSurname());
  return set.has(surname);
}

/**
 * @private
 * 随机获取名
 */
export function pickRandomWords(n: number, givenNameAttributes?: GivenNameAttribute[]): string {
  if (givenNameAttributes?.length) {
    return getGivenNameByGivenNameAttribute(givenNameAttributes, n);
  }
  const words = getAllWords();
  return pickRandomEle(words, n).join('');
}

/**
 * @private
 * 按随机算法获取姓氏
 */
export function pickSurnameByStrategy(surnameType: SurnameType, strategy: PickStrategy): string {
  const list = getSurnameListBySurnameType(surnameType);
  return safePickSingleEleByStrategy(list, strategy);
}

/**
 * @private
 * 随机获取叠字名
 */
export function pickDuplicatedGivenName(givenNameAttribute: GivenNameAttribute[], len = 2, fixWord?: string): string {
  if (fixWord) return fixWord.repeat(len);
  const words = getGivenNameListByGivenNameAttribute(givenNameAttribute?.[0]);
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
    Object.prototype.toString.call(value) === '[object Object]' && Object.getPrototypeOf(value) === Object.prototype
  );
}

/**
 * @private
 * 根据高级配置获取单个结果
 */
export function getSingleResult(options: Options): string {
  const { returnType = 'fullName' } = options;

  let surname: string;
  let givenName: string;

  if (returnType !== 'givenName') {
    surname = getSurnameByOptions(options);
  }
  if (returnType !== 'surname') {
    givenName = getGivenNameByOptions(options);
  }

  switch (returnType) {
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
 * 判断是否为汉字
 */
export function isCnChar(word: string): boolean {
  if (word.length === 1) {
    return !!word.match(/[\u4e00-\u9fa5]/);
  }
  return word.match(/[\u4e00-\u9fa5]/g)?.join('').length === word.length;
}

/**
 * @private
 * 根据 Options 获取 `surname` 的值
 */
export function getSurnameByOptions(options: Options): string {
  const {
    surnameType = DEFAULT_SURNAME_TYPE,
    surnamePickStrategy = DEFAULT_SURNAME_PICK_STRATEGY,
    surname: fixedSurname,
  } = options;

  if (Array.isArray(fixedSurname)) {
    return safePickSingleEleByStrategy(fixedSurname, surnamePickStrategy);
  }

  if (fixedSurname !== undefined) {
    return fixedSurname;
  }

  return pickSurnameByStrategy(surnameType, surnamePickStrategy);
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
    givenName: fixGivenName,
  } = options;

  if (Array.isArray(fixGivenName)) {
    return safePickSingleEleByStrategy(fixGivenName, 'random');
  }

  if (fixGivenName !== undefined) {
    return fixGivenName;
  }

  const nameLength = Number.isInteger(givenNameLength) ? givenNameLength : Math.random() > 0.5 ? 2 : 1;

  let result = '';

  const givenNameAttributeList = getGivenNameAttributeList(options);

  if (givenNameDuplicated) {
    return pickDuplicatedGivenName(givenNameAttributeList, givenNameLength, givenNameStartsWith || givenNameEndsWith);
  }

  result = pickRandomWords(nameLength, givenNameAttributeList);

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
 * 根据 `givenNameAttribute` 获取名
 */
function getGivenNameByGivenNameAttribute(givenNameAttributes: GivenNameAttribute[], n: number): string {
  const typeWords: string[] = [];
  const normalWords = getAllNormalWords();

  for (const givenNameAttribute of givenNameAttributes) {
    const words = getGivenNameListByGivenNameAttribute(givenNameAttribute);
    typeWords.push(pickRandomSingleEle(words));
  }

  const result = typeWords.slice(0, n);

  while (result.length < n) {
    if (Math.random() > 0.5) {
      result.push(pickRandomSingleEle(normalWords));
    } else {
      const type = pickRandomSingleEle(givenNameAttributes) as unknown as GivenNameAttribute;
      if (!GIVEN_NAME_INCLUDE_ONE_CHARACTER_ATTRIBUTE.includes(type)) {
        const words = getGivenNameListByGivenNameAttribute(type);
        result.push(pickRandomSingleEle(words));
      }
    }
  }
  return shuffle(result).join('');
}

/**
 * @private
 * 获取需支持的 givenNameAttribute 特性列表
 */
export function getGivenNameAttributeList(options: Options): GivenNameAttribute[] {
  const { givenNameAttributes } = options;
  const list: GivenNameAttribute[] = [];

  for (const type of GIVEN_NAME_TYPE_PRIORITY) {
    if (options[type] !== undefined) {
      list.push(options[type]);
    }
  }

  if (!givenNameAttributes) {
    return list;
  }

  if (Array.isArray(givenNameAttributes)) {
    list.push(...givenNameAttributes);
  }

  if (typeof givenNameAttributes === 'string') {
    list.push(givenNameAttributes);
  }

  return list;
}
