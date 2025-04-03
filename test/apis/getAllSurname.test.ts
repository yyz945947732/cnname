import { assertType, describe, expect, test } from 'vitest';
import { getAllSurname } from '../../src';

assertType<string[]>(getAllSurname());
assertType<string[]>(getAllSurname('all', 'single'));
assertType<string[]>(getAllSurname('all', 'compound'));
assertType<string[]>(getAllSurname('common'));
assertType<string[]>(getAllSurname('common', 'single'));
assertType<string[]>(getAllSurname('common', 'compound'));
assertType<string[]>(getAllSurname('rare'));
assertType<string[]>(getAllSurname('rare', 'single'));
assertType<string[]>(getAllSurname('rare', 'compound'));

describe('getAllSurname', () => {
  test('getAllSurname() should return array', () => {
    expect(getAllSurname()).toBeInstanceOf(Array);
  });
  test('getAllSurname("all-single") should return array', () => {
    expect(getAllSurname('all', 'single')).toBeInstanceOf(Array);
  });
  test('getAllSurname("all-compound") should return array', () => {
    expect(getAllSurname('all', 'compound')).toBeInstanceOf(Array);
  });
  test('getAllSurname("common") should return array', () => {
    expect(getAllSurname('common')).toBeInstanceOf(Array);
  });
  test('getAllSurname("common-single") should return array', () => {
    expect(getAllSurname('common', 'single')).toBeInstanceOf(Array);
  });
  test('getAllSurname("common-compound") should return array', () => {
    expect(getAllSurname('common', 'compound')).toBeInstanceOf(Array);
  });
  test('getAllSurname("rare") should return array', () => {
    expect(getAllSurname('rare')).toBeInstanceOf(Array);
  });
  test('getAllSurname("rare-single") should return array', () => {
    expect(getAllSurname('rare', 'single')).toBeInstanceOf(Array);
  });
  test('getAllSurname("rare-compound") should return array', () => {
    expect(getAllSurname('rare', 'compound')).toBeInstanceOf(Array);
  });
});
