import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";
import * as filterPosts from "./helpers/posts/filter.mjs";

import router from "./router.mjs";
//("./router.mjs");

router();

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


