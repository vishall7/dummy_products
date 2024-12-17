import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
        console.log("database connected on host:-", connectionInstance.connection.host);
    } catch (error) {
        console.error("MongoDB error has occured:- ", error.message);
    }
}

export { connectDB }