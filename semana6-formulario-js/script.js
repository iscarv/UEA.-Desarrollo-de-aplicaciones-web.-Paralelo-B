const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const ageInput = document.getElementById("age");
const submitBtn = document.getElementById("submitBtn");
const form = document.getElementById("registrationForm");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const ageError = document.getElementById("ageError");

function validateName() {
  const name = nameInput.value.trim();
  if (name.length >= 3) {
    setValid(nameInput, nameError);
    return true;
  } else {
    setInvalid(nameInput, nameError, "Debe tener al menos 3 caracteres.");
    return false;
  }
}

function validateEmail() {
  const email = emailInput.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(email)) {
    setValid(emailInput, emailError);
    return true;
  } else {
    setInvalid(emailInput, emailError, "Correo no válido.");
    return false;
  }
}

function validatePassword() {
  const password = passwordInput.value;
  const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])/;
  if (password.length >= 8 && regex.test(password)) {
    setValid(passwordInput, passwordError);
    return true;
  } else {
    setInvalid(passwordInput, passwordError, "Mínimo 8 caracteres, 1 número y 1 símbolo.");
    return false;
  }
}

function validateConfirmPassword() {
  if (confirmPasswordInput.value === passwordInput.value && passwordInput.value !== "") {
    setValid(confirmPasswordInput, confirmPasswordError);
    return true;
  } else {
    setInvalid(confirmPasswordInput, confirmPasswordError, "Las contraseñas no coinciden.");
    return false;
  }
}

function validateAge() {
  const age = parseInt(ageInput.value);
  if (!isNaN(age) && age >= 18) {
    setValid(ageInput, ageError);
    return true;
  } else {
    setInvalid(ageInput, ageError, "Debes tener al menos 18 años.");
    return false;
  }
}

function setValid(input, errorElement) {
  input.classList.add("valid");
  input.classList.remove("invalid");
  errorElement.textContent = "";
}

function setInvalid(input, errorElement, message) {
  input.classList.add("invalid");
  input.classList.remove("valid");
  errorElement.textContent = message;
}

function validateForm() {
  const valid =
    validateName() &&
    validateEmail() &&
    validatePassword() &&
    validateConfirmPassword() &&
    validateAge();

  submitBtn.disabled = !valid;
}

[nameInput, emailInput, passwordInput, confirmPasswordInput, ageInput].forEach((input) =>
  input.addEventListener("input", validateForm)
);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Formulario enviado con éxito.");
  form.reset();
  submitBtn.disabled = true;
  document.querySelectorAll("input").forEach((input) => {
    input.classList.remove("valid", "invalid");
  });
});

form.addEventListener("reset", function () {
  submitBtn.disabled = true;
  document.querySelectorAll("input").forEach((input) => {
    input.classList.remove("valid", "invalid");
  });
  document.querySelectorAll(".error-message").forEach((span) => {
    span.textContent = "";
  });
});
