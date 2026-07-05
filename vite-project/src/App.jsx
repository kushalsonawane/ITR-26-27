import { useState, useEffect } from "react";

const API_BASE = "http://localhost:5000/api";

function App() {
  const [tab, setTab] = useState("home");
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [serverOnline, setServerOnline] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [cart, setCart] = useState([]);

  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userRole, setUserRole] = useState("User");

  const [productId, setProductId] = useState(null);
  const [productTitle, setProductTitle] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productCat, setProductCat] = useState("");
  const [productImg, setProductImg] = useState("");

  const loadDatabase = async () => {
    setLoading(true);
    try {
      const userRes = await fetch(`${API_BASE}/users`);
      if (userRes.ok) {
        setServerOnline(true);
        const userData = await userRes.json();
        setUsers(userData.users || []);
      } else {
        setServerOnline(false);
      }

      const prodRes = await fetch(`${API_BASE}/products`);
      if (prodRes.ok) {
        const prodData = await prodRes.json();
        setProducts(prodData.products || []);
      }
    } catch (err) {
      console.error(err);
      setServerOnline(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDatabase();
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((item, index) => index !== indexToRemove));
  };

  const cartTotal = cart.reduce((acc, item) => acc + (item.price || 0), 0);

  const resetUserForm = () => {
    setUserId(null);
    setUserName("");
    setUserEmail("");
    setUserRole("User");
  };

  const handleUserSubmit = async (e) => {
    e.preventDefault();
    if (!userName || !userEmail) {
      alert("Please fill in Name and Email.");
      return;
    }

    const payload = { name: userName, email: userEmail, role: userRole };

    try {
      const url = userId === null ? `${API_BASE}/users` : `${API_BASE}/users/${userId}`;
      const method = userId === null ? "POST" : "PUT";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        alert(userId === null ? "User created!" : "User updated!");
        resetUserForm();
        loadDatabase();
      } else {
        const err = await res.json();
        alert("Error: " + (err.message || "failed"));
      }
    } catch (err) {
      alert("Network error.");
    }
  };

  const editUser = (user) => {
    setUserId(user.id);
    setUserName(user.name);
    setUserEmail(user.email);
    setUserRole(user.role);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const deleteUser = async (id) => {
    if (!window.confirm("Delete this user?")) return;
    try {
      const res = await fetch(`${API_BASE}/users/${id}`, { method: "DELETE" });
      if (res.ok) {
        alert("User deleted!");
        loadDatabase();
      } else {
        alert("Delete failed.");
      }
    } catch (err) {
      alert("Error.");
    }
  };

  const resetProductForm = () => {
    setProductId(null);
    setProductTitle("");
    setProductPrice("");
    setProductDesc("");
    setProductCat("");
    setProductImg("");
  };

  const handleProductSubmit = async (e) => {
    e.preventDefault();
    if (!productTitle || !productPrice || !productDesc || !productCat || !productImg) {
      alert("Please fill out all product fields.");
      return;
    }

    const payload = {
      title: productTitle,
      price: parseFloat(productPrice),
      description: productDesc,
      category: productCat,
      image: productImg
    };

    try {
      const url = productId === null ? `${API_BASE}/products` : `${API_BASE}/products/${productId}`;
      const method = productId === null ? "POST" : "PUT";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        alert(productId === null ? "Product created!" : "Product updated!");
        resetProductForm();
        loadDatabase();
      } else {
        const err = await res.json();
        alert("Error: " + (err.message || "failed"));
      }
    } catch (err) {
      alert("Network error.");
    }
  };

  const editProduct = (prod) => {
    setProductId(prod.id);
    setProductTitle(prod.title);
    setProductPrice(prod.price.toString());
    setProductDesc(prod.description);
    setProductCat(prod.category);
    setProductImg(prod.image);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const deleteProduct = async (id) => {
    if (!window.confirm("Delete this product?")) return;
    try {
      const res = await fetch(`${API_BASE}/products/${id}`, { method: "DELETE" });
      if (res.ok) {
        alert("Product deleted!");
        loadDatabase();
      } else {
        alert("Delete failed.");
      }
    } catch (err) {
      alert("Error.");
    }
  };

  const filteredProducts = products.filter((prod) => {
    const matchesSearch = prod.title?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = categoryFilter === "all" || prod.category === categoryFilter;
    return matchesSearch && matchesCat;
  });

  const categoriesList = ["all", ...new Set(products.map((p) => p.category))];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px", color: "#333" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #ccc", paddingBottom: "10px", marginBottom: "20px" }}>
        <nav style={{ display: "flex", gap: "15px" }}>
          <button onClick={() => setTab("home")} style={{ border: "none", background: "none", cursor: "pointer", fontSize: "16px", fontWeight: tab === "home" ? "bold" : "normal", color: tab === "home" ? "blue" : "#333" }}>Home</button>
          <span>|</span>
          <button onClick={() => setTab("products")} style={{ border: "none", background: "none", cursor: "pointer", fontSize: "16px", fontWeight: tab === "products" ? "bold" : "normal", color: tab === "products" ? "blue" : "#333" }}>Products</button>
          <span>|</span>
          <button onClick={() => setTab("users")} style={{ border: "none", background: "none", cursor: "pointer", fontSize: "16px", fontWeight: tab === "users" ? "bold" : "normal", color: tab === "users" ? "blue" : "#333" }}>Users (CRUD)</button>
        </nav>

        <span style={{
          padding: "3px 8px",
          borderRadius: "4px",
          fontSize: "12px",
          backgroundColor: serverOnline ? "#d4edda" : "#f8d7da",
          color: serverOnline ? "#155724" : "#721c24",
          border: `1px solid ${serverOnline ? "#c3e6cb" : "#f5c6cb"}`
        }}>
          Server status: {serverOnline ? "Online (Port 5000)" : "Offline"}
        </span>
      </div>

      {loading && <p style={{ fontWeight: "bold" }}>Loading database records...</p>}

      {tab === "home" && (
        <div style={{ padding: "10px" }}>
          <h1>Welcome to My Store...</h1>
          <p>This is Home Page.</p>
          <button onClick={() => setTab("products")} style={{ padding: "10px 15px", backgroundColor: "#007bff", color: "#white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
            View Products
          </button>
        </div>
      )}

      {tab === "products" && (
        <div>
          <h1>🛍 Products Store</h1>

          <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
            <input
              type="text"
              placeholder="Search Product..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ padding: "8px", width: "250px" }}
            />
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              style={{ padding: "8px" }}
            >
              {categoriesList.map((cat) => (
                <option key={cat} value={cat}>
                  {cat.toUpperCase()}
                </option>
              ))}
            </select>
          </div>

          <div style={{ border: "2px solid black", padding: "15px", marginBottom: "25px", backgroundColor: "#fafafa" }}>
            <h2>🛒 Cart ({cart.length})</h2>
            {cart.length === 0 ? (
              <p>No Items Added</p>
            ) : (
              <>
                {cart.map((item, index) => (
                  <div key={index} style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                    <span>{item.title}</span>
                    <div>
                      ₹ {item.price}
                      <button
                        onClick={() => removeFromCart(index)}
                        style={{
                          marginLeft: "10px",
                          backgroundColor: "red",
                          color: "white",
                          border: "none",
                          padding: "3px 8px",
                          cursor: "pointer"
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
                <h3 style={{ borderTop: "1px solid #ccc", paddingTop: "10px", marginTop: "10px" }}>
                  Total: ₹ {cartTotal.toFixed(2)}
                </h3>
              </>
            )}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "2.5fr 1fr", gap: "30px" }}>
            <div>
              <h3>Available Products</h3>
              {filteredProducts.length === 0 ? (
                <p>No products found matching filters.</p>
              ) : (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "20px" }}>
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      style={{
                        border: "1px solid #ccc",
                        padding: "15px",
                        borderRadius: "10px",
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between"
                      }}
                    >
                      <div>
                        <img
                          src={product.image}
                          alt={product.title}
                          style={{
                            width: "120px",
                            height: "120px",
                            objectFit: "contain",
                            marginBottom: "10px"
                          }}
                        />
                        <h4 style={{ margin: "5px 0" }}>{product.title}</h4>
                        <p style={{ fontSize: "12px", color: "#777", margin: "5px 0" }}>
                          <strong>Category:</strong> {product.category}
                        </p>
                        <p style={{ fontSize: "14px", fontWeight: "bold" }}>₹ {product.price}</p>
                      </div>

                      <div style={{ marginTop: "10px", display: "flex", flexDirection: "column", gap: "5px" }}>
                        <button
                          onClick={() => addToCart(product)}
                          style={{
                            backgroundColor: "green",
                            color: "white",
                            border: "none",
                            padding: "8px 10px",
                            cursor: "pointer",
                            borderRadius: "5px"
                          }}
                        >
                          Add To Cart
                        </button>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <button
                            onClick={() => editProduct(product)}
                            style={{ flex: 1, backgroundColor: "#ffc107", border: "none", padding: "5px 0", cursor: "pointer", borderRadius: "3px", fontSize: "12px" }}
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => deleteProduct(product.id)}
                            style={{ flex: 1, backgroundColor: "#dc3545", color: "white", border: "none", padding: "5px 0", cursor: "pointer", borderRadius: "3px", fontSize: "12px" }}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px", backgroundColor: "#f9f9f9", height: "fit-content" }}>
              <h3>{productId !== null ? "Edit Product DB Entry" : "Create New Product"}</h3>
              <form onSubmit={handleProductSubmit}>
                <div style={{ marginBottom: "10px" }}>
                  <label style={{ display: "block", marginBottom: "4px", fontWeight: "bold", fontSize: "13px" }}>Title</label>
                  <input
                    type="text"
                    value={productTitle}
                    onChange={(e) => setProductTitle(e.target.value)}
                    style={{ width: "100%", padding: "6px" }}
                  />
                </div>

                <div style={{ marginBottom: "10px" }}>
                  <label style={{ display: "block", marginBottom: "4px", fontWeight: "bold", fontSize: "13px" }}>Price (₹)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    style={{ width: "100%", padding: "6px" }}
                  />
                </div>

                <div style={{ marginBottom: "10px" }}>
                  <label style={{ display: "block", marginBottom: "4px", fontWeight: "bold", fontSize: "13px" }}>Category</label>
                  <input
                    type="text"
                    value={productCat}
                    onChange={(e) => setProductCat(e.target.value)}
                    style={{ width: "100%", padding: "6px" }}
                  />
                </div>

                <div style={{ marginBottom: "10px" }}>
                  <label style={{ display: "block", marginBottom: "4px", fontWeight: "bold", fontSize: "13px" }}>Image URL</label>
                  <input
                    type="text"
                    value={productImg}
                    onChange={(e) => setProductImg(e.target.value)}
                    style={{ width: "100%", padding: "6px", fontSize: "11px" }}
                  />
                </div>

                <div style={{ marginBottom: "15px" }}>
                  <label style={{ display: "block", marginBottom: "4px", fontWeight: "bold", fontSize: "13px" }}>Description</label>
                  <textarea
                    rows="3"
                    value={productDesc}
                    onChange={(e) => setProductDesc(e.target.value)}
                    style={{ width: "100%", padding: "6px", resize: "none" }}
                  ></textarea>
                </div>

                <div style={{ display: "flex", gap: "10px" }}>
                  <button type="submit" style={{ backgroundColor: "#28a745", color: "white", border: "none", padding: "6px 12px", borderRadius: "4px", cursor: "pointer" }}>
                    Save Entry
                  </button>
                  {productId !== null && (
                    <button type="button" onClick={resetProductForm} style={{ backgroundColor: "#6c757d", color: "white", border: "none", padding: "6px 12px", borderRadius: "4px", cursor: "pointer" }}>
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>

          </div>
        </div>
      )}

      {tab === "users" && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2.5fr", gap: "30px" }}>
          <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px", backgroundColor: "#f9f9f9", height: "fit-content" }}>
            <h3>{userId !== null ? "Edit User Record" : "Add New User"}</h3>
            <form onSubmit={handleUserSubmit}>
              <div style={{ marginBottom: "12px" }}>
                <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. Kushal"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
                />
              </div>

              <div style={{ marginBottom: "12px" }}>
                <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Email Address</label>
                <input
                  type="email"
                  placeholder="kushal@example.com"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
                />
              </div>

              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Role</label>
                <select
                  value={userRole}
                  onChange={(e) => setUserRole(e.target.value)}
                  style={{ width: "100%", padding: "8px" }}
                >
                  <option value="User">User</option>
                  <option value="Editor">Editor</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>

              <div style={{ display: "flex", gap: "10px" }}>
                <button type="submit" style={{ backgroundColor: "#28a745", color: "#fff", padding: "8px 15px", border: "none", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" }}>
                  {userId !== null ? "Update" : "Submit"}
                </button>
                {userId !== null && (
                  <button type="button" onClick={resetUserForm} style={{ backgroundColor: "#6c757d", color: "#fff", padding: "8px 15px", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          <div>
            <h3>Registered Users List</h3>
            {users.length === 0 ? (
              <p>No user records exist in the database table.</p>
            ) : (
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ backgroundColor: "#f2f2f2", borderBottom: "2px solid #ccc" }}>
                    <th style={{ padding: "10px", textAlign: "left", border: "1px solid #ddd" }}>ID</th>
                    <th style={{ padding: "10px", textAlign: "left", border: "1px solid #ddd" }}>Name</th>
                    <th style={{ padding: "10px", textAlign: "left", border: "1px solid #ddd" }}>Email</th>
                    <th style={{ padding: "10px", textAlign: "left", border: "1px solid #ddd" }}>Role</th>
                    <th style={{ padding: "10px", textAlign: "center", border: "1px solid #ddd" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} style={{ borderBottom: "1px solid #ddd" }}>
                      <td style={{ padding: "10px", border: "1px solid #ddd" }}>{user.id}</td>
                      <td style={{ padding: "10px", border: "1px solid #ddd", fontWeight: "bold" }}>{user.name}</td>
                      <td style={{ padding: "10px", border: "1px solid #ddd" }}>{user.email}</td>
                      <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                        <span style={{
                          padding: "2px 6px",
                          borderRadius: "4px",
                          fontSize: "11px",
                          fontWeight: "bold",
                          backgroundColor: user.role === "Admin" ? "#f8d7da" : user.role === "Editor" ? "#fff3cd" : "#e2e3e5",
                          color: user.role === "Admin" ? "#721c24" : user.role === "Editor" ? "#856404" : "#383d41"
                        }}>
                          {user.role}
                        </span>
                      </td>
                      <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>
                        <button onClick={() => editUser(user)} style={{ marginRight: "8px", backgroundColor: "#ffc107", border: "none", padding: "4px 8px", borderRadius: "3px", cursor: "pointer" }}>
                          Edit
                        </button>
                        <button onClick={() => deleteUser(user.id)} style={{ backgroundColor: "#dc3545", color: "white", border: "none", padding: "4px 8px", borderRadius: "3px", cursor: "pointer" }}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      )}

      <div style={{ borderTop: "1px solid #eee", marginTop: "40px", paddingTop: "15px", textAlign: "center", color: "#888", fontSize: "12px" }}>
        © 2026 Student Store Assignment. Full Stack PostgreSQL Database Project.
      </div>
    </div>
  );
}

export default App;