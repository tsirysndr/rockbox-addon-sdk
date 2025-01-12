// deno-lint-ignore-file ban-types
import { serveWS } from "../mod.ts";

const _extensions = ["./files/mod.ts", "./rockbox/mod.ts"];

for (const extension of _extensions) {
  await import(extension);
}

const extensions: Record<
  string,
  Record<string, Function>
> = Rb.sdk.getExtensionRegistry();

// Start the WebSocket server
serveWS(extensions);
