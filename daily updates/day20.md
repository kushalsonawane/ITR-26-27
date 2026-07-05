# Day 20: Node.js & npm Core Concepts

### Objective
Initialize backend environments, configure packages, and run Node processes.

### Key Learnings
- **Package Management**: Set up packages configurations via package.json.
- **NPM Scripts**: Created shortcut keys for starting servers.
- **Module Runtimes**: Used CommonJS module require statements to load dependencies.

### Code Practice
```json
{
  "name": "backend",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.19.2"
  }
}
```
