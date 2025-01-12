// deno-lint-ignore-file ban-types
import { cyan } from "@std/fmt/colors";

const ROCKBOX_SDK_VERSION = "0.1.0";

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
          // Parse the incoming message (expecting JSON format)
          const { extension, method, args } = JSON.parse(event.data);

          if (method === "listExtensions") {
            socket.send(
              JSON.stringify({ success: true, result: Object.keys(extensions) })
            );
            return;
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
