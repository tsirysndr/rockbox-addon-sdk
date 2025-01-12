import MusicProvider from "../../src/provider.ts";

class RockboxProvider extends MusicProvider {
  constructor() {
    super({
      name: "Rockbox",
      version: "0.1.0",
      author: "Tsiry Sandratraina",
      license: "MIT",
      description:
        "This extension allows you to explore media files on other devices running Rockbox.",
    });
  }

  initialize() {
    console.log("Rockbox Provider initialized");
  }

  getMetadata() {
    return this.metadata;
  }

  override browse(
    path?: string
  ): Promise<
    Array<{ name: string; type: "file" | "directory"; path: string }>
  > {
    throw new Error("Method not implemented.");
  }
  override download(filePath: string, destination: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  override play(filePath: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  override upload(filePath: string, destination: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  override shutdown(): void {
    throw new Error("Method not implemented.");
  }
}

const rockbox = new RockboxProvider();
Rb.sdk.registerProvider(rockbox);
