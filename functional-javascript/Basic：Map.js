function doubleAll(numbers) {
	"use strict";

	numbers = numbers.map.call(numbers, function (num) {
		return num * 2;
	});
	return numbers;
}

module.exports = doubleAll;