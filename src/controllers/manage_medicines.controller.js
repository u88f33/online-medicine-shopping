const medicineManagementByAdmin = ( req, res, next ) => {
    try {

        res.render(
            "layouts/managemedicines"
        )

    } catch( error ) {
        console.log( `Error: ${ error.message }` );
    }
}

export default medicineManagementByAdmin;