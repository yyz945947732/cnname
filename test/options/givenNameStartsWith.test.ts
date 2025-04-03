import { getName } from '@/src';
import { assertType, describe, expect, test } from 'vitest';

assertType<string[]>(getName({ count: 5, givenNameStartsWith: '俊' }));

describe('getName.options.givenNameStartsWith', () => {
  test('getName({ count: 5, surname: "张", givenNameLength: 2, givenNameStartsWith: "英" }) should return array with givenNameStartsWith "英"', () => {
    const result = getName({ count: 5, surname: '张', givenNameLength: 2, givenNameStartsWith: '英' });
    expect(result.every((item) => item[1] === '英')).toBeTruthy();
  });
});
