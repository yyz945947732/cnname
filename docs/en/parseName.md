# parseName

Parses the given full name and returns detailed information.

## API

```ts
parseName(name: string): ParseNameResult
```

**Parameters:**

1. `name` _(string)_: The full name.

**Returns:**

_(ParseNameResult)_: Detailed name information.

**ParseNameResult:**

- `surname` The surname.
- `givenName` The given name.

## Example

```js
import { parseName } from 'cnname';

parseName('李白');
// {
//   surname: '李',
//   givenName: '白',
// }
parseName('欧阳帅');
// {
//   surname: '欧阳',
//   givenName: '帅',
// }
parseName('帅哥');
// {
//   surname: '',
//   givenName: '帅哥',
// }
```
