import express from "express"
import loginPageControllerGet from "../controllers/login_get.controller.js";
import loginPageControllerPost from "../controllers/login_post.controller.js";
const router = express.Router();

router.get( "/", loginPageControllerGet );
router.post( "/", loginPageControllerPost );

export default router;