const ensureAdminLoggedIn = ( req, res, next ) => {
    
    const adminCookieEmail = req.cookies.adminEmail;
    
    if ( !adminCookieEmail ) {
        res.redirect("/adminlogin");
    } else {
        next();
    }
}

export default ensureAdminLoggedIn;