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
- `givenNameLength` Length of the given name.
- `isCompoundSurname` Whether it is a compound surname.
- `isSingleCharacterSurname` Whether it is a single-character surname.
- `isGivenNameDuplicated` Whether the given name is a duplicated name (e.g., "娜娜")
- `isCommonSurname` Whether it is a [common surname](https://github.com/yyz945947732/cnname/blob/master/dict/commonSurname.json)

## Example

```js
import { parseName } from 'cnname';

parseName('欧阳娜娜');
// {
//    surname: '欧阳',
//    givenName: '娜娜',
//    givenNameLength: 2,
//    isCompoundSurname: true,
//    isSingleCharacterSurname: false,
//    isGivenNameDuplicated: true,
//    isCommonSurname: true
// }
```
