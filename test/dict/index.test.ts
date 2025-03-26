import { describe, test, expect, assertType } from 'vitest';
import wordsDict from '../../dict/words.json';
import { getAllCommonCompoundSurname, getAllCommonSingleCharacterSurname, getAllCommonSurname, getAllSurname } from '../../src/utils/dict';
import { COMMON_SINGLE_CHARACTER_SURNAMES_TOTAL, COMMON_COMPOUND_SURNAMES_TOTAL } from '../../src/utils/default';

const allSurnames = getAllSurname();
const allCommonSurnames = getAllCommonSurname();
const allCommonSingleCharacterSurname = getAllCommonSingleCharacterSurname();
const allCommonCompoundSurname = getAllCommonCompoundSurname();

assertType<string[]>(allSurnames);
assertType<string[]>(allCommonSurnames);
assertType<string[]>(allCommonSingleCharacterSurname);
assertType<string[]>(allCommonCompoundSurname);

describe('dict', () => {
  test(`the total number of common single surnames should be ${COMMON_SINGLE_CHARACTER_SURNAMES_TOTAL}`, () => {
    expect(allCommonSingleCharacterSurname.length).toBe(COMMON_SINGLE_CHARACTER_SURNAMES_TOTAL);
  });
  test(`the total number of common compound surnames should be ${COMMON_COMPOUND_SURNAMES_TOTAL}`, () => {
    expect(allCommonCompoundSurname.length).toBe(COMMON_COMPOUND_SURNAMES_TOTAL);
  });
  test('the surnames in the common surname list should exist in the all surname dict', () => {
    expect(allCommonSurnames.every((surname) => allSurnames.includes(surname))).toBeTruthy();
  });
  test('duplicate surnames should not appear in all surname dict', () => {
    const uniqAllSurnames = new Set(allSurnames);
    expect(uniqAllSurnames.size === allSurnames.length).toBeTruthy();
  });
  test('duplicate surnames should not appear in common surname dict', () => {
    const uniqAllCommonSurnames = new Set(allCommonSurnames);
    expect(uniqAllCommonSurnames.size === allCommonSurnames.length).toBeTruthy();
  });
  test('duplicate words should not appear in each type of words dict', () => {
    const dicts = Object.values(wordsDict);
    expect(dicts.every(list => new Set(list).size === list.length )).toBeTruthy();
  })
});
