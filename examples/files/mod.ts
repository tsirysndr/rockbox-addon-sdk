import { MusicProvider } from "../../mod.ts";

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

  // deno-lint-ignore no-explicit-any
  on(event: string, data: any): Promise<void> {
    console.log("> FilesProvider received event:", event, data);
    throw new Error("Method not implemented.");
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

const files = new FilesProvider();
Rb.sdk.registerProvider(files);
