import express from "express"
import addCustomerByAdminGet from "../controllers/add_customer_get.controller.js";
import addCustomerByAdminPost from "../controllers/add_customer_post.controller.js";
import { body } from "express-validator"
const router = express.Router();



router.get( "/", addCustomerByAdminGet );
router.post( "/", addCustomerByAdminPost );

export default router;