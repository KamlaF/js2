/**
 * Sets the event listener for the "DOMContentLoaded" event,
 * which fetches all posts from the API when the DOM is fully loaded,
 * and then renders the posts and sets the search listener.
 *
 * If the `getPosts` function is not available in the API,
 * it throws an error.
 *
 * @async
 * @function setDisplayPostsListener
 * @module
 * @throws Will throw an error if `api.getPosts` method is not available.
 */
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
