/** 高级配置 */
export interface Options {
  /** 返回数量, 默认为 `1` */
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
  wuxing?: 'metal' | 'wood' | 'water' | 'fire' | 'earth';
  /**
   * 名字所含特性
   * @link https://github.com/yyz945947732/cnname/blob/master/docs/cn/givenNameAttributes.md
   */
  givenNameAttributes?: GivenNameAttribute | GivenNameAttribute[];
  /** 名长度 */
  givenNameLength?: number;
  /** 指定名字第一个字 */
  givenNameStartsWith?: string;
  /** 指定名字最后一个字 */
  givenNameEndsWith?: string;
  /** 是否使用叠字名，默认为 `false` */
  givenNameDuplicated?: boolean;
  /** 指定名 */
  givenName?: string | string[];
  /**
   * 姓氏类型
   * @type `single` 单字姓
   * @type `compound` 复姓
   */
  surnameType?: SurnameType;
  /**
   * 姓氏稀有度，默认为 `common`
   * @type `all` 所有姓氏
   * @type `common` 常见姓氏
   * @type `rare` 冷门姓氏
   */
  surnameRarity?: SurnameRarity;
  /**
   * 姓氏抽取策略，默认为 `weight`
   * @type `weight` 按字典库中姓氏的排序加权后随机抽取
   * @type `random` 完全随机
   */
  surnamePickStrategy?: PickStrategy;
  /** 指定姓氏 */
  surname?: string | string[];
  /**
   * 是否返回值不重复，默认为 `false`
   *
   * 如果 `unique` 为 `true`，但字典可返回的数量不足 `count`，则返回的数量可能会少于 `count`
   */
  unique?: boolean;
  /**
   * 返回姓名部分，默认为 `fullName`
   * @type `fullName` 返回完整姓名
   * @type `surname` 只返回姓
   * @type `givenName` 只返回名
   */
  returnType?: ReturnType;
}

/** 姓氏类型 */
export type SurnameType = 'single' | 'compound';

/** 姓氏稀有度 */
export type SurnameRarity = 'all' | 'common' | 'rare';

/** 姓氏字典键 */
export type SurnameDictKey = SurnameRarity | `${SurnameRarity}-${SurnameType}`;

/** 名字特性 */
export type GivenNameAttribute = Options['gender'] | Options['wuxing'] | Others;

/** 其他特性 */
export type Others = 'animal' | 'color';

/** 返回的姓名部分 */
export type ReturnType = 'fullName' | 'surname' | 'givenName';

/** 随机抽取算法 */
export type PickStrategy = 'weight' | 'random';

/** 详细姓名信息 */
export interface NameDetail {
  /** 姓氏 */
  surname: string;
  /** 名 */
  givenName: string;
  /** 完整姓名 */
  fullName: string;
  /** 是否为合法姓名 */
  isValidName: boolean;
  /** 是否为复姓 */
  isCompoundSurname: boolean;
  /** 是否为单字姓氏 */
  isSingleCharacterSurname: boolean;
  /** 名(不包括姓氏)长度 */
  givenNameLength: number;
  /** 是否为叠字名 */
  isGivenNameDuplicated: boolean;
}
