import Customer from "../models/Customers.model.js";

const updateCustomerDetailByAdminGet = async ( req, res, next ) => {

    const getRecordValuesinUpdateForm = await Customer.findById( req.params.id );

    res.render(
        "user/updatecustomer",
        {
            getRecordValuesinUpdateForm
        }
    );
    
}

export default updateCustomerDetailByAdminGet;