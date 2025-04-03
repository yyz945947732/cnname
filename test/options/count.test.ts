import { getName } from '@/src';
import { assertType, describe, expect, test } from 'vitest';

assertType<string[]>(getName({ count: 5 }));
assertType<string[]>(getName({ count: 0 }));
assertType<string[]>(getName({ count: -1 }));

describe('getName.options.count', () => {
  test('getName({ count: 5 }) should return array with five elements', () => {
    expect(getName({ count: 5 })).toHaveLength(5);
  });
  test('getName({ count: 1 }) should return array with one elements', () => {
    expect(getName({ count: 1 })).toHaveLength(1);
  });
  test('getName({}) should return array with one elements', () => {
    expect(getName({})).toHaveLength(1);
  });
  test('getName({ count: -1 }) should return empty array', () => {
    expect(getName({ count: -1 })).toHaveLength(0);
  });
  test('getName({ count: 0 }) should return empty array', () => {
    expect(getName({ count: 0 })).toHaveLength(0);
  });
  test('getName({ count: 100 }) should return array with 100 elements', () => {
    expect(getName({ count: 100 })).toHaveLength(100);
  });
});
