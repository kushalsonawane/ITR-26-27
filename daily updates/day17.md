# Day 17: DOM Event Handling & Async Scripts

### Objective
Add user interaction triggers to DOM elements and optimize page rendering speeds.

### Key Learnings
- **DOM Events**: Captured button clicks, text input updates, and form submissions.
- **Async/Defer**: Explored load timing differences between standard, async, and defer attributes on script tags.
- **Form Interception**: Used preventDefault to stop default page reloads.

### Code Practice
```javascript
const searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Stop page reload
  
  const searchInput = document.querySelector("#query-input").value;
  console.log("Searching for: " + searchInput);
});
```

### Exercises Completed
1. Built an interactive search filter that hides elements based on keywords.
2. Intercepted form submit, validated inputs, and triggered alert dialogs.
