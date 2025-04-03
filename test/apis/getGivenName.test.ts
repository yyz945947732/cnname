import { getGivenName } from '@/src';
import { assertType, describe, expect, test } from 'vitest';

assertType<string>(getGivenName());
assertType<string[]>(getGivenName(1));

describe('getGivenName', () => {
  test('getGivenName() should return a string', () => {
    expect(getGivenName()).toBeTypeOf('string');
  });
  test('getGivenName(5) should return array with five elements', () => {
    expect(getGivenName(5)).toBeInstanceOf(Array);
    expect(getGivenName(5)).toHaveLength(5);
  });
});
