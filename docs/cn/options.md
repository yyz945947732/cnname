# `cnname(options: Options)`

## ⚡ Options

| 参数 | 类型 | 说明 | 默认值 |
|------|------|------|------|
| count | `number` | 生成的姓名数量。 | `1` |
| gender | `'male'` \| `'female'` | 性别。男性名或女性名。 | 无限制 |
| element | `'metal'` \| `'wood'` \| `'water'` \| `'fire'` \| `'earth'` | 名字中包含的五行元素，例如（焕、淼、鑫...）。 | 无限制 |
| givenNameAttributes | [GivenNameAttribute](givenNameAttributes.md) \| GivenNameAttribute[]  | [名字特性](givenNameAttributes.md)。可传单个特性或特性数组，优先级将参照数组顺序。 | 无限制 |
| givenNameLength | `number` | 名字长度（不含姓氏）。 | `1` 或 `2` |
| givenNameStartsWith | `string` | 指定名字（不含姓氏）第一个字。 | 随机字 |
| givenNameEndsWith | `string` | 指定名字（不含姓氏）最后一个字。 | 随机字 |
| givenNameDuplicated | `boolean` | 是否只返回叠字名（如 "婷婷"、"明明"）。 | `false` |
| givenName | `string \| string[]` | 指定名（不含姓氏），可传单个名或名数组。 | 随机名 |
| surnameType | `'common' \| 'common-single' \| 'common-compound' \| 'all' \| 'all-single' \| 'all-compound'` | 姓氏类型。<br>`'common'` [常见姓氏](https://github.com/yyz945947732/cnname/blob/master/dict/commonSurname.json)。<br>`'common-single'` 常见单字姓。<br>`'common-compound'` 常见复姓。<br>`'all'` 全部姓氏。<br>`'all-single'` 全部单字姓。<br>`'all-compound'` 全部复姓。 | `'common'` |
| surnamePickStrategy | `'weight' \| 'random'` | 姓氏抽取策略。<br>`'weight'` 按字典库中姓氏的排序加权后随机抽取。<br>`'random'` 完全随机。 | `'weight'` |
| surname | `string \| string[]` | 指定姓氏，可传单个姓或姓氏数组。 | 随机姓氏 |
| unique | `boolean` | 是否确保返回的值不重复。 | `false` |
| returnType | `'fullName' \| 'surname' \| 'givenName'` | 返回姓名部分。<br>`'fullName'` 完整姓名。<br>`'surname'` 姓氏。<br>`'givenName'` 名。 | `'fullName'` |

## ✍️ 示例

### 生成 5 个随机姓名

```js
import cnname from 'cnname';

cnname({ count: 5 });
// => ["杨波", "郑龙", "苏佩楠", "王楠", "许岩"]
```

### 生成 3 个女性名字

```js
cnname({ count: 3, gender: 'female' });
// => ["夏柔", "邓霞", "赵欣"]
```

### 生成 2 个五行属火的名字

```js
cnname({ count: 2, element: 'fire' });
// => ["杜旭", "熊煜"]
```

### 生成 2 个五行属水的女性名字

```js
cnname({ count: 2, element: 'water', gender: 'female' });
// => ["郭淼莹", "陈诗泉"]
```

### 生成 2 个五行包含水和火的名字

```js
cnname({ count: 2, givenNameAttributes: ['water', 'fire'] });
// => ["苏泽灿", "聂涵晖"]
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

### 生成 3 个特定名的名字

```js
cnname({ count: 3, givenName: ['俊杰', '杰伦'] });
// => ["周俊杰", "林杰伦", "张俊杰"]
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
cnname({ count: 3, returnType: 'givenName' });
// => ["晨", "浩然", "宇航"]
```

### 只返回姓氏部分

```js
cnname({ count: 3, returnType: 'surname' });
// => ["赵", "钱", "孙"]
```

### 生成名字有更高概率包含冷门的姓氏

```js
cnname({ count: 3, surnameType: 'all', surnamePickStrategy: 'random' });
// => ["嵇舒", "贡翊", "第五悠梦"]
```
