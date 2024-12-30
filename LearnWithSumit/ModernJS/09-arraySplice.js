var numbers = [1, 2, 3, 4, 5];
//=======index[0, 1, 2, 3, 4]
//==== ===index[-5,-4,-3,-2,-1]
console.log(numbers);

//var result = numbers.splice(1, 2, 10, 12, 13, 19);
var result1 = numbers.splice(-1, 2, 10, 12, 13, 19);

// console.log(result);
// //Change main Array
// console.log(numbers);

console.log(result1);
//Change main Array
console.log(numbers);