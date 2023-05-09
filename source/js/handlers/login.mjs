import { login } from "../api/auth/login.mjs";


export function setLoginFormListener() {
    
    const form = document.querySelector("#login-form");

    if (form) {
         form.addEventListener("submit", (event) => {
           event.preventDefault();
           const form = event.target;
           const formData = new FormData(form);
           const profile = Object.fromEntries(formData.entries());
           const action = form.action;
           const method = form.method;

           login(profile)
             .then(() => {
               console.log("Login successful"); // Add this line
               window.location.href = "/post/create/index.html";
             })
             .catch((error) => {
               console.error("Login failed:", error);
             });
           
         });
        
    }   
}
