/**
 * Sets the event listener for the "submit" event on the form with id "registration-form".
 *
 * When the form is submitted, it prevents the default form submission, gets the form data,
 * formats the data, and tries to register the user with the given data. If the registration is successful,
 * it logs the message from the server. If the registration fails, it logs the error.
 *
 * @function setRegisterFormListener
 * @module
 */
import { register } from "../api/auth/register.mjs";

export function setRegisterFormListener() {
  const form = document.querySelector("#registration-form");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
      const action = form.action;
      const method = form.method;

      register(profile)
        .then((message) => {
          console.log(message);
        })
        .catch((error) => {
          console.error(error.message);
        });
    });
  }
}
