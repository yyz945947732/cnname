import type { GivenNameAttribute, PickStrategy, SurnameRarity } from '../types';

/**
 * @private
 * 默认姓氏稀有度 `surnameRarity`
 */
export const DEFAULT_SURNAME_RARITY: SurnameRarity = 'common';

/**
 * @private
 * 默认姓氏抽取策略 `surnamePickStrategy`
 */
export const DEFAULT_SURNAME_PICK_STRATEGY: PickStrategy = 'weight';

/**
 * @private
 * 名字特性的优先级顺序，决定如何筛选名字
 */
export const GIVEN_NAME_ATTRIBUTE_PRIORITY = ['wuxing', 'gender'] as const;

/**
 * @private
 * 以下类型的名字最好只包含一个特性字
 */
export const GIVEN_NAME_INCLUDE_ONE_CHARACTER_ATTRIBUTE: GivenNameAttribute[] = ['animal'];

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
