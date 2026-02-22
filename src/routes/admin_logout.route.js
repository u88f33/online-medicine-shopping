import express from "express"
import adminLogoutController from "../controllers/admin_logout.controller.js"
const router = express.Router();

router.get( "/", adminLogoutController );

export default router;