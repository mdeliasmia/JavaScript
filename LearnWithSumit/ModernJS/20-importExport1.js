//Named Export
export const pi = 3.14;
export const a = 2.9;

//Default Export only one can't multiple
const b = 3.9;
//export default b;//cant declart let/const

//Function Export
export function myFunc(){
    return "This is From Function Export";
}

//Default Export Function only one can't multiple
export default function myFunc1(){
    return "This is From Default Function Export";
}