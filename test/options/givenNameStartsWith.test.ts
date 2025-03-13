import cnname from '../../src';
import { describe, test, expect, assertType } from 'vitest';

assertType<string[]>(cnname({ count: 5, givenNameStartsWith: '俊' }));

describe('cnname.options.givenNameStartsWith', () => {
  test('cnname({ count: 5, surname: "张", givenNameLength: 2, givenNameStartsWith: "英" }) should return array with givenNameEndsWith "英"', () => {
    const result = cnname({ count: 5, surname: "张", givenNameLength: 2, givenNameStartsWith: "英" });
    const [name] = result;
    expect(name[1]).toEqual('英');
  });
  test('cnname({ count: 50000, unique: true, surname: "张", givenNameLength: 2, givenNameStartsWith: "俊" }) should return instantly', () => {
    expect(cnname({ count: 50000, unique: true, surname: '张', givenNameLength: 2, givenNameStartsWith: '俊' }).length).lt(50000);
  });
});
