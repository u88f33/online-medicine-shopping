import Medicines from "../../models/Medicine.model.js";

const addMedicineByAdminPost = async ( req, res, next ) => {

    const medicineDetails = {
        name: req.body.medicine_name,
        category: req.body.medicine_category,
        price: req.body.medicine_price,
        stock_quantity: req.body.medicine_stock,
        image: ( req.file )? req.file.filename : "no-image.jpg",
        supplier_id: req.body.medicine_supplier
    }

    const newMedicineInMongoDatabase = new Medicines( medicineDetails );
    const newlyAddedMedicine = await newMedicineInMongoDatabase.save();
    console.log( newlyAddedMedicine );
    res.redirect( "/admin/addmedicine" );
}

export default addMedicineByAdminPost;