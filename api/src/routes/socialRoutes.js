const { Router } = require("express");
const {
  LikeVideo,
  CommentVideo,
  GetInteractions,
} = require("../services/socialService");

const socialRouter = Router();

socialRouter.post("/like", LikeVideo);
socialRouter.post("/comentario", CommentVideo);
socialRouter.get("/:videoId", GetInteractions);

module.exports = socialRouter;
