import getName from './getName.mjs';
import isSurname from './isSurname.mjs';
import getAllSurnames from './getAllSurnames.mjs';
import getNameStr from './getNameStr.mjs';
import parseName from './parseName.mjs';
import getSurname from './getSurname.mjs';
import getGivenName from './getGivenName.mjs';

export default [
  ...getName,
  ...isSurname,
  ...getAllSurnames,
  ...getNameStr,
  ...parseName,
  ...getSurname,
  ...getGivenName,
];
