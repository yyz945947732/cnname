# isSurname

判断当前值是否为姓氏。

## API

```ts
isSurname(surname: string): boolean
```

**参数:**

1. `surname` _(string)_: 姓氏。

**返回:**

_(boolean)_: 如果值为姓氏返回 `true`, 反之 `false`。

## 示例

```js
import { isSurname } from 'cnname';

isSurname('王'); // true
isSurname('欧阳'); // true
isSurname('猪'); // false
```
