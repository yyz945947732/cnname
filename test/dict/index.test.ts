import { assertType, describe, expect, test } from 'vitest';
import localAllSurnamesDict from '../../dict/surnames/all.json';
import commonSurnameDict from '../../dict/surnames/common.json';
import rareSurnameDict from '../../dict/surnames/rare.json';
import attributesWordsDict from '../../dict/words/attributes.json';
import { COMMON_COMPOUND_SURNAMES_TOTAL, COMMON_SINGLE_CHARACTER_SURNAMES_TOTAL } from '../../src/utils/default';

const allSurnames = localAllSurnamesDict.dict.split(' ');
const allSingleCharacterSurname = allSurnames.filter((surname) => surname.length === 1);
const allCompoundSurname = allSurnames.filter((surname) => surname.length > 1);

const allCommonSingleCharacterSurname = commonSurnameDict.single.split(' ');
const allCommonCompoundSurname = commonSurnameDict.compound.split(' ');
const allCommonSurnames = allCommonSingleCharacterSurname.concat(allCommonCompoundSurname);

const allRareSingleCharacterSurname = rareSurnameDict.single.split(' ');
const allRareCompoundSurname = rareSurnameDict.compound.split(' ');
const allRareSurnames = allRareSingleCharacterSurname.concat(allRareCompoundSurname);

assertType<string[]>(allSurnames);
assertType<string[]>(allSingleCharacterSurname);
assertType<string[]>(allCompoundSurname);
assertType<string[]>(allCommonSurnames);
assertType<string[]>(allCommonSingleCharacterSurname);
assertType<string[]>(allCommonCompoundSurname);
assertType<string[]>(allRareSurnames);
assertType<string[]>(allRareSingleCharacterSurname);
assertType<string[]>(allRareCompoundSurname);

describe('dict', () => {
  test(`the total number of common single surnames should be ${COMMON_SINGLE_CHARACTER_SURNAMES_TOTAL}`, () => {
    expect(allCommonSingleCharacterSurname.length).toBe(COMMON_SINGLE_CHARACTER_SURNAMES_TOTAL);
  });
  test(`the total number of common compound surnames should be ${COMMON_COMPOUND_SURNAMES_TOTAL}`, () => {
    expect(allCommonCompoundSurname.length).toBe(COMMON_COMPOUND_SURNAMES_TOTAL);
  });
  test('the surnames in the common surname list should exist in the all surname dict', () => {
    const localAllSurnames = localAllSurnamesDict.dict.split(' ');
    expect(allCommonSurnames.every((surname) => allSurnames.includes(surname))).toBeTruthy();
    expect(allCommonSurnames.every((surname) => localAllSurnames.includes(surname))).toBeTruthy();
  });
  test('the surnames in the rare surname list should exist in the all surname dict', () => {
    const localAllSurnames = localAllSurnamesDict.dict.split(' ');
    expect(allRareSurnames.every((surname) => allSurnames.includes(surname))).toBeTruthy();
    expect(allRareSurnames.every((surname) => localAllSurnames.includes(surname))).toBeTruthy();
  });
  test('the surnames in the rare surname list should not exist in the common surname dict', () => {
    expect(allRareSurnames.every((surname) => !allCommonSurnames.includes(surname))).toBeTruthy();
  });
  test('duplicate surnames should not appear in all surname dict', () => {
    const uniqAllSurnames = new Set(allSurnames);
    expect(uniqAllSurnames.size === allSurnames.length).toBeTruthy();
  });
  test('duplicate surnames should not appear in common surname dict', () => {
    const uniqAllCommonSurnames = new Set(allCommonSurnames);
    expect(uniqAllCommonSurnames.size === allCommonSurnames.length).toBeTruthy();
  });
  test('duplicate surnames should not appear in rare surname dict', () => {
    const uniqAllRareSurnames = new Set(allRareSurnames);
    expect(uniqAllRareSurnames.size === allRareSurnames.length).toBeTruthy();
  });
  test('all single character surname should only have one word', () => {
    expect(allSingleCharacterSurname.every((surname) => surname.length === 1)).toBeTruthy();
  });
  test('all compound surname should have at least two word', () => {
    expect(allCompoundSurname.every((surname) => surname.length > 1)).toBeTruthy();
  });
  test('duplicate words should not appear in each attribute of words dict', () => {
    const dicts = Object.values(attributesWordsDict);
    expect(dicts.every((list) => new Set(list).size === list.length)).toBeTruthy();
  });
});
