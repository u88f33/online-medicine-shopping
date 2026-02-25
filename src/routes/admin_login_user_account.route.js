import express from "express"
import userLoginByAdminController from "../controllers/user_login_by_admin.controller.js"
const router = express.Router();

router.get( "/:id", userLoginByAdminController );

export default router;