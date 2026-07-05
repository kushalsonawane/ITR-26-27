# Day 4: Advanced Layouts - Flexbox & Grid

### Objective
Build multi-column grid layouts and align element boxes using CSS Flexbox and Grid.

### Key Learnings
- **Flexbox**: Used display: flex, justify-content (center, space-between), and align-items to center elements.
- **Grid Layout**: Worked with grid-template-columns, gap distances, and fractional grid tracks (fr).
- **Responsive Layout**: Designed layout cards that collapse cleanly on smaller screen resolutions.

### Code Practice
```css
/* Flex container */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: #333;
  color: white;
}

/* Grid container */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
}
```

### Exercises Completed
1. Built a navigation bar with logos on the left and menus on the right.
2. Built a responsive shop grid where items align dynamically as screen width scales.
