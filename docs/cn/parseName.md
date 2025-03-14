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
- `givenNameLength` 名长度
- `isCompoundSurname` 是否为复姓
- `isSingleCharacterSurname` 是否为单字姓氏
- `isGivenNameDuplicated` 是否为叠字名
- `isCommonSurname` 是否为[常见姓氏](https://github.com/yyz945947732/cnname/blob/master/dict/commonSurname.json)

## 示例

```js
import { parseName } from 'cnname';

parseName('欧阳娜娜');
// {
//    surname: '欧阳',
//    givenName: '娜娜',
//    givenNameLength: 2,
//    isCompoundSurname: true,
//    isSingleCharacterSurname: false,
//    isGivenNameDuplicated: true,
//    isCommonSurname: true
// }
```
