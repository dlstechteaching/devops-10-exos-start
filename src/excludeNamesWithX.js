module.exports = function (array) {
    if (array.length === 0) return "Table empty";
   /** const newArray = [];
    const reg = new RegExp("[Xx]+");
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (!reg.test(element)) {
            newArray.push(element);
        }
    }
    return newArray;*/ 
    const reg = new RegExp("[Xx]+");
    return array.filter(name => !reg.test(name));
};
