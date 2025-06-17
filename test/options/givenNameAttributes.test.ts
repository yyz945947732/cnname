import { getName } from '@/src';
import { GIVEN_NAME_INCLUDE_ONE_CHARACTER_ATTRIBUTE } from '@/src/utils/default';
import {
  getAllAnimalWords,
  getAllColorWords,
  getAllEarthWords,
  getAllFemaleWords,
  getAllFireWords,
  getAllMaleWords,
  getAllMetalWords,
  getAllWaterWords,
  getAllWoodWords,
} from '@/src/utils/dict';
import { getGivenNameListByGivenNameAttribute } from '@/src/utils/list';
import { assertType, describe, expect, test } from 'vitest';

const allMaleWords = getAllMaleWords();
const allFemaleWords = getAllFemaleWords();
const allMetalWords = getAllMetalWords();
const allWoodWords = getAllWoodWords();
const allWaterWords = getAllWaterWords();
const allFireWords = getAllFireWords();
const allEarthWords = getAllEarthWords();
const allAnimalWords = getAllAnimalWords();
const allColorWords = getAllColorWords();

assertType<string[]>(getName({ count: 5, givenNameAttributes: 'male' }));
assertType<string[]>(getName({ count: 5, givenNameAttributes: 'female' }));
assertType<string[]>(getName({ count: 5, givenNameAttributes: 'metal' }));
assertType<string[]>(getName({ count: 5, givenNameAttributes: 'wood' }));
assertType<string[]>(getName({ count: 5, givenNameAttributes: 'water' }));
assertType<string[]>(getName({ count: 5, givenNameAttributes: 'fire' }));
assertType<string[]>(getName({ count: 5, givenNameAttributes: 'earth' }));
assertType<string[]>(getName({ count: 5, givenNameAttributes: ['earth', 'female'] }));
assertType<string[]>(getName({ count: 5, givenNameAttributes: 'animal' }));
assertType<string[]>(getName({ count: 5, givenNameAttributes: 'color' }));

