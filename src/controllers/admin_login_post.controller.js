import Admin from "../models/Admin.model.js";
import bcrypt from "bcryptjs";

const adminLoginPostController = async ( req, res, next ) => {
    try {

        // Extracting Admin Data from MongoDB Database.
        let getAdminData = await Admin.findOne();

        // Storing each field of MongoDB document (in getAdminData) fields in single variable
        let { name, email, password } = getAdminData;

        // Form data extracted from form in "../src/views/auth/adminlogin.ejs"
        // Used Object destructuring to store form data in "req.body" in single variables.
        let { admin_email, admin_password } = req.body;

        // In case of wrong email, store message in "wrongCredentials" variable
        let wrongCredentials = "";

        // Chech if Email is found in the database, If not return false
        let isEmailMatched = ( admin_email == email )? true : false;

        // If Email is not found in the database then return Message "Invalid email"
        if ( !isEmailMatched ) {
            wrongCredentials = "Invalid Admin Email";
            return res.render( "auth/adminlogin", { wrongCredentials } )
        }
        
        // Check Password if email is found in the database.
        let isPasswordMatched = await bcrypt.compare( admin_password, password );

        // If Password is not matched, return this message "Invalid Password"
        if ( !isPasswordMatched ) {
            wrongCredentials = "Admin Password is Incorrect";
            return res.render( "auth/adminlogin", { wrongCredentials } )
        }

        res.send(
            `
                <h1>${ name }</h1>
                <h1>${ email }</h1>
                <h1>${ password }</h1>
                <h1>${ admin_email }</h1>
                <h1>${ admin_password }</h1>
            `
        )


    } catch ( error ) {
        console.log( `Error: ${ error.message }` );
    }
}

export default adminLoginPostController;