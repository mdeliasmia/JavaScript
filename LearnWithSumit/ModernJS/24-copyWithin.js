const arr = ["JavaScript", "PHP", "Phython", "Ruby", "C++", "RUST"];
/*========[  position 0,pos 1,postion 2, pos 3, pos4, pos 5 ]=*/
/*========[  position-6,pos-5,postion-4, pos-3,pos-2, pos-1 ]=*/
var cpy = arr.copyWithin(4, 0, 4)//(Target(required),Start(default 0),End(default array.length))
console.log(arr);//Chnage Main Array
console.log(cpy);//length will unchange