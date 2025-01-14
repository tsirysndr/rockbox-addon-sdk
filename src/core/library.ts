// deno-lint-ignore-file no-explicit-any
import { client } from "./client.ts";
import type { Album } from "./types/album.ts";
import type { Artist } from "./types/artist.ts";
import type { SearchResult } from "./types/results.ts";
import type { Track } from "./types/track.ts";
import { camelcaseKeys } from "../../deps.ts";

async function getAlbums(): Promise<Album[]> {
  const { data } = await client.get("/albums");
  return data.map((album: any) => camelcaseKeys(album));
}

async function getArtists(): Promise<Artist[]> {
  const { data } = await client("/artists");
  return data.map((artist: any) => camelcaseKeys(artist));
}

async function getTracks(): Promise<Track[]> {
  const { data } = await client.get("/tracks");
  return data.map((track: any) => camelcaseKeys(track));
}

async function getAlbum(id: string): Promise<Album> {
  const { data } = await client.get(`/albums/${id}`);
  return camelcaseKeys(data);
}

async function getArtist(id: string): Promise<Artist> {
  const { data } = await client.get(`/artists/${id}`);
  return camelcaseKeys(data);
}

async function getTrack(id: string): Promise<Track> {
  const { data } = await client.get(`/tracks/${id}`);
  return camelcaseKeys(data);
}

async function likeTrack(id: string): Promise<void> {
  await client.post(`/tracks/${id}/like`);
}

async function unlikeTrack(id: string): Promise<void> {
  await client.delete(`/tracks/${id}/like`);
}

async function getLikedTracks(): Promise<Track[]> {
  const { data } = await client.get("/likes");
  return data.map((track: any) => camelcaseKeys(track));
}

async function getLikedAlbums(): Promise<Album[]> {
  const { data } = await client.get("/likes/albums");
  return data.map((album: any) => camelcaseKeys(album));
}

async function scanLibrary(path: string): Promise<void> {
  await client.put("/scan-library", { path });
}

async function search(query: string): Promise<SearchResult[]> {
  const { data } = await client.get(`/search?q=${query}`);
  return data.map((result: any) => camelcaseKeys(result));
}

export default {
  getAlbums,
  getArtists,
  getTracks,
  getAlbum,
  getArtist,
  getTrack,
  likeTrack,
  unlikeTrack,
  getLikedTracks,
  getLikedAlbums,
  scanLibrary,
  search,
};
