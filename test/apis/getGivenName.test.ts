import { getGivenName } from '@/src';
import { assertType, describe, expect, test } from 'vitest';

assertType<string>(getGivenName());
assertType<string[]>(getGivenName(1));
assertType<string[]>(getGivenName({ count: 1 }));

describe('getGivenName', () => {
  test('getGivenName() should return a string', () => {
    expect(getGivenName()).toBeTypeOf('string');
  });
  test('getGivenName(5) should return array with five elements', () => {
    expect(getGivenName(5)).toBeInstanceOf(Array);
    expect(getGivenName(5)).toHaveLength(5);
  });
  test('getGivenName({ count: 5 }) should return array with five elements', () => {
    expect(getGivenName({ count: 5 })).toBeInstanceOf(Array);
    expect(getGivenName({ count: 5 })).toHaveLength(5);
  });
  test('getGivenName({ count: 5, unique: true, givenNameDuplicated: true, givenNameLength: 2 }) should return array with repeated givenName', () => {
    const result = getGivenName({
      count: 5,
      unique: true,
      givenNameDuplicated: true,
      givenNameLength: 2,
    });
    const [name] = result;
    expect(name[0]).toBe(name[1]);
  });
  test('getGivenName({ count: 5, givenNameLength: 2, givenNameStartsWith: "英" }) should return array with givenNameEndsWith "英"', () => {
    const result = getGivenName({ count: 5, givenNameLength: 2, givenNameStartsWith: '英' });
    const [name] = result;
    expect(name[0]).toBe('英');
  });
  test('getGivenName({ count: 5, givenNameLength: 2, givenNameEndsWith: "英" }) should return array with givenNameEndsWith "英"', () => {
    const result = getGivenName({ count: 5, givenNameLength: 2, givenNameEndsWith: '英' });
    const [name] = result;
    expect(name[1]).toBe('英');
  });
});
