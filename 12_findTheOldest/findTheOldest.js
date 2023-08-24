const findTheOldest = function (people) {
    if (people.length >= 1) {
        let currOldest = [];
        let currAge = 0;
        for (person in people) {
            let yearDifference = 2023;
            if("yearOfDeath" in people[person]) {
                yearDifference = people[person].yearOfDeath;
            }
            let newAge = yearDifference - people[person].yearOfBirth;
            if(currAge < newAge) {
                currOldest = people[person];
                currAge = newAge;
            }
        }
        return currOldest;
    }
};

// Do not edit below this line
module.exports = findTheOldest;
