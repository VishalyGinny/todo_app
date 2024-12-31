import mongoose from "mongoose";
import { buffer } from "stream/consumers";

const MONGODB_URL = process.env.MONGODB_URL;

const connect = async () => {
    const connectionState = mongoose.connection.readyState;
    if (connectionState === 1) {
        console.log("Already connected");
        return;
    }

    if (connectionState === 2 || connectionState === 3) {
        console.log("Waiting for connection to be established");
        return;
    }

    try {
        mongoose.connect(MONGODB_URL!, {
            dbName: 'next14api'
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
        throw new Error("Failed to connect to MongoDB");
    }
        }

export default connect;

