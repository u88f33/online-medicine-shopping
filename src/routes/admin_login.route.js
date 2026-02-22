import express from "express";
import adminLoginGetController from "../controllers/admin_login_get.controller.js";
import adminLoginPostController from "../controllers/admin_login_post.controller.js"

const router = express.Router();

router.get( "/", adminLoginGetController );
router.post( "/", adminLoginPostController );

export default router;