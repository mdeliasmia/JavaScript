//1=>Object Destructuring
/*
var user = {
    id: 123,
    name: "Elias",
    age: 35,
    education: {
        degree: "Bachelor of Sciences"
    }
}
//Bring out name from obj and assign for use other place
// var name=user.name;
// console.log(name);

//Destructuring
const { name } = user;
const { name: title } = user;//Alias Title
console.log(name);
console.log(title);
//Nested Obj
const { education: { degree: edu } } = user;
console.log(edu);

//if Obj not found empty obj
const { skill: { degree: programing } = {} } = user;
console.log(programing);//undefined
*/


//2=>Array Destructuring
/*
var numbers = [1, 2, 3, 4, 5, [100, 200, 300], 6];

var [a, b] = numbers;
console.log(a, b);

//Skip 1st element
var [, x, , y] = numbers;
console.log(x, y);

//Nested Array
var [, , , , , [, i, j]] = numbers;
console.log(i, j);
*/

//Swaping
/*
var a=1;
var b=2;
console.log(a,b);
var temp=a;
a=b;
b=temp;
console.log(a,b);
*/

//3=>Swaping using Destructuring
var a=1;
var b=2;
console.log(a,b);
[b,a]=[a,b];
console.log(a,b);
