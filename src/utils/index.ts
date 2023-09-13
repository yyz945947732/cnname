import wordsDict from '../../dict/words.json';
import surnameDict from '../../dict/surnames.json';

/**
 * @private
 * 随机获取名
 */
export function pickRandomWords(n = 1): string {
  const words = wordsDict.dict;
  return pickRandomEle(words.split(''), n).join('');
}

/**
 * @private
 * 随机获取姓氏
 */
export function pickRandomSurname(): string {
  const surnames = surnameDict.dict;
  const [surname] = pickRandomEle(surnames.split(' '));
  return surname;
}

/**
 * @private
 * 获取数组范围内随机数
 */
function randomNumber(a: number, b: number): number {
  return a + Math.round(Math.random() * (b - a));
}

/**
 * @private
 * 从数组中随机选取 n 个元素
 */
function pickRandomEle(array: string[], n = 1): string[] {
  /* istanbul ignore if -- @preserve */
  if (!array || array.length === 0 || n === 0) {
    return [];
  }

  const result = [];
  const length = array.length;
  while (result.length < n) {
    const i = randomNumber(0, length - 1);
    result.push(array[i]);
  }

  return result;
}
