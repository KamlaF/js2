import { login } from "../api/auth/login.mjs";

export function setLoginFormListener() {
  const form = document.querySelector("#login-form");
  const messageDiv = document.querySelector("#message"); 

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
      const action = form.action;
      const method = form.method;

      login(profile)
        .then((message) => {
          messageDiv.innerText = message;
          setTimeout(() => {
            window.location.href = "/profile/index.html";
          }, 1000); 
        })
        .catch((error) => {
          console.error(error.message);
          messageDiv.innerText = "Login failed: " + error.message;
        });

    });
  }
}
