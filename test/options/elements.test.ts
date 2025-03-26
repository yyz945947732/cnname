import cnname from '../../src';
import { describe, test, expect, assertType } from 'vitest';

assertType<string[]>(cnname({ count: 5, elements: 'metal' }));
assertType<string[]>(cnname({ count: 5, elements: 'wood' }));
assertType<string[]>(cnname({ count: 5, elements: 'water' }));
assertType<string[]>(cnname({ count: 5, elements: 'fire' }));
assertType<string[]>(cnname({ count: 5, elements: 'earth' }));

describe('cnname.options.elements', () => {
  test('cnname({ count: 5, unique: true, elements: "metal" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, elements: "metal" })).toHaveLength(5);
  });
  test('cnname({ count: 5, unique: true, elements: "wood" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, elements: "wood" })).toHaveLength(5);
  });
  test('cnname({ count: 5, unique: true, elements: "water" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, elements: "water" })).toHaveLength(5);
  });
  test('cnname({ count: 5, unique: true, elements: "fire" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, elements: "fire" })).toHaveLength(5);
  });
  test('cnname({ count: 5, unique: true, elements: "earth" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, elements: "earth" })).toHaveLength(5);
  });
});
