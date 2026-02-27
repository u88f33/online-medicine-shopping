// src/models/Medicine.model.js
import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Medicine Name is required"],
        trim: true,
    },
    category: {
        type: String,
        required: [true, "Category is required"]
    },
    price: {
        type: String,
        required: [true, "Price is required"]
    },
    stock_quantity: {
        type: String,
        required: true
    },
    supplier_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Supplier",
        required: true
    }
});

const Medicines = mongoose.model( "Medicine", medicineSchema );
export default Medicines;