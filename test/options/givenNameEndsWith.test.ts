import { assertType, describe, expect, test } from 'vitest';
import cnname from '../../src';

assertType<string[]>(cnname({ count: 5, givenNameEndsWith: '轩' }));

describe('cnname.options.givenNameEndsWith', () => {
  test('cnname({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" }) should return array with givenNameEndsWith "英"', () => {
    const result = cnname({ count: 5, surname: '张', givenNameLength: 2, givenNameEndsWith: '英' });
    expect(result.every((item) => item[2] === '英')).toBeTruthy();
  });
});
