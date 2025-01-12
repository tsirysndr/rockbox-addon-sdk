// deno-lint-ignore-file ban-types
import type MusicProvider from "./provider.ts";
import type MediaStreamer from "./streamer.ts";
import { cyan, green, yellow, bgGreen } from "@std/fmt/colors";

class RockboxSDK {
  private providers: MusicProvider[] = [];
  private streamers: MediaStreamer[] = [];
  private extensionRegistry: Record<string, Record<string, Function>> = {};

  registerProvider(provider: MusicProvider) {
    provider.initialize();
    this.providers.push(provider);
    this.registerExtension(provider.metadata.name, provider);
  }

  registerStreamer(streamer: MediaStreamer) {
    streamer.initialize();
    this.streamers.push(streamer);
    this.registerExtension(streamer.metadata.name, streamer);
  }

  listProviders() {
    return this.providers.map((provider) => provider.metadata);
  }

  listStreamers() {
    return this.streamers.map((streamer) => streamer.metadata);
  }

  // deno-lint-ignore no-explicit-any
  private registerExtension(name: string, extension: any) {
    // Dynamically collect all methods of the extension
    const ignore = ["constructor", "initialize", "getMetadata"];
    const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(extension))
      .filter(
        (method) =>
          !ignore.includes(method) && typeof extension[method] === "function"
      )
      .reduce((acc, method) => {
        acc[method] = extension[method].bind(extension);
        return acc;
      }, {} as Record<string, Function>);

    this.extensionRegistry[name] = methods;

    console.log(`\n${cyan("[INFO] Extension Registered")}`);
    console.log(
      "------------------------------------------------------------------------------"
    );
    console.log(`${green("Name       :")} ${bgGreen(name)}`);
    console.log(
      `${green("Methods    :")} ${yellow(Object.keys(methods).join(", "))}`
    );
    console.log(`${green("Registered :")} ${new Date().toISOString()}`);
    console.log(
      "------------------------------------------------------------------------------"
    );
  }

  getExtensionRegistry(): Record<string, Record<string, Function>> {
    return this.extensionRegistry;
  }
}

export default RockboxSDK;
