import express from "express"
import supplierManagementByAdmin from "../controllers/manage_suppliers.controller.js";
const router = express.Router();

router.get( "/", supplierManagementByAdmin );

export default router;