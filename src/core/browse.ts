import { ROCKBOX_API_URL } from "./consts.ts";

async function getEntries(): Promise<any> {
  const response = await fetch(`${ROCKBOX_API_URL}/browse/tree-entries`);
  return response.json();
}

export default {
  tree: {
    getEntries,
  },
};
