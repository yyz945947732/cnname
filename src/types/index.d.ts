/** 高级配置 */
export interface Options {
  /** 仅返回复姓 */
  onlyCompoundSurname?: boolean;
  /** 不返回复姓 */
  excludeCompoundSurname?: true;
  /** 返回数量 */
  count?: number;
  /** 仅返回指定姓氏 */
  surname?: string;
  /** 仅返回姓 */
  onlySurname?: boolean;
  /** 仅返回名 */
  onlyGivenName?: boolean;
  /** 仅返回叠字名 */
  onlyRepeatedGivenName?: boolean;
  /** 名长度（1 或 2） */
  givenNameLength?: 1 | 2;
  /** 返回不可重复 (优先级大于 count) */
  unique?: boolean;
  /** 仅返回常用姓氏（姓氏人数前100名） */
  onlyCommonSurname?: boolean;
}
