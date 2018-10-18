var superObject = {};

superObject.typeString = 'super';
superObject.typeNumber = 404;
superObject.typeNull = null;
superObject.typeBool = false;

delete superObject.typeNull;
console.log (superObject);