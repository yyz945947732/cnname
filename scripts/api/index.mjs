import cnname from './cnname.mjs';
import getSurname from './getSurname.mjs';
import getCompoundSurname from './getCompoundSurname.mjs';
import getGivenName from './getGivenName.mjs';
import isSurname from './isSurname.mjs';

export default [
  ...cnname,
  ...getSurname,
  ...getCompoundSurname,
  ...getGivenName,
  ...isSurname,
];
