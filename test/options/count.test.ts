import { assertType, describe, expect, test } from 'vitest';
import cnname from '../../src';

assertType<string[]>(cnname({ count: 5 }));
assertType<string[]>(cnname({ count: 0 }));
assertType<string[]>(cnname({ count: -1 }));

describe('cnname.options.count', () => {
  test('cnname({ count: 5 }) should return array with five elements', () => {
    expect(cnname({ count: 5 })).toHaveLength(5);
  });
  test('cnname({ count: 1 }) should return array with one elements', () => {
    expect(cnname({ count: 1 })).toHaveLength(1);
  });
  test('cnname({}) should return array with one elements', () => {
    expect(cnname({})).toHaveLength(1);
  });
  test('cnname({ count: -1 }) should return empty array', () => {
    expect(cnname({ count: -1 })).toHaveLength(0);
  });
  test('cnname({ count: 0 }) should return empty array', () => {
    expect(cnname({ count: 0 })).toHaveLength(0);
  });
  test('cnname({ count: 100 }) should return array with 100 elements', () => {
    expect(cnname({ count: 100 })).toHaveLength(100);
  });
});
