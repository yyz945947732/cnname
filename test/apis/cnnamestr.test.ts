import { cnnamestr } from '../../src';
import { describe, test, expect, assertType } from 'vitest';

assertType<string>(cnnamestr());
assertType<string>(cnnamestr('张'));
assertType<string>(cnnamestr(20));
assertType<string>(cnnamestr('张', 20));
assertType<string>(cnnamestr({ count: 5 }));

describe('cnnamestr', () => {
  test('cnnamestr(5) should return string', () => {
    expect(cnnamestr(5)).toBeTypeOf('string');
  });
  test('cnnamestr(-1) should return string', () => {
    expect(cnnamestr(-1)).toBeTypeOf('string')
  });
  test('cnnamestr(0) should return ""', () => {
    expect(cnnamestr(0)).toBe('');
  });
  test('cnnamestr("张") should return string', () => {
    expect(cnnamestr('张')).toBeTypeOf('string');
  });
  test('cnnamestr("张", 50) should return string', () => {
    expect(cnnamestr('张')).toBeTypeOf('string');
  });
  test('cnnamestr({ count: 5 }) should return string', () => {
    expect(cnnamestr({ count: 5 })).toBeTypeOf('string');
  });
});
