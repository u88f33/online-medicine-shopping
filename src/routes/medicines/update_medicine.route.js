import express from "express"
import multer from "multer";
import Medicines from "../../models/Medicine.model.js";
import path from 'path'
import updateMedicineByAdminGet from
"../../controllers/medicines/update_medicine_get.controller.js";

import updateMedicineByAdminPost from
"../../controllers/medicines/update_medicine_post.controller.js"


const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.cwd(), "public/uploads"));
  },

  filename: async function (req, file, cb) {
    const uniqueSuffix = `${ Date.now() }-${file.originalname}`;
    cb( null, uniqueSuffix );
  }
})

const limits = {
    fileSize: 1024 * 70
}

const fileFilter = ( req, file, cb ) => {
    if ( file.mimetype.startsWith( "image/" ) ) {
        cb( null, true );
    } else {
        cb( new Error( "Only images are allowed", false ) );
    }
}

const uploads = multer({
    storage,
    limits,
    fileFilter
});



router.get( "/:id", updateMedicineByAdminGet );
router.post( "/:id", uploads.single("medicine_image"), updateMedicineByAdminPost );

export default router;