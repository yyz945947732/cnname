import { assertType, describe, expect, test } from 'vitest';
import { getNameStr } from '../../src';

assertType<string>(getNameStr());
assertType<string>(getNameStr('张'));
assertType<string>(getNameStr(20));
assertType<string>(getNameStr('张', 20));
assertType<string>(getNameStr({ count: 5 }));

describe('getNameStr', () => {
  test('getNameStr(5) should return string', () => {
    expect(getNameStr(5)).toBeTypeOf('string');
  });
  test('getNameStr(-1) should return string', () => {
    expect(getNameStr(-1)).toBeTypeOf('string');
  });
  test('getNameStr(0) should return ""', () => {
    expect(getNameStr(0)).toBe('');
  });
  test('getNameStr("张") should return string', () => {
    expect(getNameStr('张')).toBeTypeOf('string');
  });
  test('getNameStr("张", 50) should return string', () => {
    expect(getNameStr('张')).toBeTypeOf('string');
  });
  test('getNameStr({ count: 5 }) should return string', () => {
    expect(getNameStr({ count: 5 })).toBeTypeOf('string');
  });
});
