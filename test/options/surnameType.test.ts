import { assertType, describe, expect, test } from 'vitest';
import cnname from '../../src';

assertType<string[]>(cnname({ count: 5, surnameType: 'single' }));
assertType<string[]>(cnname({ count: 5, surnameType: 'compound' }));

describe('cnname.options.surnameType', () => {
  test('cnname({ count: 5, unique: true, surnameType: "compound" }) should return array with five elements', () => {
    const data = cnname({ count: 5, unique: true, surnameType: 'compound' });
    expect(data).toHaveLength(5);
    expect(data.every((name) => name.length >= 3)).toBeTruthy();
  });
  test('cnname({ count: 5, unique: true, surnameType: "single" }) should return array with five elements', () => {
    const data = cnname({ count: 5, unique: true, surnameType: 'single' });
    expect(data).toHaveLength(5);
    expect(data.every((name) => name.length <= 3)).toBeTruthy();
  });
  test('cnname({ count: 5, unique: true, surnameType: "single", surnameRarity: "common" }) should return array with five elements', () => {
    const data = cnname({ count: 5, unique: true, surnameType: 'single', surnameRarity: 'common' });
    expect(data).toHaveLength(5);
    expect(data.every((name) => name.length <= 3)).toBeTruthy();
  });
  test('cnname({ count: 5, unique: true, surnameType: "compound", surnameRarity: "common" }) should return array with five elements', () => {
    const data = cnname({ count: 5, unique: true, surnameType: 'compound', surnameRarity: 'common' });
    expect(data).toHaveLength(5);
    expect(data.every((name) => name.length >= 3)).toBeTruthy();
  });
  test('cnname({ count: 5, unique: true, surnameType: "single", surnameRarity: "rare" }) should return array with five elements', () => {
    const data = cnname({ count: 5, unique: true, surnameType: 'single', surnameRarity: 'rare' });
    expect(data).toHaveLength(5);
    expect(data.every((name) => name.length <= 3)).toBeTruthy();
  });
  test('cnname({ count: 5, unique: true, surnameType: "compound", surnameRarity: "rare" }) should return array with five elements', () => {
    const data = cnname({ count: 5, unique: true, surnameType: 'compound', surnameRarity: 'rare' });
    expect(data).toHaveLength(5);
    expect(data.every((name) => name.length >= 3)).toBeTruthy();
  });
  test('cnname({ count: 5, surnameType: "error", surnamePickStrategy: "random" }) should return array with five elements', () => {
    // @ts-expect-error
    expect(cnname({ count: 5, surnameType: 'error', surnamePickStrategy: 'random' })).toHaveLength(5);
  });
  test('cnname({ count: 100, surnameType: "error", unique: true, surnamePickStrategy: "random" }) should return array with 100 elements', () => {
    // @ts-expect-error
    expect(cnname({ count: 100, surnameType: 'error', unique: true, surnamePickStrategy: 'random' })).toHaveLength(100);
  });
});
