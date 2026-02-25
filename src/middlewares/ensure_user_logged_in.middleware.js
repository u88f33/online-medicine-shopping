const ensureUserLoggedIn = ( req, res, next ) => {
    const userEmailCookie = req.cookies.userEmail;
    if ( !userEmailCookie ) {
        res.redirect( "/login" )
    } else {
        next();
    }
}

export default ensureUserLoggedIn;