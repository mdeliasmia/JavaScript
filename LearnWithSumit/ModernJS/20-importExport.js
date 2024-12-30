//Create package.json

//Named import
/*
import { pi, a } from './import-export1.js';
console.log(pi, a);
import { pi as varPI, a as varA } from './import-export1.js';
console.log(varPI, varA);
*/

//All import(alias)
/*
import * as test from './import-export1.js';
console.log(test);
console.log(test.pi);
*/

//Default import
/*
import external, { pi } from './import-export1.js';
console.log(external, pi);
*/

//Function import
/*
import { myFunc as show } from './import-export1.js';
console.log(show());
*/

//Default Function import
import external, { myFunc as show } from './import-export1.js';
console.log(show());
console.log(external());
