// Author: Ayoub Bouazi

const loginForm = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const errorName = document.querySelector(".errorName");
const errorPassword = document.querySelector(".errorPassword");
const togglePassword = document.querySelector(".form-control img");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const usernameValue = username.value;
  const passwordValue = password.value;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&#^"`]{8,}$/;
  errorPassword.textContent = "";
  errorName.textContent = "";
  if (usernameValue.length < 8) {
    errorName.textContent = "Username must be at least 8 characters";
  } else if (!passwordRegex.test(passwordValue)) {
    errorPassword.textContent =
      "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character";
    // ejemplo de contraseña: 1234abcd@
  } else {
    localStorage.setItem("username", usernameValue);
    sessionStorage.setItem("password", passwordValue);

    alert("Login successful!");
  }
});

window.addEventListener("load", () => {
  const storedUsername = localStorage.getItem("username");
  const storedPassword = sessionStorage.getItem("password");

  if (storedUsername) {
    username.value = storedUsername;
  }

  if (storedPassword) {
    password.value = storedPassword;
  }
});

togglePassword.addEventListener("click", () => {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  togglePassword.src =
    type === "password" ? "./img/eyeClose.png" : "./img/eyeOpen.png";
});
