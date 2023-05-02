import { setRegisterFormListener } from "/source/js/handlers/register.mjs";
import { setLoginFormListener } from "/source/js/handlers/login.mjs";

import * as post from "./js/api/posts/index.mjs";

const path = location.pathname;

if (path === "/profile/login/index.html") {
  setLoginFormListener();
} else if (path === "/profile/register/index.html") {
  setRegisterFormListener();
}

//post.createPost()
//post.updatePost()
//post.removePost()
//post.getPost()
//post.getPosts().then(console.log)

post.getPost(5418).then(console.log);
