import { client } from "./client.ts";
import type { SystemStatus } from "./types/system.ts";
import { camelcaseKeys } from "../../deps.ts";

async function getGlobalStatus(): Promise<SystemStatus> {
  const { data } = await client.get("/status");
  return camelcaseKeys(data);
}

async function getRockboxVersion(): Promise<string> {
  const { data } = await client.get("/version");
  return data.version;
}

export default {
  getGlobalStatus,
  getRockboxVersion,
};
