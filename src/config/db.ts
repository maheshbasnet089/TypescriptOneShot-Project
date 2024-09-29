import mongoose from "mongoose";
import envConfig from "./config";

const connectToDatabase = async ()=>{
    try {
        mongoose.connection.on("connected",()=>{
            console.log("Connected to db successfully")
        })
        await mongoose.connect(envConfig.mongodbString as string)
    } catch (error) {
        console.log("Faile to connected db !!!")
        process.exit(1)
    }
}

export default connectToDatabase