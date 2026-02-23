import Customer from "../models/Customers.model.js";

const seeCustomerDetailByAdmin = async ( req, res, next ) => {

    const singleCustomerRecord = await Customer.findById( req.params.id );

    console.log( singleCustomerRecord );

    res.render(
        "user/seecustomer",
        {
            singleCustomerRecord
        }
    );
}

export default seeCustomerDetailByAdmin;