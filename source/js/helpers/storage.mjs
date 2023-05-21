/**
 * Loads the profile object from storage.
 *
 * This function uses the storage utility to retrieve the "profile" object.
 *
 * @returns {Object} The profile object from storage.
 */
export function getProfile() {
  return storage.load("profile");
}

/**
 * Retrieves the name property from the profile object in storage.
 *
 * This function first retrieves the profile object from storage, then returns the "name" property of this object.
 * If the profile object does not exist, it returns undefined.
 *
 * @returns {string|undefined} The name property from the profile object in storage, or undefined if the profile object does not exist.
 */
export function getName() {
  const profile = getProfile();
  return profile?.name;
}
