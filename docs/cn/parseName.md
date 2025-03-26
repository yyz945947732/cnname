# parseName

解析传入的名字，返回名字的详细信息。

## API

```ts
parseName(name: string): NameDetail
```

**参数:**

1. `name` _(string)_: 完整姓名。

**返回:**

_(NameDetail)_: 名字详细信息。

**NameDetail:**

- `surname` 姓氏
- `givenName` 名
- `fullName` 完整姓名
- `givenNameLength` 名长度
- `isValidName` 是否为合法姓名
- `isCompoundSurname` 是否为复姓
- `isSingleCharacterSurname` 是否为单字姓氏
- `isGivenNameDuplicated` 是否为叠字名

## 示例

```js
import { parseName } from 'cnname';

parseName('欧阳娜娜');
// {
//    surname: '欧阳',
//    givenName: '娜娜',
//    fullName: '欧阳娜娜',
//    givenNameLength: 2,
//    isValidName: true,
//    isCompoundSurname: true,
//    isSingleCharacterSurname: false,
//    isGivenNameDuplicated: true,
// }
```
