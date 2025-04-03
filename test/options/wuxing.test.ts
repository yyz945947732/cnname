import { assertType, describe, expect, test } from 'vitest';
import { getName } from '../../src';
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

assertType<string[]>(getName({ count: 5, wuxing: 'metal' }));
assertType<string[]>(getName({ count: 5, wuxing: 'wood' }));
assertType<string[]>(getName({ count: 5, wuxing: 'water' }));
assertType<string[]>(getName({ count: 5, wuxing: 'fire' }));
assertType<string[]>(getName({ count: 5, wuxing: 'earth' }));

describe('getName.options.wuxing', () => {
  test('getName({ count: 5, unique: true, wuxing: "metal" }) should return array with five elements', () => {
    expect(getName({ count: 5, unique: true, wuxing: 'metal' })).toHaveLength(5);
  });
  test('getName({ count: 5, wuxing: "metal", givenNameLength: 2 }) should return array with metal wuxing element', () => {
    const data = getName({ count: 5, wuxing: 'metal', givenNameLength: 2 });
    const result = data.map((name) => allMetalWords.includes(name[0]) || allMetalWords.includes(name[1]));
    expect(result).toBeTruthy();
  });
  test('getName({ count: 5, unique: true, wuxing: "wood" }) should return array with five elements', () => {
    expect(getName({ count: 5, unique: true, wuxing: 'wood' })).toHaveLength(5);
  });
  test('getName({ count: 5, wuxing: "wood", givenNameLength: 2 }) should return array with wood wuxing element', () => {
    const data = getName({ count: 5, wuxing: 'wood', givenNameLength: 2 });
    const result = data.map((name) => allWoodWords.includes(name[0]) || allWoodWords.includes(name[1]));
    expect(result).toBeTruthy();
  });
  test('getName({ count: 5, unique: true, wuxing: "water" }) should return array with five elements', () => {
    expect(getName({ count: 5, unique: true, wuxing: 'water' })).toHaveLength(5);
  });
  test('getName({ count: 5, wuxing: "water", givenNameLength: 2 }) should return array with water wuxing element', () => {
    const data = getName({ count: 5, wuxing: 'water', givenNameLength: 2 });
    const result = data.map((name) => allWaterWords.includes(name[0]) || allWaterWords.includes(name[1]));
    expect(result).toBeTruthy();
  });
  test('getName({ count: 5, unique: true, wuxing: "fire" }) should return array with five elements', () => {
    expect(getName({ count: 5, unique: true, wuxing: 'fire' })).toHaveLength(5);
  });
  test('getName({ count: 5, wuxing: "fire", givenNameLength: 2 }) should return array with fire wuxing element', () => {
    const data = getName({ count: 5, wuxing: 'fire', givenNameLength: 2 });
    const result = data.map((name) => allFireWords.includes(name[0]) || allFireWords.includes(name[1]));
    expect(result).toBeTruthy();
  });
  test('getName({ count: 5, unique: true, wuxing: "earth" }) should return array with five elements', () => {
    expect(getName({ count: 5, unique: true, wuxing: 'earth' })).toHaveLength(5);
  });
  test('getName({ count: 5, wuxing: "earth", givenNameLength: 2 }) should return array with earth wuxing element', () => {
    const data = getName({ count: 5, wuxing: 'earth', givenNameLength: 2 });
    const result = data.map((name) => allEarthWords.includes(name[0]) || allEarthWords.includes(name[1]));
    expect(result).toBeTruthy();
  });
});
