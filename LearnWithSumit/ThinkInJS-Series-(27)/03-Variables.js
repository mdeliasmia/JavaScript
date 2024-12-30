/*
When to Use var, let, or const?
1. Always declare variables
2. Always use const if the value should not be changed
3. Always use const if the type should not be changed (Arrays and Objects)
4. Only use let if you can't use const
5. Only use var if you MUST support old browsers.
*/

//Var can Scope(no) Redeclare(Yes), Reassign(Yes), Hoisted(Yes), Binds-this(Yes)
var x = 10;
// Here x is 10
{
var x = 2;
// Here x is 2
}
// Here x is 2
console.log("Var x="+x);


//Let can Scope(Yes) Redeclare(no), Reassign(Yes), Hoisted(no), Binds-this(no)
let y = 10;
// Here y is 10
{
let y = 2;
// Here y is 2
console.log("Inside Block Scope Let y="+y);
}
// Here y is 10
console.log("Let y="+y);


//Const can Scope(Yes) Redeclare(no), Reassign(no), Hoisted(no), Binds-this(no)
// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};
// You can change a property:
car.color = "red";
// You can add a property:
car.owner = "Johnson";
//car = {type:"Volvo", model:"EX60", color:"red"};    
// ERROR Cause you can NOT reassign the object:
console.log(car);