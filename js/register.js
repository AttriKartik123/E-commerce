document.getElementById("register-form")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = this.querySelector("input[type='text']").value;
  const email = this.querySelector("input[type='email']").value;
  const password = this.querySelector("input[type='password']").value;

  if (!name || !email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  alert("Registration successful!");
  window.location.href = "login.html";
});
