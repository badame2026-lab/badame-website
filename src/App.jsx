<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Store</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
  <h2>My Online Store</h2>
  <a href="cart.html" class="cart-link">🛒 Cart</a>
</header>

<section class="products">

  <div class="product">
    <img src="images/item1.jpg">
    <h3>Product 1</h3>
    <p>₹100</p>
    <button onclick="addToCart('Product 1',100)">Add to Cart</button>
  </div>

  <div class="product">
    <img src="images/item2.jpg">
    <h3>Product 2</h3>
    <p>₹150</p>
    <button onclick="addToCart('Product 2',150)">Add to Cart</button>
  </div>

</section>

<!-- WhatsApp Floating Button -->
<a href="https://wa.me/919100330272" class="whatsapp" target="_blank">💬</a>

<script src="script.js"></script>
</body>
</html>

  <!DOCTYPE html>
<html>
<head>
  <title>Your Cart</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<h2>Your Cart</h2>
<div id="cartItems"></div>

<button onclick="orderWhatsApp()" class="order-btn">
  Order on WhatsApp
</button>

<script src="script.js"></script>
</body>
</html>

  body {
  font-family: Arial;
  margin: 0;
  background: #f5f5f5;
}

header {
  background: #222;
  color: white;
  padding: 15px;
  display: flex;
  justify-content: space-between;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
  gap: 20px;
  padding: 20px;
}

.product {
  background: white;
  padding: 15px;
  text-align: center;
  border-radius: 8px;
}

.product img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

button {
  padding: 10px;
  background: green;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/* WhatsApp Button */
.whatsapp {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 60px;
  height: 60px;
  background: #25D366;
  color: white;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  text-decoration: none;
  z-index: 999;
}

.order-btn {
  margin: 20px;
  width: 90%;
  font-size: 18px;
}

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}

function loadCart() {
  let div = document.getElementById("cartItems");
  if (!div) return;

  let total = 0;
  div.innerHTML = "";

  cart.forEach(item => {
    total += item.price;
    div.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
  });

  div.innerHTML += `<h3>Total: ₹${total}</h3>`;
}

function orderWhatsApp() {
  let msg = "My Order:%0A";
  cart.forEach(i => msg += `${i.name} - ₹${i.price}%0A`);
  window.open("https://wa.me/919XXXXXXXXX?text=" + msg);
}

loadCart();

