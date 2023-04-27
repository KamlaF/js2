import { setRegisterFormListener } from "/source/js/handlers/register.mjs";
import { setLoginFormListener } from "/source/js/handlers/login.mjs";


import { updatePost } from "./js/api/posts/update.mjs";

const path = location.pathname;

if (path === "/profile/login/index.html") {
  setLoginFormListener();
} else if (path === "/profile/register/index.html") {
  setRegisterFormListener();
}

updatePost({
  id:5395,
    title: "example posts UPDATED",
    body: "also an example"
})




