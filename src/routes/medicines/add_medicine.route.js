import express from "express"
import path from 'path'
import Medicines from "../../models/Medicine.model.js";
import addMedicineByAdminGet from "../../controllers/medicines/add_medicine_get.controller.js"
import addMedicineByAdminPost from "../../controllers/medicines/add_medicine_post.controller.js";
import multer from "multer";
import { body } from "express-validator"
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
    fileSize: 1024 * 200
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



router.get( "/", addMedicineByAdminGet );
router.post( "/", uploads.single("medicine_image"), addMedicineByAdminPost );

export default router;