import { load } from "../../handlers/storage/index.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";

import { authFetch } from "../posts/authFetch.mjs";

const action = "/Profiles";

export async function getProfiles() {
  const updateProfileURL = `${API_SOCIAL_URL}${action}`;

  const response = await authFetch(updateProfileURL);

  const updateProfiles = await response.json();

  console.log(updateProfiles);
  return updateProfiles;
}

export async function getProfile(name) {
  if (!name) {
    throw new Error("Get requires a name");
  }
  const getProfileURL = `${API_SOCIAL_URL}${action}/${name}`;

  const response = await authFetch(getProfileURL);

  const updateProfile = await response.json();

  console.log(updateProfile);
}
