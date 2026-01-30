import db from "#db/client";

export async function createPlaylistTrack(playlistId, trackId) {
  const sql = `
  INSERT INTO playlists_tracks
    (playlist_id, track_id)
  VALUES
    ($1, $2)
  RETURNING *
  `;
  const {
    rows: [playlistsTrack],
  } = await db.query(sql, [playlistId, trackId]);
  return playlistsTrack;
}

export async function getPlaylistTracks() {
  const sql = `
  SELECT *
  FROM playlists_tracks
  `;
  const { rows: playlistsTracks } = await db.query(sql);
  return playlistsTracks;
}

export async function getPlaylistTracksByPlaylistId(playlistId) {
  const sql = `
  SELECT *
  FROM playlists_tracks
  WHERE playlist_id = $1
  `;
  const { rows: playlistsTracks } = await db.query(sql, [playlistId]);
  return playlistsTracks;
}

export async function getPlaylistTracksByTrackId(trackId) {
  const sql = `
  SELECT *
  FROM playlists_tracks
  WHERE track_id = $1
  `;
  const { rows: playlistsTracks } = await db.query(sql, [trackId]);
  return playlistsTracks;
}
