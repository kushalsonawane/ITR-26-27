// Boolean datatype
let isloggedin=true;
if(isloggedin)
{
    console.log("welcome user");
}
else{
    console.log("Please login");
}

// null dataype

let age=null;
 console.log(age);


//undefined dataype
 let name;
 console.log(name);

 //type of operators
  let num=10;
  let str="Akshara";
  let flag=true;

  console.log(typeof num);
  console.log(typeof str);
  console.log(typeof flag);

  //string concatenation
  let first_name="Akshara";
  let last_name=" soni";

  let full_name= first_name+last_name;

  console.log(full_name);

  //template string
  let name1="akshara";
  let age1=18;

  console.log(`my name is ${name1} and my age is ${age1}`);

  //slice method
  let course="Computer Technology";

  console.log(course.slice(1,5)); //1 se 5 index tak ke letters dikhayega
  console.log(course.slice(7));    //7 and 7 ke agge ke letters dikhayega

  //uppercase
  let subject="javascript";
  console.log(subject.toUpperCase());