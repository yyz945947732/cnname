import { assertType, describe, expect, test } from 'vitest';
import cnname from '../../src';
import { getAllFemaleWords, getAllMaleWords } from '../../src/utils/dict';

const allMaleWords = getAllMaleWords();
const allFemaleWords = getAllFemaleWords();

assertType<string[]>(cnname({ count: 5, gender: 'male' }));
assertType<string[]>(cnname({ count: 5, gender: 'female' }));

describe('cnname.options.gender', () => {
  test('cnname({ count: 5, unique: true, gender: "male" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, gender: 'male' })).toHaveLength(5);
  });
  test('cnname({ count: 5, gender: "male", givenNameLength: 2 }) should return array with male given name', () => {
    const data = cnname({ count: 5, gender: 'male', givenNameLength: 2 });
    const result = data.map((name) => allMaleWords.includes(name[0]) || allMaleWords.includes(name[1]));
    expect(result).toBeTruthy();
  });
  test('cnname({ count: 5, unique: true, gender: "female" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, gender: 'female' })).toHaveLength(5);
  });
  test('cnname({ count: 5, gender: "female", givenNameLength: 2 }) should return array with female given name', () => {
    const data = cnname({ count: 5, gender: 'female', givenNameLength: 2 });
    const result = data.map((name) => allFemaleWords.includes(name[0]) || allFemaleWords.includes(name[1]));
    expect(result).toBeTruthy();
  });
});
