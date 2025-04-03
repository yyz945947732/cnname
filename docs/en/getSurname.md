# getSurname

Retrieve a random surname.

## API

```ts
getSurname(): string
getSurname(num: number): string[]
```

**Parameters:**

- `[num]` _(number)_: Number of surnames to return.

**Returns:**

_(string | Array)_: A random surname or an array of surnames.

## Example

```js
import { getSurname } from 'cnname';

getSurname(); // 李
getSurname(3); // ['赵', '钱', '孙']
```
