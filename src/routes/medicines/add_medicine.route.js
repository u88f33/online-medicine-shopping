import express from "express"
import addMedicineByAdminGet from "../../controllers/medicines/add_medicine_get.controller.js"
import addMedicineByAdminPost from "../../controllers/medicines/add_medicine_post.controller.js";
import { body } from "express-validator"
const router = express.Router();



router.get( "/", addMedicineByAdminGet );
router.post( "/", addMedicineByAdminPost );

export default router;