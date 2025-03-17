# `cnname(options: Options)`

## ⚡ Options

| 参数 | 类型 | 说明 | 默认值 |
|------|------|------|------|
| count | `number` | 生成的姓名数量。 | `1` |
| givenNameType | `'all' \| 'male' \| 'female' \| 'metal' \| 'wood' \| 'water' \| 'fire' \| 'earth'` | 名特性。<br>`'all'` 无限制。<br> 性别：<br>`'male'` 男性名，`'female'` 女性名。<br> 五行：<br> `'metal'` 金，`'wood'` 木，`'water'` 水，`'fire'` 火，`'earth'` 土。 | `'all'` |
| givenNameLength | `number` | 名字长度（不含姓氏）。 | `1` 或 `2` |
| givenNameStartsWith | `string` | 指定名字（不含姓氏）第一个字。 | 随机字 |
| givenNameEndsWith | `string` | 指定名字（不含姓氏）最后一个字。 | 随机字 |
| givenNameDuplicated | `boolean` | 是否只返回叠字名（如 "婷婷"、"明明"）。 | `false` |
| surnameType | `'common' \| 'common-single' \| 'common-compound' \| 'all' \| 'all-single' \| 'all-compound'` | 姓氏类型。<br>`'common'` [常见姓氏](https://github.com/yyz945947732/cnname/blob/master/dict/commonSurname.json)。<br>`'common-single'` 常见单字姓。<br>`'common-compound'` 常见复姓。<br>`'all'` 全部姓氏。<br>`'all-single'` 全部单字姓。<br>`'all-compound'` 全部复姓。 | `'common'` |
| surnameAlgorithm | `'weight' \| 'random'` | 随机算法（姓氏）。<br>`'weight'` 按常见度加权（接近现实世界概率）。<br>`'random'` 纯随机。 | `'weight'` |
| surname | `string \| string[]` | 指定姓氏，可传单个姓或姓氏数组。 | 随机姓氏 |
| unique | `boolean` | 是否确保返回的值不重复。 | `false` |
| part | `'fullName' \| 'surname' \| 'givenName'` | 返回部分。<br>`'fullName'` 完整姓名。<br>`'surname'` 姓氏。<br>`'givenName'` 名。 | `'fullName'` |

## ✍️ 示例

### 生成 5 个随机姓名

```js
import cnname from 'cnname';

cnname({ count: 5 });
// => ["杨波", "郑龙", "苏佩楠", "王楠", "许岩"]
```

### 生成 3 个女性名字

```js
cnname({ count: 3, givenNameType: 'female' });
// => ["夏柔", "邓霞", "赵欣"]
```

### 生成 2 个五行属火的名字

```js
cnname({ count: 2, givenNameType: 'fire' });
// => ["杜旭", "熊煜"]
```

### 生成 2 个名字长度为 2 的姓名

```js
cnname({ count: 2, givenNameLength: 2 });
// => ["陈晓东", "张涛昆"]
```

### 生成以 "小" 开头的名字

```js
cnname({ count: 3, givenNameStartsWith: "小" });
// => ["赵小星", "王小龙", "李小佳"]
```

### 生成叠字名

```js
cnname({ count: 3, givenNameDuplicated: true });
// => ["李莉莉", "李维维", "符馨馨"]
```

### 生成 2 个复姓的姓名

```js
cnname({ count: 2, surnameType: 'common-compound' });
// => ["司徒杉", "欧阳昊"]
```

### 生成 3 个特定姓氏的名字

```js
cnname({ count: 3, surname: ['张', '刘'] });
// => ["刘海", "张天宇", "刘伟"]
```

### 只返回名字部分

```js
cnname({ count: 3, part: 'givenName' });
// => ["晨", "浩然", "宇航"]
```

### 只返回姓氏部分

```js
cnname({ count: 3, part: 'surname' });
// => ["赵", "钱", "孙"]
```

### 生成名字有更高概率包含冷门的姓氏

```js
cnname({ count: 3, surnameType: 'all', surnameAlgorithm: 'random' });
// => ["嵇舒", "贡翊", "第五悠梦"]
```
