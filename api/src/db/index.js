import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDb connected at Db Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Mongodb error", error);
    throw error;
  }
};

export default connectDB;
