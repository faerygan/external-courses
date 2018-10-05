var customArray = [54, 33, 12, 54, 1, 0, 9, 0, 5];
var results = [0, 0, 0];
var i = 0;
var evenOrOdd = function (customArray) {
    for (i = 0; i < customArray.length; ++i) {
        if (customArray[i] === 0) {
            ++results[0];
        } else if (customArray[i] % 2 === 0) {
            ++results[1];
        } else if (customArray[i] % 2 === 1) {
            ++results[2];
        } 
    }
    console.log ('So, we have', results[1], 'evens,', results[2], 'odds and', results[0], 'zeros!');
}
evenOrOdd (customArray);
