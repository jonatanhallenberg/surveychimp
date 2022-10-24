
import mongoose from 'mongoose';

export const connect = async (): Promise<typeof mongoose> => {
    const connectionString = "mongodb://localhost:27017/forum123?readPreference=primary&ssl=false";
    return mongoose.connect(connectionString);
}