/**
 * Creates an HTML element for a post.
 * @param {Object} postData - The data of the post to be displayed.
 * @returns {HTMLElement} The created HTML element for the post.
 */

export function postTemplate(postData) {
  const post = document.createElement("div");
  post.classList.add("post");
  post.innerText = postData.title;

  if (postData.media) {
    const img = document.createElement("img");
    img.src = postData.media;
    img.alt = `Image from ${postData.title}`;
    post.append(img);
  }

  return post;
}

/**
 * Renders a post template on the parent element.
 * @param {Object} postData - The data of the post to be displayed.
 * @param {HTMLElement} parent - The parent element where the post will be appended.
 */

export function renderPostTemplate(postData, parent) {
  parent.append(postTemplate(postData));
}

/**
 * Renders multiple post templates on the parent element.
 * @param {Array<Object>} postDataList - A list of post data to be displayed.
 * @param {HTMLElement} parent - The parent element where the posts will be appended.
 */

export function renderPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map(postTemplate));
}
