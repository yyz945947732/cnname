import { assertType, describe, expect, test } from 'vitest';
import { isSurname } from '../../src';

assertType<boolean>(isSurname('张'));

describe('isSurname', () => {
  test('isSurname("张") should return true', () => {
    expect(isSurname('张')).toBe(true);
  });
  test('isSurname("诸葛") should return true', () => {
    expect(isSurname('诸葛')).toBe(true);
  });
  test('isSurname("爸爸") should return false', () => {
    expect(isSurname('爸爸')).toBe(false);
  });
});
