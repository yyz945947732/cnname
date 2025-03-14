import cnname from './cnname.mjs';
import isSurname from './isSurname.mjs';
import getAllSurname from './getAllSurname.mjs';
import cnnamestr from './cnnamestr.mjs';
import parseName from './parseName.mjs';
import getSurname from './getSurname.mjs';
import getGivenName from './getGivenName.mjs';

export default [
  ...cnname,
  ...isSurname,
  ...getAllSurname,
  ...cnnamestr,
  ...parseName,
  ...getSurname,
  ...getGivenName,
];
