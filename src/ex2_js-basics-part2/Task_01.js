var numOrStr;
var checkType = function (numOrStr) {
    if ( typeof (numOrStr) === 'string') {
        console.log ('You gave me a string!');
    } else if ( typeof (numOrStr) === 'number') {
        console.log ('You gave me a number!');
    } else console.log ('Ugh, it`s undefined!');
}
checkType (null);