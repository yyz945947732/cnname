import cnname from '../../src';
import { describe, test, expect, assertType } from 'vitest';

assertType<string[]>(cnname({ count: 5, gender: 'male' }));
assertType<string[]>(cnname({ count: 5, gender: 'female' }));

describe('cnname.options.gender', () => {
  test('cnname({ count: 5, unique: true, gender: "male" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, gender: "male" })).toHaveLength(5);
  });
  test('cnname({ count: 5, unique: true, gender: "female" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, gender: "female" })).toHaveLength(5);
  });
});
