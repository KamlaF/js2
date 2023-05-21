/**
 * Sets the event listener for the "submit" event on the form with id "login-form".
 *
 * When the form is submitted, it prevents the default form submission, gets the form data,
 * formats the data, and tries to log the user in with the given data. If the login succeeds,
 * it stores the returned access token and user profile in storage, and redirects the user to their posts page.
 * If the login fails, it logs the error and displays a failure message to the user.
 *
 * @function setLoginFormListener
 * @module
 */
import { login } from "../api/auth/login.mjs";
import * as storage from "../storage/index.mjs";

export function setLoginFormListener() {
  const form = document.querySelector("#login-form");
  const messageDiv = document.querySelector("#message");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      try {
        const { accessToken, ...user } = await login(profile);
        storage.save("token", accessToken);
        storage.save("profile", user);
        window.location.href = "/posts/user.html";
      } catch (error) {
        console.error(error.message);
        messageDiv.innerText = "Login failed: " + error;
      }
    });
  }
}
