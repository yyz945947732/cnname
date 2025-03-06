import { pickRandomCompoundSurname } from '../utils';

/**
 * 返回随机复姓
 * @returns {string} 随机复姓
 */
function getCompoundSurname(): string;

/**
 * 返回随机复姓
 * @param {number} num 随机个数
 * @returns {string[]} 随机复姓数组
 */
function getCompoundSurname(num: number): string[];

function getCompoundSurname(num?: number): string | string[] {
    if (num < 0) {
        num = 1
    }
    const result = Array.from({ length: num ?? 1 }, () => {
        const surname = pickRandomCompoundSurname();
        return surname;
    });
    return num === undefined ? result[0] : result
}

export default getCompoundSurname;
