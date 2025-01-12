import MusicProvider from "../../src/provider.ts";

class FilesProvider extends MusicProvider {
  constructor() {
    super({
      name: "Files",
      version: "0.1.0",
      license: "MIT",
      author: "Tsiry Sandratraina",
      description:
        "This extension allows you to explore media files on your local filesystem.",
    });
  }

  initialize() {
    console.log("FilesProvider initialized");
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

const files = new FilesProvider();
Rb.sdk.registerProvider(files);
