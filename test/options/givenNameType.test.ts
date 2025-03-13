import cnname from '../../src';
import { describe, test, expect, assertType } from 'vitest';

assertType<string[]>(cnname({ count: 5, givenNameType: 'male' }));
assertType<string[]>(cnname({ count: 5, givenNameType: 'female' }));
assertType<string[]>(cnname({ count: 5, givenNameType: 'all' }));

describe('cnname.options.givenNameType', () => {
  test('cnname({ count: 5, unique: true, givenNameType: "male" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, givenNameType: "male" }).length).toEqual(5);
  });
  test('cnname({ count: 5, unique: true, givenNameType: "all" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, givenNameType: "all" }).length).toEqual(5);
  });
  test('cnname({ count: 5, unique: true, givenNameType: "female" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, givenNameType: "female" }).length).toEqual(5);
  });
});
