import express from "express"
import Medicines from "../../models/Medicine.model.js";
import OrderModel from "../../models/Order.model.js";
const router = express.Router();

router.post( "/", async ( req, res, next ) => {
    
    try {

        if ( req.body.order == "Order Confirmed" ) {
            const cart = req.session.cart;
            
                let orders = [];
                cart.forEach(async cartItem => {
                    const getMedicineData = await Medicines.findById( cartItem.medicineId );


                    if (!getMedicineData) {
                        return res.status(404).send(`Medicine not found: ${item.medicineId}`);
                    }

                    if ( cartItem.quantity < getMedicineData.stock_quantity ) {
                        getMedicineData.stock_quantity -= cartItem.quantity;
                    }
                    

                    await getMedicineData.save();

                });
                
                await OrderModel.insertOne( { order: cart } );

                req.session.cart = [];


                res.send( "Order Confirmed <a href='/profile'>Go Back</a>" );



        } else {
            return res.redirect( "/cart/see" )
        }

    } catch ( error ) {
        res.send( "Error: " + error );
    }

} )

export default router;