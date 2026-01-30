import express from "express";
const app = express();

import tracksRouter from "#api/tracks";
import playlistsRouter from "#api/playlists";

app.use(express.json());

app.use("/tracks", tracksRouter);
app.use("/playlists", playlistsRouter);

app.use((err, req, res, next) => {
  if (!err) return next();

  if (err.code === "23503") {
    return res.status(400).send(err.detail);
  }
  if (err.code === "22P02") {
    return res.status(400).send(err.detail);
  }
  if (err.code === "23505") {
    return res.status(400).send(err.detail);
  }

  return next(err);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Something went wrong.");
});

export default app;
