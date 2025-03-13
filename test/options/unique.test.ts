import cnname from '../../src';
import { describe, test, expect, assertType } from 'vitest';

assertType<string[]>(cnname({ unique: true }));
assertType<string[]>(cnname({ count: 5, unique: true, givenNameLength: 2 }));

describe('cnname.options.unique', () => {
  test('cnname({ count: 5, unique: true }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true }).length).toEqual(5);
  });
  test('cnname({ count: 5, unique: true, part: "surname", surname: "欧阳" }) should return array with one elements', () => {
    const result = cnname({ count: 5, unique: true, part: "surname", surname: "欧阳" });
    const [name] = result;
    expect(result.length).toEqual(1);
    expect(name).toEqual("欧阳");
  });
  test('cnname({ count: 5, unique: true, part: "givenName" }) should return array with givenName', () => {
    expect(cnname({ count: 5, unique: true, part: 'givenName' }).length).toEqual(5);
  });
  test('cnname({ count: 5, unique: true, part: "surname" }) should return array with givenName', () => {
    expect(cnname({ count: 5, unique: true, part: 'surname' }).length).toEqual(5);
  });
});
