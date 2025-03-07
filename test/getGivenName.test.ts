import { getGivenName } from '../src';
import { describe, test, expect, assertType } from 'vitest';

assertType<string>(getGivenName());
assertType<string[]>(getGivenName(2));

describe('getGivenName', () => {
  test('getGivenName() should return string', () => {
    expect(typeof getGivenName()).toEqual('string');
  });
  test('getGivenName(5) should return array with five elements', () => {
    expect(getGivenName(5).length).toEqual(5);
  });
  test('getGivenName(0) should return empty array', () => {
    expect(getGivenName(0).length).toEqual(0);
  });
  test('getGivenName(-1) should return array with one elements', () => {
    expect(getGivenName(-1).length).toEqual(1);
  });
});
