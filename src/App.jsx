<!-- Floating Cart -->
<div id="floating-cart" onclick="toggleCart()">🛒</div>

<!-- Floating WhatsApp -->
<a href="https://wa.me/919100330272" target="_blank" id="floating-wa">💬</a>

<!-- Cart Popup -->
<div id="cart-popup">
  <span class="close" onclick="toggleCart()">✖</span>
  <h3>Your Order</h3>
  <div id="cart-items"></div>
  <button onclick="orderWhatsApp()">Order on WhatsApp</button>
</div>
<style>
#floating-wa {
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

#floating-cart {
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

#cart-popup {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
  padding: 15px;
  box-shadow: 0 -5px 20px rgba(0,0,0,0.2);
  display: none;
  z-index: 10000;
}

#cart-popup button {
  width: 100%;
  padding: 12px;
  background: #25D366;
  color: #fff;
  border: none;
  font-size: 16px;
}

.close {
  position: absolute;
  right: 15px;
  top: 10px;
  cursor: pointer;
}
</style>
<script>
let cart = [];

function addItem(name, price) {
  cart.push({ name, price });
  alert("Added to cart");
}

function toggleCart() {
  let popup = document.getElementById("cart-popup");
  popup.style.display = popup.style.display === "block" ? "none" : "block";
  renderCart();
}

function renderCart() {
  let box = document.getElementById("cart-items");
  let total = 0;
  box.innerHTML = "";

  cart.forEach(item => {
    total += item.price;
    box.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
  });

  box.innerHTML += `<strong>Total: ₹${total}</strong>`;
}

function orderWhatsApp() {
  let msg = "Order from Badamé:%0A";
  cart.forEach(i => msg += `${i.name} - ₹${i.price}%0A`);
  window.open("https://wa.me/919XXXXXXXXX?text=" + msg);
}
</script>
