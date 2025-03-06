import { getSurname } from '../src';
import { describe, test, expect, assertType } from 'vitest';

assertType<string>(getSurname());
assertType<string[]>(getSurname(2));

describe('getSurname', () => {
    test('getSurname() should return string', () => {
        expect(typeof getSurname()).toEqual('string');
    });
    test('getSurname(5) should return array with five elements', () => {
        expect(getSurname(5).length).toEqual(5);
    });
    test('getSurname(-1) should return array with one elements', () => {
        expect(getSurname(-1).length).toEqual(1);
    });
});
