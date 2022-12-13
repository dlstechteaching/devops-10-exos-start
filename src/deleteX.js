module.exports = (tab) => {
    return tab.filter(e=> !e.toLowerCase().includes('x'));
};
