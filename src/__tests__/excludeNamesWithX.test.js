/* eslint-disable linebreak-style */
const excludeNamesWithX = require("../excludeNamesWithX");

describe("excludeNameWithX tests suites", () => {
    it("should return a message if the array is empty", () => {
        const result = excludeNamesWithX([]);
        expect(result).toEqual("Table empty");
    });

    it("should return the array with all names if the array doesn't contain any name with 'X'", () => {
        const result = excludeNamesWithX(["Momo", "Hadji", "Leo"]);
        expect(result).toEqual(["Momo", "Hadji", "Leo"]);
    });
});
