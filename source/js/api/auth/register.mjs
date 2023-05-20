import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/auth/register";
const method = "post";

export async function register(profile) {
  const registerURL = API_SOCIAL_URL + action;
  console.log(registerURL);

  const response = await fetch(registerURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body: JSON.stringify(profile),
  });
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.errors[0].message);
  }

  return json;
  
  // Check if the request was successful
  //if (!response.ok) {
    // If not, log the status and the error message, if any
   // const errorText = await response.text();
    //console.error("Error status:", response.status, "Error text:", errorText);
    //throw new Error("Registration failed");
  //}

 // const result = await response.json();
  //return "You are now registered";
}
