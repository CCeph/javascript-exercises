const findTheOldest = function(mainArray) {
    let peopleArray = JSON.parse(JSON.stringify(mainArray));
    let oldest = peopleArray.reduce((oldestPerson, person) => {
        if (!("yearOfDeath" in person)) {
            person.age = (new Date().getFullYear()) - person.yearOfBirth;
        } else {
            person.age = person.yearOfDeath - person.yearOfBirth;
        }
        if (person.age > (oldestPerson.age)) {
            oldestPerson = person
        }
    
    return oldestPerson
    }, oldestPerson = {
        age: 0
    })
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
