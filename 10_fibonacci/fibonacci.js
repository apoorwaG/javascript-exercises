const fibonacci = function(number) {
    // if number is not a numeric string, or number is negative, halt
    if(!(+number) || +number < 0) return "OOPS";

    number = +number;

    if(number == 1 || number == 2) return 1;

    const series = [1, 1]
    for(let i = 2; i < number; i++){
        const nextInSequence = series.reduce((previous, current) => {
            return previous + current;
        });
        series[0] = series[1];
        series[1] = nextInSequence;
    }
    return series[1];
};

// Do not edit below this line
module.exports = fibonacci;
