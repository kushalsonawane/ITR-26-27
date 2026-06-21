let student={
    name:"akshara", age:18, course:"diploma"
};
console.log(student);

console.log(student.age);
console.log(student["name"]);

//computed_properties
let key="email"

let user=
{
   name1:"akshara",
   [key]:"aksharasoni112@gmail.com"
};
console.log(user);

//iterate_objects(works as loop)

let emp= {
    empid:101,
    empname:"akshara",
    empsal:"10000000",
};
for( let key in emp)
{
    console.log(key,":",emp[key]);
}

//object destructing

let color={
    color1:"red",
    color2:"black",
    color3:"pink"
};
let {color1,color2,color3}=color;
console.log(color1);
console.log(color2);
console.log(color3);

//object inside array
let parent=[
        {nameS:"shrikant",age:54},
        {nameS:"Kavita", age:52}
];
console.log(parent[0].nameS);
console.log(parent[1].age);

//spread operator

let obj1={
     name:"akshara", age:18
    };
let obj2={
    ...obj1, city:"nashik"
};
 console.log(obj2);