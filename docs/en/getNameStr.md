# getNameStr

Same as `getName`, but always returns a string.

## API

```ts
getNameStr(): string
getNameStr(num: number): string
getNameStr(surname: string): string
getNameStr(surname: string, num: number): string
getNameStr(options: Options): string;
```

**Arguments:**

- `[num]` _(number)_: Number of names to generate.
- `[surname]` _(string)_: Specify a surname.
- `[options]` _(Options)_: Advanced Options.

**Returns:**

_(string)_: Returns the generated result. If multiple results are generated, they are joined with `,`.

## Example

```js
import { getNameStr } from 'cnname';

getNameStr(); // 李浩
getNameStr(3); // 张博,李安,王骏
getNameStr('李'); // 李信
getNameStr('李', 3); // 李维,李英,李冬梅
getNameStr({ count: '2', surname: '李', givenNameDuplicated: true }); // 李亦亦,李凡凡
```
