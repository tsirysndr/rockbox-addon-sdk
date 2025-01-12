import { client } from "./client.ts";
import type {
  PlayAlbumOptions,
  PlayAllTracksOptions,
  PlayArtistTracksOptions,
  PlayDirectoryOptions,
  PlayLikedTracksOptions,
  PlayPlaylistOptions,
} from "./types/options.ts";
import type { CurrentTrack, NextTrack } from "./types/track.ts";
import camelcaseKeys from "camelcase-keys";
import { encode } from "node:querystring";

async function play(elapsed: number, offset: number): Promise<void> {
  const q = encode({ elapsed, offset });
  await client.put(`/player/play?${q}`);
}

async function pause(): Promise<void> {
  await client.put("/player/pause");
}

async function resume(): Promise<void> {
  await client.put("/player/resume");
}

async function next(): Promise<void> {
  await client.put("/player/next");
}

async function previous(): Promise<void> {
  await client.put("/player/previous");
}

async function fastForwardRewind(newTime: number): Promise<void> {
  await client.put(`/player/ff-rewind?time=${newTime}`);
}

async function status(): Promise<{ status: number }> {
  const { data } = await client.get("/player/status");
  return data;
}

async function currentTrack(): Promise<CurrentTrack> {
  const { data } = await client.get("/player/current-track");
  return camelcaseKeys(data);
}

async function nextTrack(): Promise<NextTrack> {
  const { data } = await client.get("/player/next-track");
  return camelcaseKeys(data);
}

async function flushAndReloadTracks(): Promise<void> {
  await client.put("/player/flush-reload-tracks");
}

async function getFilePosition() {
  // TODO: Implement
}

async function hardStop(): Promise<void> {
  await client.put("/player/stop");
}

async function playAlbum(options: PlayAlbumOptions): Promise<void> {
  const { albumId, shuffle } = options;
  await client.put(`/albums/${albumId}/play`, { shuffle });
}

async function playAllTracks(options: PlayAllTracksOptions): Promise<void> {
  const { shuffle, position } = options;
  await client.put("/tracks/play-all", { shuffle, position });
}

async function playArtistTracks(
  options: PlayArtistTracksOptions
): Promise<void> {
  const { artistId, shuffle, position } = options;
  await client.put(`/artists/${artistId}/play`, { shuffle, position });
}

async function playDirectory(options: PlayDirectoryOptions): Promise<void> {
  const { path, shuffle, recurse, position } = options;
  await client.put("/browse/play", { path, shuffle, recurse, position });
}

async function playLikedTracks(options: PlayLikedTracksOptions): Promise<void> {
  const { shuffle, position } = options;
  await client.put("/likes/play", { shuffle, position });
}

async function playPlaylist(options: PlayPlaylistOptions): Promise<void> {
  const { playlistId, shuffle } = options;
  await client.put(`/playlists/${playlistId}/play`, { shuffle });
}

async function playTrack(path: string): Promise<void> {
  await client.put("/tracks/play", { path });
}

export default {
  play,
  pause,
  resume,
  next,
  previous,
  fastForwardRewind,
  status,
  currentTrack,
  nextTrack,
  flushAndReloadTracks,
  getFilePosition,
  hardStop,
  playAlbum,
  playAllTracks,
  playArtistTracks,
  playDirectory,
  playLikedTracks,
  playPlaylist,
  playTrack,
};
