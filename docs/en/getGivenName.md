# getGivenName

Retrieve a random given name.

## API

```ts
getGivenName(): string
getGivenName(num: number): string[]
getGivenName(options: Options): string[]
```

**Parameters:**

- `[num]` _(number)_: Number of given names to return.
- `[options]` _(Options)_: Advanced Options.

**Returns:**

_(string | Array)_: A random given name or an array of given names.

## Example

```js
import { getGivenName } from 'cnname';

getGivenName(); // 睿
getGivenName(3); // ['运', '卓逸', '枫']
getGivenName({ count: '3', givenNameDuplicated: true }); // ['晴晴', '诗诗', '露露']
```
