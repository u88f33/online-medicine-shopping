import Customer from "../models/Customers.model.js";

const customerManagementByAdmin = async ( req, res, next ) => {
    try {

        const getCustomersData = await Customer.find()

        res.render(
            "user/managecustomers",
            { customersData: getCustomersData }
        );

    } catch ( error ) {
        console.log( `Error in Customer managemenet: ${error.message}` );
    }
}

export default customerManagementByAdmin;