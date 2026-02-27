import CustomerData from "../../models/Customers.model.js";
import bcrypt from "bcryptjs";

const resetPasswordControllerPost = async ( req, res, next ) => {

    if ( req.body.customer_password == req.body.customer_password_confirm ) {
        
        const findUser = await CustomerData.findOne({
            resetPasswordToken: req.params.token,
            resetPasswordExpires: { $gt: Date.now() }
        });

        if (!findUser) return res.status(400).send('Token invalid.');

        const hashedPassword = await bcrypt.hash( req.body.customer_password, 10 );

        findUser.password = hashedPassword; 
        
        // IMPORTANT: Clear the token fields so the link is dead
        findUser.resetPasswordToken = undefined;
        findUser.resetPasswordExpires = undefined;

        await findUser.save();
        res.send(
            'Success! Your password has been changed. <a href="/">Go to Website</a>'
        );

    } else {
        return res.render(
            "auth/resetpassword", {
                token: req.params.token,
                errorMessage: "Password do not match"
            }
        )
    }
    

}

export default resetPasswordControllerPost;