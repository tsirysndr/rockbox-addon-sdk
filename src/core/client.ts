import { axios } from "../../deps.ts";
import { ROCKBOX_API_URL } from "./consts.ts";

export const client = axios.create({
  baseURL: ROCKBOX_API_URL,
});
