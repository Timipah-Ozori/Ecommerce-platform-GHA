const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());



app.get('/', (req, res) => {
  res.send('Welcome to the Ecommerce API!');
});


/* -------------------------
   Mock Database
------------------------- */

let products = [
  { id: 1, name: "T-Shirt", price: 20 },
  { id: 2, name: "Sneakers", price: 50 },
  { id: 3, name: "Cap", price: 15 }
];

let users = [
  { id: 1, username: "user1", password: "pass1" },
  { id: 2, username: "user2", password: "pass2" }
];

let cart = []; // shared for simplicity
let orders = [];

/* -------------------------
   PRODUCT ROUTES
------------------------- */

app.get("/products", (req, res) => res.json(products));
app.get("/products/:id", (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
});
app.post("/products", (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) return res.status(400).json({ message: "Name and price required" });

  const newProduct = { id: products.length + 1, name, price };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

/* -------------------------
   CART ROUTES
------------------------- */

app.post("/cart", (req, res) => {
  const { productId, quantity } = req.body;
  const product = products.find(p => p.id == productId);
  if (!product) return res.status(404).json({ message: "Product not found" });

  const existing = cart.find(i => i.productId == productId);
  if (existing) existing.quantity += quantity || 1;
  else cart.push({ productId, name: product.name, price: product.price, quantity: quantity || 1 });

  res.json({ message: "Added to cart", cart });
});

app.get("/cart", (req, res) => {
  const detailedCart = cart.map(item => ({
    ...item,
    total: item.price * item.quantity
  }));
  const totalPrice = detailedCart.reduce((sum, i) => sum + i.total, 0);
  res.json({ items: detailedCart, totalPrice });
});

/* -------------------------
   LOGIN
------------------------- */

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  // return user id as token for simplicity
  res.json({ token: user.id, username: user.username });
});

/* -------------------------
   CHECKOUT
------------------------- */

app.post("/checkout", (req, res) => {
  const { userId } = req.body;
  if (!userId) return res.status(400).json({ message: "User required" });
  if (cart.length === 0) return res.status(400).json({ message: "Cart empty" });

  const order = {
    id: orders.length + 1,
    userId,
    items: [...cart],
    total: cart.reduce((sum, i) => sum + i.price * i.quantity, 0),
    createdAt: new Date()
  };
  orders.push(order);
  cart = []; // clear cart

  res.json({ message: "Checkout successful", order });
});

/* -------------------------
   SERVER
------------------------- */

const PORT = 3000;
if (require.main === module) {
  app.listen(PORT, "0.0.0.0", () => console.log(`Server running on http://localhost:${PORT}`));
}

module.exports = app;

