import { MusicProvider } from "../../mod.ts";

class RockboxProvider extends MusicProvider {
  constructor() {
    super({
      name: "Rockbox",
      version: "0.1.0",
      author: "Tsiry Sandratraina",
      license: "MIT",
      description:
        "This extension allows you to explore media files on other devices running Rockbox.",
      supportedUrls: ["rockbox://"],
    });
  }

  initialize() {
    console.log("Rockbox Provider initialized");
  }

  connect(_host: string, _port: number): Promise<void> {
    throw new Error("Method not implemented.");
  }

  getMetadata() {
    return this.metadata;
  }

  override browse(
    _path?: string
  ): Promise<
    Array<{ name: string; type: "file" | "directory"; path: string }>
  > {
    throw new Error("Method not implemented.");
  }
  override download(_filePath: string, _destination: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  override play(_filePath: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  override upload(_filePath: string, _destination: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  override shutdown(): void {
    throw new Error("Method not implemented.");
  }
}

const rockbox = new RockboxProvider();
Rb.sdk.registerProvider(rockbox);
