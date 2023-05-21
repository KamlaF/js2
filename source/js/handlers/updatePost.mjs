/**
 * Sets the event listener for the "submit" event on the form with id "editPost".
 *
 * This function fetches the post information from the server by using the post id found in the URL query string
 * and fills the form inputs with the corresponding data. When the form is submitted, it prevents the default
 * form submission, gets the updated form data, formats the data, and tries to update the post with the given data.
 *
 * @function setUpdatePostListener
 * @module
 */
import { getPost, updatePost } from "../api/posts/index.mjs";

export async function setUpdatePostListener() {
  const form = document.querySelector("#editPost");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    const button = form.querySelector("button");
    button.disabled = true;

    const post = await getPost(id);

    form.title.value = post.title;
    form.body.value = post.body;
    form.tags.value = post.tags;
    form.media.value = post.media;

    button.disabled = false;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      post.id = id;

      if (post.tags) {
        post.tags = post.tags.split(",").map((tag) => tag.trim());
      }

      updatePost(post);
    });
  }
}
