import express from "express";
import Cart from "../../models/Cart.model.js";
import Medicine from "../../models/Medicine.model.js";
import Customer from "../../models/Customers.model.js";
import ensureUserLoggedIn from "../../middlewares/ensure_user_logged_in.middleware.js";

const router = express.Router();

router.post("/", async (req, res, next) => {

    
        const { medicineId, quantity } = req.body;
        const medicine = await Medicine.findById(medicineId)


        console.log( medicine );

    // try {

    //     const userEmail = req.cookies.userEmail;

    //     // const customer = await Customer.find( { email: userEmail } );
        
        
    //     if (!medicine) return res.status(404).json({ message: "Medicine not found" });

    //     if (quantity > medicine.stock_quantity) 
    //         return res.status(400).json({ message: "Not enough stock" });


    //     let cartItem = await Cart.findOne({ userEmail, medicine: medicineId });
    //     if (cartItem) {
    //         cartItem.quantity += quantity;
    //     } else {
    //         cartItem = new Cart({ userEmail, medicine: medicineId, quantity });
    //         console.log( cartItem );
    //     }
    //     await cartItem.save();
    //     res.json({ message: "Added to cart" });

    // } catch ( error ) {
    //     res.send( "Error: " + error.message )
    // }

});

export default router;