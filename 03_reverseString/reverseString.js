const reverseString = function(string) {
    const stringChars = [];
    let reversedString = ""
    for (i = 0; i < string.length; i++) {
        stringChars[i] = string[i];
    }
    for (i = string.length-1; i >= 0; i--) {
        reversedString += stringChars[i]
    }
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
