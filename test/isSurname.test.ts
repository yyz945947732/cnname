import { isSurname } from '../src';
import { describe, test, expect, assertType } from 'vitest';

assertType<boolean>(isSurname('张'));

describe('isSurname', () => {
  test('isSurname("张") should return true', () => {
    expect(isSurname('张')).toEqual(true);
  });
  test('isSurname("诸葛") should return true', () => {
    expect(isSurname('诸葛')).toEqual(true);
  });
  test('isSurname("爸爸") should return false', () => {
    expect(isSurname('爸爸')).toEqual(false);
  });
});
