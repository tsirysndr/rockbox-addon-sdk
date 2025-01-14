// deno-lint-ignore-file no-explicit-any
import { client } from "./client.ts";
import type { Entry } from "./types/entry.ts";
import { camelcaseKeys } from "../../deps.ts";

async function getEntries(): Promise<Entry[]> {
  const { data } = await client.get(`/browse/tree-entries`);
  return data.map((entry: any) => camelcaseKeys(entry));
}

export default {
  tree: {
    getEntries,
  },
};
