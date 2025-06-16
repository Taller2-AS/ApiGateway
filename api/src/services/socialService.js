const catchAsync = require("../utils/catchAsync");

const LikeVideo = catchAsync(async (req, res, next) => {
  const socialClient = req.app.locals.socialClient;

  socialClient.LikeVideo(req.body, (error, response) => {
    if (error) return next(error);
    res.status(200).json(response);
  });
});

const CommentVideo = catchAsync(async (req, res, next) => {
  const socialClient = req.app.locals.socialClient;

  socialClient.CommentVideo(req.body, (error, response) => {
    if (error) return next(error);
    res.status(200).json(response);
  });
});

const GetInteractions = catchAsync(async (req, res, next) => {
  const socialClient = req.app.locals.socialClient;
  const { videoId } = req.params;

  socialClient.GetInteractions({ videoId }, (error, response) => {
    if (error) return next(error);
    res.status(200).json(response);
  });
});

const socialService = {
  LikeVideo,
  CommentVideo,
  GetInteractions,
};

module.exports = socialService;
