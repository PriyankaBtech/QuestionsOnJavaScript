/**

05. Declare a variable using let inside a block scope and attempt to log its value to the
console before it is assigned a value to demonstrate the temporal dead zone.

*/

{
    console.log(x); // ReferenceError: Cannot access 'x' before initialization

    let x = 10;

    console.log(x); // 10
}