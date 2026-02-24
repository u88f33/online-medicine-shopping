import Customer from "../models/Customers.model.js";
import bcrypt from "bcryptjs";

const updateCustomerDetailByAdminPost = async ( req, res, next ) => {
    try {
        const hasdedPasswordEnteredByAdmin = 
        await bcrypt.hash( req.body.customer_password, 10 )
        
        
        const updatedData = {
            name: req.body.customer_name,
            email: req.body.customer_email,
            phone: req.body.customer_phone,
            password: hasdedPasswordEnteredByAdmin,
            address: req.body.customer_address
        }
        
        const sendUpdatedDataToDatabase = 
        await Customer.findByIdAndUpdate( 
            req.params.id, 
            updatedData,
            {
                returnDocument: "after"
            }
         );
        
        if ( !sendUpdatedDataToDatabase ) {
            console.log( "Data not updated" );
            console.log( sendUpdatedDataToDatabase );
        }

        res.redirect( "/admin/customers" );

    } catch ( error ) {
        console.log( `Something wrong: ${error.message}` );
    }
}

export default updateCustomerDetailByAdminPost;