'use strict';

/***
 * Функция возвращает строку, которая является елочкой (минимальной высотой 3)
 *
 * @param {number} countOfLevels - количество уровней
 * @returns {string}
 */

const tree = (countOfLevels) => {
	if (!countOfLevels || !Number(countOfLevels) || countOfLevels < 3) {
		return null;
	}

	let resultString = '';

	for (let i = 0; i < countOfLevels - 1; i++) {
		const spaces = ' '.repeat(countOfLevels - 2 - i);
		resultString += `${spaces}${'*'.repeat(i * 2 + 1)}${spaces}\n`;
	}

	const spaces = ' '.repeat(countOfLevels - 2);
	resultString += `${spaces}|${spaces}\n`;

	return resultString;
};
