import express from "express"
import userProfileUpdateControllerGet from "../controllers/user_profile_update_get.controller.js"
import userProfileUpdateControllerPost from "../controllers/user_profile_update_post.controller.js"
const router = express.Router();

router.get( "/", userProfileUpdateControllerGet )
router.post( "/", userProfileUpdateControllerPost );

export default router;


