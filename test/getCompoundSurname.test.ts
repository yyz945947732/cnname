import { getCompoundSurname } from '../src';
import { describe, test, expect, assertType } from 'vitest';

assertType<string>(getCompoundSurname());
assertType<string[]>(getCompoundSurname(2));

describe('getCompoundSurname', () => {
    test('getCompoundSurname() should return string', () => {
        expect(typeof getCompoundSurname()).toEqual('string');
    });
    test('getCompoundSurname() should return string more than two word', () => {
        expect(getCompoundSurname().length).gte(2);
    });
    test('getCompoundSurname(5) should return array with five elements', () => {
        expect(getCompoundSurname(5).length).toEqual(5);
    });
    test('getCompoundSurname(-1) should return array with one elements', () => {
        expect(getCompoundSurname(-1).length).toEqual(1);
    });
});
