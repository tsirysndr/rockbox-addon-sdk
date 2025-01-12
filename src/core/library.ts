import { ROCKBOX_API_URL } from "./consts.ts";

async function getAlbums(): Promise<any[]> {
  const response = await fetch(`${ROCKBOX_API_URL}/albums`);
  return response.json();
}

function getArtists() {}

function getTracks() {}

function getAlbum(id: string) {}

function getArtist(id: string) {}

function getTrack(id: string) {}

function likeTrack(id: string) {}

function unlikeTrack(id: string) {}

function getLikedTracks() {}

function getLikedAlbums() {}

function scanLibrary(path: string) {}

function search(query: string) {}

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
