/**
 * Sets the event listener for the "submit" event on the form with id "createPost".
 *
 * When the form is submitted, it prevents the default form submission, gets the form data,
 * formats the data, and tries to create a post with the given data. If the post creation fails, it logs the error.
 *
 * @function setCreatePostFormListener
 * @module
 */
import { createPost } from "../api/posts/index.mjs";

export function setCreatePostFormListener() {
  const form = document.querySelector("#createPost");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());

      if (post.tags) {
        post.tags = post.tags.split(",").map((tag) => tag.trim());
      }

      try {
        await createPost(post);
      } catch (error) {
        console.error("Error creating post:", error);
      }
    });
  }
}
