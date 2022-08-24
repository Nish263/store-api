import dotenv from "dotenv";
import mongoose from "mongoose";

const db = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_CLIENT);
    conn ? console.log("mongo db is connected") : console.log(error);
  } catch (error) {
    console.log(error);
  }
};

export default db;
