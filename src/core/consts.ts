export const ROCKBOX_API_PORT = parseInt(
  Deno.env.get("ROCKBOX_TCP_PORT") || "6063"
);

export const ROCKBOX_API_HOST = Deno.env.get("ROCKBOX_TCP_HOST") || "localhost";

export const ROCKBOX_API_URL = `http://${ROCKBOX_API_HOST}:${ROCKBOX_API_PORT}`;
