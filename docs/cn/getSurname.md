# getSurname

获取随机姓氏。

## API

```ts
getSurname(): string
getSurname(num: number): string[]
```

**参数:**

- `[num]` _(number)_: 返回数量。

**返回:**

_(string | Array)_: 返回随机姓氏。

## 示例

```js
import { getSurname } from 'cnname';

getSurname(); // 李
getSurname(3); // ['赵', '钱', '孙']
```
