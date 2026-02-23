const supplierManagementByAdmin = ( req, res, next ) => {
    try {

        res.render(
            "layouts/managesuppliers"
        )

    } catch( error ) {
        console.log( `Error: ${ error.message }` );
    }
}

export default supplierManagementByAdmin;