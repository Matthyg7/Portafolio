document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  const submitButton = document.querySelector(".contact-form__submit");

  // Agregar o quitar la clase 'focus' al textarea del mensaje
  document.getElementById("mensaje").addEventListener("focus", function () {
    this.classList.add("focus");
  });

  document.getElementById("mensaje").addEventListener("blur", function () {
    if (this.value === "") {
      this.classList.remove("focus");
    }
  });

  // Función para mostrar un mensaje de error
  function mostrarError(input, errorElement, mensaje) {
    errorElement.innerText = mensaje;
    errorElement.style.display = "block"; // Cambiar a 'block' para mostrar el mensaje
  }

  // Función para validar el formato del correo electrónico
  function validarCorreoElectronico(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
  }
  
  // Validar el formulario al hacer cambios en los campos
  form.addEventListener("input", function () {
    const nombreInput = document.getElementById("nombre").value.trim();
    const emailInput = document.getElementById("email").value.trim();
    const asuntoInput = document.getElementById("asunto").value.trim();
    const mensajeInput = document.getElementById("mensaje").value.trim();

  // Verificar si todos los campos están llenos y son válidos
  const nombreValido = nombreInput.length >= 3 && nombreInput.length <= 50;
  const emailValido = validarCorreoElectronico(emailInput);
  const asuntoValido = asuntoInput !== "";
  const mensajeValido = mensajeInput !== "" && mensajeInput.length <= 300;

  if (nombreValido && emailValido && asuntoValido && mensajeValido) {
    submitButton.disabled = false; // Habilitar el botón de enviar formulario
  } else {
    submitButton.disabled = true; // Deshabilitar el botón de enviar formulario
  }
});

  // Escuchar el evento submit del formulario
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Validar el nombre
    const nombreInput = document.getElementById("nombre");
    const nombre = nombreInput.value.trim();
    const nombreError = document.querySelector("#nombreError");
    if (nombre.length > 50) {
      mostrarError(
        nombreInput,
        nombreError,
        "El nombre debe contener máximo 50 caracteres."
      );
      return;
    } else if (nombre.length < 3) {
      mostrarError(
        nombreInput,
        nombreError,
        "El nombre debe contener al menos 3 caracteres."
      );
      return;
    }

    // Validar el correo electrónico
    const emailInput = document.getElementById("email");
    const email = emailInput.value.trim();
    const emailError = document.querySelector("#emailError");
    if (email === "") {
      mostrarError(
        emailInput,
        emailError,
        "Por favor, ingrese su correo electrónico."
      );
      return;
    } else if (!validarCorreoElectronico(email)) {
      mostrarError(
        emailInput,
        emailError,
        "Por favor, ingrese un correo electrónico válido."
      );
      return;
    }

    // Validar el asunto
    const asuntoInput = document.getElementById("asunto");
    const asunto = asuntoInput.value.trim();
    const asuntoError = document.querySelector("#asuntoError");
    if (asunto === "") {
      mostrarError(asuntoInput, asuntoError, "Por favor, ingrese un asunto.");
      return;
    }

    // Validar el mensaje
    const mensajeInput = document.getElementById("mensaje");
    const mensaje = mensajeInput.value.trim();
    const mensajeError = document.querySelector("#mensajeError");
    if (mensaje === "") {
      mostrarError(
        mensajeInput,
        mensajeError,
        "Por favor, ingrese un mensaje."
      );
      return;
    } else if (mensaje.length > 300) {
      mostrarError(
        mensajeInput,
        mensajeError,
        "El mensaje no puede exceder los 300 caracteres."
      );
      return;
    }

    // Si todos los campos son válidos, enviar el formulario
    form.submit();
  });

});
