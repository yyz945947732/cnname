import { parseName } from '../src';
import { describe, test, expect, assertType } from 'vitest';
import type { ParseNameResult } from '../src/types';

assertType<ParseNameResult>(parseName('张三'));
assertType<ParseNameResult>(parseName('笑三'));
assertType<ParseNameResult>(parseName('三'));
assertType<ParseNameResult>(parseName(''));

describe('parseName', () => {
  test('parseName("张三") should return { surname: "张", givenName: "三" }', () => {
    expect(parseName('张三')).toEqual({ surname: '张', givenName: '三' });
  });
  test('parseName("笑三") should return { surname: "", givenName: "笑三" }', () => {
    expect(parseName('笑三')).toEqual({ surname: '', givenName: '笑三' });
  });
  test('parseName("三") should return { surname: "", givenName: "三" }', () => {
    expect(parseName('三')).toEqual({ surname: '', givenName: '三' });
  });
  test('parseName("") should return { surname: "", givenName: "" }', () => {
    expect(parseName('')).toEqual({ surname: '', givenName: '' });
  });
  test('parseName("欧阳三") should return { surname: "欧阳", givenName: "三" }', () => {
    expect(parseName('欧阳三')).toEqual({ surname: '欧阳', givenName: '三' });
  });
});
