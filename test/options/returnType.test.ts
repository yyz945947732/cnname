import { assertType, describe, expect, test } from 'vitest';
import cnname from '../../src';
import { getAllCommonSurname, getAllDictWords } from '../../src/utils/dict';

const allCommonSurname = getAllCommonSurname();
const allWords = getAllDictWords();

assertType<string[]>(cnname({ count: 5, returnType: 'surname' }));
assertType<string[]>(cnname({ count: 5, returnType: 'givenName' }));
assertType<string[]>(cnname({ count: 5, returnType: 'fullName' }));

describe('cnname.options.returnType', () => {
  test('cnname({ count: 5, returnType: "surname" }) should return array with five elements', () => {
    expect(cnname({ count: 5, returnType: 'surname' })).toHaveLength(5);
  });
  test('cnname({ count: 5, returnType: "surname" }) should return array with five surname', () => {
    const result = cnname({ count: 5, returnType: 'surname' }).every((word) => allCommonSurname.includes(word));
    expect(result).toBeTruthy();
  });
  test('cnname({ count: 5, returnType: "givenName" }) should return array with five elements', () => {
    expect(cnname({ count: 5, returnType: 'givenName' })).toHaveLength(5);
  });
  test('cnname({ count: 5, returnType: "givenName", givenNameLength: 1 }) should return array with five givenName', () => {
    const result = cnname({ count: 5, returnType: 'givenName', givenNameLength: 1 }).every((word) =>
      allWords.includes(word),
    );
    expect(result).toBeTruthy();
  });
  test('cnname({ count: 5, returnType: "fullName" }) should return array with five elements', () => {
    expect(cnname({ count: 5, returnType: 'fullName' })).toHaveLength(5);
  });
  test('cnname({ count: 5, returnType: "error" }) should return array with five elements', () => {
    // @ts-expect-error
    expect(cnname({ count: 5, returnType: 'error' })).toHaveLength(5);
  });
  test('cnname({ count: 5000, unique: true, returnType: "surname" }) should return less than 5000', () => {
    const data = cnname({ count: 50000, unique: true, returnType: 'surname' });
    expect(data.length).toBeLessThan(5000);
  });
  test('cnname({ count: 5000, unique: true, returnType: "givenName", givenNameLength: 1, givenNameAttributes: "female" }) should return less than 5000', () => {
    const data = cnname({
      count: 50000,
      unique: true,
      returnType: 'givenName',
      givenNameLength: 1,
      givenNameAttributes: 'female',
    });
    expect(data.length).toBeLessThan(5000);
  });
});
