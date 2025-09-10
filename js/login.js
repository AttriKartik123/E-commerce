document.getElementById("login-form")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = this.querySelector("input[type='email']").value;
  const password = this.querySelector("input[type='password']").value;

  if (!email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  // Simulated login
  alert("Login successful!");
  window.location.href = "product.html";
});
