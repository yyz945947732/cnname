import surnameDict from '../../dict/surnames.json';
import wordsDict from '../../dict/words.json';
import commonSurnameDict from '../../dict/commonSurname.json';
import type { Options } from '../types';

const SURNAMES = surnameDict.dict.split(' ');
const COMPOUND_SURNAMES = SURNAMES.filter((words) => words.length > 1);
const SINGLE_CHARACTER_SURNAMES = SURNAMES.filter((words) => words.length === 1);
const COMMON_SURNAMES = commonSurnameDict.dict.split(' ');
const COMMON_COMPOUND_SURNAMES = COMMON_SURNAMES.filter((words) => words.length > 1);
const COMMON_SINGLE_CHARACTER_SURNAMES = COMMON_SURNAMES.filter((words) => words.length === 1);
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
 * 随机获取姓氏
 */
export function pickRandomSurname(): string {
  return safePickRandomSingleEle(SURNAMES);
}

/**
 * @private
 * 随机获取复姓
 */
export function pickRandomCompoundSurname(): string {
  return safePickRandomSingleEle(COMPOUND_SURNAMES);
}

/**
 * @private
 * 随机获取单字姓
 */
export function pickRandomSingleCharacterSurname(): string {
  return safePickRandomSingleEle(SINGLE_CHARACTER_SURNAMES);
}

/**
 * @private
 * 随机获取常用姓
 */
export function pickRandomCommonSurname(): string {
  return safePickRandomSingleEle(COMMON_SURNAMES);
}

/**
 * @private
 * 随机获取常用复姓
 */
export function pickRandomCommonCompoundSurname(): string {
  return safePickRandomSingleEle(COMMON_COMPOUND_SURNAMES);
}

/**
 * @private
 * 随机获取常用单字姓
 */
export function pickRandomCommonSingleCharacterSurname(): string {
  return safePickRandomSingleEle(COMMON_SINGLE_CHARACTER_SURNAMES);
}

/**
 * @private
 * 随机获取叠字名
*/
export function pickDuplicatedGivenName(): string {
  const [givenName] = pickRandomEle(WORDS);
  return givenName + givenName;
}

/**
 * @private
 * 获取所有姓
 */
export function getAllSurname(): string[] {
  return SURNAMES;
}

/**
 * @private
 * 获取所有复姓
 */
export function getAllCompoundSurname(): string[] {
  return COMPOUND_SURNAMES;
}

/**
 * @private
 * 获取所有单字姓
 */
export function getAllSingleCharacterSurname(): string[] {
  return SINGLE_CHARACTER_SURNAMES;
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
  return SURNAMES.length;
}

/**
 * @private
 * 获取所有复姓数量
 */
export function getAllCompoundSurnameSize(): number {
  return COMPOUND_SURNAMES.length;
}

/**
 * @private
 * 获取所有单字姓数量
 */
export function getAllSingleCharacterSurnameSize(): number {
  return SINGLE_CHARACTER_SURNAMES.length;
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
  return SURNAMES.some((item) => item === surname);
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
    surnameType = 'all',
    nameType = 'full',
    duplicatedGivenNameOnly = false,
    givenNameLength,
    surname: fixedSurname,
  } = options;

  const surnamePickerMap = {
    all: pickRandomSurname,
    compound: pickRandomCompoundSurname,
    single: pickRandomSingleCharacterSurname,
    common: pickRandomCommonSurname,
    'single-common': pickRandomCommonSingleCharacterSurname,
    'compound-common': pickRandomCommonCompoundSurname,
  };

  const pickFn = surnamePickerMap[surnameType] ?? pickRandomSurname;
  const nameLength = Number.isInteger(givenNameLength) ? givenNameLength : Math.random() > 0.5 ? 2 : 1;

  let surname: string;
  let givenName: string;

  if (nameType !== 'givenName') {
    surname = Array.isArray(fixedSurname) ? safePickRandomSingleEle(fixedSurname) : (fixedSurname || pickFn());
  }
  if (nameType !== 'surname') {
    givenName = duplicatedGivenNameOnly ? pickDuplicatedGivenName() : pickRandomWords(nameLength);
  }

  switch (nameType) {
    case 'full': return surname + givenName;
    case 'surname': return surname;
    case 'givenName': return givenName;
    default: return surname + givenName;
  }
}

/**
 * @private
 * 根据高级配置获取集合最大大小
*/
export function getMaxSetSize(options: Options): number {
  const {
    surnameType = 'all',
    nameType = 'full',
    duplicatedGivenNameOnly = false,
    surname,
  } = options;

  const MAX_ALL_SURNAME_SIZE = getAllSurnameSize();
  const MAX_COMPOUND_SURNAME_SIZE = getAllCompoundSurnameSize();
  const MAX_SINGLE_CHARACTER_SURNAME_SIZE = getAllSingleCharacterSurnameSize();
  const MAX_COMMON_SURNAME_SIZE = getAllCommonSurnameSize();
  const MAX_COMMON_COMPOUND_SURNAME_SIZE = getAllCommonCompoundSurnameSize();
  const MAX_COMMON_SINGLE_CHARACTER_SURNAME_SIZE = getAllCommonSingleCharacterSurnameSize();
  const MAX_WORD_SIZE = getAllWordeSize();

  const MAX_SURNAME_SIZE_MAP = {
    all: MAX_ALL_SURNAME_SIZE,
    compound: MAX_COMPOUND_SURNAME_SIZE,
    single: MAX_SINGLE_CHARACTER_SURNAME_SIZE,
    common: MAX_COMMON_SURNAME_SIZE,
    'single-common': MAX_COMMON_SINGLE_CHARACTER_SURNAME_SIZE,
    'compound-common': MAX_COMMON_COMPOUND_SURNAME_SIZE,
  };

  const MAX_SURNAME_SIZE = MAX_SURNAME_SIZE_MAP[surnameType] ?? MAX_ALL_SURNAME_SIZE;

  if (nameType !== 'surname') {
    return duplicatedGivenNameOnly ? MAX_WORD_SIZE : Number.MAX_SAFE_INTEGER;
  }

  if (Array.isArray(surname)) {
    return surname.length > 0 ? surname.length : 1;
  }

  if (surname !== undefined) {
    return 1;
  }

  return MAX_SURNAME_SIZE;
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
 * 安全的从数组中随机选取 1 个元素
*/
function safePickRandomSingleEle(array: string[]): string {
  if (!array || !array.length) {
    return '';
  }
  return pickRandomEle(array, 1)[0];
}

/**
 * @private
 * 从数组中随机选取 n 个元素
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
