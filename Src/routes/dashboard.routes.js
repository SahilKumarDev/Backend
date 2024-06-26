import { Router } from "express";

import {
  getChannelStatus,
  getChannelVideos
} from "../controllers/dashboard.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

// Apply verifyJWT middleware to all routes in this file
router.use(verifyJWT, upload.none());

router.route("/status").get(getChannelStatus);
router.route("/videos").get(getChannelVideos);

export default router;
