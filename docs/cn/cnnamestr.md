# cnnamestr

与 `cnname` 相同，但始终返回字符串。

## API

```ts
cnnamestr(): string
cnnamestr(num: number): string
cnnamestr(surname: string): string
cnnamestr(surname: string, num: number): string
cnnamestr(options: Options): string;
```

**参数:**

- `[num]` _(number)_: 返回数量。
- `[surname]` _(string)_: 指定姓氏。
- `[options]` _(Options)_: 高级配置。

**返回:**

_(string)_: 返回生成结果，若生成多个结果，则使用 `,` 拼接。

## 示例

```js
import { cnnamestr } from 'cnname';

cnnamestr(); // 李浩
cnnamestr(3); // 张博,李安,王骏
cnnamestr('李'); // 李信
cnnamestr('李', 3); // 李维,李英,李冬梅
cnnamestr({ count: '2', surname: '李', givenNameDuplicated: true }); // 李亦亦,李凡凡
```
