const { Router } = require('express');
const {
  CreatePlaylist,
  AddVideoToPlaylist,
  GetPlaylistsByUser,
  GetVideosFromPlaylist,
  RemoveVideoFromPlaylist,
  DeletePlaylist
} = require('../services/playlistService');

const authMiddleware = require('../middlewares/authMiddleware');

const playlistRouter = Router();

playlistRouter.route('/')
    .post(authMiddleware, CreatePlaylist)
    .get(authMiddleware, GetPlaylistsByUser);

playlistRouter.route('/:id/videos')
    .get(authMiddleware, GetVideosFromPlaylist)
    .post(authMiddleware, AddVideoToPlaylist)
    .delete(authMiddleware, RemoveVideoFromPlaylist);

playlistRouter.route('/:id')
    .delete(authMiddleware, DeletePlaylist)

module.exports = playlistRouter;
