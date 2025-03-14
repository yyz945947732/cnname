import { cnnamestr } from '../../src';
import { describe, test, expect, assertType } from 'vitest';

assertType<string>(cnnamestr());
assertType<string>(cnnamestr('张'));
assertType<string>(cnnamestr(20));
assertType<string>(cnnamestr('张', 20));
assertType<string>(cnnamestr({ count: 5 }));

describe('cnnamestr', () => {
  test('cnnamestr(5) should return string', () => {
    expect(typeof cnnamestr(5)).toBe('string');
  });
  test('cnnamestr(-1) should return string', () => {
    expect(typeof cnnamestr(-1)).toBe('string')
  });
  test('cnnamestr(0) should return ""', () => {
    expect(cnnamestr(0)).toBe('');
  });
  test('cnnamestr("张") should return string', () => {
    expect(typeof cnnamestr('张')).toBe('string');
  });
  test('cnnamestr("张", 50) should return string', () => {
    expect(typeof cnnamestr('张')).toBe('string');
  });
  test('cnnamestr({ count: 5 }) should return string', () => {
    expect(typeof cnnamestr({ count: 5 })).toBe('string');
  });
});
