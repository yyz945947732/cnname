import { getGivenName } from '@/src';
import { assertType, describe, expect, test } from 'vitest';

assertType<string>(getGivenName());
assertType<string[]>(getGivenName(1));
assertType<string[]>(getGivenName(0));
assertType<string[]>(getGivenName(-1));

describe('getGivenName', () => {
  test('getGivenName() should return a string', () => {
    expect(getGivenName()).toBeTypeOf('string');
  });
  test('getGivenName(5) should return array with five elements', () => {
    expect(getGivenName(5)).toBeInstanceOf(Array);
    expect(getGivenName(5)).toHaveLength(5);
  });
  test('getGivenName(0) should return empty array', () => {
    expect(getGivenName(0)).toBeInstanceOf(Array);
    expect(getGivenName(0)).toHaveLength(0);
  });
  test('getGivenName(-1) should return empty array', () => {
    expect(getGivenName(-1)).toBeInstanceOf(Array);
    expect(getGivenName(-1)).toHaveLength(0);
  });
});
