# getAllSurname

获取所有姓氏，可指定姓氏稀有度和姓氏类型，稀有度默认为 `'all'` (全部姓氏)。

## API

```ts
getAllSurname(surnameRarity?: SurnameRarity, surnameType?: SurnameType): string[]
```

**参数:**

1. `[surnameRarity='all']` _(SurnameRarity)_: 姓氏稀有度。
2. `[surnameType]` _(SurnameType)_: 姓氏类型。

**SurnameRarity:**

- `all` 所有
- `common` 常见姓氏
- `rare` 冷门姓氏

**SurnameType:**

- `single` 单字姓
- `compound` 复姓

**返回:**

_(Array)_: 姓氏列表。

## 示例

```js
import { getAllSurname } from 'cnname';

getAllSurname(); // ['赵', '钱', '孙', '李', '周', '吴', '郑', '王', ...]
getAllSurname('common', 'compound'); // ['上官', '欧阳', '司马', ...]
```
