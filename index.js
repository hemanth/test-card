'use strict';
const cards = require('./cards.json');

module.exports = card => {
	if (typeof card !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof card}`);
	}

	return cards[card] || null;
};
