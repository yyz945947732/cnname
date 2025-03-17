[简体中文](./READEME.md) | English

<div align="center">
  <h1>cnname</h1>
  <p>👦 Randomly generate Chinese names 👧</p>
</div>

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

## ✨ Features

- 🎲 Easily and simply generate various random Chinese names.
- 🎭 Supports a wide range of surname types and name attribute.
- ⚡ Lightweight and fast with no extra dependencies.
- 🛠 Provides various APIs for custom generation rules.
- 📚 Suitable for test data, novel writing, game characters, and more.

## 📦 Install

```bash
npm install --save cnname
```

```bash
yarn add cnname
```

```bash
pnpm install cnname
```

### 🚀 Usage

```js
import cnname from 'cnname';

cnname();
// -> 李炜
cnname('彭');
// -> 彭天奇
cnname(5);
// -> ["俞俐均", "王富", "东方全", "蒲诚", "左哲"]
cnname('关', 5);
// -> ["关智华", "关永毓", "关宁", "关伟星", "关炎诚"]
cnname({ count: 5, givenNameType: 'female' });
// -> ["麦绮雯", "熊芮", "姜莹", "莫惠安", "张萍"]
```

## 📖 API

**`cnname(): string`**

Generate a random Chinese name.

**`cnname(surname: string): string`**

Generate a random Chinese name with a specified surname.

**`cnname(num: number): string[]`**

Generate a specified number of random Chinese names.

**`cnname(surname: string, num: number): string[]`**

Generate a specified number of random Chinese names with a given surname.

**`cnname(options: Option): string[]`**

Generate random names using [custom rules](docs/en/options.md), allowing control over name length, gender, and more.

### ⚡ Options

👉 [Documentation](docs/en/options.md)

### 🛠️ Utils

- [isSurname](docs/en/isSurname.md)

- [cnnamestr](docs/en/cnnamestr.md)

- [parseName](docs/en/parseName.md)

- [getAllSurname](docs/en/getAllSurname.md)

- [getSurname](docs/en/getSurname.md)

- [getGivenName](docs/en/getGivenName.md)

## 📚 Resource

Below are the available resources. If you find missing surnames or names, [contributions are welcome](https://github.com/yyz945947732/cnname/pulls).

- 🔥 [Common Surnames Database](https://github.com/yyz945947732/cnname/blob/master/dict/commonSurname.json)

- 📖 [Surnames Database](https://github.com/yyz945947732/cnname/blob/master/dict/allSurnames.json)

- 📝 [Given Names Database](https://github.com/yyz945947732/cnname/blob/master/dict/words.json)

## ✍️ Example

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

👉 [View Output](https://github.com/yyz945947732/cnname/blob/master/example/novel.md)

## 🔑 LICENSE

[MIT](https://github.com/yyz945947732/cnname/blob/master/LICENSE)
