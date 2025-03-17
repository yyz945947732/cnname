# `cnname(options: Options)`

## ⚡ Options

| Parameter | Type | Description | Default |
|-----------|------|-------------|---------|
| count | `number` | Number of names to generate. | `1` |
| givenNameType | `'all' \| 'male' \| 'female' \| 'metal' \| 'wood' \| 'water' \| 'fire' \| 'earth'` | Name attribute: <br>`'all'` for no specific attribute. <br> Gender: <br> `'male'` for male names, `'female'` for female names. <br> Five Elements: <br> `'metal'` (金), `'wood'` (木), `'water'` (水), `'fire'` (火), `'earth'` (土). | `'all'` |
| givenNameLength | `number` | Length of the given name. | `1` or `2` |
| givenNameStartsWith | `string` | Specify the first character of the given name. | Random character |
| givenNameEndsWith | `string` | Specify the last character of the given name. | Random character |
| givenNameDuplicated | `boolean` | Whether to return only repeated given names (e.g., "婷婷", "明明"). | `false` |
| surnameType | `'common' \| 'common-single' \| 'common-compound' \| 'all' \| 'all-single' \| 'all-compound'` | Surname type: <br>`'common'` for [common surname](https://github.com/yyz945947732/cnname/blob/master/dict/commonSurname.json). <br>`'common-single'` for common single-character surnames. <br> `'common-compound'` for common compound surnames. <br>`'all'` for all surnames. <br> `'all-single'` for single-character surnames. <br> `'all-compound'` for compound surnames. | `'common'` |
| surnameAlgorithm | `'weight' \| 'random'` | Random generate algorithm (surname). <br>`'weight'` weighted by real frequency. <br>`'random'` purely random. | `'weight'` |
| surname | `string \| string[]` | Specify a surname (single or array). | Random surname |
| unique | `boolean` | Ensure the returned names are unique. | `false` |
| part | `'fullName' \| 'surname' \| 'givenName'` | Part of returned name: <br> `'fullName'` for full names. <br> `'surname'` for surnames only. <br> `'givenName'` for given names only. | `'fullName'` |

## ✍️ Examples

### Generate 5 random names

```js
import cnname from 'cnname';

cnname({ count: 5 });
// => ["杨波", "郑龙", "苏佩楠", "王楠", "许岩"]
```

### Generate 3 female names

```js
cnname({ count: 3, givenNameType: 'female' });
// => ["夏柔", "邓霞", "赵欣"]
```

### Generate 2 names with the "fire" element

```js
cnname({ count: 2, givenNameType: 'fire' });
// => ["杜旭", "熊煜"]
```

### Generate 2 names with a given name length of 2 characters

```js
cnname({ count: 2, givenNameLength: 2 });
// => ["陈晓东", "张涛昆"]
```

### Generate 3 names with a given name that start with "小"

```js
cnname({ count: 3, givenNameStartsWith: "小" });
// => ["赵小星", "王小龙", "李小佳"]
```

### Generate duplicated-character names

```js
cnname({ count: 3, givenNameDuplicated: true });
// => ["李莉莉", "李维维", "符馨馨"]
```

### Generate 2 names with compound surnames

```js
cnname({ count: 2, surnameType: 'common-compound' });
// => ["司徒杉", "欧阳昊"]
```

### Generate 3 names with specific surnames

```js
cnname({ count: 3, surname: ['张', '刘'] });
// => ["刘海", "张天宇", "刘伟"]
```

### Return only the given name part

```js
cnname({ count: 3, part: 'givenName' });
// => ["晨", "浩然", "宇航"]
```

### Return only the surname part

```js
cnname({ count: 3, part: 'surname' });
// => ["赵", "钱", "孙"]
```

### Generate names with a higher probability of uncommon surnames

```js
cnname({ count: 3, surnameType: 'all', surnameAlgorithm: 'random' });
// => ["嵇舒", "贡翊", "第五悠梦"]
```
