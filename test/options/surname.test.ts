import { assertType, describe, expect, test } from 'vitest';
import cnname from '../../src';

assertType<string[]>(cnname({ count: 5, surname: '张' }));
assertType<string[]>(cnname({ count: 5, surname: '欧阳' }));
assertType<string[]>(cnname({ count: 5, surname: ['张', '欧阳'] }));

describe('cnname.options.surname', () => {
  test('cnname({ count: 5, surname: "张" }) should return array with surname "张"', () => {
    const result = cnname({ count: 5, surname: '张' });
    const [name] = result;
    expect(name[0]).toBe('张');
  });
  test('cnname({ count: 5, unique: true, surname: ["张", "李"] }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, surname: ['张', '李'] })).toHaveLength(5);
  });
  test('cnname({ count: 5, unique: true, surname: ["张", "李"] }) should return array with surname "张" or "李"', () => {
    const data = cnname({ count: 5, unique: true, surname: ['张', '李'] });
    const result = data.every((surname) => ['张', '李'].includes(surname[0]));
    expect(result).toBeTruthy();
  });
  test('cnname({ count: 5, unique: true, surname: ["张", "张"] }) should return array with surname "张" or "张"', () => {
    const data = cnname({ count: 5, unique: true, surname: ['张', '张'] });
    const result = data.every((surname) => ['张'].includes(surname[0]));
    expect(result).toBeTruthy();
  });
  test('cnname({ count: 5, unique: true, surname: [] }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, surname: [] })).toHaveLength(5);
  });
  test('cnname({ count: 5, surname: [] }) should return array with five elements', () => {
    expect(cnname({ count: 5, surname: [] })).toHaveLength(5);
  });
  test('cnname({ count: 5, unique: true, returnType: "surname", surname: [] }) should return empty array', () => {
    expect(cnname({ count: 5, unique: true, returnType: 'surname', surname: [] })).toHaveLength(0);
  });
  test('cnname({ count: 5, returnType: "surname", surname: [] }) should return array with five empty string', () => {
    expect(cnname({ count: 5, returnType: 'surname', surname: [] }).every((name) => name === '')).toBeTruthy();
  });
});
