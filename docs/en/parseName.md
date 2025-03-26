# parseName

Parses the given full name and returns detailed information.

## API

```ts
parseName(name: string): NameDetail
```

**Parameters:**

1. `name` _(string)_: The full name.

**Returns:**

_(NameDetail)_: Detailed name information.

**NameDetail:**

- `surname` The surname.
- `givenName` The given name.
- `fullName` The full name.
- `givenNameLength` Length of the given name.
- `isValidName` Whether it is a valid name.
- `isCompoundSurname` Whether it is a compound surname.
- `isSingleCharacterSurname` Whether it is a single-character surname.
- `isGivenNameDuplicated` Whether the given name is a duplicated name (e.g., "娜娜")

## Example

```js
import { parseName } from 'cnname';

parseName('欧阳娜娜');
// {
//    surname: '欧阳',
//    givenName: '娜娜',
//    fullName: '欧阳娜娜',
//    givenNameLength: 2,
//    isValidName: true,
//    isCompoundSurname: true,
//    isSingleCharacterSurname: false,
//    isGivenNameDuplicated: true,
// }
```
