import Customer from "../models/Customers.model.js";
import bcrypt from "bcryptjs";

const registerPageControllerPost = async ( req, res, next ) => {
    
    const hashPassword = await bcrypt.hash( req.body.customer_password, 10 );

    const customerRegistrationData = {
        name: req.body.customer_name,
        email: req.body.customer_email,
        phone: req.body.customer_phone,
        address: req.body.customer_address,
        password: hashPassword
    }

    
    const insertRegistrationDataToMongoDB = 
    await Customer.create( customerRegistrationData ); 

    if ( insertRegistrationDataToMongoDB ) {
        console.log( "Data is sent to Database successfully" );
        res.redirect( "/login" )
    }

    res.send( customerRegistrationData );

}

export default registerPageControllerPost;