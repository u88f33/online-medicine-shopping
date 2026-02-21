import express from "express"
import registerPageController from "../controllers/register.controller.js"
const router = express.Router();


router.get( "/", registerPageController)


export default router;
