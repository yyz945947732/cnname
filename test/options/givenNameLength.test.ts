import cnname from '../../src';
import { describe, test, expect, assertType } from 'vitest';

assertType<string[]>(cnname({ count: 5, givenNameLength: 2 }));
assertType<string[]>(cnname({ count: 5, givenNameLength: 1 }));
assertType<string[]>(cnname({ count: 5, givenNameLength: 0 }));

describe('cnname.options.givenNameLength', () => {
  test('cnname({ count: 5, givenNameLength: 999 }) should return array with five elements', () => {
    expect(cnname({ count: 5, givenNameLength: 999 })).toHaveLength(5);
  });
  test('cnname({ count: 5, surname: "张", givenNameLength: 2 }) should return array with givenNameLength 2', () => {
    const result = cnname({ count: 5, surname: "张", givenNameLength: 2 });
    const [name] = result;
    expect(name.length).toBe(3);
  });
  test('cnname({ count: 5, surname: "张", givenNameLength: -1 }) should return array with no givenName', () => {
    const result = cnname({ count: 5, surname: "张", givenNameLength: -1 });
    const [name] = result;
    expect(name).toBe("张");
  });
});
