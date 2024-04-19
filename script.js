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

  // Función para validar el formato del correo electrónico
  function validarCorreoElectronico(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
  }

  // Función para mostrar un mensaje de error
  function mostrarError(errorElement, mensaje) {
    errorElement.innerText = mensaje;
    errorElement.style.display = "block"; // Cambiar a 'block' para mostrar el mensaje
  }

  // Función para ocultar un mensaje de error
  function ocultarError(errorElement) {
    errorElement.innerText = "";
    errorElement.style.display = "none";
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

  // Función para validar el formulario antes de enviar
  function validarFormulario() {
    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let asunto = document.getElementById("asunto").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();
    let error = false;

    if (nombre === "") {
      mostrarError(document.getElementById("nombreError"), "Por favor, introduzca su nombre.");
      error = true;
    } else if (nombre.length < 3) {
      mostrarError(document.getElementById("nombreError"), "El nombre debe tener al menos 3 caracteres.");
      error = true;
    } else if (nombre.length > 50) {
      mostrarError(document.getElementById("nombreError"), "El nombre no puede contener más de 50 caracteres.");
      error = true;
    } else {
      ocultarError(document.getElementById("nombreError"));
    }

    if (email === "") {
      mostrarError(document.getElementById("emailError"), "Por favor, introduzca su correo electrónico.");
      error = true;
    } else {
      ocultarError(document.getElementById("emailError"));
    }

    if (asunto === "") {
      mostrarError(document.getElementById("asuntoError"), "Por favor, introduzca el asunto.");
      error = true;
    } else {
      ocultarError(document.getElementById("asuntoError"));
    }

    if (mensaje === "") {
      mostrarError(document.getElementById("mensajeError"), "Por favor, introduzca su mensaje.");
      error = true;
    } else {
      ocultarError(document.getElementById("mensajeError"));
    }

    return !error;
  }

  // Escuchar el evento submit del formulario
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Validar el formulario antes de enviar
    if (validarFormulario()) {
      // Si todos los campos son válidos, enviar el formulario
      form.submit();
    }
  });

});

document.getElementById('downloadButton').addEventListener('click', function () {
  let button = this;
  button.classList.add('downloading');
  setTimeout(function () {
    button.querySelector('.download-progress').style.width = '100%';
  }, 2000); // Simulamos una carga de 2 segundos
});
