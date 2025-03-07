import { pickRandomSurname, pickRandomWords } from '../utils';

/**
 * 返回随机中文名
 * @returns {string} 随机中文名
 */
function cnname(): string;

/**
 * 返回随机中文名
 * @param {number} num 随机个数
 * @returns {string[]} 随机中文名数组
 */
function cnname(num: number): string[];

/**
 * 返回随机中文名
 * @param {string} surname 姓氏
 * @returns {string} 随机中文名
 */
function cnname(surname: string): string;

/**
 * 返回随机中文名
 * @param {string} surname 姓氏
 * @param {number} num 随机个数
 * @returns {string} 随机中文名数组
 */
function cnname(surname: string, num: number): string[];

function cnname(
  parameter1?: number | string,
  parameter2?: number
): string | string[] {
  let num: number;
  let fixSurname = '';
  let single = false;
  if (typeof parameter1 === 'string') {
    fixSurname = parameter1;
    num = parameter2;
  } else if (typeof parameter1 === 'number') {
    num = parameter1;
  }

  if (num === undefined) {
    num = 1;
    single = true;
  }

  if (num < 0) {
    num = 1;
  }

  const result = Array.from({ length: num }, () => {
    const surname = fixSurname || pickRandomSurname();
    const nameLength = Math.random() > 0.5 ? 2 : 1;
    const name = pickRandomWords(nameLength);
    return surname + name;
  });

  return single ? result[0] : result;
}
export default cnname;
