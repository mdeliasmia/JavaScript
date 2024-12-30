function myFun() {
    //console.log(a, b);
    //arguments building property
    console.log(arguments);
}
//myFun(5, 6);
myFun(5, 6, 7, 8, 9);

//Rest Oparator
/*function myFun1(...xyz) {
    console.log(xyz);
}
myFun1(5, 6, 7, 8, 9, 10, 11, 12);*/

function myFun1(a, b, ...xyz) {
    console.log(a);
    console.log(b);
    console.log(xyz);
}
myFun1(5, 6, 7, 8, 9, 10, 11);
//2nd ...test will not work cz only 1 at last
//function myFun1(a, b, ...xyz, ...test) {}
//myFun1(5, 6, 7, 8, 9, 10, 11);