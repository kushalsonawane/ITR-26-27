# Day 23: Sequelize ORM Config & Models

### Objective
Connect Node.js backends to PostgreSQL using Sequelize ORM schemas.

### Key Learnings
- **Sequelize Config**: Passed database credentials (test_db, postgres, root).
- **Data Modeling**: Defined User and Product model schemas.
- **Sync Options**: Dropped and created models using sync force command keys.

### Code Practice
```javascript
const { Sequelize, DataTypes } = require("sequelize");

const db = new Sequelize("test_db", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
  logging: false,
});

const User = db.define("User", {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true }
});
```
