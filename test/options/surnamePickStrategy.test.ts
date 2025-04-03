import { assertType, describe, expect, test } from 'vitest';
import { getName } from '../../src';

assertType<string[]>(getName({ count: 5, surnamePickStrategy: 'random' }));
assertType<string[]>(getName({ count: 5, surnamePickStrategy: 'weight' }));

describe('getName.options.surnamePickStrategy', () => {
  test('getName({ count: 5, surnamePickStrategy: "weight" }) should return array with five elements', () => {
    expect(getName({ count: 5, surnamePickStrategy: 'weight' })).toHaveLength(5);
  });
  test('getName({ count: 5, surnamePickStrategy: "random" }) should return array with five elements', () => {
    expect(getName({ count: 5, surnamePickStrategy: 'random' })).toHaveLength(5);
  });
  test('getName({ count: 5, returnType: "surname", surnameRarity: "all", surnamePickStrategy: "random" }) should return array with five elements', () => {
    const data = getName({ count: 5, returnType: 'surname', surnameRarity: 'all', surnamePickStrategy: 'random' });
    expect(data).toHaveLength(5);
  });
  test('getName({ count: 5, returnType: "surname", surnameRarity: "all", surnamePickStrategy: "weight" }) should return array with five elements', () => {
    const data = getName({ count: 5, returnType: 'surname', surnameRarity: 'all', surnamePickStrategy: 'weight' });
    expect(data).toHaveLength(5);
  });
  test('getName({ count: 5, returnType: "surname", surnameRarity: "all", surnamePickStrategy: "error" }) should return array with five elements', () => {
    // @ts-expect-error
    const data = getName({ count: 5, returnType: 'surname', surnameRarity: 'all', surnamePickStrategy: 'error' });
    expect(data).toHaveLength(5);
  });
});
