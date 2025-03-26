import cnname from '../../src';
import { describe, test, expect, assertType } from 'vitest';

assertType<string[]>(cnname({ count: 5, surnameAlgorithm: 'random' }));
assertType<string[]>(cnname({ count: 5, surnameAlgorithm: 'weight' }));

describe('cnname.options.surnameAlgorithm', () => {
  test('cnname({ count: 5, surnameAlgorithm: "weight" }) should return array with five elements', () => {
    expect(cnname({ count: 5, surnameAlgorithm: "weight" })).toHaveLength(5);
  });
  test('cnname({ count: 5, surnameAlgorithm: "random" }) should return array with five elements', () => {
    expect(cnname({ count: 5, surnameAlgorithm: "random" })).toHaveLength(5);
  });
  test('cnname({ count: 5, part: "surname", surnameType: "common", surnameAlgorithm: "random" }) should return array with five elements', () => {
    expect(cnname({ count: 5, part: "surname", surnameType: "common", surnameAlgorithm: "random" })).toHaveLength(5);
  });
  test('cnname({ count: 5, part: "surname", surnameType: "common", surnameAlgorithm: "weight" }) should return array with five elements', () => {
    expect(cnname({ count: 5, part: "surname", surnameType: "common", surnameAlgorithm: "weight" })).toHaveLength(5);
  });
  test('cnname({ count: 5, part: "surname", surnameType: "common", surnameAlgorithm: "error" }) should return array with five elements', () => {
    // @ts-expect-error
    expect(cnname({ count: 5, part: "surname", surnameType: "common", surnameAlgorithm: "error" })).toHaveLength(5);
  });
  test('cnname({ count: 5000, unique: true, part: "surname", surnameType: "common", surnameAlgorithm: "random" }) should return instantly', () => {
    expect(cnname({ count: 5000, unique: true, part: 'surname', surnameType: 'common', surnameAlgorithm: 'random' }).length).lt(5000);
  });
  test('cnname({ count: 50000, unique: true, part: "surname", surnameType: "all", surnameAlgorithm: "random" }) should return instantly', () => {
    expect(cnname({ count: 50000, unique: true, part: 'surname', surnameType: 'all', surnameAlgorithm: 'random' }).length).lt(50000);
  });
  test('cnname({ count: 5000, unique: true, part: "surname", surnameType: "common", surnameAlgorithm: "weight" }) should return instantly', () => {
    expect(cnname({ count: 5000, unique: true, part: 'surname', surnameType: 'common', surnameAlgorithm: 'weight' }).length).lt(5000);
  });
  test('cnname({ count: 50000, unique: true, part: "surname", surnameType: "all", surnameAlgorithm: "weight" }) should return instantly', () => {
    expect(cnname({ count: 50000, unique: true, part: 'surname', surnameType: 'all', surnameAlgorithm: 'weight' }).length).lt(50000);
  });
});
