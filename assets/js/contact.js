// Importa las funciones de validación desde el archivo validations.js
import { validarCampos, validarButton } from "./validations.js";

// Selecciona elementos del formulario
const form = document.querySelector(".contact__form");
const inputs = document.querySelectorAll("[data-tipo]");
const button = document.querySelector(".contact__form__button");

// Agrega eventos a los campos de entrada para la validación en tiempo real
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    validarCampos(input); // Valida el campo actual
    validarButton(inputs, button); // Valida el estado del botón
  });
});

// Agrega un evento al formulario para manejar el envío
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Previene el envío por defecto
  form.reset(); // Reinicia el formulario
  validarButton(inputs, button); // Valida el estado del botón después de restablecer
  alert("Los datos fueron enviados con éxito, muchas gracias por contactarme.");
});
