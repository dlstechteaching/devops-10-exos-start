module.exports = function (array) {
    if (array.length === 0) return "Table empty";
    const newArray = [];
    array.forEach(name => {
        if(name.indexOf('X') === -1){
            newArray.push(name);
        }
    });

    return newArray;
};
