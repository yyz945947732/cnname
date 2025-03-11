/** 高级配置 */
export interface Options {
  /** 返回值数量, 默认为 `1` */
  count?: number;
  /** 仅返回指定姓氏 */
  surname?: string | string[];
  /** 仅返回叠字名，默认为 `false` */
  duplicatedGivenName?: boolean;
  /** 名长度 */
  givenNameLength?: number;
  /**
   * 返回不可重复，默认为 `false`
   *
   * 如果 `unique` 为 `true`，但字典可返回的数量不足 `count`，则返回的数量可能会少于 `count`。
   */
  unique?: boolean;
  /**
   * 支持姓氏类型，默认为 `common`
   * @type `common` 包括常用姓氏
   * @type `common-single` 包括常用单字姓氏
   * @type `common-compound` 包括常用复姓
   * @type `all` 包括所有姓氏
   * @type `all-single` 包括所有单字姓
   * @type `all-compound` 包括所有复姓
   */
  surnameType?: SurnameType;
  /**
   * 返回的姓名部分，默认为 `fullName`
   * @type `fullName` 返回完整姓名
   * @type `surname` 只返回姓
   * @type `givenName` 只返回名
   */
  part?: Part;
  /**
   * 随机抽取算法，默认为 `weight`
   * @type `weight` 按常见度加权
   * @type `random` 纯随机算法
   */
  algorithm?: Algorithm;
}

/** 姓氏类型 */
export type SurnameType =
  | 'common'
  | 'common-single'
  | 'common-compound'
  | 'all'
  | 'all-single'
  | 'all-compound';

/** 返回的姓名部分 */
export type Part = 'fullName' | 'surname' | 'givenName';

export type Algorithm = 'weight' | 'random';

/** 姓名解析格式 */
export interface ParseNameResult {
  /** 姓氏 */
  surname: string;
  /** 名 */
  givenName: string;
}
