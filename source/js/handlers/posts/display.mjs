import * as api from "../../api/posts/index.mjs";
import { setSearchListener } from "./searchListener.mjs";
import { renderPosts } from "../../templates/posts/renderPosts.mjs";


export async function setDisplayPostsListener() {
  console.log("setDisplayPostsListener");

  window.addEventListener("DOMContentLoaded", async function () {
    try {
      if (!api.getPosts) {
        throw new Error("API method for getting posts is not available");
      }
      const posts = await api.getPosts();
      console.log(posts);
      renderPosts(posts);
      setSearchListener(posts);
    } catch (error) {
      console.error(error.message);
    }
  });
}
