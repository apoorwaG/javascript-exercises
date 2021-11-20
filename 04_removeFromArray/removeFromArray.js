const removeFromArray = function() {

    // args is an array of arguments
    // first element is the array, following elements are the items to remove
    let args = Array.from(arguments);
    let mainArray = args[0];

    // go through the items to remove from the args array
    for(let i = 1; i < args.length; i++){
        let indexToRemove = mainArray.indexOf(args[i]);
        // only remove an item if it exists in the array
        if(indexToRemove != -1){
            mainArray.splice(indexToRemove, 1);
        }

    }

    return mainArray;


};

// Do not edit below this line
module.exports = removeFromArray;
