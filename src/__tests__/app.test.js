const { getCurrentMonth } = require("../app");
const { isAdmin } = require("../app");
const { removeLetterXFromArray } = require("../app");

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

describe("app tests suites - removeLetterXFromArray", () => {
    test("should return an empty array", () => {
        const result = removeLetterXFromArray(["x"]);
        expect(result).toStrictEqual([]);
    });
    test("should return array with 2 names removed", () => {
        const result = removeLetterXFromArray(["DMX", "Xzibit", "JeanKevin"]);
        expect(result).toStrictEqual(["JeanKevin"]);
    });
});
