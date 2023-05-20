import { filterPosts } from "/source/js/helpers/posts/filter.mjs";
import { renderPosts } from "/source/js/templates/posts/renderPosts.mjs";

export function setSearchListener(posts) {
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
