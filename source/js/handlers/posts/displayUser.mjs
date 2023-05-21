/**
 * Sets the event listener for the "DOMContentLoaded" event,
 * which fetches all posts from a particular user when the DOM is fully loaded,
 * and then renders these user posts and sets the search listener.
 *
 * If the logged-in user's name is not available,
 * it throws an error.
 *
 * @async
 * @function setDisplayUserPostsListener
 * @module
 * @throws Will throw an error if a logged in user name is not available.
 */
import * as api from "../../api/posts/index.mjs";
import { getName } from "../../helpers/storage.mjs";
import { renderUserPosts } from "../../templates/posts/renderUserPosts.mjs";
import { setSearchListener } from "./searchListener.mjs";

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
      setSearchListener(posts);
    } catch (error) {
      console.error(error.message);
    }
  });
}
