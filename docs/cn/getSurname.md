# getSurname

获取随机姓氏。

## API

```ts
getSurname(): string
getSurname(num: number): string[]
getSurname(options: Options): string[]
```

**参数:**

- `[num]` _(number)_: 返回数量。
- `[options]` _(Options)_: 高级配置。

**返回:**

_(string | Array)_: 返回随机姓氏。

## 示例

```js
import { getSurname } from 'cnname';

getSurname(); // 李
getSurname(3); // ['赵', '钱', '孙']
getSurname({ count: '3', surnameType: "common-compound" }); // ['慕容', '独孤', '诸葛']
```
