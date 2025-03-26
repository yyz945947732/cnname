import cnname from '../../src';
import { describe, test, expect, assertType } from 'vitest';

assertType<string>(cnname());
assertType<string>(cnname('张'));
assertType<string[]>(cnname(20));
assertType<string[]>(cnname('张', 20));

describe('cnname', () => {
  test('cnname() should return string', () => {
    expect(typeof cnname()).toBe('string');
  });
  test('cnname(-1) should return array with one elements', () => {
    expect(cnname(-1).length).toBe(0);
  });
  test('cnname(0) should return empty array', () => {
    expect(cnname(0).length).toBe(0);
  });
  test('cnname(5) should return array with five elements', () => {
    expect(cnname(5).length).toBe(5);
  });
  test('cnname("张") should return string', () => {
    expect(typeof cnname('张')).toBe('string');
    expect(cnname('张').startsWith('张')).toBeTruthy();
  });
  test('cnname("张", 5) should return array with five elements', () => {
    expect(cnname('张', 5).length).toBe(5);
    expect(cnname('张', 5).every((name) => name.startsWith('张'))).toBeTruthy();
  });
});
