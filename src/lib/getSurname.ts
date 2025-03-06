import { pickRandomSurname } from '../utils';

/**
 * 返回随机姓氏
 * @returns {string} 随机姓氏
 */
function getSurname(): string;

/**
 * 返回随机姓氏
 * @param {number} num 随机个数
 * @returns {string[]} 随机姓氏数组
 */
function getSurname(num: number): string[];

/**
 * 返回随机姓氏
 * @param {number} num 随机个数
 * @returns {string | string[]} 随机姓氏数组
 */
function getSurname(num?: number): string | string[] {
    if (num < 0) {
        num = 1
    }
    const result = Array.from({ length: num || 1 }, () => {
        const surname = pickRandomSurname();
        return surname;
    });
    return num === undefined ? result[0] : result
}

export default getSurname;