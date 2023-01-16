import { postApiNoAuth } from "../genericServices.js";

export async function updateAuthTokenApi() {
  return await postApiNoAuth("updateAuthToken", {
    refreshToken: localStorage.getItem("onlusRefreshToken"),
  });
}
