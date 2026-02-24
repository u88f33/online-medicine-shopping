const userLogoutController = ( req, res, next ) => {
    try {

        const userEmail = req.cookies.userEmail;

        if ( userEmail ) {
            res.clearCookie('userEmail');
            res.redirect( "/login" );
        } else {
            res.send( "Cookie not found: <a href='/'>Go Back to Website</a>" );
        }

    } catch ( error ) {
        res.send( `Error: ${error.message}` );
    }
}

export default userLogoutController;