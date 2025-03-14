import { getSurname } from '../../src';
import { describe, test, expect, assertType } from 'vitest';

assertType<string>(getSurname());
assertType<string[]>(getSurname(1));
assertType<string[]>(getSurname({ count: 1 }));

describe('getSurname', () => {
  test('getSurname() should return a string', () => {
    expect(typeof getSurname()).toEqual('string');
  });
  test('getSurname(5) should return array with one elements', () => {
    expect(getSurname(5)).toBeInstanceOf(Array);
    expect(getSurname(5).length).toEqual(5);
  });
  test('getSurname({ count: 5 }) should return array with five elements', () => {
    expect(getSurname({ count: 5 })).toBeInstanceOf(Array);
    expect(getSurname({ count: 5 }).length).toEqual(5);
  });
  test('getSurname({ count: 5, surnameType: "common-compound" }) should return an array of compound surname', () => {
    expect(getSurname({ count: 5, surnameType: 'common-compound' }).every(surname => surname.length === 2)).toEqual(true);
  });
  test('getSurname({ count: 5, surnameType: "common-single" }) should return an array of single surname', () => {
    expect(getSurname({ count: 5, surnameType: 'common-single' }).every(surname => surname.length === 1)).toEqual(true);
  });
});
