# Day 14: Array Iterators & Methods

### Objective
Learn ES6 functional array utilities like map, filter, reduce, sort, and find.

### Key Learnings
- **Map & Filter**: Transformed arrays into new array shapes and filtered based on search conditions.
- **Reduce**: Calculated cumulative results (e.g. Shopping Cart totals).
- **Sort**: Sorted product arrays alphabetically or by price.

### Code Practice
```javascript
const items = [
  { name: "Shirt", price: 20 },
  { name: "Jacket", price: 50 },
  { name: "Cap", price: 10 }
];

// Filtering cheap items
const cheap = items.filter(x => x.price < 30);

// Calculating cart total
const total = items.reduce((sum, item) => sum + item.price, 0);

console.log(total); // 80
```

### Exercises Completed
1. Wrote item filter codes based on custom categories.
2. Sorted a list of users by their IDs.
