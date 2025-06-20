const form = document.querySelector("form");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

// Toggle password visibility
togglePassword?.addEventListener("click", function () {
  const icon = this.querySelector("i");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    passwordInput.type = "password";
    icon.classList.replace("fa-eye", "fa-eye-slash");
  }
});

// Form submission
form?.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const terms = document.querySelector('input[name="terms"]').checked;

  if (!name || !email || !password) {
    alert("❌ Please fill in all fields.");
    return;
  }

  if (!terms) {
    alert("❌ You must agree to the terms and conditions.");
    return;
  }

  // ✅ Save to localStorage
  localStorage.setItem("registeredName", name);
  localStorage.setItem("registeredPassword", password);

  alert("✔️ Registration successful!");
  window.location.href = "../Login/login.html";
});
