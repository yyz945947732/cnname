import { assertType, describe, expect, test } from 'vitest';
import cnname from '../../src';

assertType<string[]>(cnname({ unique: true }));
assertType<string[]>(cnname({ count: 5, unique: true }));

describe('cnname.options.unique', () => {
  test('cnname({ count: 5, unique: true }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true })).toHaveLength(5);
  });
  test('cnname({ count: 5, unique: true, part: "surname", surname: "欧阳" }) should return array with one elements', () => {
    const result = cnname({ count: 5, unique: true, part: 'surname', surname: '欧阳' });
    const [name] = result;
    expect(result).toHaveLength(1);
    expect(name).toBe('欧阳');
  });
  test('cnname({ count: 5, unique: true, part: "surname", surname: ["李", "张"] }) should return array with one elements', () => {
    const result = cnname({ count: 5, unique: true, part: 'surname', surname: ['李', '张'] });
    expect(result).toHaveLength(2);
  });
  test('cnname({ count: 5, unique: true, surname: "张", givenNameStartsWith: "俊", givenNameEndsWith: "逸" }) should return array with two elements', () => {
    const result = cnname({
      count: 5,
      unique: true,
      surname: '张',
      givenNameStartsWith: '俊',
      givenNameEndsWith: '逸',
    });
    expect(result.length).lessThanOrEqual(2);
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
    expect(result).toHaveLength(1);
  });
  test('cnname({ count: 5, unique: true, surname: "张", givenNameStartsWith: "俊", givenNameDuplicated: true }) should return array with one elements', () => {
    const result = cnname({
      count: 5,
      unique: true,
      surname: '张',
      givenNameStartsWith: '俊',
      givenNameDuplicated: true,
    });
    expect(result).toHaveLength(1);
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
    expect(result).toHaveLength(2);
  });
  test('cnname({ count: 5, unique: true, part: "givenName" }) should return array with givenName', () => {
    expect(cnname({ count: 5, unique: true, part: 'givenName' })).toHaveLength(5);
  });
  test('cnname({ count: 5, unique: true, part: "surname" }) should return array with surname', () => {
    expect(cnname({ count: 5, unique: true, part: 'surname' })).toHaveLength(5);
  });
});
