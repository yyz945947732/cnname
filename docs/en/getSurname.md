# getSurname

Retrieve a random surname.

## API

```ts
getSurname(): string
getSurname(num: number): string[]
getSurname(options: Options): string[]
```

**Parameters:**

- `[num]` _(number)_: Number of surnames to return.
- `[options]` _(Options)_: Advanced Options.

**Returns:**

_(string | Array)_: A random surname or an array of surnames.

## Example

```js
import { getSurname } from 'cnname';

getSurname(); // 李
getSurname(3); // ['赵', '钱', '孙']
getSurname({ count: '3', surnameType: "common-compound" }); // ['慕容', '独孤', '诸葛']
```
