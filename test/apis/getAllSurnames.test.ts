import { getAllSurnames } from '@/src';
import { assertType, describe, expect, test } from 'vitest';

assertType<string[]>(getAllSurnames());
assertType<string[]>(getAllSurnames('all', 'single'));
assertType<string[]>(getAllSurnames('all', 'compound'));
assertType<string[]>(getAllSurnames('common'));
assertType<string[]>(getAllSurnames('common', 'single'));
assertType<string[]>(getAllSurnames('common', 'compound'));
assertType<string[]>(getAllSurnames('rare'));
assertType<string[]>(getAllSurnames('rare', 'single'));
assertType<string[]>(getAllSurnames('rare', 'compound'));

describe('getAllSurnames', () => {
  test('getAllSurnames() should return array', () => {
    expect(getAllSurnames()).toBeInstanceOf(Array);
  });
  test('getAllSurnames("all", "single") should return array', () => {
    expect(getAllSurnames('all', 'single')).toBeInstanceOf(Array);
  });
  test('getAllSurnames("all", "compound") should return array', () => {
    expect(getAllSurnames('all', 'compound')).toBeInstanceOf(Array);
  });
  test('getAllSurnames("common") should return array', () => {
    expect(getAllSurnames('common')).toBeInstanceOf(Array);
  });
  test('getAllSurnames("common", "single") should return array', () => {
    expect(getAllSurnames('common', 'single')).toBeInstanceOf(Array);
  });
  test('getAllSurnames("common", "compound") should return array', () => {
    expect(getAllSurnames('common', 'compound')).toBeInstanceOf(Array);
  });
  test('getAllSurnames("rare") should return array', () => {
    expect(getAllSurnames('rare')).toBeInstanceOf(Array);
  });
  test('getAllSurnames("rare", "single") should return array', () => {
    expect(getAllSurnames('rare', 'single')).toBeInstanceOf(Array);
  });
  test('getAllSurnames("rare", "compound") should return array', () => {
    expect(getAllSurnames('rare', 'compound')).toBeInstanceOf(Array);
  });
});
