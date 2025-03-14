# getGivenName

获取随机名。

## API

```ts
getGivenName(): string
getGivenName(num: number): string[]
getGivenName(options: Options): string[]
```

**参数:**

- `[num]` _(number)_: 返回数量。
- `[options]` _(Options)_: 高级配置。

**返回:**

_(string | Array)_: 返回随机名。

## 示例

```js
import { getGivenName } from 'cnname';

getGivenName(); // 睿
getGivenName(3); // ['运', '卓逸', '枫']
getGivenName({ count: '3', givenNameDuplicated: true }); // ['晴晴', '诗诗', '露露']
```
