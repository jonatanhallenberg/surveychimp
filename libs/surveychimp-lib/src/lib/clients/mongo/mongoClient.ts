
import mongoose from 'mongoose';

export const connect = async (): Promise<typeof mongoose> => {
    const connectionString = "mongodb+srv://jonatan:123qweasd@cluster0.otsv5.mongodb.net/?retryWrites=true&w=majority";
    return mongoose.connect(connectionString);
}