import cnname from '../../src';
import { describe, test, expect, assertType } from 'vitest';

assertType<string[]>(cnname({ count: 5, surnameType: 'common' }));
assertType<string[]>(cnname({ count: 5, surnameType: 'common-single' }));
assertType<string[]>(cnname({ count: 5, surnameType: 'common-compound' }));
assertType<string[]>(cnname({ count: 5, surnameType: 'all-single' }));
assertType<string[]>(cnname({ count: 5, surnameType: 'all-compound' }));
assertType<string[]>(cnname({ count: 5, surnameType: 'all' }));

describe('cnname.options.surnameType', () => {
  test('cnname({ count: 5, unique: true, surnameType: "all-compound" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, surnameType: "all-compound" }).length).toEqual(5);
  });
  test('cnname({ count: 5, unique: true, surnameType: "all-single" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, surnameType: "all-single" }).length).toEqual(5);
  });
  test('cnname({ count: 5, unique: true, surnameType: "all" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, surnameType: "all" }).length).toEqual(5);
  });
  test('cnname({ count: 5, part: "surname", surnameType: "common" }) should return array with five elements', () => {
    expect(cnname({ count: 5, part: "surname", surnameType: "common" }).length).toEqual(5);
  });
  test('cnname({ count: 5, part: "surname", surnameType: "common-single" }) should return array with five elements', () => {
    expect(cnname({ count: 5, part: "surname", surnameType: "common-single" }).length).toEqual(5);
  });
  test('cnname({ count: 5, part: "surname", surnameType: "common-compound" }) should return array with five elements', () => {
    expect(cnname({ count: 5, part: "surname", surnameType: "common-compound"}).length).toEqual(5);
  });
  test('cnname({ count: 5, surnameType: "error", surnameAlgorithm: "random" }) should return array with five elements', () => {
    // @ts-expect-error
    expect(cnname({ count: 5, surnameType: 'error', surnameAlgorithm: 'random' }).length).toEqual(5);
  });
});
