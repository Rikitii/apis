import mongoose from "mongoose";

export const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.Mongo_URL)
        console.log("Base de datos online")
    } catch (error) {
        console.log("error")
        throw new Error("Error al iniciar la DB")
        
    }
}