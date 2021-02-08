"use strict";

/***
 * Функция возвращает строку, которая является елочкой (минимальной высотой 3)
 *
 * @param {number} countOfLevels - количество уровней
 * @returns {string}
 */

const tree = (countOfLevels) => {
    if (!countOfLevels || countOfLevels < 3) return null;
    
    let resultString = "";

    for (let i = 0; i < countOfLevels - 1; i++) {
        let spaces = " ".repeat(countOfLevels - 2 - i);
        resultString += `${spaces}${"*".repeat(i * 2 + 1)}${spaces}\n`;
    }

    let spaces = " ".repeat(countOfLevels - 2);
    resultString += `${spaces}|${spaces}\n`;

    return resultString;
};
