/* eslint-disable linebreak-style */
const excludeNamesWithX = require("../excludeNamesWithX");

describe("excludeNameWithX tests suites", () => {
    it("should return a message if the array is empty", () => {
        const result = excludeNamesWithX([]);
        expect(result).toEqual("Table empty");
    });

  
});