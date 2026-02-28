import Supplier from "../../models/Supplier.model.js";

const addSupplierRecordByAdminPost = async ( req, res, next ) => {
    
    const supplierDetails = {
        name: req.body.supplier_name,
        contact_number: req.body.supplier_phone,
        address: req.body.supplier_address
    }

    const newSupplierInMongoDatabase = new Supplier( supplierDetails );
    const insertedSupplierData = await newSupplierInMongoDatabase.save();   

    console.log( insertedSupplierData );
    res.redirect( "/admin/addsupplier" );
}

export default addSupplierRecordByAdminPost;