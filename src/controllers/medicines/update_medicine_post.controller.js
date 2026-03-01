import Medicines from "../../models/Medicine.model.js";

const updateMedicineByAdminPost = async ( req, res, next ) => {
const getUpdatedMedicineDetails = {
        name: req.body.medicine_name,
        category: req.body.medicine_category,
        price: req.body.medicine_price,
        stock_quantity: req.body.medicine_stock,
        image: ( req.file )? req.file.filename : "no-image.jpg",
        supplier_id: req.body.medicine_supplier
    }

    const updateMedicineDetailsInDB = 
    await Medicines.findByIdAndUpdate(
        req.params.id,
        getUpdatedMedicineDetails,
        { returnDocument: "after" }
    );

    const saveUpdatedMedicineInDB = await updateMedicineDetailsInDB.save();
    console.log( saveUpdatedMedicineInDB );
    res.redirect( "/admin/medicines" );
}

export default updateMedicineByAdminPost;