const excludeNamesWithX = require("../excludeNamesWithX");

describe("excludeNamesWithX tests suites", () => {
    it("should return array", () => {
        const result = excludeNamesWithX([]);
        expect(result).toEqual([]);
    });

    it('should return an array with all names as no names have an "x" letter', () => {
        const result = excludeNamesWithX(["Momo", "Hadji", "Leo"]);
        expect(result).toEqual(["Momo", "Hadji", "Leo"]);
    });

    it('should return an array with JeanKevin only as it is the only name without the letter "x" ', () => {
        const result = excludeNamesWithX(["DMX", "Xzibit", "JeanKevin"]);
        expect(result).toEqual(["JeanKevin"]);
    });

    it('should return an array with JC and Leo only as only xena contains the letter "x" ', () => {
        const result = excludeNamesWithX(["JC", "Leo", "xena"]);
        expect(result).toEqual(["JC", "Leo"]);
    });
});
