//Step:1
/*
var num1 = 2;
//var num2 = 3;

var sum = function () {
    var num2 = 3;//Scope Closure (sum)
    return function(){
        return num1 + num2;
    }
}
//console.dir(sum);
var myFunc=sum();
console.dir(myFunc);
*/

//Step:2
/*
function bankAccount(initialBalance) {
    var balance = initialBalance;
    return function () {
        return balance;
    };
}
var account = bankAccount(100000);

console.log(account());
//console.log(balance);//Uncaught ReferenceError: balance is not defined
console.dir(account);
*/

//Step:3
/*
(function(){
    var num11=2;
    var num12=3;

    var sum= function(){
        return num11+num12;
    }
    console.log(sum());
    console.dir(sum);

    num11=6;
    num12=7;

    console.log(sum());
    console.dir(sum);
})();
*/
//Stop watch
/*
function stopWatch(){
    var startTime=Date.now();

    function getDelay(){
        console.log(Date.now()-startTime)
    }
    return getDelay;
}

var timer=stopWatch();

for(var i=0; i<10000000; i++){
    var a=Math.random*1000000;
}
timer();
timer();
console.dir(timer);
timer=null;
//timer();//Uncaught TypeError: timer is not a function
console.dir(timer);
*/

//Asynchronous Closures
/*
var a;
function asyn() {
    a = 20;
    var myFunc=()=>{
        console.log(a);
    }

    setTimeout(myFunc, 3000);
    
    console.dir(myFunc);
}
asyn();
console.dir(asyn);
a=30;
console.dir(asyn);
*/

//AJAX Closures
/*
function apiFunc(url) {
    fetch(url)
        .then((res) => {
            console.log(res);
        })
}
//https://jsonplaceholder.typicode.com/
apiFunc('https://jsonplaceholder.typicode.com/todos/1');
*/
/*
console.log("After For loop");
for(var i=0; i<3; i++){
    const myFunc=()=>{
        console.log(i);
    }
    console.log(i);
    console.dir(myFunc);
    setTimeout(myFunc,2000);
}
console.log("After For loop");
*/
for(let i=0; i<3; i++){
    const myFunc=()=>{
        console.log(i);
    }
    console.log(i);
    console.dir(myFunc);
    setTimeout(myFunc,2000);
}
