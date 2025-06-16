const catchAsync = require("../utils/catchAsync");

const CreateVideo = catchAsync(async (req, res, next) => {
  const videoClient = req.app.locals.videoClient;

  videoClient.CreateVideo({ ...req.body }, (error, response) => {
    if (error) return next(error);
    res.status(200).json(response);
  });
});

const GetVideoById = catchAsync(async (req, res, next) => {
  const videoClient = req.app.locals.videoClient;
  const { id } = req.params;

  videoClient.GetVideoById({ id }, (error, response) => {
    if (error) return next(error);
    res.status(200).json(response);
  });
});

const UpdateVideo = catchAsync(async (req, res, next) => {
  const videoClient = req.app.locals.videoClient;
  const { id } = req.params;

  videoClient.UpdateVideo({ id, ...req.body }, (error, response) => {
    if (error) return next(error);
    res.status(200).json(response);
  });
});

const DeleteVideo = catchAsync(async (req, res, next) => {
  const videoClient = req.app.locals.videoClient;
  const { id } = req.params;

  videoClient.DeleteVideo({ id }, (error, response) => {
    if (error) return next(error);
    res.status(200).json(response);
  });
});

const ListVideos = catchAsync(async (req, res, next) => {
  const videoClient = req.app.locals.videoClient;

  videoClient.ListVideos(req.query, (error, response) => {
    if (error) return next(error);
    res.status(200).json(response);
  });
});

const videoService = {
  CreateVideo,
  GetVideoById,
  UpdateVideo,
  DeleteVideo,
  ListVideos
};

module.exports = videoService;
