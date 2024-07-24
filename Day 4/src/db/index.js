import { mongoose } from "mongoose";
import { DB_NAME } from "./../constrants.js";

const connectDB = async () => {
  try {
    const connectionIns = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(`MongoDB Connected at ${connectionIns.connection.host}`);
  } catch (error) {
    console.log("mongodb error ", error);
    process.exit(1);
  }
};

export default connectDB;
