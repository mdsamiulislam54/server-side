import mongoose from "mongoose";

// Order Schema
const OrderSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
  },
  price: {
    type: String, // You can change it to Number if needed
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  pcode: {
    type: String,
    required: true,
  },
  tran_id: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "success", "failed"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 60 * 60 * 24 * 3
  }

});

// Order Model
const OrderModel = mongoose.model("Order", OrderSchema);

export default OrderModel;
