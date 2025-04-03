import { assertType, describe, expect, test } from 'vitest';
import { getName } from '../../src';

assertType<string[]>(getName({ count: 5, givenNameLength: 2 }));
assertType<string[]>(getName({ count: 5, givenNameLength: 1 }));
assertType<string[]>(getName({ count: 5, givenNameLength: 0 }));

describe('getName.options.givenNameLength', () => {
  test('getName({ count: 5, givenNameLength: 999 }) should return array with five elements', () => {
    expect(getName({ count: 5, givenNameLength: 999 })).toHaveLength(5);
  });
  test('getName({ count: 5, surname: "张", givenNameLength: 2 }) should return array with givenNameLength 2', () => {
    const result = getName({ count: 5, surname: '张', givenNameLength: 2 });
    const [name] = result;
    expect(name.length).toBe(3);
  });
  test('getName({ count: 5, surname: "张", givenNameLength: -1 }) should return array with no givenName', () => {
    const result = getName({ count: 5, surname: '张', givenNameLength: -1 });
    const [name] = result;
    expect(name).toBe('张');
  });
});
