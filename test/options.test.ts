import cnname from '../src';
import { describe, test, expect, assertType } from 'vitest';

assertType<string[]>(cnname({ count: 5 }));
assertType<string[]>(cnname({ count: 0 }));
assertType<string[]>(cnname({ count: -1 }));
assertType<string[]>(cnname({ unique: true }));
assertType<string[]>(cnname({ count: 5, unique: true, surnameType: 'compound' }));
assertType<string[]>(cnname({ count: 5, unique: true, surnameType: 'single' }));
assertType<string[]>(cnname({ count: 5, unique: true, surnameType: 'all' }));
assertType<string[]>(cnname({ count: 5, unique: true, surnameType: 'common' }));
assertType<string[]>(cnname({ count: 5, unique: true, surnameType: 'single-common' }));
assertType<string[]>(cnname({ count: 5, unique: true, surnameType: 'compound-common' }));

describe('cnname(options)', () => {
  test('cnname({ count: 5 }) should return array with five elements', () => {
    expect(cnname({ count: 5 }).length).toEqual(5);
  });
  test('cnname({ count: -1 }) should return array with one elements', () => {
    expect(cnname({ count: -1 }).length).toEqual(0);
  });
  test('cnname({ count: 0 }) should return empty array', () => {
    expect(cnname({ count: 0 }).length).toEqual(0);
  });
  test('cnname({ count: 5, unique: true }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true }).length).toEqual(5);
  });
  test('cnname({ count: 5, unique: true, surnameType: "compound" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, surnameType: "compound" }).length).toEqual(5);
  });
  test('cnname({ count: 5, unique: true, surnameType: "single" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, surnameType: "single" }).length).toEqual(5);
  });
  test('cnname({ count: 5, unique: true, surnameType: "all" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, surnameType: "all" }).length).toEqual(5);
  });
  test('cnname({ count: 5, part: "surname", surnameType: "common" }) should return array with five elements', () => {
    expect(cnname({ count: 5, part: "surname", surnameType: "common" }).length).toEqual(5);
  });
  test('cnname({ count: 5, part: "surname", surnameType: "common", algorithm: "random" }) should return array with five elements', () => {
    expect(cnname({ count: 5, part: "surname", surnameType: "common", algorithm: 'random' }).length).toEqual(5);
  });
  test('cnname({ count: 5, part: "surname", surnameType: "common", algorithm: "weight" }) should return array with five elements', () => {
    expect(cnname({ count: 5, part: "surname", surnameType: "common", algorithm: 'weight' }).length).toEqual(5);
  });
  test('cnname({ count: 5, part: "surname", surnameType: "single-common" }) should return array with five elements', () => {
    expect(cnname({ count: 5, part: "surname", surnameType: "single-common" }).length).toEqual(5);
  });
  test('cnname({ count: 5, part: "surname", surnameType: "compound-common" }) should return array with five elements', () => {
    expect(cnname({ count: 5, part: "surname", surnameType: "compound-common" }).length).toEqual(5);
  });
  test('cnname({ count: 5, unique: true, surname: ["张", "李"] }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, surname: ["张", "李"] }).length).toEqual(5);
  });
  test('cnname({ count: 5, unique: true, surname: ["张", "李"] }) should return array with surname "张" or "李"', () => {
    expect(cnname({ count: 5, unique: true, surname: ["张", "李"] }).every(surname => ["张", "李"].includes(surname[0]))).toBeTruthy();
  });
  test('cnname({ count: 5, unique: true, surname: [] }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, surname: [] }).length).toEqual(5);
  });
  test('cnname({ count: 5, unique: true, part: "surname", surname: [] }) should return array with one elements', () => {
    expect(cnname({ count: 5, unique: true, part: 'surname', surname: [] }).length).toEqual(0);
  });
  test('cnname({ count: 5, unique: true, duplicatedGivenNameOnly: true }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, duplicatedGivenNameOnly: true }).length).toEqual(5);
  });
  test('cnname({ count: 5, unique: true, duplicatedGivenNameOnly: true, surnameType: "single" }) should return array with repeated givenName', () => {
    const result = cnname({ count: 5, unique: true, duplicatedGivenNameOnly: true, surnameType: "single" });
    const [name] = result;
    expect(name[1]).toEqual(name[2]);
  });
  test('cnname({ count: 5, unique: true, duplicatedGivenNameOnly: true, givenNameLength: 2, surnameType: "single" }) should return array with repeated givenName', () => {
    const result = cnname({ count: 5, unique: true, duplicatedGivenNameOnly: true, givenNameLength: 2, surnameType: "single" });
    const [name] = result;
    expect(name[1]).toEqual(name[2]);
  });
  test('cnname({ count: 5, unique: true, duplicatedGivenNameOnly: true, givenNameLength: 3, surnameType: "single" }) should return array with repeated givenName', () => {
    const result = cnname({ count: 5, unique: true, duplicatedGivenNameOnly: true, givenNameLength: 3, surnameType: "single" });
    const [name] = result;
    expect(name[1]).toEqual(name[2]);
    expect(name[2]).toEqual(name[3]);
  });
  test('cnname({ count: 5, surname: "张" }) should return array with surname "张"', () => {
    const result = cnname({ count: 5, surname: "张" });
    const [name] = result;
    expect(name[0]).toEqual("张");
  });
  test('cnname({ count: 5, surname: "张", givenNameLength: -1 }) should return array with no givenName', () => {
    const result = cnname({ count: 5, surname: "张", givenNameLength: -1 });
    const [name] = result;
    expect(name).toEqual("张");
  });
  test('cnname({ count: 5, surname: "张", givenNameLength: 2 }) should return array with givenNameLength 2', () => {
    const result = cnname({ count: 5, surname: "张", givenNameLength: 2 });
    const [name] = result;
    expect(name.length).toEqual(3);
  });
  test('cnname({ count: 5, givenNameLength: 999 }) should return array with five elements', () => {
    expect(cnname({ count: 5, givenNameLength: 999 }).length).toEqual(5);
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
  test('cnname({ count: 5000, unique: true, part: "surname", surnameType: "common", algorithm: "weight" }) should return instantly', () => {
    expect(cnname({ count: 5000, unique: true, part: 'surname', surnameType: 'common', algorithm: 'weight' }).length).lt(5000);
  });
  test('cnname({ count: 50000, unique: true, part: "surname", surnameType: "all", algorithm: "weight" }) should return instantly', () => {
    expect(cnname({ count: 50000, unique: true, part: 'surname', surnameType: 'all', algorithm: 'weight' }).length).lt(50000);
  });
  test('cnname({ count: 5000, unique: true, part: "surname", surnameType: "common", algorithm: "random" }) should return instantly', () => {
    expect(cnname({ count: 5000, unique: true, part: 'surname', surnameType: 'common', algorithm: 'random' }).length).lt(5000);
  });
  test('cnname({ count: 50000, unique: true, part: "surname", surnameType: "all", algorithm: "random" }) should return instantly', () => {
    expect(cnname({ count: 50000, unique: true, part: 'surname', surnameType: 'all', algorithm: 'random' }).length).lt(50000);
  });
});
