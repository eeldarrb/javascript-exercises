const sumAll = function (intA, intB) {
  if (typeof intA != "number" || typeof intB != "number" || (intA || intB) < 0) return "ERROR";
  let sum = 0;
  let larger = intA;
  let smaller = intB;

  if (intB > intA) {
    larger = intB;
    smaller = intA;
  }
  for (let i = smaller; i <= larger; i++) sum += i;
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
