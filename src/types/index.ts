/** 高级配置 */
export interface Options {
  /** 返回值数量, 默认为 `1` */
  count?: number;
  /**
   * 性别
   * @type `male` 男性常用名
   * @type `female` 女性常用名
   */
  gender?: 'male' | 'female';
  /**
   * 五行
   * @type `metal` 金属性名
   * @type `wood` 木属性名
   * @type `water` 水属性名
   * @type `fire` 火属性名
   * @type `earth` 土属性名
   */
  elements?: 'metal' | 'wood' | 'water' | 'fire' | 'earth';
  /**
   * 名字属性。
   * @link https://github.com/yyz945947732/cnname/blob/master/docs/cn/givenNameType.md
   */
  givenNameType?: GivenNameType | GivenNameType[];
  /** 名长度 */
  givenNameLength?: number;
  /** 指定名字第一个字 */
  givenNameStartsWith?: string;
  /** 指定名字最后一个字 */
  givenNameEndsWith?: string;
  /** 仅返回叠字名，默认为 `false` */
  givenNameDuplicated?: boolean;
  /**
   * 支持姓氏类型，默认为 `common`
   * @type `common` 包括常见姓氏
   * @type `common-single` 包括常见单字姓氏
   * @type `common-compound` 包括常见复姓
   * @type `all` 包括所有姓氏
   * @type `all-single` 包括所有单字姓
   * @type `all-compound` 包括所有复姓
   */
  surnameType?: SurnameType;
  /**
   * 姓氏抽取算法，默认为 `weight`
   * @type `weight` 按常见度加权（接近真实概率）
   * @type `random` 纯随机算法
   */
  surnameAlgorithm?: Algorithm;
  /** 仅返回指定姓氏 */
  surname?: string | string[];
  /**
   * 返回不可重复，默认为 `false`
   *
   * 如果 `unique` 为 `true`，但字典可返回的数量不足 `count`，则返回的数量可能会少于 `count`
   */
  unique?: boolean;
  /**
   * 返回的姓名部分，默认为 `fullName`
   * @type `fullName` 返回完整姓名
   * @type `surname` 只返回姓
   * @type `givenName` 只返回名
   */
  part?: Part;
}

/** 姓氏类型 */
export type SurnameType =
  | 'common'
  | 'common-single'
  | 'common-compound'
  | 'all'
  | 'all-single'
  | 'all-compound';

/** 名字特性 */
export type GivenNameType = Options['gender'] | Options['elements'];

/** 返回的姓名部分 */
export type Part = 'fullName' | 'surname' | 'givenName';

/** 随机抽取算法 */
export type Algorithm = 'weight' | 'random';

/** 详细姓名信息 */
export interface NameDetail {
  /** 姓氏 */
  surname: string;
  /** 名 */
  givenName: string;
  /** 是否为复姓 */
  isCompoundSurname: boolean;
  /** 是否为单字姓氏 */
  isSingleCharacterSurname: boolean;
  /** 名(不包括姓氏)长度 */
  givenNameLength: number;
  /** 是否为叠字名 */
  isGivenNameDuplicated: boolean;
  /** 是否为常见姓氏 */
  isCommonSurname: boolean;
}
