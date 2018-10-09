var i;
var inputNumber = 41;
var primeFound = true;
var isPrime = function (inputNumber) {
    if (inputNumber < 1000) {
        for (i = 2; i <= Math.sqrt(inputNumber); ++i) {
            if (inputNumber % i === 0) {
                primeFound = false;
            }
        }
        if (primeFound) {
            console.log (inputNumber, 'is prime number.');
        } else {
            console.log (inputNumber, 'is not prime number.');
        }
    } else {
        console.log ('Your number is very big, try less than 1000.');
    }
}
isPrime (inputNumber);