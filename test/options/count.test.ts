import cnname from '../../src';
import { describe, test, expect, assertType } from 'vitest';

assertType<string[]>(cnname({ count: 5 }));
assertType<string[]>(cnname({ count: 0 }));
assertType<string[]>(cnname({ count: -1 }));

describe('cnname.options.count', () => {
  test('cnname({ count: 5 }) should return array with five elements', () => {
    expect(cnname({ count: 5 }).length).toEqual(5);
  });
  test('cnname({ count: 1 }) should return array with one elements', () => {
    expect(cnname({ count: 1 }).length).toEqual(1);
  });
  test('cnname({}) should return array with one elements', () => {
    expect(cnname({}).length).toEqual(1);
  });
  test('cnname({ count: -1 }) should return array with one elements', () => {
    expect(cnname({ count: -1 }).length).toEqual(0);
  });
  test('cnname({ count: 0 }) should return empty array', () => {
    expect(cnname({ count: 0 }).length).toEqual(0);
  });
  test('cnname({ count: 100 }) should return array with 100 elements', () => {
    expect(cnname({ count: 100 }).length).toEqual(100);
  });
});
