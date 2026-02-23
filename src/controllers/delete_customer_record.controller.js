import Customer from "../models/Customers.model.js";

const deleteCustomerDetailByAdmin = async ( req, res, next ) => {

    const deleteCustomerRecord = 
    await Customer.findByIdAndDelete( req.params.id );
    res.redirect( "/admin/customers" )
}

export default deleteCustomerDetailByAdmin;