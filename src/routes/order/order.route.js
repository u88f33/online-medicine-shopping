import express from "express";
import Order from "../../models/Order.model.js";
import Medicine from "../../models/Medicine.model.js";
import Customer from "../../models/Customers.model.js";
import ensureUserLoggedIn from "../../middlewares/ensure_user_logged_in.middleware.js";

const router = express.Router();

router.post("/", async (req, res, next) => {

    
        const { medicineId, quantity } = req.body;
        // Fetching the Medicine Data From the database
        const medicine = await Medicine.findById(medicineId);

        // If User is logged in, his or her email is stored in req.cookies.userEmail
        const userEmail = req.cookies.userEmail;

        // Fetching customer data from database
        const customer = await Customer.findOne( { email: userEmail } );

        const orderData = {
            customerId: customer._id,
            customerName: customer.name,
            medicineId: medicine._id,
            quantity: quantity
        };

        if (!req.session.cart) {
            req.session.cart = [];
        }

        req.session.cart.push(orderData);
        console.log( "SID : ", req.sessionID );

    // try {

    //     const userEmail = req.cookies.userEmail;

        
        
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