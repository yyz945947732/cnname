# getAllSurname

获取所有姓氏，可指定姓氏类型，默认为 `'all'` (全部姓氏)。

## API

```ts
getAllSurname(surnameType?: SurnameType): string[]
```

**参数:**

1. `[surnameType='all']` _(SurnameType)_: 姓氏类型。

**SurnameType:**

- `all` 所有姓氏
- `all-single` 所有单字姓
- `all-compound` 所有复姓
- `common` 常见姓氏
- `common-single` 常见单字姓氏
- `common-compound` 常见复姓

**返回:**

_(Array)_: 返回所有姓氏列表。

## 示例

```js
import { getAllSurname } from 'cnname';

getAllSurname(); // ['赵', '钱', '孙', '李', '周', '吴', '郑', '王', ...]
getAllSurname('common-compound'); // ['上官', '欧阳', '司马', ...]
```
