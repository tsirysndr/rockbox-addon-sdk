// deno-lint-ignore-file ban-types
import { cyan } from "@std/fmt/colors";
import { z } from "zod";
import metadata from "../deno.json" with { type: "json" };

const ROCKBOX_SDK_VERSION = metadata.version;

const RbRequestSchema = z.object({
  extension: z.string().optional(),
  method: z.string(),
  args: z.array(z.any()).optional().default([]),
});

const RbEventSchema = z.object({
  event: z.string(),
  data: z.any(),
});

const schema = z.union([RbRequestSchema, RbEventSchema]);

type RbRequest = z.infer<typeof RbRequestSchema>;
type RbEvent = z.infer<typeof RbEventSchema>;

type Params = z.infer<typeof schema>;

export function serveWS(extensions: Record<string, Record<string, Function>>) {
  const totalExtensions = Object.keys(extensions).length;
  console.log(
    `${cyan("\n[INFO] Total Loaded Extensions:")} ${totalExtensions}\n`
  );

  function handleWebSocket(req: Request): Response {
    if (req.headers.get("upgrade") === "websocket") {
      const { socket, response } = Deno.upgradeWebSocket(req);

      socket.onopen = () => {
        console.log("WebSocket Connection Opened");
        socket.send(`Rockbox SDK v${ROCKBOX_SDK_VERSION}`);
      };

      socket.onmessage = async (event) => {
        try {
          const { extension, method, args } = schema.parse(
            JSON.parse(event.data) as Params
          ) as RbRequest;

          const { event: rbevent, data } = schema.parse(
            JSON.parse(event.data) as Params
          ) as RbEvent;

          if (rbevent) {
            for (const [name] of Object.entries(extensions)) {
              if (extensions[name] && extensions[name]['on']) {
                await extensions[name]['on'](rbevent, data);
              }
            }
            return;
          }

          if (method === "listExtensions") {
            socket.send(
              JSON.stringify({ success: true, result: Object.keys(extensions) })
            );
            return;
          }

          if (!extension) {
            throw new Error("Extension name is required");
          }

          // Ensure the extension and method exist
          if (extensions[extension] && extensions[extension][method]) {
            const result = await extensions[extension][method](...args);
            socket.send(JSON.stringify({ success: true, result }));
          } else {
            throw new Error(
              `Extension '${extension}' or method '${method}' not found`
            );
          }
        } catch (error) {
          socket.send(
            JSON.stringify({ success: false, error: (error as Error).message })
          );
        }
      };

      socket.onclose = () => console.log("WebSocket Connection Closed");
      socket.onerror = (error) => console.error("WebSocket Error:", error);

      return response;
    }
    return new Response(`Rockbox SDK v${ROCKBOX_SDK_VERSION}`);
  }

  Deno.serve({
    port: parseInt(Deno.env.get("ROCKBOX_EXT_PORT") || "6064"),
    handler: handleWebSocket,
  });
}
