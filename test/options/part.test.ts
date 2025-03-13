import cnname from '../../src';
import { describe, test, expect, assertType } from 'vitest';

assertType<string[]>(cnname({ count: 5, part: 'surname' }));
assertType<string[]>(cnname({ count: 5, part: 'givenName' }));
assertType<string[]>(cnname({ count: 5, part: 'fullName' }));

describe('cnname.options.part', () => {
  test('cnname({ count: 5, part: "surname" }) should return array with five elements', () => {
    expect(cnname({ count: 5, part: "surname" }).length).toEqual(5);
  });
  test('cnname({ count: 5, part: "givenName" }) should return array with five elements', () => {
    expect(cnname({ count: 5, part: "givenName" }).length).toEqual(5);
  });
  test('cnname({ count: 5, part: "fullName" }) should return array with five elements', () => {
    expect(cnname({ count: 5, part: "fullName" }).length).toEqual(5);
  });
  test('cnname({ count: 5, surnameType: "common", part: "error" }) should return array with five elements', () => {
    // @ts-expect-error
    expect(cnname({ count: 5, surnameType: 'common', part: 'error' }).length).toEqual(5);
  });
  test('cnname({ count: 100, unique: true, part: "givenName", givenNameType: "male", givenNameLength: 1 }) should return instantly', () => {
    expect(cnname({ count: 100, unique: true, part: 'givenName', givenNameType: "male", givenNameLength: 1 }).length).lt(100);
  });
  test('cnname({ count: 100, unique: true, part: "givenName", givenNameType: "female", givenNameLength: 1 }) should return instantly', () => {
    expect(cnname({ count: 100, unique: true, part: 'givenName', givenNameType: "female", givenNameLength: 1 }).length).lt(100);
  });
  test('cnname({ count: 50000, unique: true, part: "givenName", givenNameType: "all", givenNameLength: 1 }) should return instantly', () => {
    expect(cnname({ count: 50000, unique: true, part: 'givenName', givenNameType: "all", givenNameLength: 1 }).length).lt(50000);
  });
  test('cnname({ count: 5000, unique: true, part: "surname", surnameType: "common", surnameAlgorithm: "random" }) should return instantly', () => {
    expect(cnname({ count: 5000, unique: true, part: 'surname', surnameType: 'common', surnameAlgorithm: 'random' }).length).lt(5000);
  });
  test('cnname({ count: 50000, unique: true, part: "surname", surnameType: "all", surnameAlgorithm: "random" }) should return instantly', () => {
    expect(cnname({ count: 50000, unique: true, part: 'surname', surnameType: 'all', surnameAlgorithm: 'random' }).length).lt(50000);
  });
});
