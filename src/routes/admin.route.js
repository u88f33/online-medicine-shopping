import express from "express";
import adminMainPageController from "../controllers/admin.controller.js";

const router = express.Router();

router.get( "/", adminMainPageController );

export default router;