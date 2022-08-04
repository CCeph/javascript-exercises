const removeFromArray = function(list, removedItem) {
    for (i = 0; i < list.length; i++) {
        if (list[i] === removedItem) {
            list.splice(i,1);
        }
    }
    return list
    }

// Do not edit below this line
module.exports = removeFromArray;
