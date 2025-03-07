import surnameDict from '../../dict/surnames.json';
import wordsDict from '../../dict/words.json';

const SURNAMES = surnameDict.dict.split(' ');
const COMPOUND_SURNAMES = surnameDict.dict
  .split(' ')
  ?.filter((words) => words.length > 1);
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
  const [surname] = pickRandomEle(SURNAMES);
  return surname;
}

/**
 * @private
 * 随机获取复姓
 */
export function pickRandomCompoundSurname(): string {
  const [surname] = pickRandomEle(COMPOUND_SURNAMES);
  return surname;
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
 * 判断值是否存在姓氏中
 */
export function getIsSurname(surname: string): boolean {
  return SURNAMES.some((item) => item === surname);
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
