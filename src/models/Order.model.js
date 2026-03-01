// src/models/Order.model.js
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    order: {
      type: Array,
      required: true
    }
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);

export default Order;