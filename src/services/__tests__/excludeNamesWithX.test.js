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

    it('should return an array with JeanKevin only as it is the only name without the letter X', () =>{
        const result = excludeNamesWithX(['DMX','Xavier','JeanKevin']);
        expect(result).toEqual(['JeanKevin']);
    });

    it('should return an array with JC and Leo only as it is xena with the letter x', () =>{
        const result = excludeNamesWithX(['JC','xena','Leo']);
        expect(result).toEqual(['JC','Leo']);
    });
});
