var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//when find element it will break and return value
var result = numbers.findIndex((currentValue, index, arr) => {
    return currentValue > 20;
    // if return -1, valu not found
});

console.log(result);