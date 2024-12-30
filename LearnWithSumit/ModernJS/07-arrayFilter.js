var numbers = [1, 2, 3, 4, 5, 65, 6, 7, 8, 9, 10];


var result=numbers.filter((currentValue, index, arr)=>{
    console.log("Array Index ="+index);
    console.log("Array value ="+arr[index]);
    return currentValue>4;
});

console.log(result);
console.log(numbers);