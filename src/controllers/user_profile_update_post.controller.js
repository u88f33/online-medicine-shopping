import Customer from "../models/Customers.model.js";
import CustomerData from "../models/Customers.model.js";
import bcrypt from 'bcryptjs';

const userProfileUpdateControllerPost = async ( req, res, next ) => {
    let { customer_email, customer_password } = req.body;

    // Password entered by User while updating profile.
    const hashedPassword = await bcrypt.hash( customer_password, 10 );

    const updatedRecordByUser = {
        name: req.body.customer_name,
        email: customer_email,
        phone: req.body.customer_phone,
        address: req.body.customer_address,
        password: hashedPassword
    }

    const insertUpdatedRecordinDB = 
    await Customer.findOneAndUpdate(
        { email: req.cookies.userEmail },
        updatedRecordByUser,
        { returnDocument: "after" }
    );
    console.log( insertUpdatedRecordinDB );
    res.redirect( "/profile/logout" );
    
}

export default userProfileUpdateControllerPost;