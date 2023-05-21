import * as listeners from "./handlers/index.mjs";

export default function router() {
  const path = location.pathname;
  console.log(path);
  switch (path) {
    case "/profile/login/":
    case "/profile/login/index.html":
      listeners.setLoginFormListener();
      break;
    case "/profile/register/":
    case "/profile/register/index.html":
      listeners.setRegisterFormListener();
      break;
    case "/posts/":
    case "/posts/index.html/":
      listeners.setDisplayPostsListener();
      break; 
    case "/posts/user.html":
      listeners.setDisplayUserPostsListener();
      break; 
    case "/post/create/":
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
