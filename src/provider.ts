import { RockboxExtension } from "./extension.ts";

export abstract class MusicProvider extends RockboxExtension {
  abstract browse(
    path?: string
  ): Promise<Array<{ name: string; type: "file" | "directory"; path: string }>>;
  abstract download(filePath: string, destination: string): Promise<void>;
  abstract play(filePath: string): Promise<void>;
  abstract upload(filePath: string, destination: string): Promise<void>;
}

export default MusicProvider;
