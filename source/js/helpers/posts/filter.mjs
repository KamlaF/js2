/**
 * Filters an array of posts based on a provided query string and an optional filterImages flag.
 *
 * The function matches posts that have the query string in the title (case-insensitive),
 * or have an id that exactly matches the query. If filterImages is true, it also filters out posts without media.
 *
 * @param {string} query - The string to be matched in the posts.
 * @param {Array.<{id: number, title: string, media: string}>} posts - An array of posts to be filtered.
 * @param {boolean} [filterImages=false] - Optional flag indicating whether to filter out posts without media.
 * @returns {Array.<{id: number, title: string, media: string}>} An array of posts that matched the criteria.
 */
export function filterPosts(query, posts, filterImages = false) {
  return posts.filter((post) => {
    const queryLowerCased = query.toLowerCase();
    const titleMatch = post.title.toLowerCase().includes(queryLowerCased);
    const idMatch = post.id.toString() === query;
    const hasImage = filterImages ? post.media : true;

    return (titleMatch || idMatch) && hasImage;
  });
}
