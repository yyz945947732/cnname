import { getGivenName } from '../../dist/index.js';

export default [
  {
    label: 'getGivenName()',
    value: getGivenName(),
  },
  {
    label: 'getGivenName(5)',
    value: getGivenName(5),
  },
  {
    label: 'getGivenName({ count: 5, givenNameDuplicated: true, unique: true })',
    value: getGivenName({ count: 5, givenNameDuplicated: true, unique: true }),
  },
];
