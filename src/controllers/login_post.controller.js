import Customer from "../models/Customers.model.js";
import bcrypt from "bcryptjs";

const loginPageControllerPost = async ( req, res, next ) => {

    let { customer_email, customer_password } = req.body;

    
    const findByEmail = await Customer.findOne( { email: customer_email } );
    if ( !findByEmail ) {
        return res.render( "auth/login", { errorMessage: "Email not Found" } )
    }

    /**
     * Compare the password entered by User with the MongoDB password (which
     * is in the hashed form). Use bcrypt.compare(string, hash) to compare
     * both passwords.
     */
    const comparePasswords = 
    await bcrypt.compare( customer_password, findByEmail.password )
    
    console.log( "Is matched: " + comparePasswords );


    res.send(
        req.body
    );
}

export default loginPageControllerPost;