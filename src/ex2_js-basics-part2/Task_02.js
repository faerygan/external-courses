var customArray = [54, 'null', 12, '54', 'js', true, true];
var i = 0;
var arrLength = function (customArray) {
    for (i = 0; i < customArray.length; ++i) {
        console.log ('Element', i+1, ':', customArray[i]);
    }
    console.log ('Total:', customArray.length, 'elements.');
}
arrLength (customArray);