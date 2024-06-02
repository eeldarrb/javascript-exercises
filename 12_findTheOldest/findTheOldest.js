const findTheOldest = function (people) {
  people.map((person) => {
    if ("yearOfDeath" in person == false)
      person["yearOfDeath"] = new Date().getFullYear();
  });
  people.sort((a, b) => {
    aAge = a.yearOfDeath - a.yearOfBirth;
    bAge = b.yearOfDeath - b.yearOfBirth;
    return bAge - aAge;
  });
  return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
