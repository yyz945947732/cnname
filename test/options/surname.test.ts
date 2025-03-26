import cnname from '../../src';
import { describe, test, expect, assertType } from 'vitest';

assertType<string[]>(cnname({ count: 5, surname: '张' }));
assertType<string[]>(cnname({ count: 5, surname: '欧阳' }));
assertType<string[]>(cnname({ count: 5, surname: ['张', '欧阳'] }));

describe('cnname.options.surname', () => {
  test('cnname({ count: 5, surname: "张" }) should return array with surname "张"', () => {
    const result = cnname({ count: 5, surname: "张" });
    const [name] = result;
    expect(name[0]).toBe("张");
  });
  test('cnname({ count: 5, unique: true, surname: ["张", "李"] }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, surname: ["张", "李"] })).toHaveLength(5);
  });
  test('cnname({ count: 5, unique: true, surname: ["张", "李"] }) should return array with surname "张" or "李"', () => {
    expect(cnname({ count: 5, unique: true, surname: ["张", "李"] }).every(surname => ["张", "李"].includes(surname[0]))).toBeTruthy();
  });
  test('cnname({ count: 5, unique: true, surname: ["张", "张"] }) should return array with surname "张" or "张"', () => {
    expect(cnname({ count: 5, unique: true, surname: ["张", "张"] }).every(surname => ["张"].includes(surname[0]))).toBeTruthy();
  });
  test('cnname({ count: 5, unique: true, surname: [] }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, surname: [] })).toHaveLength(5);
  });
  test('cnname({ count: 5, surname: [] }) should return array with five elements', () => {
    expect(cnname({ count: 5, surname: [] })).toHaveLength(5);
  });
  test('cnname({ count: 5, unique: true, part: "surname", surname: [] }) should return empty array', () => {
    expect(cnname({ count: 5, unique: true, part: 'surname', surname: [] })).toHaveLength(0);
  });
  test('cnname({ count: 5, part: "surname", surname: [] }) should return array with five empty string', () => {
    expect(cnname({ count: 5, part: 'surname', surname: [] }).every(name => name === '')).toBeTruthy();
  });
});
