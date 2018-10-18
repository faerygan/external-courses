var noPrototype = function () {
    var orphanObject = Object.create (null);
    return orphanObject;
}

var orphan = noPrototype();
console.log (orphan);