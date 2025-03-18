import type { Algorithm, SurnameType } from '../types';

/**
 * @private
 * 默认 `surnameType`
 */
export const DEFAULT_SURNAME_TYPE: SurnameType = 'common';

/**
 * @private
 * 默认 `surnameAlgorithm`
 */
export const DEFAULT_SURNAME_ALGORITHM: Algorithm = 'weight';

/**
 * @private
 * 名字属性的优先级顺序，决定如何筛选名字
 * `elements` (五行) > `gender` (性别)
 */
export const GIVEN_NAME_TYPE_PRIORITY = ['elements', 'gender'] as const;
