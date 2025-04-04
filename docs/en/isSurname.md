# isSurname

Checks whether the given value is a surname.

## API

```ts
isSurname(surname: string): boolean
```

**Parameters:**

1. `surname` _(string)_: The surname to check.

**Returns:**

_(boolean)_: Returns `true` if the value is a surname, otherwise `false`.

## Example

```js
import { isSurname } from 'cnname';

isSurname('王'); // true
isSurname('欧阳'); // true
isSurname('屁'); // false
```
