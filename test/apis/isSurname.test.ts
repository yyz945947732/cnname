import { isSurname } from '@/src';
import { assertType, describe, expect, test } from 'vitest';

assertType<boolean>(isSurname('张'));

describe('isSurname', () => {
  test('isSurname("张") should return true', () => {
    expect(isSurname('张')).toBe(true);
  });
  test('isSurname("鹾") should return false', () => {
    expect(isSurname('鹾')).toBe(false);
  });
  test('isSurname("") should return false', () => {
    expect(isSurname('')).toBe(false);
  });
  test('isSurname("诸葛") should return true', () => {
    expect(isSurname('诸葛')).toBe(true);
  });
  test('isSurname("爸爸") should return false', () => {
    expect(isSurname('爸爸')).toBe(false);
  });
});
