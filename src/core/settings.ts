import { client } from "./client.ts";
import type { Settings } from "./types/settings.ts";
import { camelcaseKeys } from "../../deps.ts";

async function getGlobalSettings(): Promise<Settings> {
  const { data } = await client.get("settings");
  return camelcaseKeys(data);
}

function saveSettings() {}

export default {
  getGlobalSettings,
  saveSettings,
};
