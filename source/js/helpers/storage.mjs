import * as storage from "../storage/index.mjs"

export function getProfile() {
    return storage.load("profile");    
}

export function getName() {
    const profile = getProfile();
    return profile?.name;
  
}