# Day 21: Express.js Local Server Setup

### Objective
Establish local HTTP endpoints, set middleware pipelines, and manage JSON payloads.

### Key Learnings
- **Express Server**: Set port listener configurations.
- **Middleware**: Used express.json() to parse incoming JSON bodies.
- **CORS Setup**: Allowed client origins to fetch from backend servers.

### Code Practice
```javascript
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server status: online");
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
```
