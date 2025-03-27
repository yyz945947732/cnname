import { assertType, describe, expect, test } from 'vitest';
import cnname from '../../src';

assertType<string[]>(cnname({ unique: true }));
assertType<string[]>(cnname({ count: 5, unique: true, givenNameLength: 2 }));

describe('cnname.options.unique', () => {
  test('cnname({ count: 5, unique: true }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true }).length).toBe(5);
  });
  test('cnname({ count: 5, unique: true, part: "surname", surname: "欧阳" }) should return array with one elements', () => {
    const result = cnname({ count: 5, unique: true, part: 'surname', surname: '欧阳' });
    const [name] = result;
    expect(result.length).toBe(1);
    expect(name).toBe('欧阳');
  });
  test('cnname({ count: 5, unique: true, part: "surname", surname: ["李", "张"] }) should return array with one elements', () => {
    const result = cnname({ count: 5, unique: true, part: 'surname', surname: ['李', '张'] });
    expect(result.length).toBe(2);
  });
  test('cnname({ count: 5, unique: true, surname: "张", givenNameStartsWith: "俊", givenNameEndsWith: "逸" }) should return array with two elements', () => {
    const result = cnname({
      count: 5,
      unique: true,
      surname: '张',
      givenNameStartsWith: '俊',
      givenNameEndsWith: '逸',
    });
    expect(result.length).lte(2);
  });
  test('cnname({ count: 5, unique: true, surname: "张", givenNameStartsWith: "俊", givenNameEndsWith: "逸", givenNameLength: 2 }) should return array with one elements', () => {
    const result = cnname({
      count: 5,
      unique: true,
      surname: '张',
      givenNameStartsWith: '俊',
      givenNameEndsWith: '逸',
      givenNameLength: 2,
    });
    expect(result.length).toBe(1);
  });
  test('cnname({ count: 5, unique: true, surname: "张", givenNameStartsWith: "俊", givenNameDuplicated: true }) should return array with one elements', () => {
    const result = cnname({
      count: 5,
      unique: true,
      surname: '张',
      givenNameStartsWith: '俊',
      givenNameDuplicated: true,
    });
    expect(result.length).toBe(1);
  });
  test('cnname({ count: 5, unique: true, surname: ["李", "张"], givenNameStartsWith: "俊", givenNameEndsWith: "逸", givenNameLength: 2 }) should return array with two elements', () => {
    const result = cnname({
      count: 5,
      unique: true,
      surname: ['李', '张'],
      givenNameStartsWith: '俊',
      givenNameEndsWith: '逸',
      givenNameLength: 2,
    });
    expect(result.length).toBe(2);
  });
  test('cnname({ count: 5, unique: true, part: "givenName" }) should return array with givenName', () => {
    expect(cnname({ count: 5, unique: true, part: 'givenName' })).toHaveLength(5);
  });
  test('cnname({ count: 5, unique: true, part: "surname" }) should return array with surname', () => {
    expect(cnname({ count: 5, unique: true, part: 'surname' })).toHaveLength(5);
  });
});
