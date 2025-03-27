import { assertType, describe, expect, test } from 'vitest';
import cnname from '../../src';

assertType<string[]>(cnname({ count: 5, surnameType: 'common' }));
assertType<string[]>(cnname({ count: 5, surnameType: 'common-single' }));
assertType<string[]>(cnname({ count: 5, surnameType: 'common-compound' }));
assertType<string[]>(cnname({ count: 5, surnameType: 'all-single' }));
assertType<string[]>(cnname({ count: 5, surnameType: 'all-compound' }));
assertType<string[]>(cnname({ count: 5, surnameType: 'all' }));

describe('cnname.options.surnameType', () => {
  test('cnname({ count: 5, unique: true, surnameType: "all-compound" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, surnameType: 'all-compound' })).toHaveLength(5);
  });
  test('cnname({ count: 5, unique: true, surnameType: "all-single" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, surnameType: 'all-single' })).toHaveLength(5);
  });
  test('cnname({ count: 5, unique: true, surnameType: "all" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, surnameType: 'all' })).toHaveLength(5);
  });
  test('cnname({ count: 5, part: "surname", surnameType: "common" }) should return array with five elements', () => {
    expect(cnname({ count: 5, part: 'surname', surnameType: 'common' })).toHaveLength(5);
  });
  test('cnname({ count: 5, part: "surname", surnameType: "common-single" }) should return array with five elements', () => {
    expect(cnname({ count: 5, part: 'surname', surnameType: 'common-single' })).toHaveLength(5);
  });
  test('cnname({ count: 5, part: "surname", surnameType: "common-compound" }) should return array with five elements', () => {
    expect(cnname({ count: 5, part: 'surname', surnameType: 'common-compound' })).toHaveLength(5);
  });
  test('cnname({ count: 5, surnameType: "error", surnameAlgorithm: "random" }) should return array with five elements', () => {
    // @ts-expect-error
    expect(cnname({ count: 5, surnameType: 'error', surnameAlgorithm: 'random' })).toHaveLength(5);
  });
  test('cnname({ count: 100, surnameType: "error", unique: true, surnameAlgorithm: "random" }) should return array with 100 elements', () => {
    // @ts-expect-error
    expect(cnname({ count: 100, surnameType: 'error', unique: true, surnameAlgorithm: 'random' })).toHaveLength(100);
  });
});
