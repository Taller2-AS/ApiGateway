const { Router } = require("express");
const {
  CreateVideo,
  GetVideoById,
  UpdateVideo,
  DeleteVideo,
  ListVideos,
} = require("../services/videoService");

const videoRouter = Router();

videoRouter.route("/")
  .get(ListVideos)
  .post(CreateVideo);

videoRouter.route("/:id")
  .get(GetVideoById)
  .patch(UpdateVideo)
  .delete(DeleteVideo);

module.exports = videoRouter;
