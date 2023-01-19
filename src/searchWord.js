module.exports = (tab) => {
    if (tab.length === 0) return tab;
    console.log(` bebebe ${tab}`);
    tab.forEach((element) => {
        if (element.include("x")) {
            tab.splice(element, 1);
        }
    });
    return tab;
};
