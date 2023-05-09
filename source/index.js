import { setRegisterFormListener } from "/source/js/handlers/register.mjs";
import { setLoginFormListener } from "/source/js/handlers/login.mjs";
import * as templates from "./js/templates/index.mjs";
import * as postMethods from "./js/api/posts/index.mjs";



const path = location.pathname;

if (path === "/profile/login/index.html") {
  setLoginFormListener();
} else if (path === "/profile/register/index.html") {
  setRegisterFormListener();
}

async function testTemplate() {
  const posts = await postMethods.getPosts();
  if (Array.isArray(posts) && posts.length > 0) {
    const container = document.querySelector("#post");
    templates.renderPostTemplates(posts, container);
  } else {
    console.error("Error: Unable to retrieve posts.");
  }
}


testTemplate()
