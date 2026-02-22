import Admin from "../models/Admin.model.js";
import bcrypt from "bcryptjs";

const adminLoginPostController = async ( req, res, next ) => {
    try {

        let getAdminData = await Admin.findOne();

        let { name, email, password } = getAdminData;

        res.send(
            `<ul>
                <li style='color:red;'>${ name }</li>
                <li style='color:blue;'>${ email }</li>
                <li style='color:green;'>${ password }</li>
            </ul>`
        );        

    } catch ( error ) {
        console.log( `Error: ${ error.message }` )
    }
}

export default adminLoginPostController;