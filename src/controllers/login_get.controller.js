const loginPageControllerGet = ( req, res, next ) => {
    try {
        
        res.render(
            "auth/login",
            { errorMessage: "" }
        )

    } catch( error ) {
        console.log( `Error: ${ error.message }` );
    }
}

export default loginPageControllerGet;