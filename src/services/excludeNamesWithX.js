module.exports = function (names) {
    const updateNames = [];
    names.forEach(name => {
        if(name.indexOf('X') === -1){
            updateNames.push(name);
        }
    });
    return updateNames;
};
