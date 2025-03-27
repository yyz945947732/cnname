import { assertType, describe, expect, test } from 'vitest';
import cnname from '../../src';
import {
  getAllAnimalWords,
  getAllEarthWords,
  getAllFemaleWords,
  getAllFireWords,
  getAllMaleWords,
  getAllMetalWords,
  getAllWaterWords,
  getAllWoodWords,
} from '../../src/utils/dict';

const allMaleWords = getAllMaleWords();
const allFemaleWords = getAllFemaleWords();
const allMetalWords = getAllMetalWords();
const allWoodWords = getAllWoodWords();
const allWaterWords = getAllWaterWords();
const allFireWords = getAllFireWords();
const allEarthWords = getAllEarthWords();
const allAnimalWords = getAllAnimalWords();

assertType<string[]>(cnname({ count: 5, givenNameType: 'male' }));
assertType<string[]>(cnname({ count: 5, givenNameType: 'female' }));
assertType<string[]>(cnname({ count: 5, givenNameType: 'metal' }));
assertType<string[]>(cnname({ count: 5, givenNameType: 'wood' }));
assertType<string[]>(cnname({ count: 5, givenNameType: 'water' }));
assertType<string[]>(cnname({ count: 5, givenNameType: 'fire' }));
assertType<string[]>(cnname({ count: 5, givenNameType: 'earth' }));
assertType<string[]>(cnname({ count: 5, givenNameType: ['earth', 'female'] }));
assertType<string[]>(cnname({ count: 5, givenNameType: 'animal' }));

describe('cnname.options.givenNameType', () => {
  test('cnname({ count: 5, unique: true, givenNameType: "male" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, givenNameType: 'male' })).toHaveLength(5);
  });
  test('cnname({ count: 5, part: "givenName", givenNameType: "male", givenNameLength: 1 }) should return array with male given name', () => {
    const data = cnname({ count: 5, part: 'givenName', givenNameType: 'male', givenNameLength: 1 });
    expect(data.every((name) => allMaleWords.includes(name))).toBeTruthy();
  });
  test('cnname({ count: 5, unique: true, givenNameType: "female" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, givenNameType: 'female' })).toHaveLength(5);
  });
  test('cnname({ count: 5, part: "givenName", givenNameType: "female", givenNameLength: 1 }) should return array with female given name', () => {
    const data = cnname({ count: 5, part: 'givenName', givenNameType: 'female', givenNameLength: 1 });
    expect(data.every((name) => allFemaleWords.includes(name))).toBeTruthy();
  });
  test('cnname({ count: 5, unique: true, givenNameType: "metal" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, givenNameType: 'metal' })).toHaveLength(5);
  });
  test('cnname({ count: 5, part: "givenName", givenNameType: "metal", givenNameLength: 1 }) should return array with metal given name', () => {
    const data = cnname({ count: 5, part: 'givenName', givenNameType: 'metal', givenNameLength: 1 });
    expect(data.every((name) => allMetalWords.includes(name))).toBeTruthy();
  });
  test('cnname({ count: 5, unique: true, givenNameType: "wood" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, givenNameType: 'wood' })).toHaveLength(5);
  });
  test('cnname({ count: 5, part: "givenName", givenNameType: "wood", givenNameLength: 1 }) should return array with wood given name', () => {
    const data = cnname({ count: 5, part: 'givenName', givenNameType: 'wood', givenNameLength: 1 });
    expect(data.every((name) => allWoodWords.includes(name))).toBeTruthy();
  });
  test('cnname({ count: 5, unique: true, givenNameType: "water" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, givenNameType: 'water' })).toHaveLength(5);
  });
  test('cnname({ count: 5, part: "givenName", givenNameType: "water", givenNameLength: 1 }) should return array with water given name', () => {
    const data = cnname({ count: 5, part: 'givenName', givenNameType: 'water', givenNameLength: 1 });
    expect(data.every((name) => allWaterWords.includes(name))).toBeTruthy();
  });
  test('cnname({ count: 5, unique: true, givenNameType: "fire" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, givenNameType: 'fire' })).toHaveLength(5);
  });
  test('cnname({ count: 5, part: "givenName", givenNameType: "fire", givenNameLength: 1 }) should return array with fire given name', () => {
    const data = cnname({ count: 5, part: 'givenName', givenNameType: 'fire', givenNameLength: 1 });
    expect(data.every((name) => allFireWords.includes(name))).toBeTruthy();
  });
  test('cnname({ count: 5, unique: true, givenNameType: "earth" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, givenNameType: 'earth' })).toHaveLength(5);
  });
  test('cnname({ count: 5, part: "givenName", givenNameType: "earth", givenNameLength: 1 }) should return array with earth given name', () => {
    const data = cnname({ count: 5, part: 'givenName', givenNameType: 'earth', givenNameLength: 1 });
    expect(data.every((name) => allEarthWords.includes(name))).toBeTruthy();
  });
  test('cnname({ count: 5, unique: true, givenNameType: ["earth", "female"] }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, givenNameType: ['earth', 'female'] })).toHaveLength(5);
  });
  test('cnname({ count: 5, part: "givenName", givenNameType: ["earth", "female"], givenNameLength: 2 }) should return array with earth female given name', () => {
    const data = cnname({ count: 5, part: 'givenName', givenNameType: ['earth', 'female'], givenNameLength: 2 });
    const combineWords = allEarthWords.concat(allFemaleWords);
    expect(data.every((name) => name.split('').every((word) => combineWords.includes(word)))).toBeTruthy();
  });
  test('cnname({ count: 5, unique: true, givenNameType: "animal" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, givenNameType: 'animal' })).toHaveLength(5);
  });
  test('cnname({ count: 5, part: "givenName", givenNameType: "animal", givenNameLength: 1 }) should return array with animal given name', () => {
    const data = cnname({ count: 5, part: 'givenName', givenNameType: 'animal', givenNameLength: 1 });
    expect(data.every((name) => allAnimalWords.includes(name))).toBeTruthy();
  });
});
