import express from "express"
import updateMedicineByAdminGet from
"../../controllers/medicines/update_medicine_get.controller.js";

import updateMedicineByAdminPost from
"../../controllers/medicines/update_medicine_post.controller.js"

const router = express.Router();

router.get( "/:id", updateMedicineByAdminGet );
router.post( "/:id", updateMedicineByAdminPost );

export default router;