import { postApiNoAuth } from "../genericServices";
import APIROUTES from "./apiRoutes";

export async function registrationApi(obj) {
  return await postApiNoAuth(APIROUTES.registration, obj);
}
