const { getCurrentMonth } = require("../app");
const { isAdmin } = require("../app");
//const { searchWord } = require("../searchWord");

jest.useFakeTimers().setSystemTime(new Date("2020-01-01"));

describe("app tests suites - getCurrentMonth", () => {
    test("should return the current month", () => {
        const result = getCurrentMonth();
        expect(result).toBe("January");
    });
});

describe("app tests suites - isAdmin", () => {
    test("should return false as user is not admin", () => {
        const result = isAdmin();
        expect(result).toBe(false);
    });

    test("should return true as user is admin", () => {
        const result = isAdmin("admin");
        expect(result).toBe(true);
    });
});

describe("test a function that removes all words containing the letter x", () => {
    test("should return [] when given empty table", () => {
        const reponse = searchWord([]);
        console.log(response);
        expect(reponse).toBe([]);
    });
});
