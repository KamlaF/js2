import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "./authFetch.mjs";

const action = "/posts";

function renderPosts(posts) {
  const postsElement = document.getElementById("posts");
  if (!postsElement) {
    return; }
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

function filterPosts(query, posts, filterImages = false) {
  return posts.filter((post) => {
    const queryLowerCased = query.toLowerCase();
    const titleMatch = post.title.toLowerCase().includes(queryLowerCased);
    const idMatch = post.id.toString() === query;
    const hasImage = filterImages ? post.media : true;

    return (titleMatch || idMatch) && hasImage;
  });
}

function setSearchListener(posts) {
  const searchInput = document.getElementById("search");
  const filterImagesCheckbox = document.getElementById("filterImages");

  if (searchInput && filterImagesCheckbox) {
    searchInput.addEventListener("input", () => {
      applyFilter(posts);
    });

    filterImagesCheckbox.addEventListener("change", () => {
      applyFilter(posts);
    });

    function applyFilter(posts) {
      const query = searchInput.value;
      const filterImages = filterImagesCheckbox.checked;
      const filteredPosts = filterPosts(query, posts, filterImages);
      renderPosts(filteredPosts);
    }
  }
}

export async function getPosts() {
  const updatePostURL = `${API_SOCIAL_URL}${action}`;
  const response = await authFetch(updatePostURL);
  const updatePosts = await response.json();

  console.log(updatePosts);
  renderPosts(updatePosts);
  setSearchListener(updatePosts);
  return updatePosts;
}

export async function getPost(id) {
  if (!id) {
    throw new Error("Get requires a postID");
  }
  const getPostURL = `${API_SOCIAL_URL}${action}/${id}`;
  const response = await authFetch(getPostURL);
  const updatePost = await response.json();

  console.log(updatePost);
}
