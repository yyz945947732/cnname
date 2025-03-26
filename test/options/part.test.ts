import cnname from '../../src';
import { describe, test, expect, assertType } from 'vitest';

assertType<string[]>(cnname({ count: 5, part: 'surname' }));
assertType<string[]>(cnname({ count: 5, part: 'givenName' }));
assertType<string[]>(cnname({ count: 5, part: 'fullName' }));

describe('cnname.options.part', () => {
  test('cnname({ count: 5, part: "surname" }) should return array with five elements', () => {
    expect(cnname({ count: 5, part: "surname" })).toHaveLength(5);
  });
  test('cnname({ count: 5, part: "givenName" }) should return array with five elements', () => {
    expect(cnname({ count: 5, part: "givenName" })).toHaveLength(5);
  });
  test('cnname({ count: 5, part: "fullName" }) should return array with five elements', () => {
    expect(cnname({ count: 5, part: "fullName" })).toHaveLength(5);
  });
  test('cnname({ count: 5, surnameType: "common", part: "error" }) should return array with five elements', () => {
    // @ts-expect-error
    expect(cnname({ count: 5, surnameType: 'common', part: 'error' })).toHaveLength(5);
  });
  test('cnname({ count: 100, unique: true, part: "givenName", givenNameType: "male", givenNameLength: 1 }) should return instantly', () => {
    expect(cnname({ count: 100, unique: true, part: 'givenName', givenNameType: "male", givenNameLength: 1 }).length).lt(100);
  });
  test('cnname({ count: 100, unique: true, part: "givenName", givenNameType: "female", givenNameLength: 1 }) should return instantly', () => {
    expect(cnname({ count: 100, unique: true, part: 'givenName', givenNameType: "female", givenNameLength: 1 }).length).lt(100);
  });
  test('cnname({ count: 50000, unique: true, part: "givenName", givenNameLength: 1 }) should return instantly', () => {
    expect(cnname({ count: 50000, unique: true, part: 'givenName', givenNameLength: 1 }).length).lt(50000);
  });
  test('cnname({ count: 50, unique: true, part: "surname", surnameType: "common", surnameAlgorithm: "random" }) should return instantly', () => {
    expect(cnname({ count: 50, unique: true, part: 'surname', surnameType: 'common', surnameAlgorithm: 'random' })).toHaveLength(50);
  });
});
