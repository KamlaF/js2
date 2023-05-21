/**
 * Renders a list of posts on the web page.
 *
 * This function creates and appends HTML elements for each post in the input list. The post is displayed with its title, body, tags, and timestamps for creation and last update. If the post has an associated media, it is also displayed.
 *
 * @param {Object[]} posts - Array of post objects to be rendered. Each post object should have the following properties: 'title', 'body', 'tags' (array of strings), 'created', 'updated', and optionally 'media' (URL string).
 */

export function renderPosts(posts) {
  console.log(posts);
  const postsElement = document.getElementById("posts");
  if (!postsElement) {
    return;
  }
  postsElement.innerHTML = "";

  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.className = "post mb-3";

    const postTitle = document.createElement("h3");
    postTitle.textContent = post.title;
    postElement.appendChild(postTitle);

    if (post.media) {
      const postImage = document.createElement("img");
      postImage.src = post.media;
      postImage.alt = `${post.title} image`;
      postImage.className = "img-fluid mb-2 img-post";
      postElement.appendChild(postImage);
    }

    const postBody = document.createElement("p");
    postBody.textContent = post.body;
    postElement.appendChild(postBody);

    if (post.tags.length > 0) {
      const postTags = document.createElement("p");
      postTags.textContent = `Tags: ${post.tags.join(", ")}`;
      postElement.appendChild(postTags);
    }

    const postInfo = document.createElement("p");
    postInfo.textContent = `Created: ${post.created} | Updated: ${post.updated}`;
    postElement.appendChild(postInfo);

    postsElement.appendChild(postElement);
  });
}
