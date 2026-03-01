import express from "express";
import Medicines from "../../models/Medicine.model.js";
const router = express.Router();

router.get("/", (req, res, next) => {
    // Access the cart stored in session
    const cartItems = req.session.cart || []; // fallback to empty array if undefined


    res.render(
        "layouts/cart",
        {
            userName: req.cookies.userName,
            cartItems
        }
    )
});

export default router;