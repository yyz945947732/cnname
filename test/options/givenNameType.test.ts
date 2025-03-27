import { assertType, describe, expect, test } from 'vitest';
import cnname from '../../src';

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
  test('cnname({ count: 5, unique: true, givenNameType: "female" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, givenNameType: 'female' })).toHaveLength(5);
  });
  test('cnname({ count: 5, unique: true, givenNameType: "metal" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, givenNameType: 'metal' })).toHaveLength(5);
  });
  test('cnname({ count: 5, unique: true, givenNameType: "wood" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, givenNameType: 'wood' })).toHaveLength(5);
  });
  test('cnname({ count: 5, unique: true, givenNameType: "water" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, givenNameType: 'water' })).toHaveLength(5);
  });
  test('cnname({ count: 5, unique: true, givenNameType: "fire" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, givenNameType: 'fire' })).toHaveLength(5);
  });
  test('cnname({ count: 5, unique: true, givenNameType: "earth" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, givenNameType: 'earth' })).toHaveLength(5);
  });
  test('cnname({ count: 5, unique: true, givenNameType: ["earth", "female"] }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, givenNameType: ['earth', 'female'] })).toHaveLength(5);
  });
  test('cnname({ count: 5, unique: true, givenNameType: "animal" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, givenNameType: 'animal' })).toHaveLength(5);
  });
});
