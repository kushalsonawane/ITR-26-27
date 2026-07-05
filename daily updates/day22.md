# Day 22: PostgreSQL Installation & Database Basics

### Objective
Configure local PostgreSQL database server databases and table schemas.

### Key Learnings
- **Relational Databases**: Learned about primary keys, table rows, attributes, and indexes.
- **pgAdmin4**: Connected to the postgres server and queried fields.
- **SQL Queries**: Wrote queries to insert, select, update, and delete entries.

### Code Practice
```sql
-- Creating Users database table
CREATE TABLE "Users" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(255) NOT NULL,
  "email" VARCHAR(255) UNIQUE NOT NULL,
  "role" VARCHAR(50) DEFAULT 'User'
);
```
