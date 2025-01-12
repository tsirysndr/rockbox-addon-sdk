import type { Track } from "./track.ts";

export type Album = {
  id: string;
  title: string;
  artist: string;
  year: number;
  yearString: string;
  albumArt?: string;
  md5: string;
  artistId: string;
  tracks: Track[];
};
