


function removeNameWithLetter(names){
    const tableToReturn = [];
    for (let i  = 0; i  < names.length; i++) {
        if(!names[i].includes('x') && !names[i].includes('X') ){
            tableToReturn.push(names[i]);
        }
    }
    return tableToReturn;
}




exports.removeNameWithLetter = removeNameWithLetter;
