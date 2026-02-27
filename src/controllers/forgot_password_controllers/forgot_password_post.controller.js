import crypto from "crypto"
import CustomerData from "../../models/Customers.model.js"
import nodemailer from "nodemailer"


const userForgotPasswordPost = async ( req, res, next ) => {
    
    try {

        const { customer_email } = req.body;
        const findUser = await CustomerData.findOne( { email: customer_email } );

        if ( !findUser ) {
            return res.render(
                "auth/forgotpassword", 
                { errorMessage: "User not found" }
            )
        }

        const token = crypto.randomBytes( 20 ).toString( "hex" );

        findUser.resetPasswordToken = token;
        findUser.resetPasswordExpires = Date.now() + ( 1000 * 60 * 30 );
        await findUser.save();

        const resetUrl = `http://localhost:5000/reset/${token}`;

        // 4. Send Email via NodeMailer
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'novameds46@gmail.com',
                pass: 'lhotrkconapxfyco' 
            }
        });

        const info = await transporter.sendMail({
            to: findUser.email,
            subject: 'Password Reset - NovaMeds Pharmacy',
            text: `Click here to reset your password: ${resetUrl}`
        });

        if ( info ) {
            res.send(
                `<b>Check your email for the reset link. </b>
                <a href="/">Go Back to Website</a>`
            );
        }

    } catch ( error ) {
        res.send(`<b>Error: </b>${ error.message }`)
    }

}

export default userForgotPasswordPost;