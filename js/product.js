const addToCartButtons = document.querySelectorAll(".btn");

addToCartButtons.forEach(button => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    const productName = this.closest(".product-card")?.querySelector("h3")?.textContent;
    alert(`${productName} added to cart!`);
    window.location.href = "cart.html";
  });
});
