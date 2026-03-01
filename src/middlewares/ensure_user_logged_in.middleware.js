const ensureUserLoggedIn = (req, res, next) => {
    const userEmailCookie = req.cookies.userEmail;
    if (!userEmailCookie) {
        // If it's an AJAX/fetch request
        if (req.xhr || req.headers.accept.includes("application/json")) {
            return res.status(401).json( { error: "Not logged in" } )
        } 
        // Otherwise, normal page request
        return res.redirect("/login");
    } 
    next();
};

export default ensureUserLoggedIn;