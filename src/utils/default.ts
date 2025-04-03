import type { GivenNameAttribute, PickStrategy, SurnameType } from '../types';

/**
 * @private
 * 默认 `surnameType`
 */
export const DEFAULT_SURNAME_TYPE: SurnameType = 'common';

/**
 * @private
 * 默认 `surnamePickStrategy`
 */
export const DEFAULT_SURNAME_PICK_STRATEGY: PickStrategy = 'weight';

/**
 * @private
 * 名字属性的优先级顺序，决定如何筛选名字
 */
export const GIVEN_NAME_TYPE_PRIORITY = ['elements', 'gender'] as const;

/**
 * @private
 * 以下类型的名字最好只包含一个字
 */
export const GIVEN_NAME_INCLUDE_ONE_CHARACTER_TYPE: GivenNameAttribute[] = ['animal'];

/**
 * @private
 * 常见单姓固定数量
 */
export const COMMON_SINGLE_CHARACTER_SURNAMES_TOTAL: number = 150;

/**
 * @private
 * 常见复姓固定数量
 */
export const COMMON_COMPOUND_SURNAMES_TOTAL: number = 12;
