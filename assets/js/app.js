const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const forgot_password_link = document.querySelector("#forgot-password");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

forgot_password_link.addEventListener("click", (e) => {
  e.preventDefault();
  // Here you can add the logic to show a forgot password form or redirect to a forgot password page
  alert("Forgot password functionality will be implemented here.");
});

document.querySelector('.forgot-password-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const emailInput = this.email;
  const email = emailInput.value;
  const emailError = document.getElementById('emailError');

  // Clear previous error messages
  emailError.textContent = '';

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = 'Please enter a valid email address';
    return;
  }

  // Simulate sending an AJAX request
  alert(`Password reset link sent to ${email}`);

  // Optionally, reset the form
  this.reset();
});