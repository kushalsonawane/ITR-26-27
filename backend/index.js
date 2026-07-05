const express = require("express");
const morgan = require("morgan");
const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

const db = new Sequelize("test_db", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
  logging: false,
});

const User = db.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: "User",
  },
});

const Product = db.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const server = express();

server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

server.use(morgan("dev"));
server.use(express.json());

server.get("/", (req, res) => {
  res.send("Backend Server is Running!");
});

server.get("/api/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json({
      message: "Users fetched successfully",
      users,
      error: false,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      error: true,
    });
  }
});

server.post("/api/users", async (req, res) => {
  try {
    const { name, email, role } = req.body;
    const newUser = await User.create({ name, email, role });
    res.status(201).json({
      message: "User created successfully",
      user: newUser,
      error: false,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      error: true,
    });
  }
});

server.put("/api/users/:id", async (req, res) => {
  try {
    const { name, email, role } = req.body;
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        error: true,
      });
    }
    await user.update({ name, email, role });
    res.status(200).json({
      message: "User updated successfully",
      user,
      error: false,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      error: true,
    });
  }
});

server.delete("/api/users/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        error: true,
      });
    }
    await user.destroy();
    res.status(200).json({
      message: "User deleted successfully",
      error: false,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      error: true,
    });
  }
});

server.get("/api/products", async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json({
      message: "Products fetched successfully",
      products,
      error: false,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      error: true,
    });
  }
});

server.post("/api/products", async (req, res) => {
  try {
    const { title, price, description, category, image } = req.body;
    const newProduct = await Product.create({ title, price, description, category, image });
    res.status(201).json({
      message: "Product created successfully",
      product: newProduct,
      error: false,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      error: true,
    });
  }
});

server.put("/api/products/:id", async (req, res) => {
  try {
    const { title, price, description, category, image } = req.body;
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
        error: true,
      });
    }
    await product.update({ title, price, description, category, image });
    res.status(200).json({
      message: "Product updated successfully",
      product,
      error: false,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      error: true,
    });
  }
});

server.delete("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
        error: true,
      });
    }
    await product.destroy();
    res.status(200).json({
      message: "Product deleted successfully",
      error: false,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      error: true,
    });
  }
});

const startServer = async () => {
  try {
    await db.authenticate();
    console.log("PostgreSQL Database connected successfully!");

    await db.sync({ force: true });
    console.log("Database models synchronized.");

    const userCount = await User.count();
    if (userCount === 0) {
      await User.bulkCreate([
        { name: "Kushal", email: "kushal@example.com", role: "Admin" },
        { name: "Jane Smith", email: "jane@example.com", role: "User" },
      ]);
      console.log("Seeded default users.");
    }

    const productCount = await Product.count();
    if (productCount === 0) {
      await Product.bulkCreate([
        {
          title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          price: 109.95,
          description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your daily",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
        },
        {
          title: "Mens Casual Premium Slim Fit T-Shirts",
          price: 22.3,
          description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
        },
        {
          title: "Mens Cotton Jacket",
          price: 55.99,
          description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors.",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
        },
        {
          title: "Mens Casual Slim Fit",
          price: 15.99,
          description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
        }
      ]);
      console.log("Seeded default products.");
    }

    server.listen(5000, () => {
      console.log("Express server is running on port 5000");
    });
  } catch (err) {
    console.error("Unable to start server:", err);
  }
};

startServer();