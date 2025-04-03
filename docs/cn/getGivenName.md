# getGivenName

获取随机名。

## API

```ts
getGivenName(): string
getGivenName(num: number): string[]
```

**参数:**

- `[num]` _(number)_: 返回数量。

**返回:**

_(string | Array)_: 返回随机名。

## 示例

```js
import { getGivenName } from 'cnname';

getGivenName(); // 杰伦
getGivenName(3); // ['运', '卓逸', '枫']
```
