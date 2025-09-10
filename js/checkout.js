document.getElementById("checkout-form")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputs = this.querySelectorAll("input");
  let valid = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) valid = false;
  });

  if (!valid) {
    alert("Please complete all fields.");
    return;
  }

  alert("Order placed successfully!");
  window.location.href = "index.html";
});
