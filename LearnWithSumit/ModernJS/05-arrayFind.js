var arrayNum = [1, 2, 3, 4, 5, 6, 10];

//when find element it will break and return value
var result = arrayNum.find(function (currentValue, index, arr) {
    return currentValue > 4;
}, this);

console.log(result);
//It will not change main array
console.log(arrayNum);

//sln of this
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    test() {
        console.log("Hello");
    }
    exampleFunction() {
        let array = [1, 2, 3, 4, 5];
        //Here this error
        /*array.find(function() {
            this.test();
        });*/

        //Here this sln
        /*array.find(function() {
            this.test();
        },this);*/

        //Sln of all Arrow function
        array.find(() => {
            this.test();
        });
    }
}
let student = new Student("Atik", 33);
student.exampleFunction();