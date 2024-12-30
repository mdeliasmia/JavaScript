function myLog(print) {
    return console.log(print);
}

//let myArray=[];//Literal Syntex
/*
let myArray = new Array();//Constructor Syntex
myArray[0]=5;
myLog(myArray);
*/

//Set Must use Constructor Syntex
/*
let mySet = new Set();
// mySet.add(5);
// mySet.add("Bangladesh");
mySet.add(5).add("Bangladesh").add("java").add("HTML").delete("java");
myLog(mySet);
mySet.delete('Bangladesh')
myLog(mySet);
myLog(mySet.has('Bangladesh'));
myLog(mySet.size);
*/

//Set From Array
/*
let myArr=[1,2,3];
let mySetArr=new Set(myArr);//pass any itterable
myLog(mySetArr);
let mySetArr1=new Set("Bangladesh");
myLog(mySetArr1);
for(let val of mySetArr1){
    myLog(val);
}

//let mySetArr2=new Set({a:"Bangladesh"});//Error
//myLog(mySetArr2);
//Set methods and Array Methos are different
*/

//Array From Set
/*
let myArr1=[1,2,3];
let myArrSet=new Set(myArr1);

myLog(myArrSet);
var ar=[...myArrSet];//best
myLog(ar);
myLog(Array.from(myArrSet));
*/

//Set Usecase
/*
let myArray=[1,2,3];
let myArraySet=new Set(myArray);
//myArraySet.add(3);//Uniq 3 will not add
myArraySet.add(4);
myArraySet.add({
    a:5,
    b:2
});
//both obj not same ref
myArraySet.add({
    a:5,
    b:2
});
var obj={
    a:5,
    b:2
}
myArraySet.add(obj);
myArraySet.add(obj);//obj same instant
myLog(myArraySet);
*/

//Get Uniq array
/*
let mA=[10,1,2,3,1,4,5,2,7,8,9,10];
myLog([...new Set(mA)]);
*/

//Set Union
let a = new Set([1, 2, 3, 4]);
let b = new Set([4, 2, 3, 5]);

/*
let union = new Set([...a, ...b])
myLog("The UNION of a[] b[] =")
myLog(union);

myLog("Original Array =");
myLog(a);
myLog(b);
*/

//Set intersection
/*
let intersection = new Set([...a].filter(x =>b.has(x)))
myLog("The intersection of a[] b[] =")
myLog(intersection);
*/

//Set  difference
/*
let difference=new Set([...a].filter(x=>!b.has(x)));
myLog("The difference of a[] b[] =");
myLog(difference);
*/

//WeakSet must add Array/Obj
//Follow index.html for output data
/*
const ws = new WeakSet();
ws.add({ a: 10 });
console.log(ws);
const ws1 = new WeakSet();
ws1.add([{ a: 1 }, { a: "Hi" }, { a: 3 }]);
console.log(ws1);
*/

//WeakSet Uses
const ws2 = new WeakSet();

class SomeClass {
    constructor() {
        ws2.add(this)
    }
    method() {
        if (!ws2.has(this)) {
            throw new Error(`You Can't this method directly!`);
        } else {
            return "I am Method";
        }
    }
}

const z = new SomeClass();
myLog(z.method());
//myLog(SomeClass.prototype.method());