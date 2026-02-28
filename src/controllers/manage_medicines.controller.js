import Medicines from "../models/Medicine.model.js";
import Supplier from "../models/Supplier.model.js";

const medicineManagementByAdmin = async ( req, res, next ) => {
    try {

        const getMedicinesData = 
        await Medicines.find()      
        .populate("supplier_id")
        .exec();
;
        

        console.log( getMedicinesData );

        res.render(
            "layouts/managemedicines",
            { 
                getMedicinesData
            }
        )

    } catch( error ) {
        console.log( `Error: ${ error.message }` );
    }
}

export default medicineManagementByAdmin;