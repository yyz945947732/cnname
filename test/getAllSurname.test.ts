import { getAllSurname } from '../src';
import { describe, test, expect, assertType } from 'vitest';

assertType<string[]>(getAllSurname());
assertType<string[]>(getAllSurname('single'));
assertType<string[]>(getAllSurname('compound'));
assertType<string[]>(getAllSurname('common'));
assertType<string[]>(getAllSurname('single-common'));
assertType<string[]>(getAllSurname('compound-common'));

describe('getAllSurname', () => {
  test('getAllSurname() should return array with at least 200 elements', () => {
    expect(getAllSurname().length).gte(200);
  });
  test('getAllSurname("common") should contain fewer than 1,000 elements', () => {
    expect(getAllSurname('common').length).lt(1000);
  });
});
