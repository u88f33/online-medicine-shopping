const adminMainPageController = ( req, res, next ) => {
    try {

        res.render(
            "admin/admin",
            { message: req.cookies.adminEmail }
        );
        
    } catch ( error ) {
        console.log( `Admin Main Page error: ${ error.message }` );
    }
}

export default adminMainPageController;