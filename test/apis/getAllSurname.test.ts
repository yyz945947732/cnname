import { getAllSurname } from '../../src';
import { describe, test, expect, assertType } from 'vitest';

assertType<string[]>(getAllSurname());
assertType<string[]>(getAllSurname('all-single'));
assertType<string[]>(getAllSurname('all-compound'));
assertType<string[]>(getAllSurname('common'));
assertType<string[]>(getAllSurname('common-single'));
assertType<string[]>(getAllSurname('common-compound'));

describe('getAllSurname', () => {
  test('getAllSurname() should return array with at least 200 elements', () => {
    expect(getAllSurname().length).gte(200);
  });
  test('getAllSurname("common") should contain fewer than 1,000 elements', () => {
    expect(getAllSurname('common').length).lt(1000);
  });
});
