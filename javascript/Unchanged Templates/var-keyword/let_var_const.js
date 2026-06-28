
var fn = "Asmita";
// Can store information and declare variable.

fn="Siddesh";
// Can change existing value.

var fn1 ="Mohit"; 
// can be declared with same variable and overwrite value.

console.log(fn1);

// ################ let keyword ##################

// #1 . declare variable with let keyword.

let fn2= "Sachin"; 
// Can store information and declare variable.

fn2 = "rohit"; 
// Can change existing value.

//  let first_Name ="Siddhi"; 
// (Already has been Declared error)
// Cannot redeclare same variable.
console.log(fn2);

// ################ const keyword ##################

// #3 . declare constants
// whose values cannot be changed.

const pi = 3.14;
console.log(pi);
// Can store information and declare constant.


const pi1 = 3.14;
pi1 = 3.15; 
// cannot change the value of constant variable .
console.log(pi);


// block scope vs Function Scope 