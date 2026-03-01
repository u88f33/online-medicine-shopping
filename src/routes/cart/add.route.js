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
            customerPhone: customer.phone,
            customerEmail: customer.email,
            customerName: customer.name,
            medicineName: medicine.name,
            medicinePrice: medicine.price,
            quantity: quantity
        };

        if (!req.session.cart) {
            req.session.cart = [];
        }

        req.session.cart.push(orderData);
        console.log( req.session.cart );
        res.redirect( "/profile" );


});

export default router;