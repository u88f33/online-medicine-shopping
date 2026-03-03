import express from "express"
import Medicines from "../../models/Medicine.model.js";
const router = express.Router();

router.get( "/:id", async ( req, res, next ) => {
    try {

        const getMedicineDataFromDB = 
        await Medicines.findById( req.params.id )
        .populate("supplier_id")
        .exec();

        res.render(
            "layouts/seemedicine",
            { getMedicineDataFromDB }
        )

    } catch ( error ) {
        console.log(
            `Error in rendering view Medicine: ${error.message}`
        )
    }
} )

export default router;