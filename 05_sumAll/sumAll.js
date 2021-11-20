const sumAll = function(num1, num2) {

    let sum = 0;

    if(num1 < 0 || num2 < 0) return "ERROR";
    if(typeof num1 != "number" || typeof num2 != "number") return "ERROR";

    let temp;
    if(num1 > num2){
        temp = num2;
        num2 = num1;
        num1 = temp;
    }
    
    if(num1 === num2) {
        return num1;
    }

    for(let i = num1; i <= num2; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;