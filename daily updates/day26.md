# Day 26: React Hooks - useState & useEffect

### Objective
Perform state modifications, handle render effects, and call remote API endpoints.

### Key Learnings
- **useState**: Managed inputs text states and active page tab states.
- **useEffect**: Triggered backend fetches on initial render mount cycles.
- **Async API Fetch**: Set users list using fetch response streams.

### Code Practice
```javascript
import { useState, useEffect } from "react";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then(res => res.json())
      .then(data => setUsers(data.users || []));
  }, []);

  return (
    <ul>
      {users.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}
```
