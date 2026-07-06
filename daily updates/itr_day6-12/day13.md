# Day 13: JavaScript Functions & Scopes

### Objective
Understand function declarations, scopes, closures, hoisting, and arrow functions.

### Key Learnings
- **Hoisting**: Wrote functions and checked how JavaScript resolves declarations during initialization.
- **Scopes**: Explored the difference between block scopes (let/const) and function scopes (var).
- **ES6 Arrow Functions**: Shortened code blocks using inline returns.

### Code Practice
```javascript
// Standard declaration
function getGreeting(name) {
  return "Hello " + name;
}

// Arrow function (implicit return)
const add = (a, b) => a + b;

console.log(add(10, 5)); // 15
```

### Exercises Completed
1. Built functions calculating total sums of products list.
2. Tested scope variable shadow effects.
