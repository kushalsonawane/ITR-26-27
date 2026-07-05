# Days 6-12: Complete JavaScript Core Programming Course

### Objective
Learn foundational and intermediate programming patterns in JavaScript (Variables, Loops, Arrays, and Objects).

---

## Day 6: Variables & String Methods
*   Studied declaration keywords: `let` vs `const` vs `var`.
*   Explored standard string index methods and operators: `.slice()`, `.toUpperCase()`, `.trim()`.

```javascript
const title = "   Fjallraven - Foldsack No. 1 Backpack   ";
const cleanTitle = title.trim();
console.log(cleanTitle.slice(0, 10)); // "Fjallraven"
```

---

## Day 7: Conditionals & Loops
*   Wrote basic conditional controls using `if-else` ladders.
*   Practiced iteration tasks using `for` and `while` loops.

```javascript
for (let i = 1; i <= 5; i++) {
  console.log("Iteration " + i);
}
```

---

## Day 8: Introduction to Arrays
*   Created array objects and manipulated them using stack/queue methods.
*   Learned mutations: `push()`, `pop()`, `shift()`, and `unshift()`.

```javascript
const cart = ["backpack", "shirt"];
cart.push("jacket");
const lastItem = cart.pop(); // "jacket"
```

---

## Day 9: Primitive vs Reference Data Types
*   Studied memory allocation: Primitives stored on Stack (copied by value), Objects/Arrays on Heap (copied by reference).
*   Learned array cloning strategies using the spread operator (`[...arr]`).

```javascript
const original = [1, 2, 3];
const clone = [...original];
clone.push(4);
console.log(original); // [1, 2, 3] (unaffected)
```

---

## Day 10: Objects & Bracket Notation
*   Created dictionary maps and key-value attributes.
*   Accessed properties dynamically using bracket syntax.

```javascript
const item = { title: "Backpack", price: 109.95 };
const key = "price";
console.log(item[key]); // 109.95
```

---

## Day 11: Object Spread & Destructuring
*   Used the spread operator on object attributes.
*   Extracted fields cleanly into variables using ES6 object destructuring.

```javascript
const user = { name: "Kushal", email: "kushal@example.com", role: "Admin" };
const { name, role } = user;
console.log(name, role); // "Kushal" "Admin"
```

---

## Day 12: Nested Array & Object Destructuring
*   Destructured deeply nested JSON payloads.
*   Practiced parsing response data schemas.

```javascript
const response = {
  status: 200,
  users: [{ id: 1, name: "Kushal" }]
};
const { users: [{ name: userName }] } = response;
console.log(userName); // "Kushal"
```
