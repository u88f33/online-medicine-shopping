import express from "express"
import Medicines from "../../models/Medicine.model.js";
const router = express.Router();

router.get( "/:id", async ( req, res, next ) => {
    const getMedicinesRecord = 
    await Medicines.findByIdAndDelete( req.params.id );

    res.redirect( "/admin/medicines" );

} )

export default router;
