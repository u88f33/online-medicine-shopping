const userForgotPasswordGet = ( req, res, next ) => {
    res.render( 
        "auth/forgotpassword",
        { errorMessage: "" }
    )
}

export default userForgotPasswordGet;