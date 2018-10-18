var childObject = {
    a: 12,
    b: 'git',
    c: 63
}

var parentObject = {};
parentObject = Object.create (childObject);

var prototypeHasProperty = function (myObj, myKey) {
    console.log (myObj.hasOwnProperty(myKey));
}

prototypeHasProperty(parentObject, 'a');
prototypeHasProperty(childObject, 'a');