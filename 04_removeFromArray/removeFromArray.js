const removeFromArray = function(list, ...args) {
    //The first for loop will loop the list to check it against every item in arguments.
    for (i = 0; i < list.length; i++) {
        //This nested for loop will go through each element in the args array to check it against the current item from the list.
        for (j = 0; j < args.length; j++) {
            if (list[i] === args[j]) {
                list.splice(i,1);
                //Subtract 1 from the counter because 1 element was removed from the array.
                i--
                break
            }
        }
    }
    return list
}

// Do not edit below this line
module.exports = removeFromArray;
