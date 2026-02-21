import express from "express"
import homePageController from "../controllers/home_page.controller.js";
const router = express.Router();

router.get( "/", homePageController);

export default router;