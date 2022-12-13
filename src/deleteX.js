module.exports = (tab) => {
    const updateTab=[];
    tab.forEach(nom => {
        if(!nom.includes("X")){
            updateTab.push(nom);
        }
    });
    return updateTab;
};
