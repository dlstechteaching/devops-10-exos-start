const excludeNamesWithX = require('../excludeNamesWithX');

describe('excludeNamesWithX tests suites', () => {
	it('should return array', () => {
		const result = excludeNamesWithX([]);
		expect(result).toEqual([]);
	});
});