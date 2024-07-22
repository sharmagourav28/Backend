import mongoose, { Types } from "mongoose";
//  we import the mongoose from mongoose
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: string,
      required: true,
      unique: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);
//  we created schema from the monsgoose
export const user = mongoose.model("user", userSchema);
