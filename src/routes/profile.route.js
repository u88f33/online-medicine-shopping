import express from "express";
import Medicines from "../models/Medicine.model.js";
const router = express.Router();

router.get( "/", async (req, res, next) => {
    try {
        let searchQuery = {};

        if (req.query.search) {
            searchQuery.name = {
                $regex: req.query.search,
                $options: "i"
            };
        }
            
        let queryParameter = parseInt( req.query.page ) || 1;

        const options = {
            page: queryParameter,
            limit: 8,
            collation: {
                locale: 'en',
            },
        };

        const getMedicinesData = await Medicines.paginate(searchQuery, options);

        res.render(
            "user/profile", 
            { 
                userName: req.cookies.userName,
                getMedicinesData,
                queryParameter
            }
        );
    } catch ( error ) {
        res.send( `Error: ${error.message}` );
    }
} )

export default router;