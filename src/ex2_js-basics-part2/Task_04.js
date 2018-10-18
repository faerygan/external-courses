var customArray = [54, 'null', 12, '54', 'js', false, true];
var i = 0;
var j = 0;
var result = false;
var duplicates = function (customArray) {
    for (i = 0; i < customArray.length; ++i) {
            for (j = i + 1; j < customArray.length; ++j) {
            if (customArray[i] === customArray[j]) {
                result = true;
            }
        }
    }
    console.log (result);
}

duplicates (customArray);