


import * as listeners from "./js/handlers/index.mjs";
import * as templates from "./js/templates/index.mjs";
import * as postMethods from "./js/api/posts/index.mjs";



const path = location.pathname;

if (path === "/profile/login/index.html") {
  listeners.setLoginFormListener();
} else if (path === "/profile/register/index.html") {
  listeners.setRegisterFormListener();
} else if (path === '/post/create/index.html') {
  listeners.setCreatePostFormListener()
  
} else if (path === '/post/edit') {
  listeners.setUpdatePostListener()
  
}

async function testTemplate() {
  const posts = await postMethods.getPosts();
  if (Array.isArray(posts) && posts.length > 0) {
    const container = document.querySelector("#posts");
    templates.renderPostTemplates(posts, container);
  } else {
    console.error("Error: Unable to retrieve posts.");
  }
}

testTemplate();


