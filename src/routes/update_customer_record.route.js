import express from "express"
import updateCustomerDetailByAdminGet from "../controllers/update_customer_record_get.controller.js";
import updateCustomerDetailByAdminPost from "../controllers/update_customer_record_post.controller.js";

const router = express.Router();

router.get( "/:id", updateCustomerDetailByAdminGet );

router.post( "/:id", updateCustomerDetailByAdminPost ); 

export default router;

