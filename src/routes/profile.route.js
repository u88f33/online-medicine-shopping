import express from "express";
import Medicines from "../models/Medicine.model.js";
const router = express.Router();

router.get( "/", async (req, res, next) => {
    const getMedicinesData = await Medicines.find();

    res.render(
        "user/profile", { 
            userName: req.cookies.userName,
            getMedicinesData
        }
    );
} )

export default router;