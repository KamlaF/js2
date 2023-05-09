import * as listeners from "./js/handlers/index.mjs";

export default function router() {
  const path = location.pathname;
  switch (path) {
    case "/profile/login/index.html":
      listeners.setLoginFormListener();
      break;
    case "/profile/register/index.html":
      listeners.setRegisterFormListener();
      break;
    case "/post/create/index.html":
      listeners.setCreatePostFormListener();
      break;
    case "/post/edit":
      listeners.setUpdatePostListener();
      break;
    case "/profile/edit/":
      listeners.setUpdateProfileListener();
      break;
  }
}
