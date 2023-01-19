const excludeNamesWithX = require("../excludeNamesWithX");

describe("excludeNamesWithX tests suites", () => {
    it("should return array", () => {
        const result = excludeNamesWithX([]);
        expect(result).toEqual([]);
    });

    it('should return an array with all names as no names have "x" letter', () =>{
        const result = excludeNamesWithX(['Momo','Hadji','Leo']);
        expect(result).toEqual(['Momo','Hadji','Leo']);
    });
});
