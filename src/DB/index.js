import mongoose from "mongoose"
import {DB_Name} from "../constants.js"


const connectDb = async ()=>{
    try {
        const connectDB=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`);
        console.log(`Successfully connected to DB`);
    } catch (error) {
        console.log("MONGODB FAILED TO CONNECT DB",error);
        process.exit(1);
    }
}

export default connectDb;