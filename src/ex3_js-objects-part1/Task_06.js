var superObject = {
    typeString: 'super',
    typeNumber: 404,
    typeNull: null,
    typeBool: false,
    typeObject: {a: 1, b: 2, c: 3}
};
var deepCopyObject = function(objName) {
    var megaObject = {};
    for (var key in objName) {
        if (typeof(key) === 'object') {
            deepCopyObject(key);
        } else {
            megaObject[key] = objName[key];
        }
    }
    console.log (megaObject);
}

deepCopyObject(superObject);
