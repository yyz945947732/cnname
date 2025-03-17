简体中文 | [English](./README.zh-en.md)

<div align="center">
  <h1>cnname</h1>
  <p>👦 随机生成中文名 👧</p>
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

## ✨ 特性

- 🎲 轻松简单的生成各种随机中文姓名。
- 🎭 支持丰富的姓氏类型和名字特性。
- ⚡ 轻量级库，快速生成，无额外依赖。
- 🛠 提供多种 API，可自定义生成规则。
- 📚 适用于测试数据、小说创作、游戏角色等场景。

## 📦 安装

```bash
npm install cnname
```

```bash
yarn add cnname
```

```bash
pnpm install cnname
```

### 🚀 使用示例

```js
import cnname from 'cnname';

cnname();
// -> 李炜
cnname('曾');
// -> 曾静好
cnname(5);
// -> ["余嘉扬", "郭东仪", "谢鸿宾", "彭天奇", "关智华"]
cnname('张', 5);
// -> ["张腾", "张怡莉", "张瑞宇", "张萍", "张韵思"]
cnname({ count: 5, gender: 'female' });
// -> ["庞妙", "黄如嫣", "姜莹", "高加倩", "周敏"]
```

## 📖 API

**`cnname(): string`**

获取一个随机姓名。

**`cnname(surname: string): string`**

获取指定姓氏的随机姓名。

**`cnname(num: number): string[]`**

获取指定数量的随机姓名。

**`cnname(surname: string, num: number): string[]`**

获取指定姓氏和数量的随机姓名。

**`cnname(options: Options): string[]`**

使用[自定义规则](docs/cn/options.md)生成随机名字，可控制名字长度、性别等。

### ⚡ Options

👉 [查看文档](docs/cn/options.md)

### 🛠️ 工具方法

- [isSurname](docs/cn/isSurname.md)

- [cnnamestr](docs/cn/cnnamestr.md)

- [parseName](docs/cn/parseName.md)

- [getAllSurname](docs/cn/getAllSurname.md)

- [getSurname](docs/cn/getSurname.md)

- [getGivenName](docs/cn/getGivenName.md)

## 📚 资源

以下为资源库，如果缺少了你想要的姓氏或名字，[欢迎补充](https://github.com/yyz945947732/cnname/pulls)。

- 🔥 [常见姓氏库](https://github.com/yyz945947732/cnname/blob/master/dict/commonSurname.json)

- 📖 [姓氏库](https://github.com/yyz945947732/cnname/blob/master/dict/allSurnames.json)

- 📝 [名字库](https://github.com/yyz945947732/cnname/blob/master/dict/words.json)

## ✍️ 示例

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

👉 [输出结果](https://github.com/yyz945947732/cnname/blob/master/example/novel.md)

## 🔑 许可证

[MIT](https://github.com/yyz945947732/cnname/blob/master/LICENSE)
