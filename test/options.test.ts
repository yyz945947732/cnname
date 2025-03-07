import cnname from '../src';
import { describe, test, expect, assertType } from 'vitest';

assertType<string[]>(cnname({ count: 5 }));
assertType<string[]>(cnname({ count: 0 }));
assertType<string[]>(cnname({ count: -1 }));
assertType<string[]>(cnname({ unique: true }));
assertType<string[]>(cnname({ count: 5, unique: true, surnameType: 'compound' }));
assertType<string[]>(cnname({ count: 5, unique: true, surnameType: 'single' }));
assertType<string[]>(cnname({ count: 5, unique: true, surnameType: 'all' }));

describe('cnname(options)', () => {
  test('cnname({ count: 5 }) should return array with five elements', () => {
    expect(cnname({ count: 5 }).length).toEqual(5);
  });
  test('cnname({ count: -1 }) should return array with one elements', () => {
    expect(cnname({ count: -1 }).length).toEqual(1);
  });
  test('cnname({ count: 0 }) should return empty array', () => {
    expect(cnname({ count: 0 }).length).toEqual(0);
  });
  test('cnname({ count: 5, unique: true }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true }).length).toEqual(5);
  });
  test('cnname({ count: 5, unique: true, surnameType: "compound" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, surnameType: "compound" }).length).toEqual(5);
  });
  test('cnname({ count: 5, unique: true, surnameType: "single" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, surnameType: "single" }).length).toEqual(5);
  });
  test('cnname({ count: 5, unique: true, surnameType: "all" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, surnameType: "all" }).length).toEqual(5);
  });
  test('cnname({ count: 5, unique: true, onlyCommonSurname: true }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, onlyCommonSurname: true }).length).toEqual(5);
  });
  test('cnname({ count: 5, unique: true, repeatedGivenNameOnly: true }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, repeatedGivenNameOnly: true }).length).toEqual(5);
  });
  test('cnname({ count: 5, unique: true, repeatedGivenNameOnly: true }) should return array with repeated givenName', () => {
    const result = cnname({ count: 5, unique: true, repeatedGivenNameOnly: true });
    const [name] = result;
    expect(name[1]).toEqual(name[2]);
  });
  test('cnname({ count: 5, surname: "张" }) should return array with surname "张"', () => {
    const result = cnname({ count: 5, surname: "张" });
    const [name] = result;
    expect(name[0]).toEqual("张");
  });
  test('cnname({ count: 5, surname: "张", givenNameLength: 2 }) should return array with givenNameLength 2', () => {
    const result = cnname({ count: 5, surname: "张", givenNameLength: 2 });
    const [name] = result;
    expect(name.length).toEqual(3);
  });
  test('cnname({ count: 5, unique: true, nameType: "surname" }) should return array with surname', () => {
    const result = cnname({ count: 5, unique: true, nameType: "surname", surname: "张" });
    const [name] = result;
    expect(name).toEqual("张");
  });
  test('cnname({ count: 5, unique: true, nameType: "givenName" }) should return array with givenName', () => {
    expect(cnname({ count: 5, unique: true, nameType: "givenName" }).length).toEqual(5);
  });
});
