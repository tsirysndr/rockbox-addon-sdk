export type ExtensionMetadata = {
  name: string;
  version: string;
  author: string;
  license: string;
  readme?: string;
  tags?: string[];
  description?: string;
  repository?: string;
  homepage?: string;
  supportedUrls?: string[];
};

export abstract class RockboxExtension {
  constructor(public readonly metadata: ExtensionMetadata) {}

  abstract initialize(): void;
  abstract shutdown(): void;

  abstract getMetadata(): ExtensionMetadata;
}
