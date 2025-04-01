import type { Algorithm } from '../types';
import { DEFAULT_SURNAME_ALGORITHM } from './default';

/**
 * @private
 * 通过算法从数组中随机选取 n 个元素
 */
export function pickEleByAlgorithm(array: string[], algorithm: Algorithm, n: number): string[] {
  const pickFnMap = {
    weight: pickWeightEle,
    random: pickRandomEle,
  };

  const pickFn = pickFnMap[algorithm];

  if (pickFn) {
    return pickFn(array, n);
  }

  return pickFnMap[DEFAULT_SURNAME_ALGORITHM](array, n);
}

/**
 * @private
 * 获取数组范围内随机数
 */
export function randomNumber(a: number, b: number): number {
  return Math.floor(Math.random() * (b - a + 1));
}

/**
 * @private
 * 通过算法安全的从数组中随机选取 1 个元素
 */
export function safePickSingleEleByAlgorithm(array: string[], algorithm: Algorithm): string {
  if (!array.length) {
    return '';
  }
  return pickEleByAlgorithm(array, algorithm, 1)[0];
}

/**
 * @private
 * 通过随机算法安全的从数组中随机选取 1 个元素
 */
export function pickRandomSingleEle(array: string[]): string {
  return safePickSingleEleByAlgorithm(array, 'random');
}

/**
 * @private
 * 通过纯随机算法从数组中随机选取 n 个元素
 */
export function pickRandomEle(array: string[], n: number): string[] {
  /* istanbul ignore if -- @preserve */
  if (!array.length || n <= 0) return [];

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
export function pickWeightEle(array: string[], n: number): string[] {
  /* istanbul ignore if -- @preserve */
  if (!array.length || n <= 0) return [];

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
