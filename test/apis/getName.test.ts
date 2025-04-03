import { getName } from '@/src';
import { assertType, describe, expect, test } from 'vitest';

assertType<string>(getName());
assertType<string>(getName('张'));
assertType<string[]>(getName(20));
assertType<string[]>(getName('张', 20));

describe('getName', () => {
  test('getName() should return string', () => {
    expect(getName()).toBeTypeOf('string');
  });
  test('getName(-1) should return array with one elements', () => {
    expect(getName(-1)).toHaveLength(0);
  });
  test('getName(0) should return empty array', () => {
    expect(getName(0)).toHaveLength(0);
  });
  test('getName(5) should return array with five elements', () => {
    expect(getName(5)).toHaveLength(5);
  });
  test('getName("张") should return string', () => {
    expect(getName('张')).toBeTypeOf('string');
    expect(getName('张').startsWith('张')).toBeTruthy();
  });
  test('getName("张", 5) should return array with five elements', () => {
    expect(getName('张', 5)).toHaveLength(5);
    expect(getName('张', 5).every((name) => name.startsWith('张'))).toBeTruthy();
  });
});
