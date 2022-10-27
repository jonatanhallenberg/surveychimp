
import mongoose from 'mongoose';

export const connect = async (): Promise<typeof mongoose> => {
    if ( !process.env.MONGO_DATABASE_URI) {
        throw "500";
    }
    
    return mongoose.connect(process.env.MONGO_DATABASE_URI);
}