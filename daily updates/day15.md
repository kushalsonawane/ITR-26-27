# Day 15: Sets, Maps & Optional Chaining

### Objective
Understand modern collections (Sets and Maps) and safe property resolution operators.

### Key Learnings
- **Sets**: Learned that Sets are unique value arrays. Used them to find product category lists.
- **Maps**: Explored hashing key-value maps.
- **Optional Chaining**: Safely read nested user properties using `?.` keys.

### Code Practice
```javascript
// Category extraction using Set
const rawCategories = ["men's clothing", "electronics", "men's clothing"];
const uniqueCategories = [...new Set(rawCategories)];

// Optional chaining
const user = { name: "Kushal", address: null };
console.log(user?.address?.city); // undefined (does not throw error)
```

### Exercises Completed
1. Extracted categories list from seeded products.
2. Verified optional fields in user data profiles.