describe('getName.options.givenNameAttributes', () => {
  test('getName({ count: 5, unique: true, givenNameAttributes: "male" }) should return array with five elements', () => {
    expect(getName({ count: 5, unique: true, givenNameAttributes: 'male' })).toHaveLength(5);
  });
  test('getName({ count: 5, returnType: "givenName", givenNameAttributes: "male", givenNameLength: 1 }) should return array with male given name', () => {
    const data = getName({ count: 5, returnType: 'givenName', givenNameAttributes: 'male', givenNameLength: 1 });
    expect(data.every((name) => allMaleWords.includes(name))).toBeTruthy();
  });
  test('getName({ count: 5, unique: true, givenNameAttributes: "female" }) should return array with five elements', () => {
    expect(getName({ count: 5, unique: true, givenNameAttributes: 'female' })).toHaveLength(5);
  });
  test('getName({ count: 5, returnType: "givenName", givenNameAttributes: "female", givenNameLength: 1 }) should return array with female given name', () => {
    const data = getName({ count: 5, returnType: 'givenName', givenNameAttributes: 'female', givenNameLength: 1 });
    expect(data.every((name) => allFemaleWords.includes(name))).toBeTruthy();
  });
  test('getName({ count: 5, unique: true, givenNameAttributes: "metal" }) should return array with five elements', () => {
    expect(getName({ count: 5, unique: true, givenNameAttributes: 'metal' })).toHaveLength(5);
  });
  test('getName({ count: 5, returnType: "givenName", givenNameAttributes: "metal", givenNameLength: 1 }) should return array with metal given name', () => {
    const data = getName({ count: 5, returnType: 'givenName', givenNameAttributes: 'metal', givenNameLength: 1 });
    expect(data.every((name) => allMetalWords.includes(name))).toBeTruthy();
  });
  test('getName({ count: 5, unique: true, givenNameAttributes: "wood" }) should return array with five elements', () => {
    expect(getName({ count: 5, unique: true, givenNameAttributes: 'wood' })).toHaveLength(5);
  });
  test('getName({ count: 5, returnType: "givenName", givenNameAttributes: "wood", givenNameLength: 1 }) should return array with wood given name', () => {
    const data = getName({ count: 5, returnType: 'givenName', givenNameAttributes: 'wood', givenNameLength: 1 });
    expect(data.every((name) => allWoodWords.includes(name))).toBeTruthy();
  });
  test('getName({ count: 5, unique: true, givenNameAttributes: "water" }) should return array with five elements', () => {
    expect(getName({ count: 5, unique: true, givenNameAttributes: 'water' })).toHaveLength(5);
  });
  test('getName({ count: 5, returnType: "givenName", givenNameAttributes: "water", givenNameLength: 1 }) should return array with water given name', () => {
    const data = getName({ count: 5, returnType: 'givenName', givenNameAttributes: 'water', givenNameLength: 1 });
    expect(data.every((name) => allWaterWords.includes(name))).toBeTruthy();
  });
  test('getName({ count: 5, unique: true, givenNameAttributes: "fire" }) should return array with five elements', () => {
    expect(getName({ count: 5, unique: true, givenNameAttributes: 'fire' })).toHaveLength(5);
  });
  test('getName({ count: 5, returnType: "givenName", givenNameAttributes: "fire", givenNameLength: 1 }) should return array with fire given name', () => {
    const data = getName({ count: 5, returnType: 'givenName', givenNameAttributes: 'fire', givenNameLength: 1 });
    expect(data.every((name) => allFireWords.includes(name))).toBeTruthy();
  });
  test('getName({ count: 5, unique: true, givenNameAttributes: "earth" }) should return array with five elements', () => {
    expect(getName({ count: 5, unique: true, givenNameAttributes: 'earth' })).toHaveLength(5);
  });
  test('getName({ count: 5, returnType: "givenName", givenNameAttributes: "earth", givenNameLength: 1 }) should return array with earth given name', () => {
    const data = getName({ count: 5, returnType: 'givenName', givenNameAttributes: 'earth', givenNameLength: 1 });
    expect(data.every((name) => allEarthWords.includes(name))).toBeTruthy();
  });
  test('getName({ count: 5, unique: true, givenNameAttributes: ["earth", "female"] }) should return array with five elements', () => {
    expect(getName({ count: 5, unique: true, givenNameAttributes: ['earth', 'female'] })).toHaveLength(5);
  });
  test('getName({ count: 5, returnType: "givenName", givenNameAttributes: ["earth", "female"], givenNameLength: 2 }) should return array with earth female given name', () => {
    const data = getName({
      count: 5,
      returnType: 'givenName',
      givenNameAttributes: ['earth', 'female'],
      givenNameLength: 2,
    });
    const combineWords = allEarthWords.concat(allFemaleWords);
    expect(data.every((name) => name.split('').every((word) => combineWords.includes(word)))).toBeTruthy();
  });
  test('getName({ count: 5, unique: true, givenNameAttributes: "animal" }) should return array with five elements', () => {
    expect(getName({ count: 5, unique: true, givenNameAttributes: 'animal' })).toHaveLength(5);
  });
  test('getName({ count: 5, returnType: "givenName", givenNameAttributes: "color", givenNameLength: 1 }) should return array with color given name', () => {
    const data = getName({ count: 5, returnType: 'givenName', givenNameAttributes: 'color', givenNameLength: 1 });
    expect(data.every((name) => allColorWords.includes(name))).toBeTruthy();
  });
  test('getName({ count: 5, returnType: "givenName", givenNameAttributes: "animal", givenNameLength: 1 }) should return array with animal given name', () => {
    const data = getName({ count: 5, returnType: 'givenName', givenNameAttributes: 'animal', givenNameLength: 1 });
    expect(data.every((name) => allAnimalWords.includes(name))).toBeTruthy();
  });
  test('getName({ count: 5, returnType: "givenName", givenNameAttributes: "color", givenNameLength: 1 }) should return array with color given name', () => {
    const data = getName({ count: 5, returnType: 'givenName', givenNameAttributes: 'color', givenNameLength: 1 });
    expect(data.every((name) => allColorWords.includes(name))).toBeTruthy();
  });
  test.each(GIVEN_NAME_INCLUDE_ONE_CHARACTER_ATTRIBUTE)(
    'givenNameAttributes %s should always return only one attribute word',
    (givenNameAttributes) => {
      const words = getName({ count: 5, returnType: 'givenName', givenNameAttributes, givenNameLength: 2 });
      const list = getGivenNameListByGivenNameAttribute(givenNameAttributes);
      expect(
        words.every((name) => {
          return (
            (list.includes(name[0]) && !list.includes(name[1])) || (list.includes(name[1]) && !list.includes(name[0]))
          );
        }),
      ).toBeTruthy();
    },
  );
  test('getName({ count: 5, unique: true, returnType: "givenName", givenNameAttributes: "error" }) should return array with five elements', () => {
    // @ts-expect-error
    const data = getName({ count: 5, unique: true, returnType: 'givenName', givenNameAttributes: 'error' });
    expect(data).toHaveLength(5);
  });
});
