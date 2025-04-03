import { bench, describe } from 'vitest';
import cnname from '../src';

const TEST_LARGE_COUNT = 50000;
const TEST_FEW_COUNT = 50;

describe(`count ${TEST_LARGE_COUNT}`, () => {
  bench('weight surname', () => {
    cnname({ count: TEST_LARGE_COUNT, returnType: 'surname', surnamePickStrategy: 'weight' });
  });
  bench('random surname', () => {
    cnname({ count: TEST_LARGE_COUNT, returnType: 'surname', surnamePickStrategy: 'random' });
  });
  bench('givenName', () => {
    cnname({ count: TEST_LARGE_COUNT, returnType: 'givenName', givenNameLength: 2 });
  });
  bench('weight fullname', () => {
    cnname({ count: TEST_LARGE_COUNT, givenNameLength: 2, surnamePickStrategy: 'weight' });
  });
  bench('random fullname', () => {
    cnname({ count: TEST_LARGE_COUNT, givenNameLength: 2, surnamePickStrategy: 'random' });
  });
  bench('unique weight surname', () => {
    cnname({ count: TEST_LARGE_COUNT, unique: true, returnType: 'surname', surnamePickStrategy: 'weight' });
  });
  bench('unique random surname', () => {
    cnname({ count: TEST_LARGE_COUNT, unique: true, returnType: 'surname', surnamePickStrategy: 'random' });
  });
  bench('unique givenName', () => {
    cnname({ count: TEST_LARGE_COUNT, unique: true, returnType: 'givenName', givenNameLength: 2 });
  });
  bench('unique weight fullname', () => {
    cnname({ count: TEST_LARGE_COUNT, unique: true, givenNameLength: 2, surnamePickStrategy: 'weight' });
  });
  bench('unique random fullname', () => {
    cnname({ count: TEST_LARGE_COUNT, unique: true, givenNameLength: 2, surnamePickStrategy: 'random' });
  });
});

describe(`count ${TEST_FEW_COUNT}`, () => {
  bench('weight surname', () => {
    cnname({ count: TEST_FEW_COUNT, returnType: 'surname', surnamePickStrategy: 'weight' });
  });
  bench('random surname', () => {
    cnname({ count: TEST_FEW_COUNT, returnType: 'surname', surnamePickStrategy: 'random' });
  });
  bench('givenName', () => {
    cnname({ count: TEST_FEW_COUNT, returnType: 'givenName', givenNameLength: 2 });
  });
  bench('weight fullname', () => {
    cnname({ count: TEST_FEW_COUNT, givenNameLength: 2, surnamePickStrategy: 'weight' });
  });
  bench('random fullname', () => {
    cnname({ count: TEST_FEW_COUNT, givenNameLength: 2, surnamePickStrategy: 'random' });
  });
  bench('unique weight surname', () => {
    cnname({ count: TEST_FEW_COUNT, unique: true, returnType: 'surname', surnamePickStrategy: 'weight' });
  });
  bench('unique random surname', () => {
    cnname({ count: TEST_FEW_COUNT, unique: true, returnType: 'surname', surnamePickStrategy: 'random' });
  });
  bench('unique givenName', () => {
    cnname({ count: TEST_FEW_COUNT, unique: true, returnType: 'givenName', givenNameLength: 2 });
  });
  bench('unique weight fullname', () => {
    cnname({ count: TEST_FEW_COUNT, unique: true, givenNameLength: 2, surnamePickStrategy: 'weight' });
  });
  bench('unique random fullname', () => {
    cnname({ count: TEST_FEW_COUNT, unique: true, givenNameLength: 2, surnamePickStrategy: 'random' });
  });
});
