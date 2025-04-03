import { bench, describe } from 'vitest';
import { getName } from '../src';

const TEST_LARGE_COUNT = 50000;
const TEST_FEW_COUNT = 50;

describe(`count ${TEST_LARGE_COUNT}`, () => {
  bench('weight surname', () => {
    getName({ count: TEST_LARGE_COUNT, returnType: 'surname', surnamePickStrategy: 'weight' });
  });
  bench('random surname', () => {
    getName({ count: TEST_LARGE_COUNT, returnType: 'surname', surnamePickStrategy: 'random' });
  });
  bench('givenName', () => {
    getName({ count: TEST_LARGE_COUNT, returnType: 'givenName', givenNameLength: 2 });
  });
  bench('weight fullname', () => {
    getName({ count: TEST_LARGE_COUNT, givenNameLength: 2, surnamePickStrategy: 'weight' });
  });
  bench('random fullname', () => {
    getName({ count: TEST_LARGE_COUNT, givenNameLength: 2, surnamePickStrategy: 'random' });
  });
  bench('unique weight surname', () => {
    getName({ count: TEST_LARGE_COUNT, unique: true, returnType: 'surname', surnamePickStrategy: 'weight' });
  });
  bench('unique random surname', () => {
    getName({ count: TEST_LARGE_COUNT, unique: true, returnType: 'surname', surnamePickStrategy: 'random' });
  });
  bench('unique givenName', () => {
    getName({ count: TEST_LARGE_COUNT, unique: true, returnType: 'givenName', givenNameLength: 2 });
  });
  bench('unique weight fullname', () => {
    getName({ count: TEST_LARGE_COUNT, unique: true, givenNameLength: 2, surnamePickStrategy: 'weight' });
  });
  bench('unique random fullname', () => {
    getName({ count: TEST_LARGE_COUNT, unique: true, givenNameLength: 2, surnamePickStrategy: 'random' });
  });
});

describe(`count ${TEST_FEW_COUNT}`, () => {
  bench('weight surname', () => {
    getName({ count: TEST_FEW_COUNT, returnType: 'surname', surnamePickStrategy: 'weight' });
  });
  bench('random surname', () => {
    getName({ count: TEST_FEW_COUNT, returnType: 'surname', surnamePickStrategy: 'random' });
  });
  bench('givenName', () => {
    getName({ count: TEST_FEW_COUNT, returnType: 'givenName', givenNameLength: 2 });
  });
  bench('weight fullname', () => {
    getName({ count: TEST_FEW_COUNT, givenNameLength: 2, surnamePickStrategy: 'weight' });
  });
  bench('random fullname', () => {
    getName({ count: TEST_FEW_COUNT, givenNameLength: 2, surnamePickStrategy: 'random' });
  });
  bench('unique weight surname', () => {
    getName({ count: TEST_FEW_COUNT, unique: true, returnType: 'surname', surnamePickStrategy: 'weight' });
  });
  bench('unique random surname', () => {
    getName({ count: TEST_FEW_COUNT, unique: true, returnType: 'surname', surnamePickStrategy: 'random' });
  });
  bench('unique givenName', () => {
    getName({ count: TEST_FEW_COUNT, unique: true, returnType: 'givenName', givenNameLength: 2 });
  });
  bench('unique weight fullname', () => {
    getName({ count: TEST_FEW_COUNT, unique: true, givenNameLength: 2, surnamePickStrategy: 'weight' });
  });
  bench('unique random fullname', () => {
    getName({ count: TEST_FEW_COUNT, unique: true, givenNameLength: 2, surnamePickStrategy: 'random' });
  });
});
