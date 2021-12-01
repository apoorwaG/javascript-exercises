const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(numArray) {
  let runningTotal = 0;
  for(let i = 0; i < numArray.length; i++){
    runningTotal += numArray[i];
  }
  return runningTotal;
};

const multiply = function(numArray) {
  let multiplicationTotal = 1;
  for(let i = 0; i < numArray.length; i++){
    multiplicationTotal *= numArray[i];
  }
  return multiplicationTotal;
};

const power = function(number, power) {
  return number ** power;
};

const factorial = function(number) {
	if(number == 0) return 1;

  return number * factorial(number-1);
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
