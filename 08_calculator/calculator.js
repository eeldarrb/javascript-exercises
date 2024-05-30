const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((a,b) => a+=b,0);
};

const multiply = function(arr) {
  return arr.reduce((total,current) => total*current);
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
  if (a == 0) return 1;
  let arr = [];
  for (i = 0; i < a; i++) {
    arr[i] = i+1;
  }
	return multiply(arr);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
