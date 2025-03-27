import { describe, expect, test } from 'vitest';
import cnname from '../../src';

describe('performance', () => {
  test('cnname({ count: 50000, unique: true, surname: "张", givenNameLength: 2, givenNameStartsWith: "俊" }) should return instantly', () => {
    const data = cnname({ count: 50000, unique: true, surname: '张', givenNameLength: 2, givenNameStartsWith: '俊' });
    expect(data.length).toBeLessThan(50000);
  });
  test('cnname({ count: 50000, unique: true, surname: "张", givenNameLength: 2, givenNameStartsWith: "俊", givenNameEndsWith: "科" }) should return instantly', () => {
    const data = cnname({
      count: 50000,
      unique: true,
      surname: '张',
      givenNameLength: 2,
      givenNameStartsWith: '俊',
      givenNameEndsWith: '科',
    });
    expect(data.length).toBeLessThan(50000);
  });
  test('cnname({ count: 5000, unique: true, part: "surname", surnameType: "common", surnameAlgorithm: "random" }) should return instantly', () => {
    const data = cnname({ unique: true, part: 'surname', surnameType: 'common', surnameAlgorithm: 'random' });
    expect(data.length).toBeLessThan(5000);
  });
  test('cnname({ count: 50000, unique: true, part: "surname", surnameType: "all", surnameAlgorithm: "random" }) should return instantly', () => {
    const data = cnname({
      count: 50000,
      unique: true,
      part: 'surname',
      surnameType: 'all',
      surnameAlgorithm: 'random',
    });
    expect(data.length).toBeLessThan(50000);
  });
  test('cnname({ count: 5000, unique: true, part: "surname", surnameType: "common", surnameAlgorithm: "weight" }) should return instantly', () => {
    const data = cnname({
      count: 5000,
      unique: true,
      part: 'surname',
      surnameType: 'common',
      surnameAlgorithm: 'weight',
    });
    expect(data.length).toBeLessThan(5000);
  });
  test('cnname({ count: 50000, unique: true, part: "surname", surnameType: "all", surnameAlgorithm: "weight" }) should return instantly', () => {
    const data = cnname({
      count: 50000,
      unique: true,
      part: 'surname',
      surnameType: 'all',
      surnameAlgorithm: 'weight',
    });
    expect(data.length).toBeLessThan(50000);
  });
  test('cnname({ count: 100, unique: true, part: "givenName", givenNameType: "male", givenNameLength: 1 }) should return instantly', () => {
    const data = cnname({
      count: 100,
      unique: true,
      part: 'givenName',
      givenNameType: 'male',
      givenNameLength: 1,
    });
    expect(data.length).toBeLessThan(100);
  });
  test('cnname({ count: 100, unique: true, part: "givenName", givenNameType: "female", givenNameLength: 1 }) should return instantly', () => {
    const data = cnname({
      count: 100,
      unique: true,
      part: 'givenName',
      givenNameType: 'female',
      givenNameLength: 1,
    });
    expect(data.length).toBeLessThan(100);
  });
  test('cnname({ count: 50000, unique: true, part: "givenName", givenNameLength: 1 }) should return instantly', () => {
    const data = cnname({ count: 50000, unique: true, part: 'givenName', givenNameLength: 1 });
    expect(data.length).toBeLessThan(50000);
  });
  test('cnname({ count: 50000, surnameAlgorithm: "random" }) should return instantly', () => {
    const data = cnname({ count: 50000, part: 'surname', surnameType: 'all', surnameAlgorithm: 'random' });
    expect(data).toHaveLength(50000);
  });
  test('cnname({ count: 50000, surnameAlgorithm: "weight" }) should return instantly', () => {
    const data = cnname({ count: 50000, part: 'surname', surnameType: 'common', surnameAlgorithm: 'weight' });
    expect(data).toHaveLength(50000);
  });
});
