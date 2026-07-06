# Day 5: CSS Transitions & Micro-Animations

### Objective
Learn CSS animations, hover transitions, and transform operations to enhance visual feedback.

### Key Learnings
- **Transitions**: Used transition properties on opacity, color, and background to smooth hover actions.
- **Transforms**: Scale, translate, and rotate elements on user interaction states.
- **Keyframes**: Created simple keyframe-based loading spinners.

### Code Practice
```css
.btn-submit {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn-submit:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}
```

### Exercises Completed
1. Developed micro-animations for card hovers.
2. Formatted a rotating CSS loading icon.
