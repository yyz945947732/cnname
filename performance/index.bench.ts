import { describe, bench } from 'vitest';
import cnname from '../src';

const TEST_LARGE_COUNT = 50000;
const TEST_FEW_COUNT = 50;

describe(`count ${TEST_LARGE_COUNT}`, () => {
  bench('weight surname', () => {
    cnname({ count: TEST_LARGE_COUNT, part: 'surname', surnameAlgorithm: 'weight' });
  });
  bench('random surname', () => {
    cnname({ count: TEST_LARGE_COUNT, part: 'surname', surnameAlgorithm: 'random' });
  });
  bench('givenName', () => {
    cnname({ count: TEST_LARGE_COUNT, part: 'givenName', givenNameLength: 2 });
  });
  bench('weight fullname', () => {
    cnname({ count: TEST_LARGE_COUNT, givenNameLength: 2, surnameAlgorithm: 'weight' });
  });
  bench('random fullname', () => {
    cnname({ count: TEST_LARGE_COUNT, givenNameLength: 2, surnameAlgorithm: 'random' });
  });
  bench('unique weight surname', () => {
    cnname({ count: TEST_LARGE_COUNT, unique: true, part: 'surname', surnameAlgorithm: 'weight' });
  });
  bench('unique random surname', () => {
    cnname({ count: TEST_LARGE_COUNT, unique: true, part: 'surname', surnameAlgorithm: 'random' });
  });
  bench('unique givenName', () => {
    cnname({ count: TEST_LARGE_COUNT, unique: true, part: 'givenName', givenNameLength: 2 });
  });
  bench('unique weight fullname', () => {
    cnname({ count: TEST_LARGE_COUNT, unique: true, givenNameLength: 2, surnameAlgorithm: 'weight' });
  });
  bench('unique random fullname', () => {
    cnname({ count: TEST_LARGE_COUNT, unique: true, givenNameLength: 2, surnameAlgorithm: 'random' });
  });
});

describe(`count ${TEST_FEW_COUNT}`, () => {
  bench('weight surname', () => {
    cnname({ count: TEST_FEW_COUNT, part: 'surname', surnameAlgorithm: 'weight' });
  });
  bench('random surname', () => {
    cnname({ count: TEST_FEW_COUNT, part: 'surname', surnameAlgorithm: 'random' });
  });
  bench('givenName', () => {
    cnname({ count: TEST_FEW_COUNT, part: 'givenName', givenNameLength: 2 });
  });
  bench('weight fullname', () => {
    cnname({ count: TEST_FEW_COUNT, givenNameLength: 2, surnameAlgorithm: 'weight' });
  });
  bench('random fullname', () => {
    cnname({ count: TEST_FEW_COUNT, givenNameLength: 2, surnameAlgorithm: 'random' });
  });
  bench('unique weight surname', () => {
    cnname({ count: TEST_FEW_COUNT, unique: true, part: 'surname', surnameAlgorithm: 'weight' });
  });
  bench('unique random surname', () => {
    cnname({ count: TEST_FEW_COUNT, unique: true, part: 'surname', surnameAlgorithm: 'random' });
  });
  bench('unique givenName', () => {
    cnname({ count: TEST_FEW_COUNT, unique: true, part: 'givenName', givenNameLength: 2 });
  });
  bench('unique weight fullname', () => {
    cnname({ count: TEST_FEW_COUNT, unique: true, givenNameLength: 2, surnameAlgorithm: 'weight' });
  });
  bench('unique random fullname', () => {
    cnname({ count: TEST_FEW_COUNT, unique: true, givenNameLength: 2, surnameAlgorithm: 'random' });
  });
});