import express from "express"
import addCustomerByAdmin from "../controllers/add_customer.controller.js";
const router = express.Router();

router.get( "/", addCustomerByAdmin );

export default router;