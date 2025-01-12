import type MusicProvider from "./provider.ts";
import type MediaStreamer from "./streamer.ts";

class RockboxSDK {
  private providers: MusicProvider[] = [];
  private streamers: MediaStreamer[] = [];

  registerProvider(provider: MusicProvider) {
    provider.initialize();
    this.providers.push(provider);
  }

  registerStreamer(streamer: MediaStreamer) {
    streamer.initialize();
    this.streamers.push(streamer);
  }

  listProviders() {
    return this.providers.map((provider) => provider.metadata);
  }

  listStreamers() {
    return this.streamers.map((streamer) => streamer.metadata);
  }
}

export default RockboxSDK;
