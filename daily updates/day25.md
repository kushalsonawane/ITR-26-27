# Day 25: React & Vite Architecture

### Objective
Initialize React application templates using Vite and understand components.

### Key Learnings
- **Vite Setup**: Setup quick dev pipelines using npx create-vite.
- **Component Structures**: Created simple JS components returning UI elements.
- **DOM Injection**: Understood index.html root anchor points.

### Code Practice
```javascript
// main.jsx entry point
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```
