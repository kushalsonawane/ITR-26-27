//if-else

let age = 18;

if (age >= 18) {
    console.log("eligible candidate");

}
else {
    console.log("not eligible");
}

//and or operators
let username = "admin";
let password = "12345";

if (username == "admin" && password == "12345") {
    console.log("login successful");

}
else {
    console.log("inavlid");

}

//switch statements
let month=4;
switch(month)
{
    case 1:
    console.log("January");
    break;

    case 2:
    console.log("February");
    break;

    case 3:
    console.log("march");
    break;

    case 4:
    console.log("april");
    break;

    default:
        console.log("invalid month");
}

//ternary operator

let number = 15;

let result = (number % 2 === 0) ? "Even" : "Odd";

console.log(result);

//while loop
let num = 10;

while (num >= 1) {
    console.log(num);
    num--;
}