import type { Album } from "./album.ts";
import type { Track } from "./track.ts";

export type Artist = {
  id: string;
  name: string;
  bio?: string;
  image?: string;
  albums: Album[];
  tracks: Track[];
};
