import { getAllSurname } from '../src';
import { describe, test, expect, assertType } from 'vitest';

assertType<string[]>(getAllSurname());

describe('getAllSurname', () => {
  test('getAllSurname() should return array with at least 200 elements', () => {
    expect(getAllSurname().length).lte(200);
  });
});
