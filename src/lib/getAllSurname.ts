import { getAllSurname as getSurnames } from '../utils';

/**
 * 判断当前值是否为姓氏
 * @returns {string[]} 获取所有姓氏
 */

function getAllSurname(): string[] {
  return getSurnames();
}

export default getAllSurname;
