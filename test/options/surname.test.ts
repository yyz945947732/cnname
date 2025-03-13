import cnname from '../../src';
import { describe, test, expect, assertType } from 'vitest';

assertType<string[]>(cnname({ count: 5, surname: '张' }));
assertType<string[]>(cnname({ count: 5, surname: '欧阳' }));
assertType<string[]>(cnname({ count: 5, surname: ['张', '欧阳'] }));

describe('cnname.options.surname', () => {
  test('cnname({ count: 5, surname: "张" }) should return array with surname "张"', () => {
    const result = cnname({ count: 5, surname: "张" });
    const [name] = result;
    expect(name[0]).toEqual("张");
  });
  test('cnname({ count: 5, unique: true, surname: ["张", "李"] }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, surname: ["张", "李"] }).length).toEqual(5);
  });
  test('cnname({ count: 5, unique: true, surname: ["张", "李"] }) should return array with surname "张" or "李"', () => {
    expect(cnname({ count: 5, unique: true, surname: ["张", "李"] }).every(surname => ["张", "李"].includes(surname[0]))).toBeTruthy();
  });
  test('cnname({ count: 5, unique: true, surname: ["张", "张"] }) should return array with surname "张" or "张"', () => {
    expect(cnname({ count: 5, unique: true, surname: ["张", "张"] }).every(surname => ["张"].includes(surname[0]))).toBeTruthy();
  });
  test('cnname({ count: 5, unique: true, surname: [] }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, surname: [] }).length).toEqual(5);
  });
  test('cnname({ count: 5, unique: true, part: "surname", surname: [] }) should return array with one elements', () => {
    expect(cnname({ count: 5, unique: true, part: 'surname', surname: [] }).length).toEqual(0);
  });
});
