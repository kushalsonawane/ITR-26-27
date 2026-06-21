function greet(name)
{
    console.log(name + " is a good girl");
}
let name="Akshara";
let name1="Bhavika";
let name2="Stuti";
let name3="Mishty";

greet(name);
greet(name1);
greet(name2);
greet(name3);


//return function
function sum(a,b)
{
    let c=a+b;
    return c;
}

let returnval= sum(10,5);
console.log(returnval);

//default function
function welcome(name="guest")
{
    console.log( "welcome "+ name);
}
welcome();
welcome("Akshara");

//arrow function
const greet1 = (name) => {
    return "Hello " + name;
};

console.log(greet1("Akshara"));

//function inside function
function outer() {

    function inner() {
        console.log("Inner Function");
    }

    inner();
}

outer();

//hoisting
sayHello();

function sayHello() {
    console.log("Function Hoisting");
}
