import { describe, expect, test } from 'vitest';
import cnname from '../../src';

describe('performance', () => {
  test('cnname({ count: 50000, unique: true, surname: "张", givenNameLength: 2, givenNameStartsWith: "俊" }) should return instantly', () => {
    expect(
      cnname({
        count: 50000,
        unique: true,
        surname: '张',
        givenNameLength: 2,
        givenNameStartsWith: '俊',
      }).length,
    ).lt(50000);
  });
  test('cnname({ count: 50000, unique: true, surname: "张", givenNameLength: 2, givenNameStartsWith: "俊", givenNameEndsWith: "科" }) should return instantly', () => {
    expect(
      cnname({
        count: 50000,
        unique: true,
        surname: '张',
        givenNameLength: 2,
        givenNameStartsWith: '俊',
        givenNameEndsWith: '科',
      }).length,
    ).lt(50000);
  });
  test('cnname({ count: 5000, unique: true, part: "surname", surnameType: "common", surnameAlgorithm: "random" }) should return instantly', () => {
    expect(
      cnname({
        count: 5000,
        unique: true,
        part: 'surname',
        surnameType: 'common',
        surnameAlgorithm: 'random',
      }).length,
    ).lt(5000);
  });
  test('cnname({ count: 50000, unique: true, part: "surname", surnameType: "all", surnameAlgorithm: "random" }) should return instantly', () => {
    expect(
      cnname({
        count: 50000,
        unique: true,
        part: 'surname',
        surnameType: 'all',
        surnameAlgorithm: 'random',
      }).length,
    ).lt(50000);
  });
  test('cnname({ count: 5000, unique: true, part: "surname", surnameType: "common", surnameAlgorithm: "weight" }) should return instantly', () => {
    expect(
      cnname({
        count: 5000,
        unique: true,
        part: 'surname',
        surnameType: 'common',
        surnameAlgorithm: 'weight',
      }).length,
    ).lt(5000);
  });
  test('cnname({ count: 50000, unique: true, part: "surname", surnameType: "all", surnameAlgorithm: "weight" }) should return instantly', () => {
    expect(
      cnname({
        count: 50000,
        unique: true,
        part: 'surname',
        surnameType: 'all',
        surnameAlgorithm: 'weight',
      }).length,
    ).lt(50000);
  });
  test('cnname({ count: 100, unique: true, part: "givenName", givenNameType: "male", givenNameLength: 1 }) should return instantly', () => {
    expect(
      cnname({
        count: 100,
        unique: true,
        part: 'givenName',
        givenNameType: 'male',
        givenNameLength: 1,
      }).length,
    ).lt(100);
  });
  test('cnname({ count: 100, unique: true, part: "givenName", givenNameType: "female", givenNameLength: 1 }) should return instantly', () => {
    expect(
      cnname({
        count: 100,
        unique: true,
        part: 'givenName',
        givenNameType: 'female',
        givenNameLength: 1,
      }).length,
    ).lt(100);
  });
  test('cnname({ count: 50000, unique: true, part: "givenName", givenNameLength: 1 }) should return instantly', () => {
    expect(cnname({ count: 50000, unique: true, part: 'givenName', givenNameLength: 1 }).length).lt(50000);
  });
  test('cnname({ count: 50, unique: true, part: "surname", surnameType: "common", surnameAlgorithm: "random" }) should return instantly', () => {
    expect(
      cnname({
        count: 50,
        unique: true,
        part: 'surname',
        surnameType: 'common',
        surnameAlgorithm: 'random',
      }),
    ).toHaveLength(50);
  });
  test('cnname({ count: 50000, surnameAlgorithm: "random" }) should return instantly', () => {
    expect(cnname({ count: 50000, part: 'surname', surnameType: 'all', surnameAlgorithm: 'random' })).toHaveLength(
      50000,
    );
  });
  test('cnname({ count: 50000, surnameAlgorithm: "weight" }) should return instantly', () => {
    expect(cnname({ count: 50000, part: 'surname', surnameType: 'common', surnameAlgorithm: 'weight' })).toHaveLength(
      50000,
    );
  });
});
