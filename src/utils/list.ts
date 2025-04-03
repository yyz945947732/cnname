import type { GivenNameAttribute, SurnameDictKey } from '../types';
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
  getAllRareCompoundSurname,
  getAllRareSingleCharacterSurname,
  getAllRareSurname,
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
export function getSurnameListBySurnameDictKey(surnameDictKey: SurnameDictKey): string[] {
  switch (surnameDictKey) {
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
    case 'rare':
      return getAllRareSurname();
    case 'rare-single':
      return getAllRareSingleCharacterSurname();
    case 'rare-compound':
      return getAllRareCompoundSurname();
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
