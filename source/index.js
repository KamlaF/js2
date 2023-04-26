import { setRegisterFormListener } from "/source/js/handlers/register.mjs";
import { setLoginFormListener } from "/source/js/handlers/login.mjs";


import { createPost } from "./js/api/posts/create.mjs";

const path = location.pathname;

if (path === "/profile/login/index.html") {
  setLoginFormListener();
} else if (path === "/profile/register/index.html") {
  setRegisterFormListener();
}

createPost({
    title: "example posts",
    body: "also an example"
})




