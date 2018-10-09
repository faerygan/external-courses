var superObject = {
    typeString: 'super',
    typeNumber: 404,
    typeNull: null,
    typeBool: false
};
var copyObject = function(objName) {
    var megaObject = {};
    for (var key in objName) {
        megaObject[key] = objName[key];
    }
    console.log (megaObject);
}

copyObject(superObject);
