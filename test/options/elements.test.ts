import { assertType, describe, expect, test } from 'vitest';
import cnname from '../../src';
import {
  getAllEarthWords,
  getAllFireWords,
  getAllMetalWords,
  getAllWaterWords,
  getAllWoodWords,
} from '../../src/utils/dict';

const allMetalWords = getAllMetalWords();
const allWoodWords = getAllWoodWords();
const allWaterWords = getAllWaterWords();
const allFireWords = getAllFireWords();
const allEarthWords = getAllEarthWords();

assertType<string[]>(cnname({ count: 5, elements: 'metal' }));
assertType<string[]>(cnname({ count: 5, elements: 'wood' }));
assertType<string[]>(cnname({ count: 5, elements: 'water' }));
assertType<string[]>(cnname({ count: 5, elements: 'fire' }));
assertType<string[]>(cnname({ count: 5, elements: 'earth' }));

describe('cnname.options.elements', () => {
  test('cnname({ count: 5, unique: true, elements: "metal" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, elements: 'metal' })).toHaveLength(5);
  });
  test('cnname({ count: 5, elements: "metal", givenNameLength: 2 }) should return array with metal given name', () => {
    const data = cnname({ count: 5, elements: 'metal', givenNameLength: 2 });
    const result = data.map((name) => allMetalWords.includes(name[0]) || allMetalWords.includes(name[1]));
    expect(result).toBeTruthy();
  });
  test('cnname({ count: 5, unique: true, elements: "wood" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, elements: 'wood' })).toHaveLength(5);
  });
  test('cnname({ count: 5, elements: "wood", givenNameLength: 2 }) should return array with wood given name', () => {
    const data = cnname({ count: 5, elements: 'wood', givenNameLength: 2 });
    const result = data.map((name) => allWoodWords.includes(name[0]) || allWoodWords.includes(name[1]));
    expect(result).toBeTruthy();
  });
  test('cnname({ count: 5, unique: true, elements: "water" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, elements: 'water' })).toHaveLength(5);
  });
  test('cnname({ count: 5, elements: "water", givenNameLength: 2 }) should return array with water given name', () => {
    const data = cnname({ count: 5, elements: 'water', givenNameLength: 2 });
    const result = data.map((name) => allWaterWords.includes(name[0]) || allWaterWords.includes(name[1]));
    expect(result).toBeTruthy();
  });
  test('cnname({ count: 5, unique: true, elements: "fire" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, elements: 'fire' })).toHaveLength(5);
  });
  test('cnname({ count: 5, elements: "fire", givenNameLength: 2 }) should return array with fire given name', () => {
    const data = cnname({ count: 5, elements: 'fire', givenNameLength: 2 });
    const result = data.map((name) => allFireWords.includes(name[0]) || allFireWords.includes(name[1]));
    expect(result).toBeTruthy();
  });
  test('cnname({ count: 5, unique: true, elements: "earth" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, elements: 'earth' })).toHaveLength(5);
  });
  test('cnname({ count: 5, elements: "earth", givenNameLength: 2 }) should return array with earth given name', () => {
    const data = cnname({ count: 5, elements: 'earth', givenNameLength: 2 });
    const result = data.map((name) => allEarthWords.includes(name[0]) || allEarthWords.includes(name[1]));
    expect(result).toBeTruthy();
  });
});
