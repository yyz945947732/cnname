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
    const data = cnname({ count: 5, unique: true, surnameType: 'all-compound' });
    expect(data).toHaveLength(5);
    expect(data.every((name) => name.length >= 3)).toBeTruthy();
  });
  test('cnname({ count: 5, unique: true, surnameType: "all-single" }) should return array with five elements', () => {
    const data = cnname({ count: 5, unique: true, surnameType: 'all-single' });
    expect(data).toHaveLength(5);
    expect(data.every((name) => name.length <= 3)).toBeTruthy();
  });
  test('cnname({ count: 5, unique: true, surnameType: "all" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, surnameType: 'all' })).toHaveLength(5);
  });
  test('cnname({ count: 5, returnType: "surname", surnameType: "common" }) should return array with five elements', () => {
    expect(cnname({ count: 5, returnType: 'surname', surnameType: 'common' })).toHaveLength(5);
  });
  test('cnname({ count: 5, unique: true, surnameType: "common-single" }) should return array with five elements', () => {
    const data = cnname({ count: 5, unique: true, surnameType: 'common-single' });
    expect(data).toHaveLength(5);
    expect(data.every((name) => name.length <= 3)).toBeTruthy();
  });
  test('cnname({ count: 5, unique: true, surnameType: "common-compound" }) should return array with five elements', () => {
    const data = cnname({ count: 5, unique: true, surnameType: 'common-compound' });
    expect(data).toHaveLength(5);
    expect(data.every((name) => name.length >= 3)).toBeTruthy();
  });
  test('cnname({ count: 5, surnameType: "error", surnamePickStrategy: "random" }) should return array with five elements', () => {
    // @ts-expect-error
    expect(cnname({ count: 5, surnameType: 'error', surnamePickStrategy: 'random' })).toHaveLength(5);
  });
  test('cnname({ count: 100, surnameType: "error", unique: true, surnamePickStrategy: "random" }) should return array with 100 elements', () => {
    // @ts-expect-error
    expect(cnname({ count: 100, surnameType: 'error', unique: true, surnamePickStrategy: 'random' })).toHaveLength(100);
  });
});
