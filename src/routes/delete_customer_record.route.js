import express from "express"
import deleteCustomerDetailByAdmin from "../controllers/delete_customer_record.controller.js";
const router = express.Router();


router.get( "/:id", deleteCustomerDetailByAdmin );

export default router;