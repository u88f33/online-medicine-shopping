import express from "express"
import customerManagementByAdmin from "../controllers/manage_customers.controller.js";
const router = express.Router();

router.get( "/", customerManagementByAdmin );

export default router;