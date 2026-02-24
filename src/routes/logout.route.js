import express from "express"
import userLogoutController from "../controllers/user_logout.controller.js"
const router = express.Router();

router.get( "/", userLogoutController );

export default router;