import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
  medicine: { type: mongoose.Schema.Types.ObjectId, ref: "Medicines", required: true },
  quantity: { type: Number, required: true }
});

export default mongoose.model("Order", orderSchema);