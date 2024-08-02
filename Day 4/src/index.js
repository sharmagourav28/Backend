// require("dotennv").config({ path: "./env" });

import dotenv from "dotenv";

import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
  path: "./env",
});
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server Started at port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("DB connection failed", error);
  });

/*
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URl}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("error");
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`Port is listen on ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
})();

// function connectDB() {}
// connectDB();

*/
