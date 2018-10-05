var customArray = [54, 33, 12, 55, 1, 0, 9, 0, 5];
var i = 0;
var champion;
var maxElem = function (customArray) {
    champion = customArray[0];
    for (i = 1; i < customArray.length; ++i) {
        if (customArray[i] > champion) {
            champion = customArray[i];
        } 
    }
    console.log ('Max number is', champion);
}
maxElem (customArray);