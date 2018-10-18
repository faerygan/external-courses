var fCalc = {
    add: function(a) {
        fCalc.current = fCalc.current + a;
        return (fCalc.current);
    },
    subtract: function(a) {
        fCalc.current = fCalc.current - a;
        return (fCalc.current);
    },
    multiply: function(a) {
        fCalc.current = fCalc.current * a;
        return (fCalc.current);
    },
    divide: function(a) {
        fCalc.current = fCalc.current / a;
        return (fCalc.current);
    },
    getResult: function () {
        return (fCalc.current);
    },
    reset: function () {
        fCalc.current = 0;
        return (0);
    },
    current: 0
}

console.log(fCalc.reset()); //0
console.log(fCalc.add(4)); //4
console.log(fCalc.subtract(2)); //2
console.log(fCalc.multiply(6)); //12
console.log(fCalc.divide(4)); //3
console.log(fCalc.getResult()); //3
console.log(fCalc.reset()); //0