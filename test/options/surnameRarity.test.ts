import { getName } from '@/src';
import { getAllCommonSurname, getAllRareSurname, getAllSurname } from '@/src/utils/dict';
import { assertType, describe, expect, test } from 'vitest';

assertType<string[]>(getName({ count: 5, surnameRarity: 'all' }));
assertType<string[]>(getName({ count: 5, surnameRarity: 'common' }));
assertType<string[]>(getName({ count: 5, surnameRarity: 'rare' }));

const allSurname = getAllSurname();
const allCommonSurname = getAllCommonSurname();
const allRareSurname = getAllRareSurname();

describe('getName.options.surnameRarity', () => {
  test('getName({ count: 5, unique: true, surnameRarity: "all" }) should return array with five elements', () => {
    const data = getName({ count: 5, unique: true, surnameRarity: 'all' });
    expect(data).toHaveLength(5);
  });
  test('getName({ count: 5, unique: true, surnameRarity: "all" }) return surname should exist in the all surname dict', () => {
    const data = getName({ count: 5, unique: true, surnameRarity: 'all', returnType: 'surname' });
    expect(data.every((surname) => allSurname.includes(surname))).toBeTruthy();
  });
  test('getName({ count: 5, unique: true, surnameRarity: "common" }) should return array with five elements', () => {
    const data = getName({ count: 5, unique: true, surnameRarity: 'common' });
    expect(data).toHaveLength(5);
  });
  test('getName({ count: 5, unique: true, surnameRarity: "common" }) return surname should exist in the common surname dict', () => {
    const data = getName({ count: 5, unique: true, surnameRarity: 'common', returnType: 'surname' });
    expect(data.every((surname) => allCommonSurname.includes(surname))).toBeTruthy();
  });
  test('getName({ count: 5, unique: true, surnameRarity: "rare" }) should return array with five elements', () => {
    const data = getName({ count: 5, unique: true, surnameRarity: 'rare' });
    expect(data).toHaveLength(5);
  });
  test('getName({ count: 5, unique: true, surnameRarity: "rare" }) return surname should exist in the rare surname dict', () => {
    const data = getName({ count: 5, unique: true, surnameRarity: 'rare', returnType: 'surname' });
    expect(data.every((surname) => allRareSurname.includes(surname))).toBeTruthy();
  });
  test('getName({ count: 5, surnameRarity: "error" }) should return array with five elements', () => {
    // @ts-expect-error
    expect(getName({ count: 5, surnameRarity: 'error' })).toHaveLength(5);
  });
});
