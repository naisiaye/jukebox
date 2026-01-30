import db from "#db/client";

import { createTrack } from "#db/queries/tracks";
import { createPlaylist } from "#db/queries/playlists";
import { createPlaylistTrack } from "#db/queries/playlists_tracks";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  // TODO
  for (let i = 1; i <= 20; i++) {
    await createTrack("Track " + i, Math.floor(Math.random() * 300000) + 60000);
  }
  for (let i = 1; i <= 10; i++) {
    await createPlaylist("Playlist " + i, "Random description");
  }

  for (let i = 1; i <= 15; i++) {
    const playlistId = Math.floor(Math.random() * 10) + 1;
    const trackId = Math.floor(Math.random() * 20) + 1;
    await createPlaylistTrack(playlistId, trackId);
  }
}
