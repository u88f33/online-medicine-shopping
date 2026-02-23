import Customer from "../models/Customers.model.js";
import { validationResult } from "express-validator"
import bcrypt, { hash } from "bcryptjs";

const addCustomerByAdminPost = async ( req, res, next ) => {
    const errors = validationResult( req );
    
    let hashedPassword = await bcrypt.hash( req.body.customer_password, 10 );

    const customerData = {
        name: req.body.customer_name,
        email: req.body.customer_email,
        phone: req.body.customer_phone,
        password: hashedPassword,
        address: req.body.customer_address
    }
       
    const insertDataInMongoDB = await Customer.create( customerData );

    if ( insertDataInMongoDB ) {
        res.redirect( "/admin/customers" );
    }
}

export default addCustomerByAdminPost;