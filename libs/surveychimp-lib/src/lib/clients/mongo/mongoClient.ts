
import mongoose from 'mongoose';

export const connect = async (): Promise<typeof mongoose> => {
    console.log("hello uri",process.env.MONGO_DB_URI);
    if(!process.env.MONGO_DB_URI){
        throw "500"
    }
    return mongoose.connect(process.env.MONGO_DB_URI);
}