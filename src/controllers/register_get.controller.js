const registerPageController = ( req, res, next ) => {
    try {
        
        res.render(
            "auth/register",
        )

    } catch( error ) {
        console.log( `Error: ${ error.message }` )
    }
}

export default registerPageController;