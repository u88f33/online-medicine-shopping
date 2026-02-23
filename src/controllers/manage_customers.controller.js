const customerManagementByAdmin = ( req, res, next ) => {
    try {

        const array = [ 2, 3, 4, 5 ];

        res.render(
            "user/managecustomers",
            { message: array }
        );

    } catch ( error ) {
        console.log( `Error in Customer managemenet: ${error.message}` );
    }
}

export default customerManagementByAdmin;