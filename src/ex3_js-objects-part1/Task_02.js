var superObject = {
    typeString: 'super',
    typeNumber: 404,
    typeNull: null,
    typeBool: false
};
var objectKeys = function(obj) {
    for (var key in obj) {
        console.log (key, ' = ', obj[key]);
    }
}

objectKeys(superObject);