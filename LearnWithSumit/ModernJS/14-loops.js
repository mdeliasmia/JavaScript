//for loop
/*for(let i=0;i<=5;i++){
    console.log(i);
}*/
/*let i=0;
for(;i<=5;i++){
    console.log(i);
}*/
/*let i=0;
for(;;i++){
    if(i<=5){
        console.log(i);
    }else{
        break;
    }
}*/

//for in loop for Object
/*
const myObj={
    name:"javaScript",
    estd:'1995',
    founder:'Brenda Eich'
}
for(property in myObj){
    console.log(property);
}
*/

//for of loop for Ittarable=Array/String/Object
const myArray=[1,2,3,4,5];
const myString="I Love BD";
for(property of myString){
    console.log(property);
}