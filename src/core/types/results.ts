import type { Album } from "./album.ts";
import type { Artist } from "./artist.ts";
import type { Track } from "./track.ts";

export type SearchResult = {
  albums: Album[];
  artists: Artist[];
  tracks: Track[];
};
