import express from "express"
import updateCustomerDetailByAdminGet from "../controllers/update_customer_record_get.controller.js";

const router = express.Router();

router.get( "/:id", updateCustomerDetailByAdminGet );

export default router;

