import cnname from '../src';
import { describe, test, expect, assertType } from 'vitest';

assertType<string[]>(cnname({ count: 5 }));
assertType<string[]>(cnname({ count: 0 }));
assertType<string[]>(cnname({ count: -1 }));
assertType<string[]>(cnname({ unique: true }));
assertType<string[]>(cnname({ count: 5, unique: true, surnameType: 'all-compound' }));
assertType<string[]>(cnname({ count: 5, unique: true, surnameType: 'all-single' }));
assertType<string[]>(cnname({ count: 5, unique: true, surnameType: 'all' }));
assertType<string[]>(cnname({ count: 5, unique: true, surnameType: 'common' }));
assertType<string[]>(cnname({ count: 5, unique: true, surnameType: 'common-single' }));
assertType<string[]>(cnname({ count: 5, unique: true, surnameType: 'common-compound' }));
assertType<string[]>(cnname({ count: 5, unique: true, givenNameType: 'male' }));
assertType<string[]>(cnname({ count: 5, unique: true, givenNameType: 'female' }));
assertType<string[]>(cnname({ count: 5, unique: true, givenNameType: 'all' }));

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
  test('cnname({ count: 5, unique: true, surnameType: "all-compound" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, surnameType: "all-compound" }).length).toEqual(5);
  });
  test('cnname({ count: 5, unique: true, surnameType: "all-single" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, surnameType: "all-single" }).length).toEqual(5);
  });
  test('cnname({ count: 5, unique: true, surnameType: "all" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, surnameType: "all" }).length).toEqual(5);
  });
  test('cnname({ count: 5, part: "surname", surnameType: "common" }) should return array with five elements', () => {
    expect(cnname({ count: 5, part: "surname", surnameType: "common" }).length).toEqual(5);
  });
  test('cnname({ count: 5, part: "surname", surnameType: "common", surnameAlgorithm: "random" }) should return array with five elements', () => {
    expect(cnname({ count: 5, part: "surname", surnameType: "common", surnameAlgorithm: "random" }).length).toEqual(5);
  });
  test('cnname({ count: 5, part: "surname", surnameType: "common", surnameAlgorithm: "weight" }) should return array with five elements', () => {
    expect(cnname({ count: 5, part: "surname", surnameType: "common", surnameAlgorithm: "weight" }).length).toEqual(5);
  });
  test('cnname({ count: 5, part: "surname", surnameType: "common-single" }) should return array with five elements', () => {
    expect(cnname({ count: 5, part: "surname", surnameType: "common-single" }).length).toEqual(5);
  });
  test('cnname({ count: 5, part: "surname", surnameType: "common-compound" }) should return array with five elements', () => {
    expect(cnname({ count: 5, part: "surname", surnameType: "common-compound"}).length).toEqual(5);
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
  test('cnname({ count: 5, unique: true, givenNameDuplicated: true }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, givenNameDuplicated: true }).length).toEqual(5);
  });
  test('cnname({ count: 5, unique: true, givenNameDuplicated: true, surnameType: "all-single" }) should return array with repeated givenName', () => {
    const result = cnname({ count: 5, unique: true, givenNameDuplicated: true, surnameType: "all-single" });
    const [name] = result;
    expect(name[1]).toEqual(name[2]);
  });
  test('cnname({ count: 5, unique: true, givenNameDuplicated: true, givenNameLength: 2, surnameType: "all-single" }) should return array with repeated givenName', () => {
    const result = cnname({ count: 5, unique: true, givenNameDuplicated: true, givenNameLength: 2, surnameType: "all-single" });
    const [name] = result;
    expect(name[1]).toEqual(name[2]);
  });
  test('cnname({ count: 5, unique: true, givenNameDuplicated: true, givenNameLength: 3, surnameType: "all-single" }) should return array with repeated givenName', () => {
    const result = cnname({ count: 5, unique: true, givenNameDuplicated: true, givenNameLength: 3, surnameType: "all-single" });
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
  test('cnname({ count: 5, unique: true, givenNameType: "male" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, givenNameType: "male" }).length).toEqual(5);
  });
  test('cnname({ count: 5, unique: true, givenNameType: "all" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, givenNameType: "all" }).length).toEqual(5);
  });
  test('cnname({ count: 5, unique: true, givenNameType: "female" }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, givenNameType: "female" }).length).toEqual(5);
  });
  test('cnname({ count: 5, surnameType: "error", surnameAlgorithm: "random" }) should return array with five elements', () => {
    // @ts-expect-error
    expect(cnname({ count: 5, surnameType: 'error', surnameAlgorithm: 'random' }).length).toEqual(5);
  });
  test('cnname({ count: 5, surnameType: "common", part: "error" }) should return array with five elements', () => {
    // @ts-expect-error
    expect(cnname({ count: 5, surnameType: 'common', part: 'error' }).length).toEqual(5);
  });
  test('cnname({ count: 50, unique: true, part: "surname", surnameType: "common", surnameAlgorithm: "random" }) should return instantly', () => {
    expect(cnname({ count: 50, unique: true, part: 'surname', surnameType: 'common', surnameAlgorithm: 'random' }).length).toEqual(50);
  });
  test('cnname({ count: 5000, unique: true, part: "surname", surnameType: "common", surnameAlgorithm: "weight" }) should return instantly', () => {
    expect(cnname({ count: 5000, unique: true, part: 'surname', surnameType: 'common', surnameAlgorithm: 'weight' }).length).lt(5000);
  });
  test('cnname({ count: 50000, unique: true, part: "surname", surnameType: "all", surnameAlgorithm: "weight" }) should return instantly', () => {
    expect(cnname({ count: 50000, unique: true, part: 'surname', surnameType: 'all', surnameAlgorithm: 'weight' }).length).lt(50000);
  });
  test('cnname({ count: 5000, unique: true, part: "surname", surnameType: "common", surnameAlgorithm: "random" }) should return instantly', () => {
    expect(cnname({ count: 5000, unique: true, part: 'surname', surnameType: 'common', surnameAlgorithm: 'random' }).length).lt(5000);
  });
  test('cnname({ count: 50000, unique: true, part: "surname", surnameType: "all", surnameAlgorithm: "random" }) should return instantly', () => {
    expect(cnname({ count: 50000, unique: true, part: 'surname', surnameType: 'all', surnameAlgorithm: 'random' }).length).lt(50000);
  });
  test('cnname({ count: 100, unique: true, part: "givenName", givenNameType: "male", givenNameLength: 1 }) should return instantly', () => {
    expect(cnname({ count: 100, unique: true, part: 'givenName', givenNameType: "male", givenNameLength: 1 }).length).lt(100);
  });
  test('cnname({ count: 100, unique: true, part: "givenName", givenNameType: "female", givenNameLength: 1 }) should return instantly', () => {
    expect(cnname({ count: 100, unique: true, part: 'givenName', givenNameType: "female", givenNameLength: 1 }).length).lt(100);
  });
  test('cnname({ count: 50000, unique: true, part: "givenName", givenNameType: "all", givenNameLength: 1 }) should return instantly', () => {
    expect(cnname({ count: 50000, unique: true, part: 'givenName', givenNameType: "all", givenNameLength: 1 }).length).lt(50000);
  });
});
