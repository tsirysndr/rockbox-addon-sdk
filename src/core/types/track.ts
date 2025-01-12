export type Track = {
  id: string;
  path: string;
  artist: string;
  album: string;
  albumArtist: string;
  bitrate: number;
  composer: string;
  discNumber: number;
  filesize: number;
  frequency: number;
  length: number;
  trackNumber: number;
  year: number;
  yearString: string;
  genre: string;
  md5: string;
  albumArt?: string;
  artistId?: string;
  albumId?: string;
  genreId?: string;
  createdAt: string;
  updatedAt: string;
};

export interface CurrentTrack {
  id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
  disc: string;
  trackString: string;
  yearString: string;
  composer: string;
  comment: string;
  albumArtist: string;
  grouping: number;
  discnum: number;
  tracknum: number;
  layer: number;
  year: number;
  bitrate: number;
  frequency: number;
  filesize: number;
  length: number;
  elapsed: number;
  path: string;
  albumArt?: string;
  albumId: string;
  artistId: string;
}

export interface NextTrack {
  path: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
  disc: string;
  trackString: string;
  yearString: string;
  composer: string;
  comment: string;
  albumArtist: string;
  grouping: number;
  discnum: number;
  tracknum: number;
  layer: number;
  year: number;
  bitrate: number;
  frequency: number;
  length: number;
  elapsed: number;
}
