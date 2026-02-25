import { useState, useEffect } from "react";
import axios from "axios";

const API = "http://localhost:3000";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Load products
  const loadProducts = async () => {
    const res = await axios.get(`${API}/products`);
    setProducts(res.data);
  };

  // Add to cart
  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(i => i.productId === product.id);
      if (exists) {
        return prev.map(i =>
          i.productId === product.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { productId: product.id, quantity: 1, name: product.name, price: product.price }];
    });
  };

  // Place order
  const placeOrder = async () => {
    if (!user) return alert("Login first");
    try {
      const res = await axios.post(`${API}/orders`, { userId: user.token });
      alert(`Order placed! Total: $${res.data.total}`);
      setCart([]);
    } catch (err) {
      alert(err.response?.data?.message || "Error placing order");
    }
  };

  // Login
  const login = async () => {
    try {
      const res = await axios.post(`${API}/login`, { username, password });
      setUser(res.data);
      alert(`Welcome, ${res.data.username}`);
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Simple E-commerce</h1>

      {!user && (
        <div>
          <h2>Login</h2>
          <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
          <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <button onClick={login}>Login</button>
        </div>
      )}

      <h2>Products</h2>
      {products.map(p => (
        <div key={p.id}>
          {p.name} - ${p.price} 
          <button onClick={() => addToCart(p)}>Add to Cart</button>
        </div>
      ))}

      <h2>Cart</h2>
      {cart.map((i, idx) => (
        <div key={idx}>{i.name} x {i.quantity} = ${i.quantity * i.price}</div>
      ))}
      {cart.length > 0 && <button onClick={placeOrder}>Place Order</button>}
    </div>
  );
}

export default App;

