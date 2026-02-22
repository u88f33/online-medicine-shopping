import express from "express";
import adminLoginGetController from "../controllers/admin_login.controller.js";

const router = express.Router();

router.get( "/", adminLoginGetController );

export default router;