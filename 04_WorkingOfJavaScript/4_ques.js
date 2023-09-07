/**

04. Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign
them values and log their values to the console before and after they are declared to demonstrate variable
hoisting.

*/

console.log(x); // undefined
console.log(y); // ReferenceError: Cannot access 'y' before initialization
console.log(z); // ReferenceError: Cannot access 'z' before initialization

var x = "Hello";
let y = "World";
const z = "!";

console.log(x); // Hello
console.log(y); // World
console.log(z); // '!'


