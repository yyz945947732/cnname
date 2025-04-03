import { assertType, describe, expect, test } from 'vitest';
import { getName } from '../../src';

assertType<string[]>(getName({ count: 5, givenName: '子杰' }));
assertType<string[]>(getName({ count: 5, givenName: ['杰伦', '俊杰'] }));

describe('getName.options.givenName', () => {
  test('getName({ count: 5, givenName: "子杰" }) should return array with givenName "子杰"', () => {
    const result = getName({ count: 5, givenName: '子杰' });
    expect(result.every((name) => name.endsWith('子杰'))).toBeTruthy();
  });
  test('getName({ count: 5, unique: true, givenName: ["杰伦", "俊杰"] }) should return array with five elements', () => {
    expect(getName({ count: 5, unique: true, givenName: ['杰伦', '俊杰'] })).toHaveLength(5);
  });
  test('getName({ count: 5, unique: true, givenName: ["杰伦", "俊杰"] }) should return array with givenName "杰伦" or "俊杰"', () => {
    const data = getName({ count: 5, unique: true, givenName: ['杰伦', '俊杰'] });
    const result = data.every((name) => ['杰伦', '俊杰'].includes(name.slice(-2)));
    expect(result).toBeTruthy();
  });
  test('getName({ count: 5, unique: true, givenName: [] }) should return array with five elements', () => {
    expect(getName({ count: 5, unique: true, givenName: [] })).toHaveLength(5);
  });
  test('getName({ count: 5, givenName: [] }) should return array with five elements', () => {
    expect(getName({ count: 5, givenName: [] })).toHaveLength(5);
  });
  test('getName({ count: 5, unique: true, returnType: "givenName", givenName: [] }) should return empty array', () => {
    expect(getName({ count: 5, unique: true, returnType: 'givenName', givenName: [] })).toHaveLength(0);
  });
  test('getName({ count: 5, returnType: "givenName", givenName: [] }) should return array with five empty string', () => {
    expect(getName({ count: 5, returnType: 'givenName', givenName: [] }).every((name) => name === '')).toBeTruthy();
  });
});
