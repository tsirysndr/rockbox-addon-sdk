import { encode } from "node:querystring";
import { client } from "./client.ts";

function getResumeInfo() {}

function getTrackInfo() {}

function getFirstIndex() {}

function getDisplayIndex() {}

function amount() {}

async function playlistResume(): Promise<void> {
  await client.put("/playlists/resume");
}

async function resumeTrack(): Promise<void> {
  await client.put("/playlists/resume-track");
}

function setModified() {}

async function start(
  startIndex: number,
  elapsed: number,
  offset: number
): Promise<void> {
  const q = encode({ start_index: startIndex, elapsed, offset });
  await client.put(`/playlists/start?${q}`);
}

function sync() {}

function removeAllTracks() {}

function removeTracks(params: any) {}

function createPlaylist(params: any) {}

function insertTracks(params: any) {}

function insertDirectory(params: any) {}

function insertPlaylist(params: any) {}

function insertAlbum(params: any) {}

function insertArtistTracks(params: any) {}

function shufflePlaylist(startIndex: any) {}

function getCurrentPlaylist() {}

export default {
  getResumeInfo,
  getTrackInfo,
  getFirstIndex,
  getDisplayIndex,
  amount,
  playlistResume,
  resumeTrack,
  setModified,
  start,
  sync,
  removeAllTracks,
  removeTracks,
  createPlaylist,
  insertTracks,
  insertDirectory,
  insertPlaylist,
  insertAlbum,
  insertArtistTracks,
  shufflePlaylist,
  getCurrentPlaylist,
};
