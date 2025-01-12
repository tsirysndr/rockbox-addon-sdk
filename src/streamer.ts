import RockboxExtension from "./extension.ts";

abstract class MediaStreamer extends RockboxExtension {
  abstract stream(mediaUrl: string, target: string): Promise<void>;
  abstract stop(): Promise<void>;
  abstract pause(): Promise<void>;
  abstract resume(): Promise<void>;
  abstract seek(position: number): Promise<void>;
  abstract next(): Promise<void>;
  abstract previous(): Promise<void>;
  abstract listTargets(): Promise<
    Array<{
      name: string;
      type: string;
      address: string;
    }>
  >;
}

export default MediaStreamer;
