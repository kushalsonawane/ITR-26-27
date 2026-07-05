# Day 16: DOM Selectors & Element Queries

### Objective
Access and manipulate HTML nodes dynamically using JavaScript DOM methods.

### Key Learnings
- **Selector Queries**: Learned how to grab items using querySelector and querySelectorAll.
- **Attributes**: Updated attributes (src, href) and style objects from JavaScript.
- **Interactive UI**: Switched style display visibility states on event calls.

### Code Practice
```javascript
const heading = document.querySelector("#main-title");
heading.textContent = "Products Catalog";
heading.style.color = "blue";

const buttons = document.querySelectorAll(".btn-delete");
buttons.forEach(btn => {
  btn.style.backgroundColor = "red";
});
```

### Exercises Completed
1. Built a basic list table where rows dynamically change background colors.
2. Read inputs value inputs from form fields.
