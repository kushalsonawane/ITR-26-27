# Day 12: Nested Array & Object Destructuring

### Objective
Parse nested data arrays and unpack JSON payload structures.

### Key Learnings
- **Nested Objects**: Navigated sub-documents.
- **Deep Destructuring**: Extracted items from array structures.

### Code Practice
```javascript
const data = { users: [{ id: 1, name: "Kushal" }] };
const { users: [{ name }] } = data;
console.log(name); // "Kushal"
```
