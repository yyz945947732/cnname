import cnname from '../../src';
import { describe, test, expect, assertType } from 'vitest';

assertType<string[]>(cnname({ count: 5, givenNameDuplicated: true }));

describe('cnname.options.givenNameDuplicated', () => {
  test('cnname({ count: 5, givenNameDuplicated: true }) should return array with five elements', () => {
    expect(cnname({ count: 5, givenNameDuplicated: true }).length).toEqual(5);
  });
  test('cnname({ count: 5, unique: true, givenNameDuplicated: true, givenNameLength: 2, surnameType: "all-single" }) should return array with repeated givenName', () => {
    const result = cnname({ count: 5, unique: true, givenNameDuplicated: true, givenNameLength: 2, surnameType: "all-single" });
    const [name] = result;
    expect(name[1]).toEqual(name[2]);
  });
  test('cnname({ count: 5, unique: true, givenNameDuplicated: true, givenNameLength: 3, surnameType: "all-single" }) should return array with repeated givenName', () => {
    const result = cnname({ count: 5, unique: true, givenNameDuplicated: true, givenNameLength: 3, surnameType: "all-single" });
    const [name] = result;
    expect(name[1]).toEqual(name[2]);
    expect(name[2]).toEqual(name[3]);
  });
});
