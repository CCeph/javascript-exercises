const removeFromArray = function(list, ...args) {
    newArray = []
    list.forEach(listItem => {
        if (!args.includes(listItem)) {
            newArray.push(listItem)
        }
    });
    return newArray
}

// Do not edit below this line
module.exports = removeFromArray;
