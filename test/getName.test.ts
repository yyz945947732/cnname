import { getName } from '../src';
import { describe, test, expect, assertType } from 'vitest';

assertType<string>(getName());
assertType<string[]>(getName(2));

describe('getName', () => {
    test('getName() should return string', () => {
        expect(typeof getName()).toEqual('string');
    });
    test('getName(5) should return array with five elements', () => {
        expect(getName(5).length).toEqual(5);
    });
    test('getName(0) should return empty array', () => {
        expect(getName(0).length).toEqual(0);
    });
    test('getName(-1) should return array with one elements', () => {
        expect(getName(-1).length).toEqual(1);
    });
});
