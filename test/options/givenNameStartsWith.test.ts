import { assertType, describe, expect, test } from 'vitest';
import cnname from '../../src';

assertType<string[]>(cnname({ count: 5, givenNameStartsWith: '俊' }));

describe('cnname.options.givenNameStartsWith', () => {
  test('cnname({ count: 5, surname: "张", givenNameLength: 2, givenNameStartsWith: "英" }) should return array with givenNameStartsWith "英"', () => {
    const result = cnname({
      count: 5,
      surname: '张',
      givenNameLength: 2,
      givenNameStartsWith: '英',
    });
    expect(result.every((item) => item[1] === '英')).toBeTruthy();
  });
});
