import Supplier from "../../models/Supplier.model.js"

const addCustomerByAdminGet = async ( req, res, next ) => {

    const getSuppliersData = await Supplier.find();

    res.render( 
        "layouts/addmedicine",
        { getSuppliersData }
    )
}

export default addCustomerByAdminGet;