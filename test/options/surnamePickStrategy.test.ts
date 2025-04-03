import { assertType, describe, expect, test } from 'vitest';
import cnname from '../../src';

assertType<string[]>(cnname({ count: 5, surnamePickStrategy: 'random' }));
assertType<string[]>(cnname({ count: 5, surnamePickStrategy: 'weight' }));

describe('cnname.options.surnamePickStrategy', () => {
  test('cnname({ count: 5, surnamePickStrategy: "weight" }) should return array with five elements', () => {
    expect(cnname({ count: 5, surnamePickStrategy: 'weight' })).toHaveLength(5);
  });
  test('cnname({ count: 5, surnamePickStrategy: "random" }) should return array with five elements', () => {
    expect(cnname({ count: 5, surnamePickStrategy: 'random' })).toHaveLength(5);
  });
  test('cnname({ count: 5, returnType: "surname", surnameType: "common", surnamePickStrategy: "random" }) should return array with five elements', () => {
    const data = cnname({ count: 5, returnType: 'surname', surnameType: 'common', surnamePickStrategy: 'random' });
    expect(data).toHaveLength(5);
  });
  test('cnname({ count: 5, returnType: "surname", surnameType: "common", surnamePickStrategy: "weight" }) should return array with five elements', () => {
    const data = cnname({ count: 5, returnType: 'surname', surnameType: 'common', surnamePickStrategy: 'weight' });
    expect(data).toHaveLength(5);
  });
  test('cnname({ count: 5, returnType: "surname", surnameType: "common", surnamePickStrategy: "error" }) should return array with five elements', () => {
    // @ts-expect-error
    const data = cnname({ count: 5, returnType: 'surname', surnameType: 'common', surnamePickStrategy: 'error' });
    expect(data).toHaveLength(5);
  });
});
