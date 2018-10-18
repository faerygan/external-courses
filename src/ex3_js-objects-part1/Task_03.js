var superObject = {
    typeString: 'super',
    typeNumber: 404,
    typeNull: null,
    typeBool: false
};
var objectKeys = function(keyName, objName) {
    console.log (keyName in objName);
}

objectKeys('typeBool', superObject);
objectKeys('typeVar', superObject);