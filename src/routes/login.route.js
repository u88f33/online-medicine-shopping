import express from "express"
import loginPageController from "../controllers/login.controller.js";
const router = express.Router();

router.get( "/", loginPageController );

export default router;