# Day 9: Primitive vs Reference Values

### Objective
Learn values referencing patterns in JavaScript stack/heap memory models.

### Key Learnings
- **Stack vs Heap**: Primitives copied by value; arrays/objects referenced by address.
- **Array Copying**: Cloned lists using the ES6 spread operator to keep arrays separate.

### Code Practice
```javascript
const original = [1, 2, 3];
const copied = [...original];
copied.push(4); // original remains [1, 2, 3]
```
