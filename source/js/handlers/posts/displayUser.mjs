import * as api from "../../api/posts/index.mjs";
import { getName } from "../../helpers/storage.mjs";
import { renderUserPosts } from "../../templates/posts/renderUserPosts.mjs";

export async function setDisplayUserPostsListener() {
  
  window.addEventListener("DOMContentLoaded", async function () {
    try {
        const name = getName();
        if (!name) {
            throw new Error("A logged in user name is required");
            
        }
      const posts = await api.getUserPosts(name);
      console.log(posts);
      renderUserPosts(posts);
      // setSearchListener(posts);
    } catch (error) {
      console.error(error.message);
    }
  });
}
