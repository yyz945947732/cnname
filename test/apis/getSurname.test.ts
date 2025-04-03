import { getSurname } from '@/src';
import { assertType, describe, expect, test } from 'vitest';

assertType<string>(getSurname());
assertType<string[]>(getSurname(1));

describe('getSurname', () => {
  test('getSurname() should return a string', () => {
    expect(typeof getSurname()).toBe('string');
  });
  test('getSurname(5) should return array with one elements', () => {
    expect(getSurname(5)).toBeInstanceOf(Array);
    expect(getSurname(5)).toHaveLength(5);
  });
});
