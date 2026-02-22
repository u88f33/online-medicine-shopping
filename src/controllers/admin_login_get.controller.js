const adminLoginGetController = ( req, res, next ) => {
    try {

        res.render(
            "auth/adminlogin", { wrongCredentials: "" }
        )

    } catch ( error ) {
        console.log( `Error while rendering Admin Login: ${ error.message }` );
    }
}

export default adminLoginGetController;