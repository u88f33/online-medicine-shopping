import CustomersData from "../models/Customers.model.js"

const userProfileUpdateControllerGet = async ( req, res, next ) => {

    const getRecordValuesinUpdateForm = 
    await CustomersData.findOne( { name: req.cookies.userName } );

    res.render(
        "user/profileupdate", 
        {
            userName: req.cookies.userName,
            getRecordValuesinUpdateForm
        }
    )
}

export default userProfileUpdateControllerGet;