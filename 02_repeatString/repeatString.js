const repeatString = function(word, repetitions) {
    if (repetitions < 0) {
        return "ERROR"
    }
    let finalWord = ""
    for (i = 0; i < repetitions; i++) {
        finalWord += word
    }
    return finalWord
};

// Do not edit below this line
module.exports = repeatString;
