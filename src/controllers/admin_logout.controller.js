const adminLogoutController = ( req, res, next ) => {
    try {

        const adminEmail = req.cookies.adminEmail;

        if ( adminEmail ) {
            res.clearCookie('adminEmail');
            res.redirect( "/adminlogin" );
        } else {
            res.send( "Cookie not found: <a href='/'>Go Back to Website</a>" );
        }

    } catch ( error ) {
        res.send( `Error: ${error.message}` );
    }
}

export default adminLogoutController;