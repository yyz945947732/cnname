import { getSurname } from '@/src';
import { assertType, describe, expect, test } from 'vitest';

assertType<string>(getSurname());
assertType<string[]>(getSurname(1));
assertType<string[]>(getSurname(0));
assertType<string[]>(getSurname(-1));

describe('getSurname', () => {
  test('getSurname() should return a string', () => {
    expect(typeof getSurname()).toBe('string');
  });
  test('getSurname(5) should return array with one elements', () => {
    expect(getSurname(5)).toBeInstanceOf(Array);
    expect(getSurname(5)).toHaveLength(5);
  });
  test('getSurname(0) should return empty array', () => {
    expect(getSurname(0)).toBeInstanceOf(Array);
    expect(getSurname(0)).toHaveLength(0);
  });
  test('getSurname(-1) should return empty array', () => {
    expect(getSurname(-1)).toBeInstanceOf(Array);
    expect(getSurname(-1)).toHaveLength(0);
  });
});
