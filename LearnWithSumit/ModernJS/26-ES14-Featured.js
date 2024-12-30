/*
const arr = [1, 2, 3, 4, 5, 6];
const reverseArray = arr.reverse();
console.log("ReverseArray Array =");
console.log(reverseArray);//main array Change
console.log("Original Array =");
console.log(arr);
*/

//1=> 2023 ES-14 new featured toReversed
/*const arry = [10, 20, 30, 40, 50, 60];
const toReversed = arry.toReversed()
console.log("2023 ES-14 new featured toReversed Array =");
console.log(toReversed);
console.log("Original Array =");
console.log(arry);
*/


/*
const arrS = [100, 200, 300, 400, 500, 600];
//===========[0  ,   1,    2,   3,   4,  5]
//===========[-6 ,  -5,   -4,  -3,  -2, -1]
//(start,remvEl,multiElm)
const spliceArray = arrS.splice(2,1,900,1000)
console.log("spliceArray Array =");
console.log(spliceArray);
console.log("Original Array =");
console.log(arrS);//Change main Arr
*/

//2=> 2023 ES-14 new featured toSpliced
/*
const arrS = [100, 200, 300, 400, 500, 600];
//===========[0  ,   1,    2,   3,   4,  5]
//===========[-6 ,  -5,   -4,  -3,  -2, -1]
//(start,remvEl,multiElm)
const toSpliceArray = arrS.toSpliced(2,1,900,1000)
console.log(" 2023 ES-14 new featured toSpliced() Array =");
console.log(toSpliceArray);
console.log("Original Array =");
console.log(arrS);
*/


//3=> 2023 ES-14 new featured With
/*
const arrW = [100, 200, 300, 400, 500, 600];
const result = arrW.with(1,400);
console.log(" 2023 ES-14 new featured With() Array =");
console.log(result);
console.log("Original Array =");
console.log(arrW);
*/

//Sort() alfhabetically
/*
const arrSrt = [16, 2, 11, 4, 5, 23];
//const arrSrt = [6, 2, 1, 4, 5, 3];
const sortedArr = arrSrt.sort();
console.log("Sort() alfhabetically Array =");
console.log(sortedArr);
console.log("Original Array =");
console.log(arrSrt);//Change main Arr
*/

//Sort()
const cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 },
];
//sort by Year
// const resl = cars.sort((a, b) => {
//     return a.year - b.year;
// });
//console.log('sort by Year');
//console.log(resl);

//sort by type alfhabetically
/*
const resl1 = cars.sort((a, b) => {
    const x = a.type.toLowerCase();
    const y = b.type.toLowerCase();
    if (x < y) {
        return -1;
    } else if (x > y) {
        return 1;
    } else {
        return 0;
    }
});
console.log("sort by type alfhabetically");
console.log(resl1);
console.log("Original Array =");
console.log(cars);
*/

////4=> 2023 ES-14 new featured toSorted()
const resl1 = cars.toSorted((a, b) => {
    const x = a.type.toLowerCase();
    const y = b.type.toLowerCase();
    if (x < y) {
        return -1;
    } else if (x > y) {
        return 1;
    } else {
        return 0;
    }
});
console.log("toSorted by type alfhabetically");
console.log(resl1);
console.log("Original Array =");
console.log(cars);