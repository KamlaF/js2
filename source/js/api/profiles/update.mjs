import { API_SOCIAL_URL } from "../constants.mjs";

import { authFetch } from "../posts/authFetch.mjs";

const action = "/profiles";
const method = "put";

export async function updateProfile(profileData) {
  if (!profileData.name) {
    throw new Error("Update requires a name");
  }
  const updateProfileURL = `${API_SOCIAL_URL}${action}/${profileData.name}/media`;

  const response = await authFetch(updateProfileURL, {
    method,

    body: JSON.stringify(profileData),
  });

  const update = await response.json();

  console.log(update);
}
