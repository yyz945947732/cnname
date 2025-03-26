import { getAllSurname } from '../../src';
import { describe, test, expect, assertType } from 'vitest';

assertType<string[]>(getAllSurname());
assertType<string[]>(getAllSurname('all-single'));
assertType<string[]>(getAllSurname('all-compound'));
assertType<string[]>(getAllSurname('common'));
assertType<string[]>(getAllSurname('common-single'));
assertType<string[]>(getAllSurname('common-compound'));

describe('getAllSurname', () => {
  test('getAllSurname() should return array', () => {
    expect(getAllSurname()).toBeInstanceOf(Array);
  });
  test('getAllSurname("all-single") should return array', () => {
    expect(getAllSurname('all-single')).toBeInstanceOf(Array);
  });
  test('getAllSurname("all-compound") should return array', () => {
    expect(getAllSurname('all-compound')).toBeInstanceOf(Array);
  });
  test('getAllSurname("common") should return array', () => {
    expect(getAllSurname('common')).toBeInstanceOf(Array);
  });
  test('getAllSurname("common-single") should return array', () => {
    expect(getAllSurname('common-single')).toBeInstanceOf(Array);
  });
  test('getAllSurname("common-compound") should return array', () => {
    expect(getAllSurname('common-compound')).toBeInstanceOf(Array);
  });
});
