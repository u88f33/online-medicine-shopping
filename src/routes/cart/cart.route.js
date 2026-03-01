import express from "express";
import Cart from "../../models/Cart.model.js";
import Medicine from "../../models/Medicine.model.js";
import Customer from "../../models/Customers.model.js";

const router = express.Router();

router.post("/", async (req, res, next) => {

    try {

        console.log( req.body);
        const { medicineId, quantity } = req.body;

        console.log( medicineId, quantity );

        const userEmail = req.cookies.userEmail;

        const medicine = await Medicine.findById(medicineId);
        const customer = await Customer.find( { email: userEmail } );
        console.log( customer );
        
        // if (!medicine) return res.status(404).json({ message: "Medicine not found" });

        // if (quantity > medicine.stock_quantity) 
            // return res.status(400).json({ message: "Not enough stock" });

    //     let cartItem = await Cart.findOne({ userEmail, medicine: medicineId });
    //     if (cartItem) {
    //         cartItem.quantity += quantity;
    //     } else {
    //         cartItem = new Cart({ userEmail, medicine: medicineId, quantity });
    //     }
    //     await cartItem.save();
    //     res.json({ message: "Added to cart" });

    } catch ( error ) {
        res.send( "Error: " + error.message )
    }

});

export default router;