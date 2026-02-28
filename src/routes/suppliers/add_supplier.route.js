import express from "express";
import addSupplierRecordByAdminGet from
"../../controllers/suppliers/add_supplier_get.controller.js";
import addSupplierRecordByAdminPost from 
"../../controllers/suppliers/add_supplier_post.controller.js"

const router = express.Router();

router.get( "/", addSupplierRecordByAdminGet );
router.post( "/", addSupplierRecordByAdminPost );

export default router;