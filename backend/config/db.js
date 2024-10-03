import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

export const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, )
    } catch (error) {
        console.log(`Error, ${error.message}`)
        process.exit(1)
    }
}