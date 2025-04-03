import { getName } from '@/src';
import { assertType, describe, expect, test } from 'vitest';

assertType<string[]>(getName({ count: 5, givenNameDuplicated: true }));

describe('getName.options.givenNameDuplicated', () => {
  test('getName({ count: 5, givenNameDuplicated: true }) should return array with five elements', () => {
    expect(getName({ count: 5, givenNameDuplicated: true })).toHaveLength(5);
  });
  test('getName({ count: 5, givenNameDuplicated: true, givenNameLength: 2, surnameType: "single" }) should return array with repeated givenName', () => {
    const result = getName({ count: 5, givenNameDuplicated: true, givenNameLength: 2, surnameType: 'single' });
    const [name] = result;
    expect(name[1]).toBe(name[2]);
  });
  test('getName({ count: 5, givenNameDuplicated: true, givenNameLength: 3, surnameType: "single" }) should return array with repeated givenName', () => {
    const result = getName({ count: 5, givenNameDuplicated: true, givenNameLength: 3, surnameType: 'single' });
    const [name] = result;
    expect(name[1]).toBe(name[2]);
    expect(name[2]).toBe(name[3]);
  });
});
