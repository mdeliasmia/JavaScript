/*
window.setTimeout(()=>console.log("Hello"),1000);// for window object
global.setTimeout(()=>console.log("Hello"),1000);// for node backend
*/
var setGlobal = function () {
    if (typeof window !== 'undefined') {
        return window;
    }
    if (typeof global !== 'undefined') {
        return global;
    }
    throw new Error('inable to local global object');
}
console.log("ES11-Featured-1 globalThis Obj setTimeout(1000)=");
var myGlobal = setGlobal();
myGlobal.setTimeout(() => console.log("Without globalThis "), 1000);

//1-Feture From ES11 we can use globalThis obj for dynamic
globalThis.setTimeout(() => console.log("With globalThis"), 1000);

//2-Feture From ES11 we can use BigInt constructor
console.log("ES11-Featured-2 BigInt() =");

let largestNumber = Number.MAX_SAFE_INTEGER;
console.log(largestNumber);
largestNumber += 1;
console.log(largestNumber);
largestNumber += 1;
console.log(largestNumber);
largestNumber = BigInt(largestNumber) + 1n;
console.log("After BigInt");
console.log(largestNumber);
/*
10n=10;//true
10n===10;//false
*/

//3-Feture From ES11 Optional Changing ?
console.log("ES11-Featured-3 Optional Changing ? =");
const language = {
    name: 'JavaScript',
    creator: 'Brendan Eich',
    library: {
        react: {
            company: 'Facebook'
        }
    }
};

let company = language.library.react.company;
console.log(company);
/*
let company1=language.library.vue.company;
console.log(company1);//error sln below
*/
let company2 = language?.library?.vue?.company;
console.log(company2);

//4-Feture From ES11 Nulish Coalescing Operator
console.log("ES11-Featured-4 Nulish =");
let lang;
console.log(lang ?? 'JavaScript');//lang=undefined

//5-Feture From ES11 Dynamic Imput
//console.log("ES11-Featured-5 Dynamic Imput =");
//Traditional way
/*import('./25-utils.js')
    .then(({ add, remove }) => {
        add();
        remove();
    });*/
/*
(async function () {
const { add } = await import('./25-utils.js');
const { remove } = await import('./25-utils.js');
add();
remove();
})();
*/

//6-Feture From ES11 promise.allSettled()
/*
console.log("ES11-Featured-6 promise.allSettled() =");

const promise1 = new Promise(resolve => resolve('Burger'));
const promise2 = new Promise(reject => reject('Apple'));
const promise3 = new Promise(resolve => resolve('Pizza'));
*/
/*
Promise.all([promise1,promise2,promise3])
    .then(response=>console.log(response))
    .catch(error=>console.log(error));
    */
   /*
Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response))
    .catch(error => console.log(error));
*/


//7-Feture From ES11 String.prototype.matchAll() show on browser
console.log("ES11-Featured-6 String.prototype.matchAll() =");

const text = 'My favorite color are #FFFFFF and #000000';
const regex = /#?(?<group1>[\da-fA-F]{2})(?<group2>[\da-fA-F]{2})(?<group3>[\da-fA-F]{2})/g;
const matchesAll = text.matchAll(regex);
for (let match of matchesAll) {
    console.log(match);
}
