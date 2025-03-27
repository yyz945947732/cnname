import { assertType, describe, expect, test } from 'vitest';
import cnname from '../../src';
import { getAllCommonSurname, getAllDictWords } from '../../src/utils/dict';

const allCommonSurname = getAllCommonSurname();
const allWords = getAllDictWords();

assertType<string[]>(cnname({ count: 5, part: 'surname' }));
assertType<string[]>(cnname({ count: 5, part: 'givenName' }));
assertType<string[]>(cnname({ count: 5, part: 'fullName' }));

describe('cnname.options.part', () => {
  test('cnname({ count: 5, part: "surname" }) should return array with five elements', () => {
    expect(cnname({ count: 5, part: 'surname' })).toHaveLength(5);
  });
  test('cnname({ count: 5, part: "surname" }) should return array with five surname', () => {
    const result = cnname({ count: 5, part: 'surname' }).every((word) => allCommonSurname.includes(word));
    expect(result).toBeTruthy();
  });
  test('cnname({ count: 5, part: "givenName" }) should return array with five elements', () => {
    expect(cnname({ count: 5, part: 'givenName' })).toHaveLength(5);
  });
  test('cnname({ count: 5, part: "givenName", givenNameLength: 1 }) should return array with five givenName', () => {
    const result = cnname({ count: 5, part: 'givenName', givenNameLength: 1 }).every((word) => allWords.includes(word));
    expect(result).toBeTruthy();
  });
  test('cnname({ count: 5, part: "fullName" }) should return array with five elements', () => {
    expect(cnname({ count: 5, part: 'fullName' })).toHaveLength(5);
  });
  test('cnname({ count: 5, part: "error" }) should return array with five elements', () => {
    // @ts-expect-error
    expect(cnname({ count: 5, part: 'error' })).toHaveLength(5);
  });
});
