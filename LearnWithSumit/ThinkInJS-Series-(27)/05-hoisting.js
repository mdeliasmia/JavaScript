/*
Hoisting is JavaScript's default behavior of moving declarations to the top.
Using a let variable before it is declared will result in a ReferenceError.
Using a const variable before it is declared, is a syntax error, so the code will simply not run.
*/

// let a;
// console.log(a);
// a="Bangladesh";
// console.log(a);

var LANGUAGE = 'Java';
var language = 'JavaScript';

function getLanguage() {
    if (!language) {
        var language = LANGUAGE;
    }
    return language;
}

console.log(`I love ${getLanguage()}`);
