import { postApiNoAuth } from "../genericServices";
import APIROUTES from "./apiRoutes";

export async function signinApi(obj) {
  return await postApiNoAuth(APIROUTES.login, obj);
}
