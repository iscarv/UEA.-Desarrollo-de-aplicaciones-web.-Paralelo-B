// Función para mostrar alerta personalizada
document.getElementById("alertButton").addEventListener("click", () => {
  alert("¡Gracias por visitar nuestra tienda! ¿En qué podemos ayudarte?");
});

// Validación dinámica del formulario
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Variables campos
  const nameInput = form.name;
  const emailInput = form.email;
  const messageInput = form.message;

  let valid = true;

  // Validar nombre
  if (!nameInput.value.trim()) {
    nameInput.classList.add("is-invalid");
    valid = false;
  } else {
    nameInput.classList.remove("is-invalid");
    nameInput.classList.add("is-valid");
  }

  // Validar email con expresión regular simple
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    emailInput.classList.add("is-invalid");
    valid = false;
  } else {
    emailInput.classList.remove("is-invalid");
    emailInput.classList.add("is-valid");
  }

  // Validar mensaje
  if (!messageInput.value.trim()) {
    messageInput.classList.add("is-invalid");
    valid = false;
  } else {
    messageInput.classList.remove("is-invalid");
    messageInput.classList.add("is-valid");
  }

  // Si todo está bien, mostrar confirmación y resetear formulario
  if (valid) {
    alert("¡Formulario enviado con éxito! Gracias por contactarnos.");
    form.reset();
    form.querySelectorAll(".is-valid").forEach(el => el.classList.remove("is-valid"));
  }
});
