import { filterPosts } from "/source/js/helpers/posts/filter.mjs";
import { renderPosts } from "/source/js/templates/posts/renderPosts.mjs";
import { renderUserPosts } from "../../templates/posts/renderUserPosts.mjs";

export function setSearchListener(posts) {
  const searchInput = document.getElementById("search");
  const filterImagesCheckbox = document.getElementById("filterImages");

  if (searchInput && filterImagesCheckbox) {
    searchInput.addEventListener("input", () => {
      console.log("input event triggered");
      applyFilter(posts);
    });

    filterImagesCheckbox.addEventListener("change", () => {
      applyFilter(posts);
    });

    function applyFilter(posts) {
      const query = searchInput.value;
      const filterImages = filterImagesCheckbox.checked;
      const filteredPosts = filterPosts(query, posts, filterImages);
      console.log(filteredPosts);
      renderPosts(filteredPosts);
      renderUserPosts(filteredPosts);
    }
  }
}
