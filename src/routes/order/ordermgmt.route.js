import express from "express";
import OrderModel from "../../models/Order.model.js";
const router = express.Router();

router.get( "/", async ( req, res, next ) => {
    const getCustomerOrders = await OrderModel.find();

    console.log( getCustomerOrders );

    res.render(
        "user/manageorders",
        { getCustomerOrders }
    )
} )

export default router;