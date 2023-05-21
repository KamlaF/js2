/**
 * Saves a value to local storage.
 *
 * This function uses the localStorage API to save a key-value pair. The value is converted to a JSON string before saving.
 *
 * @param {string} key - The key to save the value under.
 * @param {*} value - The value to save. This will be stringified to JSON.
 */
export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Loads a value from local storage.
 *
 * This function uses the localStorage API to retrieve a value. The value is parsed from a JSON string to its original form.
 *
 * @param {string} key - The key of the value to retrieve.
 * @returns {*} The parsed value, or null if the value could not be retrieved or parsed.
 */
export function load(key) {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch {
    return null;
  }
}

/**
 * Removes a key-value pair from local storage.
 *
 * This function uses the localStorage API to remove a key-value pair.
 *
 * @param {string} key - The key of the value to remove.
 */
export function remove(key) {
  localStorage.removeItem(key);
}
