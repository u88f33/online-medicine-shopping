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

    if ( !comparePasswords ) {
        return res.render( "auth/login", { errorMessage: "Incorrect Password" } )
    }

    /**
     * Set cookie after successful login by User
     * 
     * Key: "customerEmail" - name of the cookie
     * Value: customer_email - store admin's email in the cookie
     * httpOnly: true - prevents client-side JavaScript from reading the cookie
     * maxAge: 1 hour (1000ms * 60s * 60min)
     * This cookie can now be accessed in any middleware or route using req.cookies.adminEmail
    */
    res.cookie( "userEmail", customer_email, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 
    } );

    console.log(
        {
            admin: req.cookies.adminEmail,
            customer: req.cookies.userEmail
        }
    );

   res.redirect('/profile');
}

export default loginPageControllerPost;