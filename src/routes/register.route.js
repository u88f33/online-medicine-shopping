import express from "express"
import registerPageControllerGet from "../controllers/register_get.controller.js"
import registerPageControllerPost from "../controllers/register_post.controller.js"
const router = express.Router();


router.get( "/", registerPageControllerGet);
router.post( "/", registerPageControllerPost );


export default router;
