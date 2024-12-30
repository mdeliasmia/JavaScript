const searchInput = document.querySelector(".search");
const display = document.querySelector(".result");
const thanks = document.querySelector(".thanks");
const thanks1 = document.querySelector(".thanks1");

/* Normal function that Not work perfectly */
function show() {
    display.innerHTML = `You are typing : ${this.value}`;
    setTimeout(function() {
        // here this is undefine
        thanks.innerHTML = `You have typed: ${this.value}`;
    }, 1000);
}
/* Arrow function that work perfectly */
function show1() {
    display.innerHTML = `You are typing : ${this.value}`;
    setTimeout(()=> {
        thanks1.innerHTML = `With Arrow typed: ${this.value}`;
    }, 1000);
}

searchInput.addEventListener("keyup", show);
searchInput.addEventListener("keyup", show1);

//new keyword in fat function

var Person = (name) => {
    this.name = name;
}

//Can't use new keyword
/* var sakib=new Person("Sakib"); */
