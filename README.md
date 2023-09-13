# cnname

> 随机生成中文名

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
  <a href="https://github.com/jestjs/jest">
    <img
      src="https://img.shields.io/badge/ Jest-tested-eee.svg?logo=jest&labelColor=99424f"
      alt="Test in Jest"
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
// 李炜
cnname('彭');
// 彭天奇
cnname(5);
// ["俞俐均","王富","东方全","蒲诚","左哲"]
cnname('关', 5);
// ["关智华","关永毓","关宁","关伟星","关炎城"]
```

## API

**cnname(): string** 获取一个随机名字

**cnname(surname: string): string** 获取指定姓氏的随机名字

**cnname(num: number): string[]** 获取指定数量的随机名字

**cnname(surname: string, num: number): string[]** 获取指定姓氏和数量的随机名字

## Resource

以下为资源库，如果缺少了你想要的姓氏或名字，[欢迎补充](https://github.com/yyz945947732/cnname/pulls)。

- [姓氏库](https://github.com/yyz945947732/cnname/blob/master/dict/surnames.json)

- [名字库](https://github.com/yyz945947732/cnname/blob/master/dict/words.json)

## Example

```js
import cnname from 'cnname';

const 主角名字 = cnname();
const 反派名字 = cnname('张');

const novel = `
第 1 章 千人围攻

"${主角名字}，你已经被我们围攻了！！！"

${反派名字}的厉啸从身后传来，随着尖锐的破空声，一声利箭没入${主角名字}身旁的黄土墙。

${主角名字}心头微凉，定睛一看。

只见阴暗的密林四处，已经隐隐约约钻出千道黑色人影。

他们分别是：

${cnname(1000).join('，')}
`;
```

[输出结果](https://github.com/yyz945947732/cnname/blob/master/example/novel.md)

## LICENSE

[MIT](https://github.com/yyz945947732/cnname/blob/master/LICENSE)
