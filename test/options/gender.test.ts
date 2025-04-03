import { getName } from '@/src';
import { getAllFemaleWords, getAllMaleWords } from '@/src/utils/dict';
import { assertType, describe, expect, test } from 'vitest';

const allMaleWords = getAllMaleWords();
const allFemaleWords = getAllFemaleWords();

assertType<string[]>(getName({ count: 5, gender: 'male' }));
assertType<string[]>(getName({ count: 5, gender: 'female' }));

describe('getName.options.gender', () => {
  test('getName({ count: 5, unique: true, gender: "male" }) should return array with five elements', () => {
    expect(getName({ count: 5, unique: true, gender: 'male' })).toHaveLength(5);
  });
  test('getName({ count: 5, gender: "male", givenNameLength: 2 }) should return array with male given name', () => {
    const data = getName({ count: 5, gender: 'male', givenNameLength: 2 });
    const result = data.map((name) => allMaleWords.includes(name[0]) || allMaleWords.includes(name[1]));
    expect(result).toBeTruthy();
  });
  test('getName({ count: 5, unique: true, gender: "female" }) should return array with five elements', () => {
    expect(getName({ count: 5, unique: true, gender: 'female' })).toHaveLength(5);
  });
  test('getName({ count: 5, gender: "female", givenNameLength: 2 }) should return array with female given name', () => {
    const data = getName({ count: 5, gender: 'female', givenNameLength: 2 });
    const result = data.map((name) => allFemaleWords.includes(name[0]) || allFemaleWords.includes(name[1]));
    expect(result).toBeTruthy();
  });
});
