import { assertType, describe, expect, test } from 'vitest';
import { getSurname } from '../../src';

assertType<string>(getSurname());
assertType<string[]>(getSurname(1));
assertType<string[]>(getSurname({ count: 1 }));

describe('getSurname', () => {
  test('getSurname() should return a string', () => {
    expect(typeof getSurname()).toBe('string');
  });
  test('getSurname(5) should return array with one elements', () => {
    expect(getSurname(5)).toBeInstanceOf(Array);
    expect(getSurname(5)).toHaveLength(5);
  });
  test('getSurname({ count: 5 }) should return array with five elements', () => {
    expect(getSurname({ count: 5 })).toBeInstanceOf(Array);
    expect(getSurname({ count: 5 })).toHaveLength(5);
  });
  test('getSurname({ count: 5, surnameType: "compound" }) should return an array of compound surname', () => {
    const result = getSurname({ count: 5, surnameType: 'compound' }).every((surname) => surname.length === 2);
    expect(result).toBeTruthy();
  });
  test('getSurname({ count: 5, surnameType: "single" }) should return an array of single surname', () => {
    const result = getSurname({ count: 5, surnameType: 'single' }).every((surname) => surname.length === 1);
    expect(result).toBeTruthy();
  });
});
