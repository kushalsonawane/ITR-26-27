# Day 11: Object Spread & Destructuring

### Objective
Clone object parameters and destructure attributes directly.

### Key Learnings
- **Object Spread**: Merged key-value pairs.
- **Destructuring**: Extracted parameters into local variables.

### Code Practice
```javascript
const config = { database: "test_db", port: 5432 };
const { database, port } = config;
console.log(database, port); // "test_db", 5432
```
