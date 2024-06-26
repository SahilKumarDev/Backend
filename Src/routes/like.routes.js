import { Router } from "express";

import { verifyJWT } from "../middlewares/auth.middleware.js";

import {
  toggleCommentLike,
   toggleVideoLike,
   toggleTweetLike,
   toggleLikedVideos
} from "../controllers/like.controller.js";

const router = Router();

// Apply verifyJWT middleware to all routes in this file
router.use(verifyJWT);

router.route("/toggle/v/:videoId").post(toggleVideoLike);
router.route("/toggle/c/:commentId").post(toggleCommentLike);
router.route("/toggle/t/:tweetId").post(toggleTweetLike);
router.route("/likedVideos").get(toggleLikedVideos);

export default router;
