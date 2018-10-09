var superObject = {
    typeString: 'super',
    typeNumber: 404,
    typeNull: null,
    typeBool: false
};
var generateObjectKeys = function(keyName, objName) {
    if (!(keyName in objName)) {
        objName[keyName] = 'new';
    }
    console.log (objName);
}

generateObjectKeys('typeBool', superObject);
generateObjectKeys('typeVar', superObject);