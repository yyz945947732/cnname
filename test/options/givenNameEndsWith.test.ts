import { assertType, describe, expect, test } from 'vitest';
import { getName } from '../../src';

assertType<string[]>(getName({ count: 5, givenNameEndsWith: '轩' }));

describe('getName.options.givenNameEndsWith', () => {
  test('getName({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" }) should return array with givenNameEndsWith "英"', () => {
    const result = getName({ count: 5, surname: '张', givenNameLength: 2, givenNameEndsWith: '英' });
    expect(result.every((item) => item[2] === '英')).toBeTruthy();
  });
});
