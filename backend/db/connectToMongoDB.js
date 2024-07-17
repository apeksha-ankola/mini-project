import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectToMongoDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("connected to database");

    } catch (err) {
        console.log("Error connection to database: ",err);
    }
}

export default connectToMongoDB;