const cartItems = [
  { name: "Classic Tee", price: 35 },
  { name: "Slim Fit Jeans", price: 60 }
];

const cartContainer = document.querySelector(".cart-items");

if (cartContainer) {
  cartItems.forEach(item => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `<strong>${item.name}</strong> - ${item.price}$`;
    div.style.color = "#fff"
    cartContainer.appendChild(div);
  });
}
