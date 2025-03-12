import type { Algorithm, GivenNameType, SurnameType } from '../types';

/**
 * @private
 * 默认 `surnameType`
 */
export const DEFAULT_SURNAME_TYPE: SurnameType = 'common';

/**
 * @private
 * 默认 `givenNameType`
 */
export const DEFAULT_GIVEN_NAME_TYPE: GivenNameType = 'all';

/**
 * @private
 * 默认 `surnameAlgorithm`
 */
export const DEFAULT_SURNAME_ALGORITHM: Algorithm = 'weight';
