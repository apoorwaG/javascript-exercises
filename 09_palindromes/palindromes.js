const palindromes = function (given_string) {
    const punctuations = [',', '.', '!', '?', ';', '\'', '"', " "];
    let punctuationSet = new Set(punctuations);

    // convert the string to an array of characters
    const str_array = given_string.toLowerCase().split("");
    // filter out the punctuations and spaces
    const filtered_array = str_array.filter((character) => {
        return !(punctuationSet.has(character));
    });

    // join the string array
    const array_length = filtered_array.length;
    for(let i = 0; i < array_length/2; i++){
        if(filtered_array[i] !== filtered_array[array_length - 1 - i]) {
            return false;
        }
    }
    return true;
    
};

// Do not edit below this line
module.exports = palindromes;
