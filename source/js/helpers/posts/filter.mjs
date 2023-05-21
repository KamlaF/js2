export function filterPosts(query, posts, filterImages = false) {
  return posts.filter((post) => {
    const queryLowerCased = query.toLowerCase();
    const titleMatch = post.title.toLowerCase().includes(queryLowerCased);
    const idMatch = post.id.toString() === query;
    const hasImage = filterImages ? post.media : true;

    return (titleMatch || idMatch) && hasImage;
  });
}

