import { parseName } from '../../src';
import { describe, test, expect, assertType } from 'vitest';
import type { NameDetail } from '../../src/types';

assertType<NameDetail>(parseName('张三'));
assertType<NameDetail>(parseName('笑三'));
assertType<NameDetail>(parseName('三'));
assertType<NameDetail>(parseName(''));

describe('parseName', () => {
  test('parseName("张三") should return { surname: "张", givenName: "三" }', () => {
    expect(parseName('张三')).toEqual({ surname: '张', givenName: '三', isCompoundSurname: false, isSingleCharacterSurname: true, givenNameLength: 1, isGivenNameDuplicated: false, isCommonSurname: true });
  });
  test('parseName("笑三") should return { surname: "", givenName: "笑三" }', () => {
    expect(parseName('笑三')).toEqual({ surname: '', givenName: '笑三', isCompoundSurname: false, isSingleCharacterSurname: false, givenNameLength: 2, isGivenNameDuplicated: false, isCommonSurname: false });
  });
  test('parseName("三") should return { surname: "", givenName: "三" }', () => {
    expect(parseName('三')).toEqual({ surname: '', givenName: '三', isCompoundSurname: false, isSingleCharacterSurname: false, givenNameLength: 1, isGivenNameDuplicated: false, isCommonSurname: false });
  });
  test('parseName("") should return { surname: "", givenName: "" }', () => {
    expect(parseName('')).toEqual({ surname: '', givenName: '', isCompoundSurname: false, isSingleCharacterSurname: false, givenNameLength: 0, isGivenNameDuplicated: false, isCommonSurname: false });
  });
  test('parseName("欧阳三") should return { surname: "欧阳", givenName: "三" }', () => {
    expect(parseName('欧阳三')).toEqual({ surname: '欧阳', givenName: '三', isCompoundSurname: true, isSingleCharacterSurname: false, givenNameLength: 1, isGivenNameDuplicated: false, isCommonSurname: true });
  });
  test('parseName("欧阳娜娜") should return { surname: "欧阳", givenName: "娜娜", isGivenNameDuplicated: true }', () => {
    expect(parseName('欧阳娜娜')).toEqual({ surname: '欧阳', givenName: '娜娜', isCompoundSurname: true, isSingleCharacterSurname: false, givenNameLength: 2, isGivenNameDuplicated: true, isCommonSurname: true });
  });
  test('parseName("欧阳娜娜") should return { surname: "欧阳", givenName: "娜娜", isGivenNameDuplicated: true }', () => {
    expect(parseName('欧阳娜娜')).toEqual({ surname: '欧阳', givenName: '娜娜', isCompoundSurname: true, isSingleCharacterSurname: false, givenNameLength: 2, isGivenNameDuplicated: true, isCommonSurname: true });
  });
  test('parseName("帅哥") should return { surname: "帅", givenName: "哥", isCommonSurname: false }', () => {
    expect(parseName('帅哥')).toEqual({ surname: '帅', givenName: '哥', isCompoundSurname: false, isSingleCharacterSurname: true, givenNameLength: 1, isGivenNameDuplicated: false, isCommonSurname: false });
  });
});
