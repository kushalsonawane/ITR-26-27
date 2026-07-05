# Day 18: Vanilla JS Shopping Cart Logic

### Objective
Develop cart arrays, add items, compute pricing, and manage local cart state changes.

### Key Learnings
- **Cart Array**: Managed list additions using array push and spread syntax.
- **State Removal**: Filtered cart item arrays to remove items based on index.
- **Mathematical Updates**: Computed totals and formats using standard mathematical functions.

### Code Practice
```javascript
let cart = [];

function addToCart(product) {
  cart = [...cart, product];
  updateCartDisplay();
}

function removeFromCart(index) {
  cart = cart.filter((item, idx) => idx !== index);
  updateCartDisplay();
}
```
