// src/models/Customer.model.js
import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        lowercase: true,
    },
    phone: {
        type: String,
        required: [true, "Password is required"],
        unique: true,
        minlength: 8,
    },
    address: {
        type: String,
        required: [true, "Address is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: 8
    },
    resetPasswordToken: {
        type: String
    },
    resetPasswordExpires: {
        type: Date
    }
});

const Customer = mongoose.model( "Customer", customerSchema );
export default Customer;