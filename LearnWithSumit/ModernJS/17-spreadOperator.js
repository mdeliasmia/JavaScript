var numbers = [1, 2, 3];

console.log("Befor Spread  Operator =");
console.log(numbers);
//var newNumbers = [numbers[0], numbers[1], numbers[2], 4, 5, 6]

//Spread  Operator
var newNumbers = [...numbers, 4, 5, 6]
/*console.log("After Spread  Operator =");
console.log(newNumbers);*/

var a=numbers;//Referance of numbers Array
var a1=[...numbers];//Exact copy of numbers

numbers.push(9);

/*console.log("Referance of numbers Array a =");
console.log(a);
console.log("Exact copy of numbers a1 =");
console.log(a1);
console.log("Original numbers Array =");
console.log(numbers);*/


//Spread  Operator Array
var numbers1 = [1, 2, 3];
var numbers2 = [4, 5, 6];

var numbers3= [...numbers1,...numbers2];

/*console.log("After Concatation:");
console.log(numbers3);
numbers3.push(11);
console.log("After Concatation Push:");
console.log(numbers3);
console.log("Original numbers1 Array =");
console.log(numbers1);*/

//Spread  Operator Object

var myObj1={
    x:1,
    y:2
}
var myObj2={
    a:1,
    b:2
}

var newMyObj={
    ...myObj1,
    ...myObj2
}
console.log(newMyObj);