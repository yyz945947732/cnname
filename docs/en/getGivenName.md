# getGivenName

Retrieve a random given name.

## API

```ts
getGivenName(): string
getGivenName(num: number): string[]
```

**Parameters:**

- `[num]` _(number)_: Number of given names to return.

**Returns:**

_(string | Array)_: A random given name or an array of given names.

## Example

```js
import { getGivenName } from 'cnname';

getGivenName(); // 杰伦
getGivenName(3); // ['运', '卓逸', '枫']
```
