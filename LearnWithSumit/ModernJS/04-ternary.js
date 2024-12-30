var age = 3;

var type;

if (age > 18) {
    type = "Adult";
} else {
    type = "Child";
}

// ternary operation
var type1 = (age > 18) ? "Audlt" : "Child";

// nested ternary operation
var type2 = (age > 18) ? "Audlt"
    : (age < 10) ? "Child" : "Young";

console.log(type2);

var a = 5;

var access = a > 5 ? true : false;
console.log(access);

//short form
var access1 = a > 5 ;
console.log(access1);