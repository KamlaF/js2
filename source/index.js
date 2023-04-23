import { setRegisterFormListener } from "/source/js/handlers/register.mjs";
import { setLoginFormListener } from "/source/js/handlers/login.mjs";

const path = location.pathname;

if (path === "/profile/login/index.html") {
  setLoginFormListener();
} else if (path === "/profile/register/index.html") {
  setRegisterFormListener();
}
