import cnname from '../../src';
import { describe, test, expect, assertType } from 'vitest';

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
    expect(cnname({ count: 5, unique: true, givenNameType: "male" }).length).toBe(5);
  });
  test('cnname({ count: 5, unique: true, givenNameType: "female" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, givenNameType: "female" }).length).toBe(5);
  });
  test('cnname({ count: 5, unique: true, givenNameType: "metal" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, givenNameType: "metal" }).length).toBe(5);
  });
  test('cnname({ count: 5, unique: true, givenNameType: "wood" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, givenNameType: "wood" }).length).toBe(5);
  });
  test('cnname({ count: 5, unique: true, givenNameType: "water" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, givenNameType: "water" }).length).toBe(5);
  });
  test('cnname({ count: 5, unique: true, givenNameType: "fire" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, givenNameType: "fire" }).length).toBe(5);
  });
  test('cnname({ count: 5, unique: true, givenNameType: "earth" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, givenNameType: "earth" }).length).toBe(5);
  });
  test('cnname({ count: 5, unique: true, givenNameType: ["earth", "female"] }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, givenNameType: ["earth", "female"] }).length).toBe(5);
  });
  test('cnname({ count: 5, unique: true, givenNameType: "animal" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, givenNameType: "animal" }).length).toBe(5);
  });
});
