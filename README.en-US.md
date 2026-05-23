[简体中文](./README.md) | English

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

## ⚡️ Try it Online

[Open in StackBlitz](https://stackblitz.com/edit/cnname-demo-en?file=src%2FDemo.tsx)

## 🚀 Quick Start

```js
import { getName, isSurname, parseName } from 'cnname';

getName({ count: 10, gender: 'female' });
// -> ["庞妙", "黄如嫣", "姜莹", ...]

parseName('欧阳娜娜');
// -> { surname: '欧阳', givenName: '娜娜', fullName: '欧阳娜娜', ... }

isSurname('欧阳');
// -> true
```

## ✨ Features

- 🎲 Easily and simply generate various random Chinese names.
- 🎭 Supports a wide range of surname types and name attributes.
- ⚡ Lightweight and fast with no extra dependencies.
- 🛠 Provides various APIs for custom generation rules.
- 📚 Suitable for test data, novel writing, game characters, and more.

## ✅ Capability Overview

| Capability | Supported |
|------------|-----------|
| Zero runtime dependencies | ✅ |
| TypeScript types | ✅ |
| Single-character and compound surnames | ✅ |
| Common and rare surnames | ✅ |
| Gender-oriented given names | ✅ |
| Wuxing/Five Elements given names | ✅ |
| Duplicated-character given names | ✅ |
| Chinese name parsing | ✅ |

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
import { getName } from 'cnname';

getName();
// -> 李炜
getName('高');
// -> 高佳倩
getName(5);
// -> ["余嘉扬", "郭东仪", "谢鸿宾", "彭天奇", "关智华"]
getName('张', 5);
// -> ["张腾", "张怡莉", "张瑞宇", "张萍", "张韵思"]
getName({ count: 5, gender: 'female' });
// -> ["庞妙", "黄如嫣", "姜莹", "莫惠安", "周敏"]
```

## 📖 API

**`getName(): string`**

Generate a random Chinese name.

**`getName(surname: string): string`**

Generate a random Chinese name with a specified surname.

**`getName(num: number): string[]`**

Generate a specified number of random Chinese names.

**`getName(surname: string, num: number): string[]`**

Generate a specified number of random Chinese names with a given surname.

**`getName(options: Options): string[]`**

Get names with advanced options. Supports gender, wuxing (Five Elements), reduplicated names, compound surnames, and more. 👉 [Documentation](docs/en/options.md)

## 🛠️ Utils

- [isSurname](docs/en/isSurname.md) - Return whether a given string is a surname.

- [getNameStr](docs/en/getNameStr.md) - Same as `getName`, but always returns a string.

- [parseName](docs/en/parseName.md) -  Parse a name and extract surname and other information.

- [getAllSurnames](docs/en/getAllSurnames.md) - Get all surnames.

- [getSurname](docs/en/getSurname.md) - Get a random surname.

- [getGivenName](docs/en/getGivenName.md) - Get a random given name.

## 📚 Resource

Below are the available resources. If you find missing surnames or names, [contributions are welcome](https://github.com/yyz945947732/cnname/pulls).

- 📖 [Surnames Database](https://github.com/yyz945947732/cnname/blob/master/example/surnames.md)

- 📝 [Given Names Database](https://github.com/yyz945947732/cnname/blob/master/example/words.md)

## ✍️ Example

```js
import { getName } from 'cnname';

const 主角 = getName();
const 反派 = getName('张');

const novel = `
# 第 1 章 千人围攻

"${主角}，你已经被我们围攻了！！！"

${反派}的厉啸从身后传来，随着尖锐的破空声，一声利箭没入${主角}身旁的黄土墙。

${主角}心头微凉，定睛一看。

只见阴暗的密林四处，已经隐隐约约钻出千道黑色人影。

他们分别是：

${getName(1000).join('，')}。
`;
```

👉 [View Output](https://github.com/yyz945947732/cnname/blob/master/example/novel.md)

## 🔑 LICENSE

[MIT](https://github.com/yyz945947732/cnname/blob/master/LICENSE)
