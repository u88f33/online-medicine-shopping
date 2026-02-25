import Customer from "../models/Customers.model.js";

const userLoginByAdminController = async ( req, res, next ) => {
    const getCustomersData = await Customer.findById( req.params.id );
    if ( getCustomersData ) {
        
        res.cookie( "userName", getCustomersData.name );

        res.cookie( "userEmail", getCustomersData.email, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 
        } );
        res.redirect( "/profile" );
    }
}

export default userLoginByAdminController;