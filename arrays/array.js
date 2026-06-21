// let fruits=["Apple","Mango","Chiku"];

// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);


//array methods
let names =["Akshara","Shrikant","Kavita","Dhruv"];

names.push("Stuti");
console.log(names);

names.pop();
console.log(names);

names.unshift("Bhavika");
console.log(names);

names.shift();
console.log(names);

//array destructing
let emp=["rahul","manager","50000"];
 let [name,post,salary]=emp;

 console.log(name);
 console.log(post);
 console.log(salary);

 //clone array
 let arr1=[1,2,3,4,5];
 let arr2=[...arr1];

 console.log(arr1);
 console.log(arr2);