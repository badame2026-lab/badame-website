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
.floating-wa {
  position: fixed;
  right: 18px;
  bottom: 18px;
  width: 58px;
  height: 58px;
  background: #25D366;
  color: #fff;
  font-size: 26px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  z-index: 9999;
}

.floating-cart {
  position: fixed;
  right: 18px;
  bottom: 90px;
  width: 58px;
  height: 58px;
  background: #000;
  color: #fff;
  font-size: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 9999;
}

.cart-popup {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
  padding: 15px;
  box-shadow: 0 -5px 20px rgba(0,0,0,0.2);
  z-index: 10000;
}
import "./App.css";
