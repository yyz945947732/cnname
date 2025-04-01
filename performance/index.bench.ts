import { describe, bench } from 'vitest';
import cnname from '../src';

const TEST_LARGE_COUNT = 50000;
const TEST_FEW_COUNT = 50;

describe(`count ${TEST_LARGE_COUNT}`, () => {
  bench('unique weight surname', () => {
    cnname({ count: TEST_LARGE_COUNT, unique: true, part: 'surname', surnameAlgorithm: 'weight' });
  });
  bench('unique random surname', () => {
    cnname({ count: TEST_LARGE_COUNT, unique: true, part: 'surname', surnameAlgorithm: 'random' });
  });
  bench('unique weight fullname', () => {
    cnname({ count: TEST_LARGE_COUNT, unique: true, surnameAlgorithm: 'weight' });
  });
  bench('unique random fullname', () => {
    cnname({ count: TEST_LARGE_COUNT, unique: true, surnameAlgorithm: 'random' });
  });
  bench('weight surname', () => {
    cnname({ count: TEST_LARGE_COUNT, part: 'surname', surnameAlgorithm: 'weight' });
  });
  bench('random surname', () => {
    cnname({ count: TEST_LARGE_COUNT, part: 'surname', surnameAlgorithm: 'random' });
  });
  bench('weight fullname', () => {
    cnname({ count: TEST_LARGE_COUNT, surnameAlgorithm: 'weight' });
  });
  bench('random fullname', () => {
    cnname({ count: TEST_LARGE_COUNT, surnameAlgorithm: 'random' });
  });
  bench('unique givenName', () => {
    cnname({ count: TEST_LARGE_COUNT, unique: true, part: 'givenName' });
  });
  bench('givenName', () => {
    cnname({ count: TEST_LARGE_COUNT, part: 'givenName' });
  });
  bench('givenName len 1', () => {
    cnname({ count: TEST_LARGE_COUNT, part: 'givenName', givenNameLength: 1 });
  });
  bench('givenName len 2', () => {
    cnname({ count: TEST_LARGE_COUNT, part: 'givenName', givenNameLength: 2 });
  });
  bench('unique givenName len 1', () => {
    cnname({ count: TEST_LARGE_COUNT, unique: true, part: 'givenName', givenNameLength: 1 });
  });
  bench('unique givenName len 2', () => {
    cnname({ count: TEST_LARGE_COUNT, unique: true, part: 'givenName', givenNameLength: 2 });
  });
});

describe(`count ${TEST_FEW_COUNT}`, () => {
  bench('unique weight surname', () => {
    cnname({ count: TEST_FEW_COUNT, unique: true, part: 'surname', surnameAlgorithm: 'weight' });
  });
  bench('unique random surname', () => {
    cnname({ count: TEST_FEW_COUNT, unique: true, part: 'surname', surnameAlgorithm: 'random' });
  });
  bench('unique weight fullname', () => {
    cnname({ count: TEST_FEW_COUNT, unique: true, surnameAlgorithm: 'weight' });
  });
  bench('unique random fullname', () => {
    cnname({ count: TEST_FEW_COUNT, unique: true, surnameAlgorithm: 'random' });
  });
  bench('weight surname', () => {
    cnname({ count: TEST_FEW_COUNT, part: 'surname', surnameAlgorithm: 'weight' });
  });
  bench('random surname', () => {
    cnname({ count: TEST_FEW_COUNT, part: 'surname', surnameAlgorithm: 'random' });
  });
  bench('weight fullname', () => {
    cnname({ count: TEST_FEW_COUNT, surnameAlgorithm: 'weight' });
  });
  bench('random fullname', () => {
    cnname({ count: TEST_FEW_COUNT, surnameAlgorithm: 'random' });
  });
  bench('unique givenName', () => {
    cnname({ count: TEST_FEW_COUNT, unique: true, part: 'givenName' });
  });
  bench('givenName', () => {
    cnname({ count: TEST_FEW_COUNT, part: 'givenName' });
  });
  bench('givenName len 1', () => {
    cnname({ count: TEST_FEW_COUNT, part: 'givenName', givenNameLength: 1 });
  });
  bench('givenName len 2', () => {
    cnname({ count: TEST_FEW_COUNT, part: 'givenName', givenNameLength: 2 });
  });
  bench('unique givenName len 1', () => {
    cnname({ count: TEST_FEW_COUNT, unique: true, part: 'givenName', givenNameLength: 1 });
  });
  bench('unique givenName len 2', () => {
    cnname({ count: TEST_FEW_COUNT, unique: true, part: 'givenName', givenNameLength: 2 });
  });
});