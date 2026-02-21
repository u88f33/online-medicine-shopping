const loginPageController = ( req, res, next ) => {
    try {
        
        res.render(
            "auth/login"
        )

    } catch( error ) {
        console.log( `Error: ${ error.message }` );
    }
}

export default loginPageController;