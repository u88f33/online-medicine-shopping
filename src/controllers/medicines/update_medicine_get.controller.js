import Medicines from "../../models/Medicine.model.js";
import Supplier from "../../models/Supplier.model.js";

const updateMedicineByAdminGet = async ( req, res, next ) => {
    const getMedicinesRecordFromDB = await Medicines.findById( req.params.id );
    const getSuppliersData = await Supplier.find();    

    res.render(
        "layouts/updatemedicine",
        { getMedicinesRecordFromDB, getSuppliersData}
    )
}

export default updateMedicineByAdminGet;