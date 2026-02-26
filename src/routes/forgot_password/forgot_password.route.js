import express from "express"

import userForgotPasswordGet from 
"../../controllers/forgot_password_controllers/forgot_password_get.controller.js"

import userForgotPasswordPost from 
"../../controllers/forgot_password_controllers/forgot_password_post.controller.js"

const router = express.Router();

router.get( "/", userForgotPasswordGet );
router.post( "/", userForgotPasswordPost );

export default router;