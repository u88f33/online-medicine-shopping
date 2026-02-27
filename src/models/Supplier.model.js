// src/models/Supplier.model.js
import mongoose from "mongoose";

const supplierSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Medicine Name is required"],
        trim: true,
    },
    contact_number: {
        type: String,
        required: [true, "Category is required"]
    },
    address: {
        type: String,
        require: true
    }
});

const Supplier = mongoose.model( "Supplier", supplierSchema );
export default Supplier;