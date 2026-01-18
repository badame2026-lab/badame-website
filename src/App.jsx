{/* Floating Cart */}
<div className="floating-cart" onClick={() => setOpen(true)}>🛒</div>

{/* Floating WhatsApp */}
<a
  href="https://wa.me/919XXXXXXXXX"
  target="_blank"
  className="floating-wa"
>
  💬
</a>

{/* Cart Popup */}
{open && (
  <div className="cart-popup">
    <span className="close" onClick={() => setOpen(false)}>✖</span>
    <h3>Your Order</h3>

    {cart.map((item, i) => (
      <p key={i}>{item.name} – ₹{item.price}</p>
    ))}

    <button onClick={orderWhatsApp}>Order on WhatsApp</button>
  </div>
)}

{/* Floating Cart */}
<div className="floating-cart" onClick={() => setOpen(true)}>🛒</div>

{/* Floating WhatsApp */}
<a
  href="https://wa.me/919XXXXXXXXX"
  target="_blank"
  className="floating-wa"
>
  💬
</a>

{/* Cart Popup */}
{open && (
  <div className="cart-popup">
    <span className="close" onClick={() => setOpen(false)}>✖</span>
    <h3>Your Order</h3>

    {cart.map((item, i) => (
      <p key={i}>{item.name} – ₹{item.price}</p>
    ))}

    <button onClick={orderWhatsApp}>Order on WhatsApp</button>
  </div>
)}
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);
const addItem = (name, price) => {
  setCart([...cart, { name, price }]);
};

const orderWhatsApp = () => {
  let msg = "Order from Badamé:%0A";
  cart.forEach(i => {
    msg += `${i.name} - ₹${i.price}%0A`;
  });
  window.open("https://wa.me/919100330272?text=" + msg);
};
onClick={() => addItem("Badam Milk 200ml", 30)}
onClick={() => addItem("Badam Milk 500ml", 70)}

import "./App.css";
