import { assertType, describe, expect, test } from 'vitest';
import cnname from '../../src';

assertType<string[]>(cnname({ count: 5, givenName: '子杰' }));
assertType<string[]>(cnname({ count: 5, givenName: ['杰伦', '俊杰'] }));

describe('cnname.options.givenName', () => {
  test('cnname({ count: 5, givenName: "子杰" }) should return array with givenName "子杰"', () => {
    const result = cnname({ count: 5, givenName: '子杰' });
    expect(result.every((name) => name.endsWith('子杰'))).toBeTruthy();
  });
  test('cnname({ count: 5, unique: true, givenName: ["杰伦", "俊杰"] }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, givenName: ['杰伦', '俊杰'] })).toHaveLength(5);
  });
  test('cnname({ count: 5, unique: true, givenName: ["杰伦", "俊杰"] }) should return array with givenName "杰伦" or "俊杰"', () => {
    const data = cnname({ count: 5, unique: true, givenName: ['杰伦', '俊杰'] });
    const result = data.every((name) => ['杰伦', '俊杰'].includes(name.slice(-2)));
    expect(result).toBeTruthy();
  });
  test('cnname({ count: 5, unique: true, givenName: [] }) should return array with five elements', () => {
    expect(cnname({ count: 5, unique: true, givenName: [] })).toHaveLength(5);
  });
  test('cnname({ count: 5, givenName: [] }) should return array with five elements', () => {
    expect(cnname({ count: 5, givenName: [] })).toHaveLength(5);
  });
  test('cnname({ count: 5, unique: true, part: "givenName", givenName: [] }) should return empty array', () => {
    expect(cnname({ count: 5, unique: true, part: 'givenName', givenName: [] })).toHaveLength(0);
  });
  test('cnname({ count: 5, part: "givenName", givenName: [] }) should return array with five empty string', () => {
    expect(cnname({ count: 5, part: 'givenName', givenName: [] }).every((name) => name === '')).toBeTruthy();
  });
});
