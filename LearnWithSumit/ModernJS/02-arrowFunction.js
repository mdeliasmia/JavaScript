function number() {
    return 10;
}
// ES6 fat arrow function
let arrowNumber = () => {
    return 10;
}
//if body have 1 statement ES6 simplify arrow function
let arrowNumber1 = () => 10;

//ES6 arrow function with parametter
let arrowNumber2 = (n) => n;

// if parametter 1
let arrowNumber3 = n => n;

// multi parameter
let arrowNumber4 = (a, b) => a + b;

// console.log(number());
// console.log(arrowNumber());
// console.log(arrowNumber1());
// console.log(arrowNumber2(20));
// console.log(arrowNumber3(30));
// console.log(arrowNumber4(30, 40));

/*New Obj Concept*/

var javascriptObj ={
    name:'JavaScript',
    libraries:['React', 'Angular', 'Vue'],
    // printLibraries: function(){
    //     //console.log(this);
    //     var self=this;
    //     this.libraries.forEach((a)=>{
    //         //latest version solve this dynamic
    //         //console.log(this);
    //         //console.log(`${this.name} Loves ${a}`);
    //         console.log(`${self.name} Loves ${a}`);
    //     });
    // }
    
    //Arrow function make this dynamic
    printLibraries: function(){
        this.libraries.forEach((a)=>console.log(`${this.name} Loves ${a}`));
    }
}

javascriptObj.printLibraries();
