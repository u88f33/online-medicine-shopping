import express from "express"
import seeSupplierRecordController from
"../../controllers/suppliers/see_supplier_record.controller.js";
const router = express.Router();

router.get( "/:id", seeSupplierRecordController );

export default router;