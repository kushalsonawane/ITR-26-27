# Day 24: Express & Sequelize CRUD API

### Objective
Develop server endpoints to run database insert, read, update, and delete actions.

### Key Learnings
- **Sequelize Queries**: Used User.findAll(), User.create(), User.update(), User.destroy().
- **Restful Endpoints**: Used HTTP POST to save, GET to read, PUT to update, and DELETE to destroy.

### Code Practice
```javascript
// Fetch all users route
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json({ message: "Fetched!", users, error: false });
  } catch (err) {
    res.status(500).json({ message: err.message, error: true });
  }
});
```
