function getResumeInfo() {}

function getTrackInfo() {}

function getFirstIndex() {}

function getDisplayIndex() {}

function amount() {}

function playlistResume() {}

function resumeTrack(
  startIndex: number,
  crc: number,
  offset: number,
  elapsed: number
) {}

function setModified() {}

function start(startIndex: number, elapsed: number, offset: number) {}

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
