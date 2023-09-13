import cnname from '../src';
import { describe, test, expect, assertType } from 'vitest';

assertType<string>(cnname());
assertType<string>(cnname('张'));
assertType<string[]>(cnname(20));
assertType<string[]>(cnname('张', 20));

describe('cname', () => {
  test('cname() should return string', () => {
    expect(typeof cnname()).toEqual('string');
  });
  test('cname(5) should return array with five string', () => {
    expect(cnname(5).length).toEqual(5);
  });
  test('cname("张") should return string', () => {
    expect(typeof cnname('张')).toEqual('string');
    expect(cnname('张').startsWith('张')).toBeTruthy();
  });
  test('cname("张", 5) should return array with five string', () => {
    expect(cnname('张', 5).length).toEqual(5);
    expect(cnname('张', 5).every((name) => name.startsWith('张'))).toBeTruthy();
  });
});
