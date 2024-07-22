import mongoose from "mongoose";

const OrderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderProice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    OrderItems: {
      type: [OrderItemSchema],
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["PENDING", "CANCELLED", "DELEIVERED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);

export const order = mongoose.model("order", orderSchema);
