import { parseName } from '@/src';
import type { NameDetail } from '@/src/types';
import { assertType, describe, expect, test } from 'vitest';

assertType<NameDetail>(parseName('张三'));
assertType<NameDetail>(parseName('笑三'));
assertType<NameDetail>(parseName('三'));
assertType<NameDetail>(parseName(''));

describe('parseName', () => {
  test('parseName("张三") should return { surname: "张", givenName: "三", fullName: "张三", isValidName: true }', () => {
    expect(parseName('张三')).toMatchObject({
      surname: '张',
      givenName: '三',
      fullName: '张三',
      isValidName: true,
    });
  });
  test('parseName("笑三") should return { surname: "", givenName: "笑三", fullName: "笑三", isValidName: false }', () => {
    expect(parseName('笑三')).toMatchObject({
      surname: '',
      givenName: '笑三',
      fullName: '笑三',
      isValidName: false,
    });
  });
  test('parseName("三") should return { surname: "", givenName: "三", fullName: "三", isValidName: false }', () => {
    expect(parseName('三')).toMatchObject({
      surname: '',
      givenName: '三',
      fullName: '三',
      isValidName: false,
    });
  });
  test('parseName("") should return { surname: "", givenName: "", isValidName: false }', () => {
    expect(parseName('')).toMatchObject({ surname: '', givenName: '', isValidName: false });
  });
  test('parseName("欧阳三") should return { surname: "欧阳", givenName: "三", isCompoundSurname: true }', () => {
    expect(parseName('欧阳三')).toMatchObject({
      surname: '欧阳',
      givenName: '三',
      isCompoundSurname: true,
    });
  });
  test('parseName("欧阳娜娜") should return { surname: "欧阳", givenName: "娜娜", isCompoundSurname: true, isGivenNameDuplicated: true }', () => {
    expect(parseName('欧阳娜娜')).toMatchObject({
      surname: '欧阳',
      givenName: '娜娜',
      isCompoundSurname: true,
      isGivenNameDuplicated: true,
    });
  });
  test('parseName("李娜娜") should return { surname: "李", givenName: "娜娜", isGivenNameDuplicated: true, isSingleCharacterSurname: true, givenNameLength: 2 }', () => {
    expect(parseName('李娜娜')).toMatchObject({
      surname: '李',
      givenName: '娜娜',
      isGivenNameDuplicated: true,
      isSingleCharacterSurname: true,
      givenNameLength: 2,
    });
  });
  test('parseName("张1") should return { surname: "张", givenName: "1", fullName: "张1", isValidName: false }', () => {
    expect(parseName('张1')).toMatchObject({
      surname: '张',
      givenName: '1',
      fullName: '张1',
      isValidName: false,
    });
  });
});
