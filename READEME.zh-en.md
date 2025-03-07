[简体中文](./READEME.md) | English

<p align="center">
  <a href="https://github.com/yyz945947732/cnname">
    <img src="./public/logo.png" alt="logo.png" border="0"  />
  </a>
</p>

👦 Generate Random Chinese Names 👧

<p align="center">
  <a href="https://www.npmjs.com/package/cnname">
    <img src="https://img.shields.io/npm/v/cnname.svg" alt="Version" />
  </a>
  <a href="https://www.npmjs.com/package/cnname">
    <img src="https://img.shields.io/npm/dm/cnname.svg" alt="download" />
  </a>
  <a href="https://coveralls.io/github/yyz945947732/cnname?branch=master">
    <img
      src="https://coveralls.io/repos/github/yyz945947732/cnname/badge.svg?branch=master"
      alt="Coverage Status"
    />
  </a>
  <a href="https://vitest.dev">
    <img
      src="https://img.shields.io/badge/ Vitest-tested-6da13f.svg?logo=vitest&labelColor=edd532"
      alt="Test in Vitest"
    />
  </a>
  <a href="https://github.com/yyz945947732/cnname/pulls">
    <img
      src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"
      alt="PRs Welcome"
    />
  </a>
  <a href="https://github.com/yyz945947732/cnname/blob/master/LICENSE">
    <img
      src="https://img.shields.io/badge/license-MIT-blue.svg"
      alt="GitHub license"
    />
  </a>
</p>

## Install

```bash
npm install --save cnname
```

### Usage

```js
import cnname from 'cnname';

cnname();
// -> 李炜
cnname('彭');
// -> 彭天奇
cnname(5);
// -> ["俞俐均","王富","东方全","蒲诚","左哲"]
cnname('关', 5);
// -> ["关智华","关永毓","关宁","关伟星","关炎城"]
```

## API

**`cnname(): string`** Get a random name

**`cnname(surname: string): string`** Get a random name with a specified surname

**`cnname(num: number): string[]`** Get a specified number of random names

**`cnname(surname: string, num: number): string[]`** Get a specified number of names with a given surname

**`cnname(options: Option): string[]`** Get random names based on [advanced configuration](#options)

### Options

| Parameter | Type | Description | Default |
|-----------|------|-------------|---------|
| `count` | `number` | Number of names to generate | `1` |
| `surname` | `string` | Specify a surname | Random surname |
| `onlyRepeatedGivenName` | `boolean` | Whether to return only repeated given names (e.g., "婷婷", "明明") | `false` |
| `givenNameLength` | `number` | Length of the given name | `1` or `2` |
| `unique` | `boolean` | Ensure the returned names are unique | `false` |
| `onlyCommonSurname` | `boolean` | Whether to return only common surnames | `false` |
| `surnameType` | `'all' \| 'single' \| 'compound'` | Control surname type: `'all'` for all surnames, `'single'` for single-character surnames, `'compound'` for compound surnames | `'all'` |
| `nameType` | `'full' \| 'surname' \| 'givenName'` | Type of returned value: `'full'` for full names, `'surname'` for surnames only, `'givenName'` for given names only | `'full'` |

### Utils

```js
import { getSurname, ... } from 'cnname';
```

**`getSurname(): string`** Get a random surname

**`getSurname(num: number): string[]`** Get a specified number of random surnames

**`getCompoundSurname(): string`** Get a random compound surname

**`getCompoundSurname(num: number): string[]`** Get a specified number of random compound surnames

**`getAllSurname(): string[]`** Get all available surnames

**`getGivenName(): string`** Get a random given name (without surname)

**`getGivenName(num: number): string[]`** Get a specified number of random given names (without surnames)

**`isSurname(surname: string): boolean`** Check if a given string is a surname

## Resource

The following are data resources. If you find that a surname or given name is missing, [contributions are welcome](https://github.com/yyz945947732/cnname/pulls).

- [Surnames Database](https://github.com/yyz945947732/cnname/blob/master/dict/surnames.json)

- [Given Names Database](https://github.com/yyz945947732/cnname/blob/master/dict/words.json)

## Example

```js
import cnname from 'cnname';

const 主角名字 = cnname();
const 反派名字 = cnname('张');

const novel = `
# 第 1 章 千人围攻

"${主角名字}，你已经被我们围攻了！！！"

${反派名字}的厉啸从身后传来，随着尖锐的破空声，一声利箭没入${主角名字}身旁的黄土墙。

${主角名字}心头微凉，定睛一看。

只见阴暗的密林四处，已经隐隐约约钻出千道黑色人影。

他们分别是：

${cnname(1000).join('，')}
`;
```

[Output Result](https://github.com/yyz945947732/cnname/blob/master/example/novel.md)

## LICENSE

[MIT](https://github.com/yyz945947732/cnname/blob/master/LICENSE)
