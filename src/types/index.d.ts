/** 高级配置 */
export interface Options {
  /** 返回值数量, 默认为 `1` */
  count?: number;
  /** 仅返回指定姓氏 */
  surname?: string;
  /** 仅返回叠字名，默认为 `false` */
  repeatedGivenNameOnly?: boolean;
  /** 名长度 */
  givenNameLength?: number;
  /** 返回不可重复，默认为 `false` */
  unique?: boolean;
  /**
   * 支持姓氏类型，默认为 `all`
   * @type `all` 包括所有姓氏
   * @type `single` 仅包括单姓
   * @type `compound` 仅包括复姓
   * @type `common` 仅包括常用姓氏
   * @type `single-common` 仅包括单姓常用姓氏
   * @type `compound-common` 仅包括复姓常用姓氏
   */
  surnameType?: 'all' | 'single' | 'compound' | 'common' | 'single-common' | 'compound-common';
  /**
   * 返回的姓名类型，默认为 `full`
   * @type `full` 返回完整姓名
   * @type `surname` 只返回姓
   * @type `givenName` 只返回名
   */
  nameType?: 'full' | 'surname' | 'givenName';
}
