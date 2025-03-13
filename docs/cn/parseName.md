# parseName

解析传入的名字，返回名字的详细信息。

## API

```ts
parseName(name: string): ParseNameResult
```

**参数:**

1. `name` _(string)_: 完整姓名。

**返回:**

_(ParseNameResult)_: 名字详细信息。

**ParseNameResult:**

- `surname` 姓氏
- `givenName` 名

## 示例

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
