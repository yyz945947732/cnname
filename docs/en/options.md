# `getName(options: Options)`

## ⚡ Options

| Parameter | Type | Description | Default |
|-----------|------|-------------|---------|
| count | `number` | Number of names to generate. | `1` |
| gender | `'male'` \| `'female'` | Gender. Male or female name. | No restriction |
| wuxing | `'metal'` \| `'wood'` \| `'water'` \| `'fire'` \| `'earth'` | The Five Elements contained in the name, e.g., (焕、淼、鑫...). | No restriction |
| givenNameAttributes | [GivenNameAttribute](givenNameAttributes.md) \| GivenNameAttribute[] | [Name attributes](givenNameAttributes.md). Can be a single attribute or an array of attributes, with priority following the array order. | No restriction |
| givenNameLength | `number` | Length of the given name. | `1` or `2` |
| givenNameStartsWith | `string` | Specify the first character of the given name. | Random character |
| givenNameEndsWith | `string` | Specify the last character of the given name. | Random character |
| givenNameDuplicated | `boolean` | Whether to return only repeated given names (e.g., "婷婷", "明明"). | `false` |
| givenName | `string \| string[]` | Specify a given name (single or array).。 | Random given name |
| surnameType | `'single' \| 'compound'` | Surname type. <br>`'single'` single-character surname. <br>`'compound'` compound surname. | No restriction |
| surnameRarity | `'all' \| 'common' \| 'rare'` | Surname rarity. <br> `'all'` all surnames. <br> `'common'` common surnames. <br> `'rare'` rare surnames. | `common` |
| surnamePickStrategy | `'weight' \| 'random'` | Surname pick strategy. <br>`'weight'` randomly pick after weighting based on the order of surnames in the dictionary. <br>`'random'` completely random. | `'weight'` |
| surname | `string \| string[]` | Specify a surname (single or array). | Random surname |
| unique | `boolean` | Ensure the returned names are unique. | `false` |
| returnType | `'fullName' \| 'surname' \| 'givenName'` | Part of returned name: <br> `'fullName'` for full names. <br> `'surname'` for surnames only. <br> `'givenName'` for given names only. | `'fullName'` |

## ✍️ Examples

### Generate 5 random names

```js
import { getName } from 'cnname';

getName({ count: 5 });
// => ["杨波", "郑龙", "苏佩楠", "王楠", "许岩"]
```

### Generate 3 female names

```js
getName({ count: 3, gender: 'female' });
// => ["夏柔", "邓霞", "赵欣"]
```

### Generate 2 names with the "fire" wuxing element

```js
getName({ count: 2, wuxing: 'fire' });
// => ["杜旭", "熊煜"]
```

### Generate 2 female names with the "water" wuxing element

```js
getName({ count: 2, wuxing: 'water', gender: 'female' });
// => ["郭淼莹", "陈诗泉"]
```

### Generate 2 names containing both "water" and "fire" wuxing element

```js
getName({ count: 2, givenNameAttributes: ['water', 'fire'] });
// => ["苏泽灿", "聂涵晖"]
```

### Generate 2 names with a given name length of 2 characters

```js
getName({ count: 2, givenNameLength: 2 });
// => ["陈晓东", "张涛昆"]
```

### Generate 3 names with a given name that start with "小"

```js
getName({ count: 3, givenNameStartsWith: "小" });
// => ["赵小星", "王小龙", "李小佳"]
```

### Generate duplicated-character names

```js
getName({ count: 3, givenNameDuplicated: true });
// => ["李莉莉", "李维维", "符馨馨"]
```

### Generate 3 names with specific given name

```js
getName({ count: 3, givenName: ['俊杰', '杰伦'] });
// => ["周俊杰", "林杰伦", "张俊杰"]
```

### Generate 2 names with compound surnames

```js
getName({ count: 2, surnameType: 'common-compound' });
// => ["司徒杉", "欧阳昊"]
```

### Generate 3 names with specific surnames

```js
getName({ count: 3, surname: ['张', '刘'] });
// => ["刘海", "张天宇", "刘伟"]
```

### Return only the given name

```js
getName({ count: 3, returnType: 'givenName' });
// => ["晨", "浩然", "宇航"]
```

### Return only the surname

```js
getName({ count: 3, returnType: 'surname' });
// => ["赵", "钱", "孙"]
```

### Generate names with a higher probability of uncommon surnames

```js
getName({ count: 3, surnameRarity: 'rare' });
// => ["嵇舒", "贡翊", "第五悠梦"]
```
