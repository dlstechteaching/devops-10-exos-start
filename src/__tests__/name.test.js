const { removeNameWithLetter } = require("../name");

const tableName1 = ['Momo', 'Hadji', 'Leo'];
const tableName2 = ['DMX', 'Xzibit', 'JeanKevin'];
const tableName3 = ['JC', 'Leo', 'xena'];

describe("test if it remove the name of the list when using the parameter X", () => {
    test("should a table with all the same elements", () => {
        const result = removeNameWithLetter(tableName1);
        expect(result).toEqual(tableName1);
        expect(result.length).toBe(3);
    });
});


describe("test if it remove the name of the list when using the parameter X", () => {
    test("should a table with the last element", () => {
        const getThisReuslt = ['JeanKevin'];
        const result = removeNameWithLetter(tableName2);
        expect(result).toEqual(getThisReuslt);
        expect(result.length).toBe(1);
    });
});


describe("test if it remove the name of the list when using the parameter X", () => {
    test("should a table with the two first elements", () => {
        const getThisReuslt = ['JC', 'Leo'];
        const result = removeNameWithLetter(tableName3);
        expect(result).toEqual(getThisReuslt);
        expect(result.length).toBe(2);
    });
});

