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

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
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
