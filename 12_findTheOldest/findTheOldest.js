const findTheOldest = function(people) {

    // use reduce to go over the people array one by one
    // pass an optional argument -inf to the reduce function
    // if this person's death year - birth year is > current largest argument,
    // this person lived the longest

    const oldest = people.reduce((previousOldest, thisPerson) => {
        let previousAge;
        let currentAge;

        const currentYear = new Date().getFullYear();
        if("yearOfDeath" in previousOldest){
            previousAge = previousOldest.yearOfDeath - previousOldest.yearOfBirth;
        } else {
            // person still living
            previousAge = currentYear - previousOldest.yearOfBirth;
        }
        if("yearOfDeath" in thisPerson){
            currentAge = thisPerson.yearOfDeath - thisPerson.yearOfBirth;
        } else {
            // person still living
            currentAge = currentYear - thisPerson.yearOfBirth;
        }
        if(currentAge > previousAge){
            return thisPerson;
        }
        return previousOldest;
    });

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
