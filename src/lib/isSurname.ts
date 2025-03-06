import { getIsSurname } from '../utils';

/**
 * 判断当前值是否为姓氏
 * @param {surname} string 姓氏
 * @returns {boolean} 是否为姓氏
 */

function isSurname(surname: string): boolean {
    return getIsSurname(surname);
}

export default isSurname;