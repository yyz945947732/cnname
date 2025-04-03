import { getSurname } from '../../dist/index.js';

export default [
  {
    label: 'getSurname()',
    value: getSurname(),
  },
  {
    label: 'getSurname(5)',
    value: getSurname(5),
  },
  {
    label: 'getSurname({ count: 5, surnameType: "compound", unique: true })',
    value: getSurname({ count: 5, surnameType: "compound", unique: true }),
  },
];
