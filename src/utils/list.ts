import type { GivenNameAttribute, SurnameType } from '../types';
import {
  getAllAnimalWords,
  getAllCommonCompoundSurname,
  getAllCommonSingleCharacterSurname,
  getAllCommonSurname,
  getAllCompoundSurname,
  getAllEarthWords,
  getAllFemaleWords,
  getAllFireWords,
  getAllMaleWords,
  getAllMetalWords,
  getAllSingleCharacterSurname,
  getAllSurname,
  getAllWaterWords,
  getAllWoodWords,
  getAllWords,
} from './dict';

/**
 * @private
 * 根据 `surnameType` 获取所有姓氏
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
 * 根据 `givenNameAttribute` 获取所有名
 */
export function getGivenNameListByGivenNameAttribute(givenNameAttribute?: GivenNameAttribute): string[] {
  switch (givenNameAttribute) {
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
    case 'animal':
      return getAllAnimalWords();
    default:
      return getAllWords();
  }
}
