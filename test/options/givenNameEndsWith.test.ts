import cnname from '../../src';
import { describe, test, expect, assertType } from 'vitest';

assertType<string[]>(cnname({ count: 5, givenNameEndsWith: '轩' }));

describe('cnname.options.givenNameEndsWith', () => {
  test('cnname({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" }) should return array with givenNameEndsWith "英"', () => {
    const result = cnname({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" });
    expect(result.every(item => item[2] === '英')).toBeTruthy();
  });
});
