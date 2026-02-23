import express from "express"
import medicineManagementByAdmin from "../controllers/manage_medicines.controller.js";
const router = express.Router();

router.get( "/", medicineManagementByAdmin );

export default router;