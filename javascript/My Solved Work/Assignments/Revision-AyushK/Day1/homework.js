const actors = [
  {
    firstName: "Salman",
    lastName: "Khan",
    gender: "Male",
    age: 58,
  },
  {
    firstName: "Ranbir",
    lastName: "Kapoor",
    gender: "Male",
    age: 40,
  },
  {
    firstName: "Shahid",
    lastName: "Kapoor",
    gender: "Male",
    age: 40,
  },
  {
    firstName: "Katrina",
    lastName: "Kaif",
    gender: "Female",
    age: 40,
  },
  {
    firstName: "Kareena",
    lastName: "Kapoor",
    gender: "Female",
    age: 44,
  },
];

// 1. Print Names of those actors who are above 44
actors.forEach((actor) => {
  if (actor.age > 44) {
    console.log(`Actor above 44: ${actor.firstName} ${actor.lastName}`);
  }
});

// 2. Find Sum of age of those actors who are female using Reduce
const sumOfFemaleAges = actors.reduce((sum, actor) => {
  if (actor.gender === "Female") {
    return sum + actor.age;
  }
  return sum;
}, 0);
console.log("Sum of female ages:", sumOfFemaleAges);

// 3. Print Names of those actors who are male
actors.forEach((actor) => {
  if (actor.gender === "Male") {
    console.log(`Male actor: ${actor.firstName} ${actor.lastName}`);
  }
});
