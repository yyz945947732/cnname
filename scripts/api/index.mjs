import cnname from './cnname.mjs';
import getSurname from './getSurname.mjs';
import getCompoundSurname from './getCompoundSurname.mjs';
import getName from './getName.mjs';
import isSurname from './isSurname.mjs';

export default [
  ...cnname,
  ...getSurname,
  ...getCompoundSurname,
  ...getName,
  ...isSurname,
];
