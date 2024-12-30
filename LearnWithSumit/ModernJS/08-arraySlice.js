var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//=======index[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//======index[-10,-9,-8,-7,-6,-5,-4,-3,-2,-1]
var result = numbers.slice();//default 0
var result1 = numbers.slice(-7, 4);//return [4]

console.log(result);
console.log(result1);
console.log(numbers);