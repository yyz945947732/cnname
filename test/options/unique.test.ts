import { getName } from '@/src';
import { assertType, describe, expect, test } from 'vitest';

assertType<string[]>(getName({ unique: true }));
assertType<string[]>(getName({ count: 5, unique: true }));

describe('getName.options.unique', () => {
  test('getName({ count: 5, unique: true }) should return array with five elements', () => {
    expect(getName({ count: 5, unique: true })).toHaveLength(5);
  });
  test('getName({ count: 5, unique: true, returnType: "surname", surname: "欧阳" }) should return array with one elements', () => {
    const result = getName({ count: 5, unique: true, returnType: 'surname', surname: '欧阳' });
    const [name] = result;
    expect(result).toHaveLength(1);
    expect(name).toBe('欧阳');
  });
  test('getName({ count: 5, unique: true, returnType: "surname", surname: ["李", "张"] }) should return array with one elements', () => {
    const result = getName({ count: 5, unique: true, returnType: 'surname', surname: ['李', '张'] });
    expect(result).toHaveLength(2);
  });
  test('getName({ count: 5, unique: true, surname: "张", givenNameStartsWith: "俊", givenNameEndsWith: "逸" }) should return array with two elements', () => {
    const result = getName({
      count: 5,
      unique: true,
      surname: '张',
      givenNameStartsWith: '俊',
      givenNameEndsWith: '逸',
    });
    expect(result.length).lessThanOrEqual(2);
  });
  test('getName({ count: 5, unique: true, surname: "张", givenNameStartsWith: "俊", givenNameEndsWith: "逸", givenNameLength: 2 }) should return array with one elements', () => {
    const result = getName({
      count: 5,
      unique: true,
      surname: '张',
      givenNameStartsWith: '俊',
      givenNameEndsWith: '逸',
      givenNameLength: 2,
    });
    expect(result).toHaveLength(1);
  });
  test('getName({ count: 5, unique: true, surname: "张", givenNameStartsWith: "俊", givenNameDuplicated: true }) should return array with one elements', () => {
    const result = getName({
      count: 5,
      unique: true,
      surname: '张',
      givenNameStartsWith: '俊',
      givenNameDuplicated: true,
    });
    expect(result).toHaveLength(1);
  });
  test('getName({ count: 5, unique: true, surname: ["李", "张"], givenNameStartsWith: "俊", givenNameEndsWith: "逸", givenNameLength: 2 }) should return array with two elements', () => {
    const result = getName({
      count: 5,
      unique: true,
      surname: ['李', '张'],
      givenNameStartsWith: '俊',
      givenNameEndsWith: '逸',
      givenNameLength: 2,
    });
    expect(result).toHaveLength(2);
  });
  test('getName({ count: 5, unique: true, returnType: "givenName" }) should return array with givenName', () => {
    expect(getName({ count: 5, unique: true, returnType: 'givenName' })).toHaveLength(5);
  });
  test('getName({ count: 5, unique: true, returnType: "surname" }) should return array with surname', () => {
    expect(getName({ count: 5, unique: true, returnType: 'surname' })).toHaveLength(5);
  });
});
