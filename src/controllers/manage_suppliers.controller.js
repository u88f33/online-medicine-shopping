import Supplier from "../models/Supplier.model.js";

const supplierManagementByAdmin = async ( req, res, next ) => {
    try {

        const suppliersData = await Supplier.find();

        res.render(
            "layouts/managesuppliers",
            { suppliersData }
        )

    } catch( error ) {
        console.log( `Error: ${ error.message }` );
    }
}

export default supplierManagementByAdmin;