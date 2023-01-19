module.exports = function (names) {
    const updateNames = [];
    names.forEach(name => {
        if(name.toLowerCase().indexOf('x') === -1){
            updateNames.push(name);
        }
    });
    return updateNames;
};
