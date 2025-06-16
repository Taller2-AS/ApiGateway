const catchAsync = require('../utils/catchAsync');


const CreatePlaylist = catchAsync(async (req, res, next) => {
    const { name } = req.body;
    const { id: userId, email: userEmail } = req.user;
    const { playlistsClient } = req.app.locals;


    playlistsClient.CreatePlaylist({ userId, userEmail, name }, (error, response) => {
        if (error) {
            return next(error);
        }
        res.status(201).json({
            status: 'success',
            data: response
        });
    });
});

const AddVideoToPlaylist = catchAsync(async (req, res, next) => {
    const { id: userId, email: userEmail } = req.user;
    const { videoId } = req.body;
    const { id: playlistId } = req.params;

    playlistsClient.AddVideoToPlaylist({ userId, userEmail, playlistId, videoId }, (error, response) => {
        if (error) {
            return next(error);
        }
        res.status(200).json({
            status: 'success',
            data: response
        });
    });
});

const GetPlaylistsByUser = catchAsync(async (req, res, next) => {
    const { id: userId, email: userEmail} = req.user;

    playlistsClient.GetPlaylistsByUser({ userId, userEmail }, (error, response) => {
        if (error) {
            return next(error);
        }
        res.status(200).json({
            status: 'success',
            data: response
        });
    });
});

const GetVideosFromPlaylist = catchAsync(async (req, res, next) => {
    const { id: playlistId } = req.params;
    const { id: userId, email: userEmail } = req.user;

    playlistsClient.GetVideosFromPlaylist({ userId, userEmail, playlistId }, (error, response) => {
        if (error) {
            return next(error);
        }
        res.status(200).json({
            status: 'success',
            data: response
        });
    });
});

const RemoveVideoFromPlaylist = catchAsync(async (req, res, next) => {
    const { videoId } = req.body;
    const { id: userId, email: userEmail } = req.user;
    const { id: playlistId } = req.params;

    playlistsClient.RemoveVideoFromPlaylist({ userId, userEmail, playlistId, videoId }, (error, response) => {
        if (error) {
            return next(error);
        }
        res.status(200).json({
            status: 'success',
            data: response
        });
    });
});

const DeletePlaylist = catchAsync(async (req, res, next) => {
    const { id: playlistId } = req.params;
    const { id: userId, email: userEmail } = req.user;

    playlistsClient.DeletePlaylist({ userId, userEmail, playlistId }, (error, response) => {
        if (error) {
            return next(error);
        }
        res.status(204).json({
            status: 'success',
            data: null
        });
    });
});

const playlistService = {
    CreatePlaylist,
    AddVideoToPlaylist,
    GetPlaylistsByUser,
    GetVideosFromPlaylist,
    RemoveVideoFromPlaylist,
    DeletePlaylist
};

module.exports = playlistService;
