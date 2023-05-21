/**
 * Sets an event listener for the "submit" event on the form with id "editProfile".
 *
 * This function fetches the profile information from the local storage and fills the form inputs
 * with the corresponding data. It then fetches the profile data from the server, and further fills
 * the form with this data. When the form is submitted, it prevents the default form submission,
 * gets the updated form data, adds the name and email to the profile object, and tries to update
 * the profile with the new data.
 *
 * @function setUpdateProfileListener
 * @module
 */
import { getProfile, updateProfile } from "../api/profiles/index.mjs";

import { load } from "../storage/index.mjs";

export async function setUpdateProfileListener() {
  const form = document.querySelector("#editProfile");

  if (form) {
    const { name, email } = load("profile");
    form.name.value = name;
    form.email.value = email;
    const button = form.querySelector("button");
    button.disabled = true;

    const profile = await getProfile(name);

    form.banner.value = profile.banner;
    form.avatar.value = profile.avatar;

    button.disabled = false;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      profile.name = name;
      profile.email = email;

      updateProfile(profile);
    });
  }
}
