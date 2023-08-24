const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((sum, current) => sum + current, 0);
};

const multiply = function(arr) {
  if(arr.length === 0) {
    return 0;
  } else {
    return arr.reduce((sum, current) => sum * current, 1);
  }
};

const power = function(num, power) {
	let total = num;
  for(let i=1; i<power; i++) {
    total *= num;
  } 
  return total;
};

const factorial = function(num) {
  let total = 1;
	for(let i=2; i<=num; i++) {
    total *= i;
  }
  return total;
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
