import express from "express"
import seeCustomerDetailByAdmin from "../controllers/see_customer_record.controller.js";
const router = express.Router();

router.get( "/:id", seeCustomerDetailByAdmin );

export default router;