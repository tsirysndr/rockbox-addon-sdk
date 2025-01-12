export interface PlayAlbumOptions {
  albumId: string;
  shuffle?: boolean;
}

export interface PlayAllTracksOptions {
  shuffle?: boolean;
  position?: number;
}

export interface PlayArtistTracksOptions {
  artistId: string;
  shuffle?: boolean;
  position?: number;
}

export interface PlayDirectoryOptions {
  path: string;
  shuffle?: boolean;
  recurse?: boolean;
  position?: number;
}

export interface PlayLikedTracksOptions {
  shuffle?: boolean;
  position?: number;
}

export interface PlayPlaylistOptions {
  playlistId: string;
  shuffle?: boolean;
}
