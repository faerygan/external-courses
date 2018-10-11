var superObject = {
    typeString: 'super',
    typeNumber: 404,
    typeNull: null,
    typeBool: false,
    typeObject: {a: 1,
                 b: 2,
                 c: {x: 'hello',
                     y: 'world'
                    }
                }
};
var megaObject = {};

var deepCopyObject = function(objCopyFrom, objCopyTo) {
    for (var key in objCopyFrom) {
        if (typeof(objCopyFrom[key]) === 'object') {
            deepCopyObject(key);
        } else {
            objCopyTo[key] = objCopyFrom[key];
        }
    }
}

deepCopyObject(superObject);
