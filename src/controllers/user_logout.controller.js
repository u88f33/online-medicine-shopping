const userLogoutController = ( req, res, next ) => {
    try {

        const userEmail = req.cookies.userEmail;
        const adminEmail = req.cookies.adminEmail;

        if ( userEmail && adminEmail ) {
            res.clearCookie( 'userName' );
            res.clearCookie('userEmail');
            return res.redirect("/admin/customers");
        }

        if ( userEmail && !(adminEmail) ) {
            res.clearCookie( 'userName' );
            res.clearCookie('userEmail');
            return res.redirect( "/login" );
        } else {
            res.send( "Cookie not found: <a href='/'>Go Back to Website</a>" );
        }

    } catch ( error ) {
        res.send( `Error: ${error.message}` );
    }
}

export default userLogoutController;