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
