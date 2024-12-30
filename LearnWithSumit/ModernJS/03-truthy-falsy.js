//var myVar=true;//I am truthy
//var myVar='test';//I am truthy
var myVar = '';//I am Falsy
/* false/0/-0/0n/''/undefined/null/NaN */


if (myVar) {
    console.log("I am truthy");
} else {
    console.log("I am Falsy");
}