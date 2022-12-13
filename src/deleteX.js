module.exports = (tab) => {
    console.log('t');
    return tab.filter(e=> !e.toLowerCase().includes('x'));

};
