function repeat(operation, num) {
	"use strict";

	for (var index = 0; index < num; index++) {
		operation();
	}
}
module.exports = repeat;