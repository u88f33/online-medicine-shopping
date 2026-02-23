import Customer from "../models/Customers.model.js";
import { validationResult } from "express-validator"
import bcrypt from "bcryptjs";

const addCustomerByAdminPost = async ( req, res, next ) => {
    const errors = validationResult( req );
    
    if ( !errors.isEmpty() ) {
        res.json(
            { errors: errors.array() }
        )
    } else {
        const customerData = {
            name: req.body.customer_name,
            email: req.body.customer_email,
            phone: req.body.customer_phone,
            address: req.body.customer_password,
            password: req.body.customer_address
        }

        res.send(
            customerData
        )
    }

}

export default addCustomerByAdminPost;