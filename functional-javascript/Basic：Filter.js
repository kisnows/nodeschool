function getShortMessages(messages) {
	"use strict";

	return messages.map(function (va) {
		return va.message;
	   }).filter(function (t) {
		return t.length < 50;
	});
}

module.exports = getShortMessages;