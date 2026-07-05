# Day 2: HTML Basics & Structuring Web Content

### Objective
Learn HTML5 markup syntax, page structures, form configurations, and semantic tagging.

### Key Learnings
- **Document Structure**: Explored standard boilerplate templates, meta viewports, head parameters, and standard rendering bodies.
- **Semantic Elements**: Covered the purpose of header, nav, main, section, article, aside, and footer tags.
- **Input Forms**: Practiced building text inputs, password fields, email containers, select dropdowns, textareas, and submission controls.

### Code Practice
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Practice Form</title>
</head>
<body>
  <header>
    <h1>User Signup Form</h1>
  </header>
  <main>
    <form action="/submit" method="POST">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required />
      
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />
      
      <button type="submit">Submit Details</button>
    </form>
  </main>
</body>
</html>
```

### Exercises Completed
1. Created an registration page form using tags like inputs, labels, selects, and textareas.
2. Built a multi-page site layout linked via relative navbar menus.
