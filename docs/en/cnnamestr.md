# cnnamestr

Same as `cnname`, but always returns a string.

## API

```ts
cnnamestr(): string
cnnamestr(num: number): string
cnnamestr(surname: string): string
cnnamestr(surname: string, num: number): string
cnnamestr(options: Options): string;
```

**Arguments:**

- `[num]` _(number)_: Number of names to generate.
- `[surname]` _(string)_: Specify a surname.
- `[options]` _(Options)_: Advanced Options.

**Returns:**

_(string)_: Returns the generated result. If multiple results are generated, they are joined with `,`.

## Example

```js
import { cnnamestr } from 'cnname';

cnnamestr(); // 李浩
cnnamestr(3); // 张博,李安,王骏
cnnamestr('李'); // 李信
cnnamestr('李', 3); // 李维,李英,李冬梅
cnnamestr({ count: '2', surname: '李', givenNameDuplicated: true }); // 李亦亦,李凡凡
```
